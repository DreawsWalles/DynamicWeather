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
    public class NodeConfiguration : IEntityTypeConfiguration<Node>
    {
        public void Configure(EntityTypeBuilder<Node> builder)
        {
            builder.HasKey(e => e.Id);

            builder.Property(e => e.Date)
                .IsRequired();
            builder.Property(e => e.Pressure)
                .IsRequired();
            builder.Property(e => e.Temperature)
                .IsRequired();
            builder.Property(e => e.RelativeHumidity) 
                .IsRequired();
            builder.Property(e => e.DewPoint)
                .IsRequired();
            builder.Property(e => e.WildSpeed)
                .IsRequired();


            builder.HasOne(e => e.WorkSheet)
                .WithMany()
                .OnDelete(DeleteBehavior.NoAction);


            builder.HasMany(e => e.Directions)
                .WithOne(e => e.Node)
                .HasForeignKey(e => e.NodeId)
                .OnDelete(DeleteBehavior.SetNull);

        }
    }
}
