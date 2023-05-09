// cart.js
function loadCartFromLocalStorage() {
    console.log('Loading cart from localStorage');
    var storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
        console.log('Loaded cart:', shoppingCart);
    } else {
        console.log('No cart data found in localStorage');
    }
}

// Call the function to load the cart data from localStorage
loadCartFromLocalStorage();


function addToCart(itemName, itemPrice, itemQuantity) {
    console.log('Adding item to cart:', itemName, itemPrice, itemQuantity); // Debugging
    var item = {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity // Add quantity to the item object
    };
    shoppingCart.push(item);
    updateCartDisplay();
    console.log('Updated shopping cart:', shoppingCart); // Debugging

    // Store the shopping cart data in localStorage
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    console.log('Stored cart in localStorage:', JSON.stringify(shoppingCart)); // Debugging
}

function removeFromCart(index) {
    shoppingCart.splice(index, 1);
    updateCartDisplay();
}

function updateCartDisplay() {
    console.log('Updating cart display');
    var cartItemsContainer = document.querySelector('.cart-items');
    if (!cartItemsContainer) {
        console.log('Cart items container not found');
        return; // Exit the function if the cart-items element is not found
    }
    cartItemsContainer.innerHTML = '';
    var totalPrice = 0;

    shoppingCart.forEach(function(item, index) {
        console.log('Adding item to display:', item);
        var listItem = document.createElement('li');
        listItem.textContent = item.name + ' - $' + (item.price * item.quantity).toFixed(2) + ' (Qty: ' + item.quantity + ')';
        totalPrice += item.price * item.quantity; // Multiply price by quantity

        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            removeFromCart(index);
        });
        listItem.appendChild(removeButton);

        cartItemsContainer.appendChild(listItem);
    });

    document.querySelector('.total-price').textContent = totalPrice.toFixed(2);
}

// Call updateCartDisplay to initialize the cart display
updateCartDisplay();

function proceedToCheckout() {
    // Store the shopping cart data in localStorage or sessionStorage
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    // Navigate to the checkout page
    window.location.href = 'checkout.html';
}

// Update the checkout button's click event to call proceedToCheckout
var checkoutButton = document.querySelector('.checkout-button');
if (checkoutButton) {
    checkoutButton.addEventListener('click', proceedToCheckout);
}