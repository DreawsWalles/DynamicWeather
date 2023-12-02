using Business.Entities;
using Business.Interop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Services
{
    public interface IWorkSheetService
    {
        WorkSheetDTO Create(WorkSheetDTO document);
        WorkSheetDTO Update(WorkSheetDTO document);
        void Delete(WorkSheetDTO document);
        ICollection<WorkSheetDTO> GetAll();

        Task<WorkSheetDTO> CreateAsync(WorkSheetDTO document);
        Task<WorkSheetDTO> UpdateAsync(WorkSheetDTO document);
        Task<ICollection<WorkSheetDTO>> GetAllAsync();
    }
}
