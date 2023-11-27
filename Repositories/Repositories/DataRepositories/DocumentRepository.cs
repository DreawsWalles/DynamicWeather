using Business.Entities;
using Business.Repositories;
using Business.Repositories.DataRepositories;
using Microsoft.EntityFrameworkCore;
using Repositories.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Repositories.DataRepositories
{
    public class DocumentRepository : AbstractRepository<Document, Guid>, IDocumentRepository
    {
        public DocumentRepository(Context context)
        {
            _context = context;
        }

        protected override void CreateImplementation(Document value)
        {
            _context.Documents.Add(value);
        }

        protected override async Task CreateImplementationAsync(Document value)
        {
            await _context.Documents.AddAsync(value);
        }

        protected override void DeleteImplementation(Document value)
        {
            var entity = ReadImplementation(value.Id);
            if (entity == null)
                return;
            _context.Documents.Remove(entity);
        }

        protected override Guid KeySelector(Document value) => value.Id;

        protected override IQueryable<Document> QueryImplementation()
        {
            return _context.Documents;
        }

        protected override Document? ReadImplementation(Guid key)
        {
            return QueryImplementation().FirstOrDefault(i => i.Id == key);
        }

        protected override async Task<Document?> ReadImplementationAsync(Guid key)
        {
            return await QueryImplementation().FirstOrDefaultAsync(i => i.Id == key);
        }

        protected override void UpdateImplementation(Document entity, Document value)
        {
            _context.Update(value);
        }
    }
}
