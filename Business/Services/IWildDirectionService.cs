using Business.Interop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Services
{
    public interface IWildDirectionService
    {
        WildDirectionDTO Create(WildDirectionDTO document);
        WildDirectionDTO Update(WildDirectionDTO document);
        void Delete(WildDirectionDTO document);
        ICollection<WildDirectionDTO> GetAll();

        Task<WildDirectionDTO> CreateAsync(WildDirectionDTO document);
        Task<WildDirectionDTO> UpdateAsync(WildDirectionDTO document);
        Task<ICollection<WildDirectionDTO>> GetAllAsync();
    }
}
