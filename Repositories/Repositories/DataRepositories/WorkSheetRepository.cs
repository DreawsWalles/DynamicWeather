using Business.Entities;
using Business.Entities.Node_WildDirection;
using Business.Repositories.DataRepositories;
using Microsoft.EntityFrameworkCore;
using Repositories.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Repositories.Repositories.DataRepositories
{
    public class WorkSheetRepository : AbstractRepository<WorkSheet, Guid>, IWorkSheetRepository
    {
        public WorkSheetRepository(Context context)
        {
            _context = context;
        }

        protected override void CreateImplementation(WorkSheet value)
        {
            _context.WorkSheets.Add(value);
        }

        protected override async Task CreateImplementationAsync(WorkSheet value)
        {
            await _context.WorkSheets.AddAsync(value);
        }

        protected override void DeleteImplementation(WorkSheet value)
        {
            var entity = ReadImplementation(value.Id);
            if (entity == null)
                return;
            _context.WorkSheets.Remove(entity);
        }

        protected override Guid KeySelector(WorkSheet value) => value.Id;

        protected override IQueryable<WorkSheet> QueryImplementation()
        {
            return _context.WorkSheets;
        }

        protected override WorkSheet? ReadImplementation(Guid key)
        {
            return QueryImplementation().FirstOrDefault(i => i.Id == key);
        }

        protected override async Task<WorkSheet?> ReadImplementationAsync(Guid key)
        {
            return await QueryImplementation().FirstOrDefaultAsync(i => i.Id == key);
        }

        protected override void UpdateImplementation(WorkSheet entity, WorkSheet value)
        {
            _context.Update(value);
        }
    }
}
