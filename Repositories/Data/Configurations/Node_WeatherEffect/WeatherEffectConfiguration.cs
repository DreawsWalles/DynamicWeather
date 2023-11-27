using Business.Entities.Node_WeatherEffect;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Repositories.Data.Configurations.Node_WeatherEffect
{
    public class WeatherEffectConfiguration : IEntityTypeConfiguration<WeatherEffect>
    {
        public void Configure(EntityTypeBuilder<WeatherEffect> builder)
        {
            builder.HasKey(e => e.Id);
            builder.HasIndex(e => e.Name)
                .IsUnique();

            builder.HasMany(e => e.WeatherEffectNodes)
                .WithOne(e => e.WeatherEffect)
                .HasForeignKey(e => e.WeatherEffectId)
                .OnDelete(DeleteBehavior.SetNull);
        }
    }
}
