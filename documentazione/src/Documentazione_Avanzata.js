const fs = require('fs');
const path = require('path');
const os = require('os');
const prompt = require('prompt-sync')();

/**
 * @classdesc Rappresenta un libro con le sue informazioni di base.
 * @class
 */
class Libro {
    /**
     * Crea un'istanza di Libro.
     * @constructor
     * @param {string} titolo - Il titolo del libro.
     * @param {string} autore - L'autore del libro.
     * @param {string} genere - Il genere del libro.
     * @param {string} isbn - L'ISBN (International Standard Book Number) del libro.
     */
    constructor(titolo, autore, genere, isbn) {
      this.titolo = titolo; // Il titolo del libro.
      this.autore = autore; // L'autore del libro.
      this.genere = genere; // Il genere del libro.
      this.isbn = isbn; // L'ISBN del libro.
    }
  
    /**
     * @property {function} toString Restituisce una rappresentazione testuale del libro.
     * @returns {string} Una stringa che rappresenta il contenuto del libro.
     */
    toString() {
      return `Titolo: ${this.titolo}, Autore: ${this.autore}, Genere: ${this.genere}, ISBN: ${this.isbn}`;}
  }



  /**
 * @classdesc Rappresenta una libreria virtuale con funzionalità per gestire libri, utenti e prestiti.
 * @class
 */
class Libreria {
  /**
   * Crea un'istanza di Libreria e inizializza gli array per i libri, gli utenti e i prestiti.
   * Carica i dati dei libri, degli utenti e dei prestiti se presenti.
   * Crea le directory necessarie per la memorizzazione dei file, se non esistenti.
   * @constructor
   */
  constructor() {
    // Array dei libri 
    this.libri = [];
    // Array degli utenti 
    this.utenti = [];
    // Array dei prestiti effettuati
    this.prestiti = [];

    // Percorso del file per la memorizzazione dei libri
    const dir = path.join(__dirname, 'books'); // Usando __dirname per ottenere il percorso della directory dello script
    // Se la directory non esiste, crea una nuova directory
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    // Percorso del file per la memorizzazione dei libri
    this.filePath = path.join(dir, 'libreria.txt');
    // Percorso del file per la grafica
    this.filePathLibreria = path.join(dir, 'grafica.txt');
    // Percorso del file per la memorizzazione degli utenti
    this.filePathUtenti = path.join(dir, 'utenti.txt');
    // Percorso del file per la memorizzazione dei prestiti
    this.prestitiFilePath = path.join(dir, 'prestiti.txt'); 
    // Carica i libri presenti se il file esiste
    this.caricaLibri();
    // Carica gli utenti registrati se il file esiste
    this.caricaUtenti();
    // Carica i prestiti effettuati se il file esiste
    this.caricaPrestiti();
  }

  /**
 * @property {function} caricaLibri i libri memorizzati da un file nella libreria. Se il file non esiste, crea la directory e il file necessari.
 * @returns {void}
 */
caricaLibri() {
  // Verifica se il file dei libri esiste
  if (fs.existsSync(this.filePath)) {
    // Legge il contenuto del file
    const data = fs.readFileSync(this.filePath, 'utf8').trim();
    // Se il file non è vuoto, elabora le righe
    if (data !== '') {
      // Divide il contenuto del file in righe
      const lines = data.split('\n');
      // Per ogni riga, crea un nuovo libro e lo aggiunge all'array dei libri
      lines.forEach(line => {
        const [titolo, autore, genere, isbn] = line.split(', ');
        const libro = new Libro(titolo, autore, genere, isbn);
        this.libri.push(libro);
      });
    }
  } else {
    // Se il file non esiste, crea la directory e il file
    const dir = path.join(os.homedir(), 'libri');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  }
}


