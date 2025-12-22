# Simple Product API - Portfolio Project

A blueprint for a minimal, functional Web API built with **ASP.NET Core** and **C#**. This project demonstrates the core architecture of a .NET backend, showcasing planning, structure, and clean code.

## 📁 Project Structure & Contents
This repository contains the complete design and all essential code files for a working API:

| File/Folder | Purpose |
| :--- | :--- |
| [`SimpleApi-Plan.md`](SimpleApi-Plan.md) | The complete project plan, objectives, and implementation steps. |
| [`Models/Product.cs`](Models/Product.cs) | The **Product model** - a C# class defining the data structure. |
| [`Controllers/ProductsController.cs`](Controllers/ProductsController.cs) | The **API Controller** - handles HTTP GET and POST requests. |
| [`Program.cs`](Program.cs) | The **application entry point** - configures and runs the web server. |

## 🚀 Recent Enhancements & Full-Stack Demo

This project now includes a complete, three-tier demonstration:

*   **Database Layer (`SQL/`)**:
    *   `ProductSchema.sql`: A production-ready SQL script defining the `Products` table with relationships, constraints, and sample data.
*   **Enhanced Backend (`Models/`)**:
    *   `Product.cs`: The data model updated with professional **data validation annotations** (`[Required]`, `[StringLength]`, `[Range]`).
*   **Interactive Frontend (`wwwroot/`)**:
    *   `index.html` & `css/site.css`: A clean, modern web interface built with **vanilla JavaScript, HTML5, and CSS3**. It includes a live API test panel to simulate fetching data.

**View the Frontend Demo**: You can directly preview the `index.html` file on GitHub to see the interactive interface.

## 🔧 Skills Demonstrated (Aligned with Associate Software Engineer Roles)

This project provides concrete, reviewable code for the following core requirements commonly found in job descriptions (like the Associate Software Engineer role at Cavista Technologies):

| Skill Area | Proof in This Repository |
| :--- | :--- |
| **C# & .NET Development** | ASP.NET Core controllers, models with validation, and application configuration in `Program.cs`. |
| **Solid SQL Skills** | A complete, runnable database schema and query examples in `SQL/ProductSchema.sql`. |
| **Frontend (JS, HTML, CSS)** | A polished, interactive user interface in the `wwwroot/` folder. |
| **Building Database-Driven Applications** | The integration of all three layers: SQL data design → C# business logic → JavaScript frontend. |
| **Professional Documentation** | Clear planning (`SimpleApi-Plan.md`) and structured project explanation in this README. |

## 🎯 What This Project Demonstrates
- **Planning & Documentation**: A structured approach to software development.
- **C# & .NET Proficiency**: Creation of models, controllers, and application configuration.
- **Clean Architecture**: Separation of concerns (Models vs. Controllers).
- **Professional Presentation**: Clear, organized code intended for a technical portfolio.

## 🔗 Connect This to My Learning
This project is the direct result of analyzing Microsoft's professional eShop reference architecture. It represents my understanding of .NET fundamentals, translated into my own structured plan and code.

*This project is in the **design/planning phase**. The next step is implementation in a local development environment.*
