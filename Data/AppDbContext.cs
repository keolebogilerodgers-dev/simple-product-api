using Microsoft.EntityFrameworkCore;
using simple_product_api.Models;

namespace simple_product_api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Seed initial data
            modelBuilder.Entity<Product>().HasData(
                new Product { 
                    Id = 1, 
                    Name = "Laptop", 
                    Price = 999.99M, 
                    Category = "Electronics", 
                    Stock = 10,
                    CreatedDate = DateTime.UtcNow
                },
                new Product { 
                    Id = 2, 
                    Name = "Desk Chair", 
                    Price = 249.99M, 
                    Category = "Furniture", 
                    Stock = 5,
                    CreatedDate = DateTime.UtcNow
                }
            );
        }
    }
}
