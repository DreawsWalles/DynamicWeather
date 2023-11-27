using Business.Repositories.DataRepositories;
using Business.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Business.Entities;
using Microsoft.EntityFrameworkCore;
using Repositories.Data;

namespace Repositories.Repositories.DataRepositories
{
    public class NodeRepository : AbstractRepository<Node, Guid>, INodeRepository
    {
        public NodeRepository(Context context)
        {
            _context = context;
        }

        protected override void CreateImplementation(Node value)
        {
            _context.Nodes.Add(value);
        }

        protected override async Task CreateImplementationAsync(Node value)
        {
            await _context.Nodes.AddAsync(value);
        }

        protected override void DeleteImplementation(Node value)
        {
            var entity = ReadImplementation(value.Id);
            if (entity == null)
                return;
            _context.Nodes.Remove(entity);
        }

        protected override Guid KeySelector(Node value) => value.Id;

        protected override IQueryable<Node> QueryImplementation()
        {
            return _context.Nodes;
        }

        protected override Node? ReadImplementation(Guid key)
        {
            return QueryImplementation().FirstOrDefault(i => i.Id == key);
        }

        protected override async Task<Node?> ReadImplementationAsync(Guid key)
        {
            return await QueryImplementation().FirstOrDefaultAsync(i => i.Id == key);
        }

        protected override void UpdateImplementation(Node entity, Node value)
        {
            _context.Update(value);
        }
    }
}
