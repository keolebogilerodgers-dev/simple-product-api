// File: Program.cs

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// This line registers the Controllers (like ProductsController) with the app.
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.

// Redirects HTTP requests to HTTPS for security.
app.UseHttpsRedirection();

// Enables authorization middleware (even if we don't use it yet, it's standard).
app.UseAuthorization();

// Maps incoming requests to the actions in our controllers.
app.MapControllers();

// This final call runs the application and starts listening for requests.
app.Run();
