const fs = require('fs');
const path = require('path');
const os = require('os');
const prompt = require('prompt-sync')();

class Libro {
  constructor(titolo, autore, genere, isbn) {
    this.titolo = titolo;
    this.autore = autore;
    this.genere = genere;
    this.isbn = isbn;
  }

  // Metodo per ottenere il contenuto del libro come stringa
  toString() {
    return' Titolo: ${this.titolo}, Autore: ${this.autore}, Genere: ${this.genere}, ISBN: ${this.isbn}';
  }
}

class Libreria {
  constructor() {
    this.libri = [];
    this.utenti = [];
    this.prestiti = [];
    const dir = path.join(os.homedir(), 'books');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    this.filePath = path.join(dir, 'libreria.txt');
    this.filePathUtenti = path.join(dir, 'utenti.txt');
    this.prestitiFilePath = path.join(os.homedir(), 'books', 'prestiti.txt');
    this.caricaLibri();
    this.caricaUtenti();
    this.caricaPrestiti();
  }

  caricaLibri() {
    if (fs.existsSync(this.filePath)) {
      const data = fs.readFileSync(this.filePath, 'utf8').trim();
      if (data !== '') {
        const lines = data.split('\n');
        lines.forEach(line => {
          const [titolo, autore, genere, isbn] = line.split(', ');
          const libro = new Libro(titolo, autore, genere, isbn);
          this.libri.push(libro);
        });
      }
    } else {
      const dir = path.join(os.homedir(), 'books');
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
    }
  }

  salvaLibri() {
    const lines = this.libri.map('libro => ${libro.titolo}, ${libro.autore}, ${libro.genere}, ${libro.isbn}');
    const data = lines.join('\n');
    fs.writeFileSync(this.filePath, data, 'utf8');
    console.log('Libri salvati in ${this.filePath}');
}


  aggiungiLibro() {
    const titolo = prompt('Inserisci il titolo del libro: ');
    const autore = prompt('Inserisci l\'autore del libro: ');
    const genere = prompt('Inserisci il genere del libro: ');
    const isbn = prompt('Inserisci l\'ISBN del libro: ');

    const libroEsistente = this.libri.find(libro => libro.isbn === isbn);
    if (libroEsistente) {
      console.log("Il libro con lo stesso ISBN è già presente nella libreria.");
      return;
    }
    const nuovoLibro = new Libro(titolo, autore, genere, isbn);
    this.libri.push(nuovoLibro);
    this.salvaLibri();
    console.log("Libro aggiunto con successo.");
  }

  visualizzaLibri() {
    this.libri.forEach(libro => {
      console.log(libro.toString());
    });
  }

  aggiornaLibro() {
    const isbn = prompt('Inserisci l\'ISBN del libro da aggiornare: ');
    const nuovoTitolo = prompt('Inserisci il nuovo titolo del libro: ');
    const nuovoAutore = prompt('Inserisci il nuovo autore del libro: ');
    const nuovoGenere = prompt('Inserisci il nuovo genere del libro: ');

    const libroDaAggiornare = this.libri.find(libro => libro.isbn === isbn);
    if (libroDaAggiornare) {
      libroDaAggiornare.titolo = nuovoTitolo;
      libroDaAggiornare.autore = nuovoAutore;
      libroDaAggiornare.genere = nuovoGenere;
      this.salvaLibri();
      console.log("Informazioni del libro aggiornate con successo.");
    } else {
      console.log("Il libro non è presente nella libreria.");
    }
  }

  ricercaAvanzata() {
    const ricerca = prompt('Inserisci il termine di ricerca: ').toLowerCase();
    const risultati = this.libri.filter(libro =>
      libro.titolo.toLowerCase().includes(ricerca) ||
      libro.autore.toLowerCase().includes(ricerca) ||
      libro.genere.toLowerCase().includes(ricerca)
    );

    if (risultati.length === 0) {
      console.log("Nessun libro trovato corrispondente alla ricerca.");
    } else {
      console.log("Risultati della ricerca:");
      risultati.forEach(libro => {
        console.log(libro.toString());
      });
    }
  }

  salvaUtenti() {
    const lines = this.utenti.map('utente => ${utente.id}, ${utente.nome}');
    const data = lines.join('\n');
    fs.writeFileSync(this.filePathUtenti, data, 'utf8');
    console.log('Utenti salvati in ${this.filePathUtenti}');
  }

  caricaUtenti() {
    if (fs.existsSync(this.filePathUtenti)) {
      const data = fs.readFileSync(this.filePathUtenti, 'utf8').trim();
      if (data !== '') {
        const lines = data.split('\n');
        lines.forEach(line => {
          const [id, nome] = line.split(', ');
          const utente = { id: parseInt(id), nome };
          this.utenti.push(utente);
        });
      }
    }
  }

