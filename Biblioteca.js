const prompt=require('prompt-sync')();

function aggiuntaLibro()
{

}

function visualizzaLibri()
{
    
}

function main()
{
    let scelta;

    console.log("Benvenuto nella Biblioteca. Cosa desideri fare?");

    console.log("1)Aggiungi libro");
    console.log("2)Visualizza lista completa dei libri");
    console.log("0)Chiudi programma");

    do
    {
        scelta=prompt("Scegli un'opzione: ");

        switch(scelta)
        {
            case 0:break;
            case 1:aggiuntaLibro();break;
            case 2:visualizzaLibri();break;
        }

    }while(scelta!=0);
}

main();