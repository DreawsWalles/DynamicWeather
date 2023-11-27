using Business.Entities;
using Microsoft.EntityFrameworkCore;
using Repositories.Data.Configurations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Data
{
    public class Context : DbContext
    {
        public DbSet<Document> Documents { get; set; }
        public DbSet<Node> Nodes { get; set; }
        public DbSet<WeatherEffect> WeaterEffects { get; set; }
        public DbSet<WildDirection> WildDirections { get; set; }
        public Context(DbContextOptions<Context> options) : base(options) 
        {
            //Database.EnsureDeleted();
            Database.EnsureCreated();
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
            AppContext.SetSwitch("Npgsql.DisableDateTimeInfinityConversions", true);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new DocumentConfiguration());
            modelBuilder.ApplyConfiguration(new NodeConfiguration());
            modelBuilder.ApplyConfiguration(new WeatherEffectConfiguration());
            modelBuilder.ApplyConfiguration(new WildDirectionsConfiguration());
        }

    }
}
