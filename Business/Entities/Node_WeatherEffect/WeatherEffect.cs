using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Entities.Node_WeatherEffect
{
    public class WeatherEffect
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }

        public required ICollection<WeatherEffectNode> WeatherEffectNodes { get; set; }
    }
}
