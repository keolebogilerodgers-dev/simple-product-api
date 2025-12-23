// Main Application Controller
class ECommerceApp {
    constructor() {
        this.productService = new ProductService();
        this.products = [];
        this.filteredProducts = [];
        this.sortAscending = true;
        
        this.initializeApp();
    }

    async initializeApp() {
        // Load products
        this.products = await this.productService.getAllProducts();
        this.filteredProducts = [...this.products];
        
        // Render initial UI
        this.renderProductGrid();
        this.populateCategoryFilter();
        this.setupEventListeners();
        
        // Initialize cart modal
        this.setupCartModal();
    }

    renderProductGrid() {
        const grid = document.getElementById('productGrid');
        if (!grid) return;
        
        if (this.filteredProducts.length === 0) {
            grid.innerHTML = '<div class="no-products">No products found</div>';
            return;
        }
        
        let html = '';
        this.filteredProducts.forEach(product => {
            html += `
                <div class="product-card" data-category="${product.category}">
                    <div class="product-image">
                        <i class="fas fa-${this.getProductIcon(product.category)}"></i>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description || 'No description available'}</p>
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <span class="product-category">${product.category}</span>
                        <button onclick="app.addToCart(${product.id})" class="add-to-cart">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            `;
        });
        
        grid.innerHTML = html;
    }

    getProductIcon(category) {
        const icons = {
            'Electronics': 'laptop',
            'Home': 'home',
            'Accessories': 'headphones',
            'default': 'box'
        };
        return icons[category] || icons.default;
    }

    populateCategoryFilter() {
        const filter = document.getElementById('categoryFilter');
        if (!filter) return;
        
        const categories = this.productService.getCategories(this.products);
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            filter.appendChild(option);
        });
    }

    filterProducts() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const category = document.getElementById('categoryFilter').value;
        
        this.filteredProducts = this.products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                                product.description.toLowerCase().includes(searchTerm);
            const matchesCategory = !category || product.category === category;
            
            return matchesSearch && matchesCategory;
        });
        
        this.renderProductGrid();
    }

    sortProductsByPrice() {
        this.sortAscending = !this.sortAscending;
        this.filteredProducts.sort((a, b) => {
            return this.sortAscending ? a.price - b.price : b.price - a.price;
        });
        
        const sortButton = document.getElementById('sortPrice');
        sortButton.innerHTML = `Sort by Price <i class="fas fa-sort-${this.sortAscending ? 'up' : 'down'}"></i>`;
        
        this.renderProductGrid();
    }

    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            cartManager.addToCart(product);
        }
    }

    setupEventListeners() {
        // Search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', () => this.filterProducts());
        }
        
        // Category filter
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', () => this.filterProducts());
        }
        
        // Sort button
        const sortButton = document.getElementById('sortPrice');
        if (sortButton) {
            sortButton.addEventListener('click', () => this.sortProductsByPrice());
        }
    }

    setupCartModal() {
        const cartToggle = document.getElementById('cartToggle');
        const closeCart = document.getElementById('closeCart');
        const modal = document.getElementById('cartModal');
        
        if (cartToggle && modal) {
            cartToggle.addEventListener('click', () => {
                cartManager.renderCartModal();
                modal.style.display = 'flex';
            });
        }
        
        if (closeCart && modal) {
            closeCart.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }
        
        // Close modal when clicking outside
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new ECommerceApp();
});

// Add CSS for product icons
const iconStyle = document.createElement('style');
iconStyle.textContent = `
    .product-image i {
        font-size: 4rem;
        opacity: 0.9;
    }
    .no-products {
        grid-column: 1 / -1;
        text-align: center;
        padding: 3rem;
        color: #636e72;
        font-size: 1.2rem;
    }
`;
document.head.appendChild(iconStyle);
