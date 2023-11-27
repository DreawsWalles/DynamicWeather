using Business.Entities;
using Business.Entities.Node_WeatherEffect;
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
            builder.Property(e => e.CloudCover)
                .IsRequired();
            builder.Property(e => e.LowerBoundCloudCover)
                .IsRequired();
            builder.Property(e => e.HorizontalVisibility)
                .IsRequired();


            builder.HasOne(e => e.Document)
                .WithMany()
                .HasForeignKey(e => e.DocumentId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasMany(e => e.NodeWeatherEffects)
                   .WithOne(e => e.Node)
                   .HasForeignKey(e => e.NodeId)
                   .OnDelete(DeleteBehavior.SetNull);

            builder.HasMany(e => e.NodeDirections)
                .WithOne(e => e.Node)
                .HasForeignKey(e => e.NodeId)
                .OnDelete(DeleteBehavior.SetNull);

        }
    }
}
