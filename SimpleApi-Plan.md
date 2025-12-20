# Simple Product API - Project Plan

## Project Overview
A minimal, functional Web API built with ASP.NET Core 8.0. It will manage a list of products with basic Create and Read operations, demonstrating the core architecture of a .NET backend service.

## Learning Objectives
- Create an ASP.NET Core Web API project from scratch.
- Define a C# model class to represent data.
- Implement a Controller with GET and POST endpoints.
- Use an in-memory list for data persistence (simulating a database).
- Understand the basic request flow in a .NET application.

## File Structure

SimpleProductApi/
├── SimpleProductApi.csproj (Project configuration file)
├── Program.cs (Application startup and configuration)
├── appsettings.json (Application settings, e.g., for a database)
├── Controllers/
│ └── ProductsController.cs (Handles HTTP API requests)
└── Models/
└── Product.cs (Defines the Product data structure)


## Implementation Steps
1.  **Setup:** Create a new ASP.NET Core Web API project in Visual Studio.
2.  **Model:** Create the `Product.cs` class in a `Models` folder with properties: `Id`, `Name`, `Description`, `Price`.
3.  **Controller:** Create the `ProductsController.cs` in a `Controllers` folder. Implement:
    - `GET /api/products`: Returns a list of all products.
    - `POST /api/products`: Accepts JSON data to create a new product.
4.  **Data:** Use a static in-memory `List<Product>` to store data during runtime.
5.  **Test:** Use a tool like Swagger (built-in), Postman, or a browser to test the endpoints.

## Skills Demonstrated
This project directly practices key skills from the Associate Software Engineer job description:
- **C#.NET:** Building an application with ASP.NET Core.
- **Web Applications:** Creating a functional web API backend.
- **Software Development Lifecycle:** Planning, structuring, and documenting a project.
