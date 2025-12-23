namespace SimpleProductApi.Models
{
    public static class DbInitializer
    {
        public static async Task Initialize(ApplicationDbContext context)
        {
            if (context.Products.Any())
            {
                return; // DB has been seeded
            }
            context.Products.AddRange(
                new Product { Id = 1, Name = "Wireless Mouse", Price = 29.99m, Category = "Electronics" },
                new Product { Id = 2, Name = "Mechanical Keyboard", Price = 89.99m, Category = "Electronics" },
                new Product { Id = 3, Name = "Desk Lamp", Price = 24.50m, Category = "Home" }
            );
            await context.SaveChangesAsync();
        }
    }
}
