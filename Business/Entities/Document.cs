﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Entities
{
    public class Document
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public required ICollection<WorkSheet> Worksheets { get; set; }
    }
}