  /**
   * @property {function} salvaLibri Salva i libri nella libreria memorizzandoli su file.
   * @returns {void}
   */
  salvaLibri() {
    // Genera le righe di testo per ciascun libro
    const lines = this.libri.map(libro => `${libro.titolo}, ${libro.autore}, ${libro.genere}, ${libro.isbn}`);// Unisce le righe in un'unica stringa con un separatore di nuova riga
    const data = lines.join('\n');
    // Scrive i dati sul file
    fs.writeFileSync(this.filePath, data, 'utf8');
    // Stampa un messaggio di conferma
    console.log(`Libri salvati in ${this.filePath}`);
}


/**
   * @property {function} aggiungiLibro Aggiunge un nuovo libro alla libreria.
   * @returns {void}
   */
aggiungiLibro() {
  // Chiede all'utente di inserire le informazioni del nuovo libro
  const titolo = prompt('Inserisci il titolo del libro: ');
  const autore = prompt('Inserisci l\'autore del libro: ');
  const genere = prompt('Inserisci il genere del libro: ');
  const isbn = prompt('Inserisci l\'ISBN del libro: ');

  // Controlla se un libro con lo stesso ISBN è già presente nella libreria
  const libroEsistente = this.libri.find(libro => libro.isbn === isbn);
  if (libroEsistente) {
    console.log("Il libro con lo stesso ISBN è già presente nella libreria.");
    return;
  }

  // Crea un nuovo libro e lo aggiunge alla libreria
  const nuovoLibro = new Libro(titolo, autore, genere, isbn);
  this.libri.push(nuovoLibro);
  // Salva le modifiche
  this.salvaLibri();
  console.log("Libro aggiunto con successo.");
}


  /**
   * @property {function} visualizzaLibri Visualizza tutti i libri presenti nella libreria.
   * @returns {void}
   */
  visualizzaLibri() {
    // Itera attraverso tutti i libri e stampa le informazioni di ciascun libro
    this.libri.forEach(libro => {
      console.log(libro.toString());
    });
  }

  /**
  * @property {function} aggiornaLibro Aggiorna le informazioni di un libro esistente nella libreria.
  * @returns {void}
  */
  aggiornaLibro() {
    const isbn = prompt('Inserisci l\'ISBN del libro da aggiornare: ');
    const nuovoTitolo = prompt('Inserisci il nuovo titolo del libro: ');
    const nuovoAutore = prompt('Inserisci il nuovo autore del libro: ');
    const nuovoGenere = prompt('Inserisci il nuovo genere del libro: ');

    // Trova il libro nella libreria in base all'ISBN fornito
  const libroDaAggiornare = this.libri.find(libro => libro.isbn === isbn);
  if (libroDaAggiornare) {
    libroDaAggiornare.titolo = nuovoTitolo;
    libroDaAggiornare.autore = nuovoAutore;
    libroDaAggiornare.genere = nuovoGenere;
    // Salva le modifiche ai libri
    this.salvaLibri();
    console.log("Informazioni del libro aggiornate con successo.");
  } else {
    // Se il libro non esiste, stampa un messaggio di avviso
    console.log("Il libro non è presente nella libreria.");
  }
}

  /**
   * @property {function} ricercaAvanzata Esegue una ricerca avanzata all'interno della libreria in base al termine inserito dall'utente. La ricerca viene effettuata sui titoli, gli autori e i generi dei libri.
   * @returns {void}
   */
  ricercaAvanzata() {
  const ricerca = prompt('Inserisci il termine di ricerca: ').toLowerCase();
  // Filtra i libri in base al termine di ricerca
  const risultati = this.libri.filter(libro =>
    libro.titolo.toLowerCase().includes(ricerca) ||
    libro.autore.toLowerCase().includes(ricerca) ||
    libro.genere.toLowerCase().includes(ricerca)
  );

  // Se non sono stati trovati risultati corrispondenti
  if (risultati.length === 0) {
    console.log("Nessun libro trovato corrispondente alla ricerca.");
  } else {
    // Altrimenti, stampa i risultati della ricerca
    console.log("Risultati della ricerca:");
    risultati.forEach(libro => {
      console.log(libro.toString());
    });
  }
}

  /** 
   * @property {function} salvaUtenti Salva gli utenti della libreria su file.
   * @returns {void}
   */

