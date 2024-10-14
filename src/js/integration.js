document.addEventListener('DOMContentLoaded', function() {
    const formationContainer = document.querySelector('#FormationContainer .formaContainer');

    // Fonction pour afficher l'image correspondante dans le modal
    function showImage(imageUrl) {
        modalImage.src = imageUrl; // Définir l'image à afficher dans le modal
        modal.style.display = 'block'; // Afficher le modal
    }

    if (formationContainer) {
        fetch('../models/formationCard.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur HTTP : ' + response.status);
                }
                return response.text();
            })
            .then(data => {
                NbCart(8, data); 
            })
            .catch(error => {
                console.error('Erreur lors du chargement du fichier formationCard.html :', error);
            });

        // Fonction pour afficher n cartes
        function NbCart(n, template) {
            // Générer n cartes à partir du modèle
            for (let i = 1; i <= n; i++) {
                const card = document.createElement('article');
                card.classList.add('cardFor');
                
                // Remplacer le contenu de la carte avec le template
                card.innerHTML = template.replace(/{{number}}/g, i).replace(/{{description}}/g, `Description de la formation ${i}`);

                // Ajouter la carte dans le conteneur
                formationContainer.appendChild(card);
            }
        }

    } else {
        console.error('Le conteneur de formation est introuvable.');
    }
});
