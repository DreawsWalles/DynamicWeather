using Business.Entities.Node_WeatherEffect;
using Business.Entities.Node_WildDirection;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Repositories.Data.Configurations.Node_WildDirection
{
    public class WildDirectionNodeConfiguration : IEntityTypeConfiguration<WildDirectionNode>
    {
        public void Configure(EntityTypeBuilder<WildDirectionNode> builder)
        {
            builder.HasKey(e => new { e.NodeId, e.WildDirectionId });

            builder.HasOne(e => e.WildDirection)
                .WithMany()
                .HasForeignKey(e => e.WildDirectionId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasOne(e => e.Node)
                .WithMany()
                .HasForeignKey(e => e.NodeId)
                .OnDelete(DeleteBehavior.SetNull);

        }
    }
}
