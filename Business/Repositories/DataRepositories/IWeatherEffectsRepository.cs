using Business.Entities.Node_WeatherEffect;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Repositories.DataRepositories
{
    public interface IWeatherEffectsRepository : IRepository<WeatherEffect, Guid> { }
}
