using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace simple_product_api.Models
{
    public class Product
    {
        public int Id { get; set; }
        
        [Required]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;
        
        [Required]
        [Column(TypeName = "decimal(18,2)")]
        [Range(0.01, 10000)]
        public decimal Price { get; set; }
        
        [StringLength(50)]
        public string? Category { get; set; }
        
        [Range(0, 1000)]
        public int Stock { get; set; }
        
        public DateTime CreatedDate { get; set; }
    }
}
