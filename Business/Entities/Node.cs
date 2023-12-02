using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Business.Entities.Node_WildDirection;

namespace Business.Entities
{
    public class Node
    {
        public Guid Id { get; set; }
        public DateTime Date { get; set; }
        public double Temperature { get; set; }
        public double RelativeHumidity { get; set; }
        public double DewPoint { get; set; } 
        public int Pressure { get; set; }
        public required ICollection<WildDirectionNode> Directions { get; set; }
        public double WildSpeed { get; set; }
        public double? CloudCover { get; set; }
        public double? LowerBoundCloudCover { get; set; }
        public double? HorizontalVisibility { get; set; }    
        public required string NodeWeatherEffects { get; set; }

        public required WorkSheet WorkSheet { get; set; } 
    }
}
