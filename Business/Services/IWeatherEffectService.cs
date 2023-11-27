using Business.Interop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Services
{
    public interface IWeatherEffectService
    {
        WeatherEffectDTO Create(WeatherEffectDTO document);
        WeatherEffectDTO Update(WeatherEffectDTO document);
        void Delete(WeatherEffectDTO document);
        ICollection<WeatherEffectDTO> GetAll();

        Task<WeatherEffectDTO> CreateAsync(WeatherEffectDTO document);
        Task<WeatherEffectDTO> UpdateAsync(WeatherEffectDTO document);
        Task<ICollection<WeatherEffectDTO>> GetAllAsync();
    }
}
