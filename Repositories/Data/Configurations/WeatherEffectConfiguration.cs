using Business.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Data.Configurations
{
    public class WeatherEffectConfiguration : IEntityTypeConfiguration<WeatherEffect>
    {
        public void Configure(EntityTypeBuilder<WeatherEffect> builder)
        {
            builder.HasKey(e => e.Id);
            builder.HasIndex(e => e.Name).IsUnique();

            builder.HasMany(e => e.Nodes).WithMany();
        }
    }
}
