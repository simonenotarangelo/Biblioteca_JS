const prompt=require('prompt-sync')();

let Novecento = {

    autore:"Alessandro Barrico",
    genere:"Romanzo",
    isbn:"978-88-123456-1"
}

let Lezioni = {

    autore:"Italo Calvino",
    genere:"Saggio",
    isbn:"978-88-123456-2"
}

let Solaria = {

    autore:"Carmine Abate",
    genere:"Romanzo",
    isbn:"978-88-123456-3"
}

let Isola = {

    autore:"Aldous Huxley",
    genere:"Fantascienza",
    isbn:"978-88-123456-4"
}

let Arcipelago = {

    autore:"Tiziano Scarpa",
    genere:"Romanzo",
    isbn:"978-88-123456-5"
}

let Inferno = {

    autore:"Dan Brown",
    genere:"Thriller",
    isbn:"978-88-123456-6"
}

function aggiornamentiLibro()
{
    
}

function visualizzaLibri()
{
    
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