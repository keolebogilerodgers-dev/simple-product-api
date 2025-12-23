// Cart Manager - Handles shopping cart logic
class CartManager {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.updateCartCount();
    }

    addToCart(product) {
        const existingItem = this.cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                ...product,
                quantity: 1
            });
        }
        
        this.saveCart();
        this.updateCartCount();
        this.showNotification(`${product.name} added to cart!`);
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartCount();
    }

    updateQuantity(productId, newQuantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (newQuantity < 1) {
                this.removeFromCart(productId);
            } else {
                item.quantity = newQuantity;
                this.saveCart();
            }
        }
        this.updateCartCount();
    }

    getCartItems() {
        return this.cart;
    }

    getTotalPrice() {
        return this.cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
        this.updateCartCount();
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    updateCartCount() {
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElement = document.getElementById('cartCount');
        if (cartCountElement) {
            cartCountElement.textContent = totalItems;
        }
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #00b894;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 9999;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    renderCartModal() {
        const cartItemsElement = document.getElementById('cartItems');
        const totalPriceElement = document.getElementById('totalPrice');
        
        if (!cartItemsElement) return;
        
        if (this.cart.length === 0) {
            cartItemsElement.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            totalPriceElement.textContent = '0.00';
            return;
        }
        
        let cartHTML = '';
        this.cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-info">
                        <strong>${item.name}</strong>
                        <p>$${item.price.toFixed(2)} × ${item.quantity}</p>
                    </div>
                    <div class="cart-item-actions">
                        <button onclick="cartManager.updateQuantity(${item.id}, ${item.quantity - 1})" class="qty-btn">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="cartManager.updateQuantity(${item.id}, ${item.quantity + 1})" class="qty-btn">+</button>
                        <button onclick="cartManager.removeFromCart(${item.id})" class="remove-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        });
        
        cartItemsElement.innerHTML = cartHTML;
        totalPriceElement.textContent = this.getTotalPrice().toFixed(2);
    }
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    .qty-btn, .remove-btn {
        padding: 5px 10px;
        margin: 0 5px;
        border: 1px solid #ddd;
        border-radius: 4px;
        background: white;
        cursor: pointer;
    }
    .remove-btn { color: #e74c3c; }
`;
document.head.appendChild(style);

// Create global instance
const cartManager = new CartManager();
window.cartManager = cartManager;
