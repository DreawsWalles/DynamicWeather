using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    public class DocumentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
