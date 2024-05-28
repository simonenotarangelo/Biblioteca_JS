Progetto Biblioteca_JS:  - - - - - - - - Evidenziate con [IMPORTANTE] [/IMPORTANTE} cose essenziali
Il progetto rinominato Biblioteca_JS punta a riprodurre le funzioni che svolge una biblioteca nella realtà, permettendo la gestione interna dei libri e dei prestiti ai registrati, attraverso codice scritto in linguaggio JavaScript e funzionante attraverso Node.js (runtime di JavaScript, ovvero un ambiente di esecuzione, poiché JS nasce come linguaggio web lato client che, pertanto, può essere eseguito solo all’interno di un browser).
Troviamo due versioni per la gestione di questa biblioteca, una con funzionalità limitate ed accessibile a tutti, una con funzioni e grafica più avanzate per chi è un esperto del settore.
La versione base è denominata “Biblioteca.js”, quella avanzata “Versione_Avanzata.js”, la quale contiene una dettagliata documentazione nella cartella “documentazione”, effettuata attraverso JSDoc.
Di seguito la spiegazione:
-Il file "Biblioteca.js" contiene la versione base del progetto, funzionante da terminale, e che consente le seguenti funzionalità (come richieste dalla traccia):

	  1. Aggiunta libri
	  2. Visualizzazione libri
	  3. Aggiornamento libri

-Il file "Versione_Avanzata.js" contiene una versione migliorata sotto ogni punto di vista rispetto alla versione di base "Biblioteca.js", poiché migliora le vecchie funzionalità e ne aggiunge di nuove, migliorando l’esperienza utente attraverso grafica e la gestione in se della biblioteca. Qui di seguito le funzionalità presenti:

    1. Aggiunta libri al catalogo
    2. Visualizzazione libri presenti nel catalogo
    3. Aggiornamento informazioni libri tramite codice ISBN
    4. Ricerca avanzata di libri tramite Titolo, Autore, Genere e codice ISBN
    5. Aggiunta utenti a cui verrà assegnato un ID, che potranno richiedere prestiti di libri
    6. Visualizzazione utenti registrati
    7. Effettuazione di prestiti a utenti registrati
    8. Visualizza prestiti effettuati, con nome/ID dell’utente e data del prestito
    9. Effettuo restituzioni
    10. Eliminazione libri dal catalogo

- La cartella “documentazione” contiene la documentazione in JSDoc del codice della versione finale avanzata “Versione_Avanzata.js”.
Di seguito una spiegazione:

-[IMPORTANTE]“src” contiene il file “Documentazione_Avanzata” contente il codice avanzato con gli appositi tag JSDoc e commenti esplicativi.
-“docs” contiene diversi file tra cui “index.html” che ha i dovuti collegamenti con gli altri file html che spiegano la logica e la funzionalità del codice. [/IMPORTANTE]


-[IMPORTANTE] La cartella “Grafica_Html” contiene una differente versione del progetto, in modo da avere una grafica più bella alla vista, più semplice e funzionale. Questa versione del progetto usa la tecnica del localstorage (questa permette il salvataggio dei dati nella memoria del browser in LOCALE, il che implica che se il codice viene avviato da un dispositivo diverso, non ci saranno dati salvati, quindi la biblioteca sarà vuota). Questa versione presenta il codice “Versione_Avanzata.js” priva di funzionalità proprie di Node, ma adattato per funzionare con html. Manca della funzione per la rimozione dei libri e degli utenti registrati PRESENTA PARTI DI CODICE PRESO ONLINE. [/IMPORTANTE]
Di seguito cosa troviamo nella cartella:

	-“index.html”: pagina principale contenente i tasti associati al file “script.js” per le diverse funzionalità.
	-“styles.css”: semplice codice in css con diverse classi per l’impostazione della grafica degli html.
	-“script.js”: codice JavaScript contenente il collegamento alle altre pagine Html, in base ai tasti premuti nell’index.
	-“Versione_Avanzata.js”: Codice principale della versione avanzata della biblioteca con funzioni adattate per il funzionamento nel web, quindi senza Node.js
	-“*.html”: pagine html per ogni funzione con relativa associazione alle funzioni presenti nel codice “Versione_Avanzata.js”.

