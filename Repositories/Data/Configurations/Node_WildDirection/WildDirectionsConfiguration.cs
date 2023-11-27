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
    public class WildDirectionsConfiguration : IEntityTypeConfiguration<WildDirection>
    {
        public void Configure(EntityTypeBuilder<WildDirection> builder)
        {
            builder.HasKey(e => e.Id);
            builder.HasIndex(e => e.Name)
                .IsUnique();

            builder.HasMany(e => e.WildDirectionNodes)
                .WithOne(e => e.WildDirection)
                .HasForeignKey(e => e.WildDirectionId)
                .OnDelete(DeleteBehavior.SetNull);
        }
    }
}
