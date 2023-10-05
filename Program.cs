using MeetingManagment.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("conString");
// Configure the HTTP request pipeline.
const string policy = "mypolicy";
builder.Services.AddDbContext<MeetingRoomDbcontext>((options) =>
{
    options.UseSqlServer(connectionString);
});
builder.Services.AddCors((option) =>
{
    option.AddPolicy(policy, options =>
    {
        options.AllowAnyHeader();
        options.AllowAnyOrigin();
        options.AllowAnyMethod();
    });
});
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseAuthorization();
app.MapControllers();          

app.UseCors(policy);

app.Run();