  aggiungiUtente(nome) {
    const id = this.utenti.length + 1;
    const nuovoUtente = { id, nome };
    this.utenti.push(nuovoUtente);
    this.salvaUtenti();
    console.log('Utente ${nome} aggiunto con ID ${id}.');
  }

  visualizzaUtenti() {
    console.log("Elenco degli utenti:");
    this.utenti.forEach(utente => {
      console.log('ID: ${utente.id}, Nome: ${utente.nome}');
    });
  }

  effettuaPrestito(isbn, userId) {
    const libroPrestato = this.prestiti.find(prestito => prestito.isbn === isbn);
    if (libroPrestato) {
      console.log("Questo libro è già stato prestato.");
      return;
    }

    const libro = this.libri.find(libro => libro.isbn === isbn);
    const utente = this.utenti.find(utente => utente.id === userId);
    if (!libro || !utente) {
      console.log("Libro o utente non trovato.");
      return;
    }
    const prestito = { isbn, userId, dataPrestito: new Date() };
    this.prestiti.push(prestito);
    this.salvaPrestiti();
    console.log('Prestito effettuato: Libro ISBN ${isbn} a Utente ${utente.nome}');
  }

  

  caricaPrestiti() {
    if (fs.existsSync(this.filePathPrestiti)) {
      const data = fs.readFileSync(this.filePathPrestiti, 'utf8').trim();
      if (data !== '') {
        const lines = data.split('\n');
        lines.forEach(line => {
          const [isbn, userId, dataPrestito] = line.split(', ');
          const prestito = { isbn, userId: parseInt(userId), dataPrestito: new Date(dataPrestito) };
          this.prestiti.push(prestito);
        });
      }
    }
  }

  visualizzaPrestiti() {
    console.log("Elenco dei prestiti:");
    this.prestiti.forEach(prestito => {
      const libro = this.libri.find(libro => libro.isbn === prestito.isbn);
      const utente = this.utenti.find(utente => utente.id === prestito.userId);
      console.log('Utente: ${utente.nome}, Libro: ${libro.titolo}, Data prestito: ${prestito.dataPrestito}');
    });
  }


  restituisciLibro(userId, isbn) {
    const prestitoIndex = this.prestiti.findIndex(prestito => prestito.userId === userId && prestito.isbn === isbn);
    if (prestitoIndex === -1) {
        console.log("Prestito non trovato.");
        return;
    }
    this.prestiti.splice(prestitoIndex, 1);
    this.salvaPrestiti();
    console.log("Libro restituito con successo.");
}

salvaPrestiti() {
    const lines = this.prestiti.map('prestito => ${prestito.userId}, ${prestito.isbn}, ${prestito.dataPrestito}');
    const data = lines.join('\n');
    fs.writeFileSync(this.prestitiFilePath, data, 'utf8');
    console.log('Prestiti salvati in ${this.prestitiFilePath}');
}


  // Funzione per gestire il menu avanzato
  menuAvanzato() {
    let scelta;
    do {
      console.log("\nMenu Avanzato:");
      console.log("1. Aggiungi libro");
      console.log("2. Visualizza libri");
      console.log("3. Aggiorna libro");
      console.log("4. Ricerca avanzata");
      console.log("5. Aggiungi utente");
      console.log("6. Visualizza utenti");
      console.log("7. Effettua prestito");
      console.log("8. Visualizza prestiti");
      console.log("9. Effettua una restituzione");
      console.log("0. Esci");

      scelta = prompt("Scelta: ");
      switch (scelta) {
        case '1':
          this.aggiungiLibro();
          break;
        case '2':
          this.visualizzaLibri();
          break;
        case '3':
          this.aggiornaLibro();
          break;
        case '4':
          this.ricercaAvanzata();
          break;
        case '5':
          const nomeUtente = prompt('Inserisci il nome dell\'utente: ');
          this.aggiungiUtente(nomeUtente);
          break;
        case '6':
          this.visualizzaUtenti();
          break;
        case '7':
          const isbn = prompt('Inserisci l\'ISBN del libro: ');
          const userId = prompt('Inserisci l\'ID dell\'utente: ');
          this.effettuaPrestito(isbn, parseInt(userId));
          break;
        case '8':
          this.visualizzaPrestiti();
          break;
        case '9':
          const userIdRestituzione = prompt('Inserisci l\'ID dell\'utente che restituisce il libro: ');
          const isbnRestituzione = prompt('Inserisci l\'ISBN del libro da restituire: ');
          this.restituisciLibro(parseInt(userIdRestituzione), isbnRestituzione);
          break;
          
        case '0':
          console.log("Uscita dal programma.");
          break;
        default:
          console.log("Scelta non valida. Riprova.");
      }
    } while (scelta !== '0');
  }
}
const miaLibreria = new Libreria();
miaLibreria.menuAvanzato();