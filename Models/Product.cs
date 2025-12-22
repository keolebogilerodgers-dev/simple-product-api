// File: Models/Product.cs
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace simple_product_api.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Product name is required")]
        [StringLength(100, MinimumLength = 3)]
        public string Name { get; set; } = string.Empty;

        [StringLength(500)]
        public string? Description { get; set; }

        [Required]
        [Range(0.01, 10000.00, ErrorMessage = "Price must be between $0.01 and $10,000")]
        [Column(TypeName = "decimal(10, 2)")]
        public decimal Price { get; set; }

        [StringLength(50)]
        public string? Category { get; set; }

        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
    }
}
