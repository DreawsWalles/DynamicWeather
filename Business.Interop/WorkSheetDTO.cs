using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Interop
{
    public class WorkSheetDTO
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }  
        public required string Description { get; set; }
        public required ICollection<NodeDTO> Nodes { get; set; }
    }
}
