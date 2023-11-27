using AutoMapper;
using Business.Repositories.DataRepositories;
using Business.Services;
using Microsoft.EntityFrameworkCore;
using Repositories.Data;
using Repositories.Repositories.DataRepositories;
using Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<Context>(
    options => options
        .UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")),
    contextLifetime: ServiceLifetime.Scoped,
    optionsLifetime: ServiceLifetime.Transient);

AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

#region Repositories

builder.Services.AddScoped<IDocumentRepository, DocumentRepository>();
builder.Services.AddScoped<INodeRepository, NodeRepository>();
builder.Services.AddScoped<IWeatherEffectsRepository, WeatherEffectRepository>();
builder.Services.AddScoped<IWildDirectionRepository, WildDirectionRepository>();

#endregion
builder.Services.AddControllers();

#region Automapper

var mappingConfig = new MapperConfiguration(mc =>
{
    mc.AddProfile(new MappingProfile());
});

IMapper mapper = mappingConfig.CreateMapper(); 
builder.Services.AddSingleton(mapper);

#endregion

#region Services

builder.Services.AddScoped<IDocumentService, DocumentService>();
builder.Services.AddScoped<INodeService, NodeService>();
builder.Services.AddScoped<IWeatherEffectService, WeatherEffectService>();
builder.Services.AddScoped<IWildDirectionService, WildDirectionService>();

#endregion

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
