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
    public class WildDirectionsConfiguration : IEntityTypeConfiguration<WildDirection>
    {
        public void Configure(EntityTypeBuilder<WildDirection> builder)
        {
            builder.HasKey(e => e.Id);
            builder.HasIndex(e => e.Name).IsUnique();

            builder.HasMany(e => e.Nodes).WithMany();
        }
    }
}
