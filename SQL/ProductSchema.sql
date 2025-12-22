-- File: SQL/ProductSchema.sql
-- This script creates the Product table and inserts sample data.

CREATE TABLE Products (
    Id INT PRIMARY KEY IDENTITY(1,1), -- Auto-incrementing primary key
    Name NVARCHAR(100) NOT NULL,
    Description NVARCHAR(500),
    Price DECIMAL(10, 2) NOT NULL,
    Category NVARCHAR(50),
    CreatedDate DATETIME2 DEFAULT GETDATE()
);

-- Insert sample data
INSERT INTO Products (Name, Description, Price, Category) VALUES
('Wireless Mouse', 'Ergonomic wireless mouse with long battery life', 29.99, 'Electronics'),
('Mechanical Keyboard', 'RGB backlit keyboard with blue switches', 89.99, 'Electronics'),
('Web Development Guide', 'A comprehensive guide to modern web development', 39.99, 'Books');

-- Example query: Select all products in Electronics category
-- SELECT * FROM Products WHERE Category = 'Electronics';
