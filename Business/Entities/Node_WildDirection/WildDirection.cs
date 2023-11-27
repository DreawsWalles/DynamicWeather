using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Entities.Node_WildDirection
{
    public class WildDirection
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }

        public required ICollection<WildDirectionNode> WildDirectionNodes { get; set; }
    }
}