  salvaUtenti() {
    // Crea una stringa per ogni utente contenente il suo ID e nome
    const lines = this.utenti.map(utente => `${utente.id}, ${utente.nome}`);
    // Unisce le stringhe separate da un carattere di nuova riga
    const data = lines.join('\n');
    // Scrive i dati degli utenti su file
    fs.writeFileSync(this.filePathUtenti, data, 'utf8');
    console.log(`Utenti salvati in ${this.filePathUtenti}`);
  }



  /**
 * 
 * @property {function} caricaUtenti Carica gli utenti dalla memoria persistente.
 * @memberof Libreria
 * @returns {void}
 */
  caricaUtenti() {
    // Verifica se il file degli utenti esiste
    if (fs.existsSync(this.filePathUtenti)) {
      // Legge i dati dal file degli utenti
      const data = fs.readFileSync(this.filePathUtenti, 'utf8').trim();
      // Controlla se ci sono dati nel file
      if (data !== '') {
        // Dividi i dati in righe separate
        const lines = data.split('\n');
        // Itera su ogni riga dei dati
        lines.forEach(line => {
          // Dividi la riga in ID e nome dell'utente
          const [id, nome] = line.split(', ');
          // Crea un oggetto utente con ID convertito in numero e nome
          const utente = { id: parseInt(id), nome };
          // Aggiungi l'utente all'array degli utenti della libreria
          this.utenti.push(utente);
        });
      }
    }
  }


/**
   * 
   * @property {function} numeroLibri Restituisce il numero di libri
   * @memberof Libreria
   */

  numeroLibri() {
    return this.libri.length;
  }
/**
   * 
   * @property {function} aggiungiUtente Aggiunge un nuovo utente alla libreria.
   * @memberof Libreria
   * @returns {void}
   */
  aggiungiUtente(nome) {
  // Calcola il nuovo ID basato sulla lunghezza dell'array degli utenti
  const id = this.utenti.length + 1;
  // Crea un nuovo oggetto utente con ID e nome specificati
  const nuovoUtente = { id, nome };
  // Aggiunge il nuovo utente all'array degli utenti della libreria
  this.utenti.push(nuovoUtente);
  // Salva gli utenti aggiornati su file
  this.salvaUtenti();
  // Stampa un messaggio confermando l'aggiunta dell'utente
  console.log(`Utente ${nome} aggiunto con ID ${id}.`);
  
}

  /**
   * 
   * @property {function} visualizzaUtenti Visualizza l'elenco degli utenti presenti nella libreria.
   * @memberof Libreria
   * @returns {void}
   */
  visualizzaUtenti() {
    // Stampa un'intestazione per l'elenco degli utenti
    console.log("Elenco degli utenti:");
    // Itera su ogni utente nell'array degli utenti della libreria
    this.utenti.forEach(utente => {
      // Stampa ID e nome dell'utente corrente
      console.log(`ID: ${utente.id}, Nome: ${utente.nome}`);
    });
  }

   /**
   * 
   * @property {function} effettuaPrestito Effettua un prestito di un libro a un utente.
   * @memberof Libreria
   * @param {string} isbn - L'ISBN del libro da prestare.
   * @param {number} userId - L'ID dell'utente a cui prestare il libro.
   * @returns {void}
   */
   effettuaPrestito(isbn, userId) {
    // Verifica se il libro è già stato prestato
    const libroPrestato = this.prestiti.find(prestito => prestito.isbn === isbn);
    if (libroPrestato) {
      console.log("Questo libro è già stato prestato.");
      return;
    }
  
    // Trova il libro e l'utente corrispondenti agli ID forniti
    const libro = this.libri.find(libro => libro.isbn === isbn);
    const utente = this.utenti.find(utente => utente.id === userId);
  
    // Verifica se il libro e l'utente esistono nella libreria
    if (!libro || !utente) {
      console.log("Libro o utente non trovato.");
      return;
    }
  
    // Crea un oggetto prestito con le informazioni fornite e la data corrente
    const prestito = { isbn, userId, dataPrestito: new Date() };
    // Aggiunge il prestito all'array dei prestiti
    this.prestiti.push(prestito);
    // Salva i prestiti aggiornati
    this.salvaPrestiti();
    // Stampa un messaggio di conferma del prestito effettuato
    console.log(`Prestito effettuato: Libro ISBN ${isbn} a Utente ${utente.nome}`);
  }

  

