using Business.Interop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Services
{
    public interface IDocumentService
    {
        DocumentDTO Create(DocumentDTO document);
        DocumentDTO Update(DocumentDTO document);
        void Delete(DocumentDTO document);
        ICollection<DocumentDTO> GetAll();

        Task<DocumentDTO> CreateAsync(DocumentDTO document);
        Task<DocumentDTO> UpdateAsync(DocumentDTO document);
        Task <ICollection<DocumentDTO>> GetAllAsync();
    }
}
