const prompt=require('prompt-sync')();

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
    console.log("Ecco la lista dei libri presenti nella Biblioteca");
    console.log(Novecento.titolo + "\n" + Lezioni.titolo + "\n" +Solaria.titolo + "\n" + Isola.titolo + "\n" + Arcipelago.titolo + "\n" + Inferno.titolo);
    
    console.log("Vuoi visualizzare piu informazioni di questi libri ?");
    sceltaVisualizzazione=prompt("si o no?");

    if(sceltaVisualizzazione == "si")
    {
    VisualizzazioneLibro=prompt("Di quale libro? ");
    switch(VisualizzazioneLibro)
    {
    case"Novecento":console.log("Ecco informazioni piu specifiche riguardanti il libro Novecento: ");
                    console.log(Novecento);break;
    case"Lezioni":console.log("Ecco informazioni piu specifiche riguardanti il libro Lezioni: ");
                    console.log(Lezioni);break;
    case"Solaria":console.log("Ecco informazioni piu specifiche riguardanti il libro Solaria: ");
                    console.log(Solaria);break;
    case"Isola":console.log("Ecco informazioni piu specifiche riguardanti il libro Isola: ");
                    console.log(Isola);break;
    case"Arcipelago":console.log("Ecco informazioni piu specifiche riguardanti il libro Arcipelago: ");
                    console.log(Arcipelago);break;
    case"Inferno":console.log("Ecco informazioni piu specifiche riguardanti il libro Inferno: ");
                    console.log(Inferno);break;
    }
    }
    else 
    {
        
    }
}

/*function main()
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
*/
visualizzaLibri();

//main();