  /**
 * 
 * @property {function} caricaPrestiti Carica i dati dei prestiti dalla memoria persistente.
 * @memberof Libreria
 * @returns {void}
 */
  caricaPrestiti() {
    // Verifica se il file dei prestiti esiste
    if (fs.existsSync(this.prestitiFilePath)) {
      // Legge il contenuto del file
      const data = fs.readFileSync(this.prestitiFilePath, 'utf8').trim();
      // Se il file non è vuoto
      if (data !== '') {
        // Dividi il contenuto in righe
        const lines = data.split('\n');
        // Per ogni riga, crea un oggetto prestito e aggiungilo all'array dei prestiti
        lines.forEach(line => {
          const [userId, isbn, dataPrestito] = line.split(', ');
          const prestito = { userId: parseInt(userId), isbn, dataPrestito: new Date(dataPrestito) };
          this.prestiti.push(prestito);
        });
      }
    }
  }

  /**
   * 
   * @property {function} visualizzaPrestiti Visualizza l'elenco dei prestiti effettuati.
   * @memberof Libreria
   * @returns {void}
   */
  visualizzaPrestiti() {
    console.log("Elenco dei prestiti:");
    // Per ogni prestito, stampa le informazioni relative all'utente, al libro e alla data del prestito
    this.prestiti.forEach(prestito => {
      // Trova il libro corrispondente all'ISBN del prestito
      const libro = this.libri.find(libro => libro.isbn === prestito.isbn);
      // Trova l'utente corrispondente all'ID dell'utente del prestito
      const utente = this.utenti.find(utente => utente.id === prestito.userId);
      // Stampa le informazioni del prestito
      console.log(`Utente: ${utente.nome}, Libro: ${libro.titolo}, Data prestito: ${prestito.dataPrestito}`);
    });
  }


  /**
 * @property {function} restituisciLibro  Restituisce un libro precedentemente prestato da un utente.
 * @memberof Libreria
 * @param {number} userId - L'ID dell'utente che restituisce il libro.
 * @param {string} isbn - L'ISBN del libro da restituire.
 * @returns {void}
 */
  restituisciLibro(userId, isbn) {
    // Trova l'indice del prestito corrispondente all'utente e all'ISBN specificati
    const prestitoIndex = this.prestiti.findIndex(prestito => prestito.userId === userId && prestito.isbn === isbn);
    // Se il prestito non viene trovato, stampa un messaggio di errore e interrompe l'esecuzione della funzione
    if (prestitoIndex === -1) {
      console.log("Prestito non trovato.");
      return;
    }
    // Rimuove il prestito dall'array dei prestiti
    this.prestiti.splice(prestitoIndex, 1);
    // Salva gli aggiornamenti sui prestiti
    this.salvaPrestiti();
    // Stampa un messaggio di conferma della restituzione del libro
    console.log("Libro restituito con successo.");
  }

/**
 * @property {function} salvaPrestiti Salva i dati dei prestiti su file.
 * @memberof Libreria
 * @returns {void}
 */
salvaPrestiti() {
  // Costruisce un array di stringhe rappresentanti i prestiti
  const lines = this.prestiti.map(prestito => `${prestito.userId}, ${prestito.isbn}, ${prestito.dataPrestito}`)// Concatena le stringhe con un carattere di nuova riga
  const data = lines.join('\n');
  // Scrive i dati dei prestiti su file
  fs.writeFileSync(this.prestitiFilePath, data, 'utf8');
  // Stampa un messaggio di conferma del salvataggio
  console.log(`Prestiti salvati in ${this.prestitiFilePath}`);
}

/**
 * @property {function} StampaRighe stampa le righe della libreria corrispondenti alla sezione specificata.
 * (23 righe).
 * * @param {number} numeroSezione - Il numero della sezione da stampare.
 * @memberof Libreria
 * @returns {void} 
 */
stampaRighe(numeroSezione) {
  // Legge i dati dal file della libreria e li suddivide in righe
  const data = fs.readFileSync(this.filePathLibreria, 'utf8').trim();
  const lines = data.split('\n');
  // Calcola l'indice di inizio e fine della sezione da stampare
  const start = (numeroSezione - 1) * 23;
  const end = start + 23;
  // Estrapola la sezione desiderata
  const section = lines.slice(start, end);
  // Stampa ogni riga della sezione
  section.forEach(line => console.log(line));
}

/**
 * @property {fuction} eliminaLibro Elimina un libro dalla libreria in base al suo ISBN.
 * @param {string} isbn - L'ISBN del libro da eliminare.
 * @returns {void}
 */
eliminaLibro(isbn) {
  // Trova l'indice del libro nella libreria in base all'ISBN fornito
  const indiceLibro = this.libri.findIndex(libro => libro.isbn === isbn);
  // Se il libro è presente, lo rimuove dalla libreria e salva le modifiche
  if (indiceLibro !== -1) {
    this.libri.splice(indiceLibro, 1);
    this.salvaLibri();
    console.log("Libro eliminato con successo.");
  } else {
    // Altrimenti, se il libro non è presente, stampa un messaggio di avviso
    console.log("Il libro non è presente nella libreria.");
  }
}

/**
 * @property {function}  Pulisce lo schermo della console e stampa le righe corrispondenti alla libreria. Utilizza la funzione `stampaRighe` per stampare le righe.
 * @memberof Libreria
 * @returns {void}
 * 
*/
pulisciSchermo() {
  // Pulisce la console
  console.clear();
  // Stampa le righe della libreria utilizzando il numero totale di libri come parametro per la funzione `stampaRighe`
  this.stampaRighe(this.numeroLibri());
}


