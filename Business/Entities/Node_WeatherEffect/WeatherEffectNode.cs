using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Entities.Node_WeatherEffect
{
    public class WeatherEffectNode
    {
        public Guid NodeId { get; set; }
        public Node Node { get; set; }

        public Guid WeatherEffectId { get; set; }
        public WeatherEffect WeatherEffect { get; set; }
    }
}
