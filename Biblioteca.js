const prompt=require('prompt-sync')();

//cercare un metodo per salvare i cambiamenti (es. se un utente prende in prestito un libro, anche se chiudiamo il programma, questo prestito deve rimanere registrato).

let Novecento = {

    titolo: "Novecento",
    autore:"Alessandro Barrico",
    genere:"Romanzo",
    isbn:"978-88-123456-1"
}

let Lezioni = {

    titolo: "Lezioni",
    autore:"Italo Calvino",
    genere:"Saggio",
    isbn:"978-88-123456-2"
}

let Solaria = {
    
    titolo:"Solaria",
    autore:"Carmine Abate",
    genere:"Romanzo",
    isbn:"978-88-123456-3"
}

let Isola = {
    
    titolo: "Isola",
    autore:"Aldous Huxley",
    genere:"Fantascienza",
    isbn:"978-88-123456-4"
}

let Arcipelago = {
    
    titolo: "Arcipelago",
    autore:"Tiziano Scarpa",
    genere:"Romanzo",
    isbn:"978-88-123456-5"
}

let Inferno = {

    titolo: "Inferno",
    autore:"Dan Brown",
    genere:"Thriller",
    isbn:"978-88-123456-6"
}

function aggiornamentiLibro()
{

    
}

function visualizzaLibri()
{
    //switch case visualizzazione totale, per nome ecc...
    console.log("Ecco la lista dei libri presenti nella Biblioteca");

    console.log(Novecento + "\n" + Lezioni + "\n" +Solaria + "\n" + Isola + "\n" + Arcipelago + "\n" + Inferno);
    
}

function main()
{
    let scelta;

    console.log("Benvenuto nella Biblioteca. Cosa desideri fare?");

    console.log("1)Aggiorna informazioni di un libro");
    console.log("2)Visualizza lista completa dei libri");
    console.log("0)Chiudi programma");

    do
    {
        scelta=prompt("Scegli un'opzione: ");

        switch(scelta)
        {
            case 0:break;
            case 1:aggiornamentiLibro();break;
            case 2:visualizzaLibri();break;
        }

    }while(scelta!=0);
}

main();