using Business.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.Identity.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Repositories.Data.Configurations
{
    public class WorkSheetConfiguration : IEntityTypeConfiguration<WorkSheet>
    {
        public void Configure(EntityTypeBuilder<WorkSheet> builder)
        {
            builder.HasKey(e => e.Id);

            builder.Property(e => e.Name).IsRequired();
            builder.Property(e => e.Description).IsRequired();

            builder.HasOne(e => e.Document)
                .WithMany(e => e.Worksheets);
            builder.HasMany(e => e.Nodes)
                .WithOne(e => e.WorkSheet);
        }
    }
}
