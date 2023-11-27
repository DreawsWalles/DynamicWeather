using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Entities.Node_WildDirection
{
    public class WildDirectionNode
    {
        public Guid NodeId { get; set; }
        public Node Node { get; set; }

        public Guid WildDirectionId { get; set; }
        public WildDirection WildDirection { get; set; }
    }
}
