// Fonction pour incrémenter les nombres avec animation
function counterUp(element, start, end, duration) {
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const step = Math.abs(Math.floor(duration / range));
    const timer = setInterval(() => {
        current += increment;
        element.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, step);
}

// Quand la page est complètement chargée
window.addEventListener('DOMContentLoaded', () => {
    const clientsElement = document.getElementById('clients');
    const partenairesElement = document.getElementById('partenaires');
    const prixElement = document.getElementById('PrixGagner');

    // Définir les valeurs finales
    const clientsSatisfaits = 500;  // Remplace par le nombre réel de clients satisfaits
    const partenaires = 100;        // Remplace par le nombre réel de partenaires
    const prixGagnes = 20;          // Remplace par le nombre réel de prix gagnés

    // Lancer les compteurs
    counterUp(clientsElement, 0, clientsSatisfaits, 2000); // Compte de 0 à 500 en 2 secondes
    counterUp(partenairesElement, 0, partenaires, 2000);   // Compte de 0 à 100 en 2 secondes
    counterUp(prixElement, 0, prixGagnes, 2000);           // Compte de 0 à 20 en 2 secondes
});
