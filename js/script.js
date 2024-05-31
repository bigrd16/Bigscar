document.addEventListener('DOMContentLoaded', function() {
    // Sélection des boutons d'ajout de produit
    const plusButtons = document.querySelectorAll('.fa-plus-circle');
    // Sélection des boutons de suppression de produit
    const minusButtons = document.querySelectorAll('.fa-minus-circle');
    // Sélection des boutons de suppression d'article
    const deleteButtons = document.querySelectorAll('.fa-trash-alt');
    // Sélection des boutons de like
    const likeButtons = document.querySelectorAll('.fa-heart');
    
    // Fonction pour incrémenter la quantité de produit
    function incrementQuantity(event) {
        const target = event.target;
        const quantityElement = target.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
    }
    
    // Fonction pour décrémenter la quantité de produit
    function decrementQuantity(event) {
        const target = event.target;
        const quantityElement = target.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        }
    }
    
   // Fonction pour supprimer un produit de la liste
function deleteProduct(event) {
    const cardBody = event.target.closest('.card-body');
    const deleteIcon = document.createElement('img');
    deleteIcon.src = '/assets/delete.png'; // Chemin vers votre image delete.png
    deleteIcon.alt = 'Delete';
    deleteIcon.classList.add('delete-icon'); // Ajoutez des classes CSS si nécessaire
    cardBody.parentElement.replaceWith(deleteIcon);
    updateTotalPrice();
}
    
    
   // Fonction pour ajouter un like à un produit
function likeProduct(event) {
    const target = event.target;
    target.classList.toggle('text-danger');
}

    
    // Fonction pour mettre à jour le prix total en fonction des quantités sélectionnées
    function updateTotalPrice() {
        const unitPrices = document.querySelectorAll('.unit-price');
        const quantities = document.querySelectorAll('.quantity');
        let totalPrice = 0;
        unitPrices.forEach((unitPrice, index) => {
            const price = parseInt(unitPrice.textContent.replace('$', ''));
            const quantity = parseInt(quantities[index].textContent);
            totalPrice += price * quantity;
        });
        document.querySelector('.total').textContent = totalPrice + ' $';
    }
    
    // Ajout des écouteurs d'événements aux boutons
    plusButtons.forEach(button => {
        button.addEventListener('click', incrementQuantity);
    });
    minusButtons.forEach(button => {
        button.addEventListener('click', decrementQuantity);
    });
    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteProduct);
    });
    likeButtons.forEach(button => {
        button.addEventListener('click', likeProduct);
    });
});
