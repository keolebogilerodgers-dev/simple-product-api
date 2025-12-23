// Product Service - Handles API communication with .NET backend
class ProductService {
    constructor() {
        // Use your API's base URL - adjust if needed
        this.baseUrl = window.location.hostname.includes('github.io') 
            ? 'https://your-username.github.io/simple-product-api/api' // For GitHub Pages
            : 'https://localhost:5001/api'; // For local development
    }

    async getAllProducts() {
        try {
            console.log('Fetching products from:', `${this.baseUrl}/products`);
            
            // For demo: If API isn't reachable, use mock data
            const mockProducts = [
                { id: 1, name: "Wireless Mouse", price: 29.99, category: "Electronics", description: "Ergonomic wireless mouse with precision tracking." },
                { id: 2, name: "Mechanical Keyboard", price: 89.99, category: "Electronics", description: "RGB mechanical keyboard with blue switches." },
                { id: 3, name: "Gaming Monitor", price: 249.99, category: "Electronics", description: "27-inch 144Hz gaming monitor." },
                { id: 4, name: "Desk Lamp", price: 24.50, category: "Home", description: "Adjustable LED desk lamp with touch controls." },
                { id: 5, name: "USB-C Hub", price: 39.99, category: "Accessories", description: "7-in-1 USB-C hub with 4K HDMI." },
                { id: 6, name: "Laptop Stand", price: 34.99, category: "Accessories", description: "Aluminum laptop stand for better ergonomics." }
            ];
            
            // Try to fetch from real API first
            const response = await fetch(`${this.baseUrl}/products`);
            if (response.ok) {
                return await response.json();
            } else {
                console.warn('API not reachable, using mock data');
                return mockProducts;
            }
        } catch (error) {
            console.error('Error fetching products:', error);
            // Return mock data as fallback
            return mockProducts;
        }
    }

    getCategories(products) {
        const categories = [...new Set(products.map(p => p.category))];
        return categories;
    }
}

// Export for use in other files
window.ProductService = ProductService;
