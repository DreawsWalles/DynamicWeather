using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Entities
{
    public class WeatherEffect
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }

        public required ICollection<Node> Nodes { get; set; }
    }
}
