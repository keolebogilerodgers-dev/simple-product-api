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
            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(100);
                entity.Property(e => e.Price).HasColumnType("decimal(18,2)");
                entity.Property(e => e.Category).HasMaxLength(50);
                entity.Property(e => e.Stock).HasDefaultValue(0);
                entity.Property(e => e.CreatedDate)
                    .HasDefaultValueSql("GETUTCDATE()");
                
                // Seed data
                entity.HasData(
                    new Product 
                    { 
                        Id = 1, 
                        Name = "Laptop", 
                        Price = 999.99M, 
                        Category = "Electronics", 
                        Stock = 10 
                    },
                    new Product 
                    { 
                        Id = 2, 
                        Name = "Desk Chair", 
                        Price = 249.99M, 
                        Category = "Furniture", 
                        Stock = 5 
                    }
                );
            });
        }
    }
}
