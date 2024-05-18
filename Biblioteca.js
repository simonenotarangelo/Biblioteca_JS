const prompt = require('prompt-sync')();

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

class Libreria {
  constructor() {
    this.libri = [];

  }

  caricaLibri() {
    const libriPredefiniti = [
      new Libro('Il Nome della Rosa', 'Umberto Eco', 'Mistero', '978-88-452-1972-4'),
      new Libro('1984', 'George Orwell', 'Distopia', '978-0-452-28423-4')
    ];
    this.libri = libriPredefiniti;
  }

  salvaLibri() {
    console.log("I libri sono salvati nel vettore in memoria.");
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
    if (this.libri.length === 0) {
      console.log("Non ci sono libri nella libreria.");
    } else {
      this.libri.forEach(libro => {
        console.log(libro.toString());
      });
    }
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

  menu() {
    let scelta;
    do {
      console.log("\nMenu:");
      console.log("1. Aggiungi libro");
      console.log("2. Visualizza libri");
      console.log("3. Aggiorna libro");
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
miaLibreria.menu();
