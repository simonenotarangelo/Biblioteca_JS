class Libro {
  constructor(titolo, autore, genere, isbn) {
      this.titolo = titolo;
      this.autore = autore;
      this.genere = genere;
      this.isbn = isbn;
  }

  toString() {
      return `Titolo: ${this.titolo}, Autore: ${this.autore}, Genere: ${this.genere}, ISBN: ${this.isbn}`;
  }
}

class Prestito {
  constructor(isbn, userId, dataPrestito) {
      this.isbn = isbn;
      this.userId = userId;
      this.dataPrestito = dataPrestito;
  }

  toString() {
      return `ISBN: ${this.isbn}, Utente: ${this.userId}, Data Prestito: ${this.dataPrestito}`;
  }
}

class Libreria {
  constructor() {
      this.libri = this.caricaDati('libri') || [];
      this.utenti = this.caricaDati('utenti') || [];
      this.prestiti = this.caricaDati('prestiti') || [];
      this.userIdCounter = this.utenti.length ? Math.max(...this.utenti.map(u => u.id)) + 1 : 1;
      console.log('Libreria inizializzata', this.libri, this.utenti, this.prestiti);
  }

  salvaDati(chiave, dati) {
      localStorage.setItem(chiave, JSON.stringify(dati));
      console.log(`Dati salvati per ${chiave}`, dati);
  }

  caricaDati(chiave) {
      const dati = localStorage.getItem(chiave);
      console.log(`Dati caricati per ${chiave}`, dati);
      return dati ? JSON.parse(dati) : null;
  }

  aggiungiLibro(titolo, autore, genere, isbn) {
      const libro = new Libro(titolo, autore, genere, isbn);
      this.libri.push(libro);
      this.salvaDati('libri', this.libri);
      console.log(`Libro aggiunto: ${libro.toString()}`);
  }

  visualizzaLibri() {
      return this.libri;
  }

  aggiornaLibro(isbn, nuovoTitolo, nuovoAutore, nuovoGenere) {
      const libro = this.libri.find(libro => libro.isbn === isbn);
      if (libro) {
          libro.titolo = nuovoTitolo;
          libro.autore = nuovoAutore;
          libro.genere = nuovoGenere;
          this.salvaDati('libri', this.libri);
          console.log(`Libro aggiornato: ${libro.toString()}`);
      } else {
          console.log('Libro non trovato');
      }
  }

  ricercaAvanzata(ricerca) {
      return this.libri.filter(libro => 
          libro.titolo.includes(ricerca) || 
          libro.autore.includes(ricerca) ||
          libro.genere.includes(ricerca) ||
          libro.isbn.includes(ricerca)
      );
  }

  aggiungiUtente(nome) {
      const utente = { id: this.userIdCounter++, nome };
      this.utenti.push(utente);
      this.salvaDati('utenti', this.utenti);
      console.log(`Utente aggiunto: ID: ${utente.id}, Nome: ${utente.nome}`);
  }

  visualizzaUtenti() {
      return this.utenti;
  }

  effettuaPrestito(isbn, userId) {
      const libro = this.libri.find(libro => libro.isbn === isbn);
      if (libro) {
          const prestito = new Prestito(isbn, userId, new Date().toLocaleDateString());
          this.prestiti.push(prestito);
          this.salvaDati('prestiti', this.prestiti);
          console.log(`Prestito effettuato: ${prestito.toString()}`);
      } else {
          console.log('Libro non trovato');
      }
  }

  visualizzaPrestiti() {
      return this.prestiti;
  }

  restituzioneLibro(isbn) {
      const prestitoIndex = this.prestiti.findIndex(prestito => prestito.isbn === isbn);
      if (prestitoIndex !== -1) {
          const [prestito] = this.prestiti.splice(prestitoIndex, 1);
          this.salvaDati('prestiti', this.prestiti);
          console.log(`Libro restituito: ${prestito.toString()}`);
      } else {
          console.log('Prestito non trovato');
      }
  }
}

const miaLibreria = new Libreria();
