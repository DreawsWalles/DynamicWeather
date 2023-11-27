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
    public class WeatherEffectNodeConfiguration : IEntityTypeConfiguration<WeatherEffectNode>
    {
        public void Configure(EntityTypeBuilder<WeatherEffectNode> builder)
        {
            builder.HasKey(e => new {e.NodeId, e.WeatherEffectId});

            builder.HasOne(e => e.WeatherEffect)
                .WithMany()
                .HasForeignKey(e => e.WeatherEffectId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasOne(e => e.Node)
                .WithMany()
                .HasForeignKey(e => e.NodeId)
                .OnDelete(DeleteBehavior.SetNull);

        }
    }
}
