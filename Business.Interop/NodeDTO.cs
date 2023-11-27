using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Interop
{
    public class NodeDTO
    {
        public Guid Id { get; set; }
        public DateTime Date { get; set; }
        public double Temperature { get; set; }
        public double RelativeHumidity { get; set; }
        public double DewPoint { get; set; }
        public int Pressure { get; set; }
        public required ICollection<WildDirectionDTO> Directions { get; set; }
        public double WildSpeed { get; set; }
        public double CloudCover { get; set; }
        public double LowerBoundCloudCover { get; set; }
        public double HorizontalVisibility { get; set; }
        public required ICollection<WeatherEffectDTO> WeatherEffects { get; set; }

    }
}
