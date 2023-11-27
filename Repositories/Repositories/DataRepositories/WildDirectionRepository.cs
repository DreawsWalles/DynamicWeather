using Business.Repositories.DataRepositories;
using Business.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Repositories.Data;
using Business.Entities.Node_WildDirection;

namespace Repositories.Repositories.DataRepositories
{
    public class WildDirectionRepository : AbstractRepository<WildDirection, Guid>, IWildDirectionRepository
    {
        public WildDirectionRepository(Context context)
        {
            _context = context;
        }

        protected override void CreateImplementation(WildDirection value)
        {
            _context.WildDirections.Add(value);
        }

        protected override async Task CreateImplementationAsync(WildDirection value)
        {
            await _context.WildDirections.AddAsync(value);
        }

        protected override void DeleteImplementation(WildDirection value)
        {
            var entity = ReadImplementation(value.Id);
            if (entity == null)
                return;
            _context.WildDirections.Remove(entity);
        }

        protected override Guid KeySelector(WildDirection value) => value.Id;

        protected override IQueryable<WildDirection> QueryImplementation()
        {
            return _context.WildDirections;
        }

        protected override WildDirection? ReadImplementation(Guid key)
        {
            return QueryImplementation().FirstOrDefault(i => i.Id == key);
        }

        protected override async Task<WildDirection?> ReadImplementationAsync(Guid key)
        {
            return await QueryImplementation().FirstOrDefaultAsync(i => i.Id == key);
        }

        protected override void UpdateImplementation(WildDirection entity, WildDirection value)
        {
            _context.Update(value);
        }
    }
}
