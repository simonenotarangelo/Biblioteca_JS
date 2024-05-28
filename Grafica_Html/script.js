document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('aggiungiBtn').addEventListener('click', () => {
        window.location.href = 'aggiungi.html';
    });

    document.getElementById('visualizzaBtn').addEventListener('click', () => {
        window.location.href = 'visualizza.html';
    });

    document.getElementById('aggiornaBtn').addEventListener('click', () => {
        window.location.href = 'aggiorna.html';
    });

    document.getElementById('ricercaBtn').addEventListener('click', () => {
        window.location.href = 'ricerca.html';
    });

    document.getElementById('nuovoUserBtn').addEventListener('click', () => {
        window.location.href = 'nuovouser.html';
    });

    document.getElementById('stampaUserBtn').addEventListener('click', () => {
        window.location.href = 'stampauser.html';
    });

    document.getElementById('prestitoBtn').addEventListener('click', () => {
        window.location.href = 'prestito.html';
    });

    document.getElementById('stampaPrestitiBtn').addEventListener('click', () => {
        window.location.href = 'stampaprestiti.html';
    });

    document.getElementById('restituzioneBtn').addEventListener('click', () => {
        window.location.href = 'restituzione.html';
    });
});
