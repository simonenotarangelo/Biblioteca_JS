const fs = require('fs');
const { main } = require('./Biblioteca');

let Novecento = {
    titolo: "Novecento",
    autore: "Alessandro Baricco",
    genere: "Romanzo",
    isbn: "978-88-123456-1"
};
let Lezioni = {
    titolo: "Lezioni",
    autore: "Italo Calvino",
    genere: "Saggio",
    isbn: "978-88-123456-2"
};
let Solaria = {
    titolo: "Solaria",
    autore: "Carmine Abate",
    genere: "Romanzo",
    isbn: "978-88-123456-3"
};
let Isola = {
    titolo: "Isola",
    autore: "Aldous Huxley",
    genere: "Fantascienza",
    isbn: "978-88-123456-4"
};
let Arcipelago = {
    titolo: "Arcipelago",
    autore: "Tiziano Scarpa",
    genere: "Romanzo",
    isbn: "978-88-123456-5"
};
let Inferno = {
    titolo: "Inferno",
    autore: "Dan Brown",
    genere: "Thriller",
    isbn: "978-88-123456-6"
};
let IlSignoreDegliAnelli = {
    titolo: "Il Signore degli Anelli",
    autore: "J.R.R. Tolkien",
    genere: "Fantasy",
    isbn: "978-88-046-5491-0"
};
let OrgoglioEPregiudizio = {
    titolo: "Orgoglio e Pregiudizio",
    autore: "Jane Austen",
    genere: "Romanzo classico",
    isbn: "978-88-468-1044-0"
};
let PiccoleDonne = {
    titolo: "Piccole Donne",
    autore: "Louisa May Alcott",
    genere: "Romanzo classico",
    isbn: "978-88-581-1239-0"
};
let IlCodiceDaVinci = {
    titolo: "Il Codice da Vinci",
    autore: "Dan Brown",
    genere: "Thriller, Mistero",
    isbn: "978-88-17-01092-3"
};

function visualizzaLibri() {
    console.log("Ecco la lista dei libri presenti nella Biblioteca:");
    console.log(Novecento.titolo + "\n" + Lezioni.titolo + "\n" + Solaria.titolo + "\n" + Isola.titolo + "\n" + Arcipelago.titolo + "\n" + Inferno.titolo + "\n" + IlSignoreDegliAnelli.titolo + "\n" + OrgoglioEPregiudizio.titolo + "\n" + PiccoleDonne.titolo + "\n" + IlCodiceDaVinci.titolo);
    
    console.log("Vuoi visualizzare più informazioni su uno di questi libri?");
    let sceltaVisualizzazione = prompt("si o no?");
    
    if (sceltaVisualizzazione.toLowerCase() === "si") {
        let visualizzazioneLibro = prompt("Di quale libro vuoi visualizzare le informazioni?");
        switch (visualizzazioneLibro) {
            case "Novecento":
                console.log("Ecco informazioni più specifiche riguardanti il libro Novecento:");
                console.log(Novecento);
                break;
            case "Lezioni":
                console.log("Ecco informazioni più specifiche riguardanti il libro Lezioni:");
                console.log(Lezioni);
                break;
            case "Solaria":
                console.log("Ecco informazioni più specifiche riguardanti il libro Solaria:");
                console.log(Solaria);
                break;
            case "Isola":
                console.log("Ecco informazioni più specifiche riguardanti il libro Isola:");
                console.log(Isola);
                break;
            case "Arcipelago":
                console.log("Ecco informazioni più specifiche riguardanti il libro Arcipelago:");
                console.log(Arcipelago);
                break;
            case "Inferno":
                console.log("Ecco informazioni più specifiche riguardanti il libro Inferno:");
                console.log(Inferno);
                break;
            case "Il Signore degli Anelli":
                console.log("Ecco informazioni più specifiche riguardanti il libro Il Signore degli Anelli:");
                console.log(IlSignoreDegliAnelli);
                break;
            case "Orgoglio e Pregiudizio":
                console.log("Ecco informazioni più specifiche riguardanti il libro Orgoglio e Pregiudizio:");
                console.log(OrgoglioEPregiudizio);
                break;
            case "Piccole Donne":
                console.log("Ecco informazioni più specifiche riguardanti il libro Piccole Donne:");
                console.log(PiccoleDonne);
                break;
            case "Il Codice da Vinci":
                console.log("Ecco informazioni più specifiche riguardanti il libro Il Codice da Vinci:");
                console.log(IlCodiceDaVinci);
                break;
            default:
                console.log("Libro non trovato.");
        }
    }
}


