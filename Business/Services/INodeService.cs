using Business.Interop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Services
{
    public interface INodeService
    {
        NodeDTO Create(NodeDTO document);
        NodeDTO Update(NodeDTO document);
        void Delete(NodeDTO document);
        ICollection<NodeDTO> GetAll();

        Task<NodeDTO> CreateAsync(NodeDTO document);
        Task<NodeDTO> UpdateAsync(NodeDTO document);
        Task<ICollection<NodeDTO>> GetAllAsync();
    }
}
