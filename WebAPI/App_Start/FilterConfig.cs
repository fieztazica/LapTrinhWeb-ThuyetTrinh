using System.Web;
using System.Web.Mvc;

namespace LapTrinhWeb_ThuyetTrinh
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
