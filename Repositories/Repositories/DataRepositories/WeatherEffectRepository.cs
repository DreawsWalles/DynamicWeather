using Business.Repositories.DataRepositories;
using Business.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Repositories.Data;
using Business.Entities.Node_WeatherEffect;

namespace Repositories.Repositories.DataRepositories
{
    public class WeatherEffectRepository : AbstractRepository<WeatherEffect, Guid>, IWeatherEffectsRepository
    {
        public WeatherEffectRepository(Context context)
        {
            _context = context;
        }

        protected override void CreateImplementation(WeatherEffect value)
        {
            _context.WeaterEffects.Add(value);
        }

        protected override async Task CreateImplementationAsync(WeatherEffect value)
        {
            await _context.WeaterEffects.AddAsync(value);
        }

        protected override void DeleteImplementation(WeatherEffect value)
        {
            var entity = ReadImplementation(value.Id);
            if (entity == null)
                return;
            _context.WeaterEffects.Remove(entity);
        }

        protected override Guid KeySelector(WeatherEffect value) => value.Id;

        protected override IQueryable<WeatherEffect> QueryImplementation()
        {
            return _context.WeaterEffects;
        }

        protected override WeatherEffect? ReadImplementation(Guid key)
        {
            return QueryImplementation().FirstOrDefault(i => i.Id == key);
        }

        protected override async Task<WeatherEffect?> ReadImplementationAsync(Guid key)
        {
            return await QueryImplementation().FirstOrDefaultAsync(i => i.Id == key);
        }

        protected override void UpdateImplementation(WeatherEffect entity, WeatherEffect value)
        {
            _context.Update(value);
        }
    }
}