  // Funzione per gestire il menu avanzato
  menuAvanzato() {
    let scelta;
    do {
      console.clear();
      this.stampaRighe(this.numeroLibri());
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
      console.log("10. Elimina un libro");
      console.log("0. Esci");
  
      scelta = prompt("Scelta: ");
      switch (scelta) {
        case '1':
          this.aggiungiLibro();
          prompt("Premi INVIO per continuare...");
          break;
        case '2':
          this.visualizzaLibri();
          prompt("Premi INVIO per continuare...");
          break;
        case '3':
          this.aggiornaLibro();
          prompt("Premi INVIO per continuare...");
          break;
        case '4':
          this.ricercaAvanzata();
          prompt("Premi INVIO per continuare...");
          break;
        case '5':
          const nomeUtente = prompt('Inserisci il nome dell\'utente: ');
          this.aggiungiUtente(nomeUtente);
          prompt("Premi INVIO per continuare...");
          break;
        case '6':
          this.visualizzaUtenti();
          prompt("Premi INVIO per continuare...");
          break;
        case '7':
          const isbn = prompt('Inserisci l\'ISBN del libro: ');
          const userId = prompt('Inserisci l\'ID dell\'utente: ');
          this.effettuaPrestito(isbn, parseInt(userId));
          prompt("Premi INVIO per continuare...");
          break;
        case '8':
          this.visualizzaPrestiti();
          prompt("Premi INVIO per continuare...");
          break;
        case '9':
          const userIdRestituzione = prompt('Inserisci l\'ID dell\'utente che restituisce il libro: ');
          const isbnRestituzione = prompt('Inserisci l\'ISBN del libro da restituire: ');
          this.restituisciLibro(parseInt(userIdRestituzione), isbnRestituzione);
          prompt("Premi INVIO per continuare...");
          break;
      
        case '10':
          const isbnDaEliminare = prompt('Inserisci l\'ISBN del libro da eliminare: ');
          this.eliminaLibro(isbnDaEliminare);
          prompt("Premi INVIO per continuare...");

          break;

        case '0':
          console.log("Uscita dal programma.");
          break;
        default:
          console.log("Scelta non valida. Riprova.");
      }
    } while (scelta !== '0');
  }}
const miaLibreria = new Libreria();
miaLibreria.stampaRighe(miaLibreria.numeroLibri());
miaLibreria.menuAvanzato();