function aggiornaLibro() {
    let libroDaAggiornare = prompt("Quale libro vuoi aggiornare?");
    switch (libroDaAggiornare) {
        case "Novecento":
            Novecento.titolo = prompt("Inserisci il nuovo titolo:");
            Novecento.autore = prompt("Inserisci il nuovo autore:");
            Novecento.genere = prompt("Inserisci il nuovo genere:");
            Novecento.isbn = prompt("Inserisci il nuovo ISBN:");
            break;
        case "Lezioni":
            Lezioni.titolo = prompt("Inserisci il nuovo titolo:");
            Lezioni.autore = prompt("Inserisci il nuovo autore:");
            Lezioni.genere = prompt("Inserisci il nuovo genere:");
            Lezioni.isbn = prompt("Inserisci il nuovo ISBN:");
            break;
        case "Solaria":
            Solaria.titolo = prompt("Inserisci il nuovo titolo:");
            Solaria.autore = prompt("Inserisci il nuovo autore:");
            Solaria.genere = prompt("Inserisci il nuovo genere:");
            Solaria.isbn = prompt("Inserisci il nuovo ISBN:");
            break;
        case "Isola":
            Isola.titolo = prompt("Inserisci il nuovo titolo:");
            Isola.autore = prompt("Inserisci il nuovo autore:");
            Isola.genere = prompt("Inserisci il nuovo genere:");
            Isola.isbn = prompt("Inserisci il nuovo ISBN:");
            break;
        case "Arcipelago":
            Arcipelago.titolo = prompt("Inserisci il nuovo titolo:");
            Arcipelago.autore = prompt("Inserisci il nuovo autore:");
            Arcipelago.genere = prompt("Inserisci il nuovo genere:");
            Arcipelago.isbn = prompt("Inserisci il nuovo ISBN:");
            break;
        case "Inferno":
            Inferno.titolo = prompt("Inserisci il nuovo titolo:");
            Inferno.autore = prompt("Inserisci il nuovo autore:");
            Inferno.genere = prompt("Inserisci il nuovo genere:");
            Inferno.isbn = prompt("Inserisci il nuovo ISBN:");
            break;
        case "Il Signore degli Anelli":
            IlSignoreDegliAnelli.titolo = prompt("Inserisci il nuovo titolo:");
            IlSignoreDegliAnelli.autore = prompt("Inserisci il nuovo autore:");
            IlSignoreDegliAnelli.genere = prompt("Inserisci il nuovo genere:");
            IlSignoreDegliAnelli.isbn = prompt("Inserisci il nuovo ISBN:");
            break;
        case "Orgoglio e Pregiudizio":
            OrgoglioEPregiudizio.titolo = prompt("Inserisci il nuovo titolo:");
            OrgoglioEPregiudizio.autore = prompt("Inserisci il nuovo autore:");
            OrgoglioEPregiudizio.genere = prompt("Inserisci il nuovo genere:");
            OrgoglioEPregiudizio.isbn = prompt("Inserisci il nuovo ISBN:");
            break;
        case "Piccole Donne":
            PiccoleDonne.titolo = prompt("Inserisci il nuovo titolo:");
            PiccoleDonne.autore = prompt("Inserisci il nuovo autore:");
            PiccoleDonne.genere = prompt("Inserisci il nuovo genere:");
            PiccoleDonne.isbn = prompt("Inserisci il nuovo ISBN:");
            break;
        case "Il Codice da Vinci":
            IlCodiceDaVinci.titolo = prompt("Inserisci il nuovo titolo:");
            IlCodiceDaVinci.autore = prompt("Inserisci il nuovo autore:");
            IlCodiceDaVinci.genere = prompt("Inserisci il nuovo genere:");
            IlCodiceDaVinci.isbn = prompt("Inserisci il nuovo ISBN:");
            break;
        default:
            console.log("Libro non trovato.");
    }
}






function main() {
    let continuare = true;
    while (continuare) {
        let scelta = prompt("Cosa vuoi fare? (visualizza/aggiorna/esci)");
        switch (scelta.toLowerCase()) {
            case "visualizza":
                visualizzaLibri();
                break;
            case "aggiorna":
                aggiornaLibro();
                break;

            case "esci":
                continuare = false;
                console.log("Arrivederci!");
                break;
            default:
                console.log("Scelta non valida. Riprova.");
        }
    }
}

main();
