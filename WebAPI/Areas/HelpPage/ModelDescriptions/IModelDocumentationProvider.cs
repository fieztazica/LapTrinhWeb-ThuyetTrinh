using System;
using System.Reflection;

namespace LapTrinhWeb_ThuyetTrinh.Areas.HelpPage.ModelDescriptions
{
    public interface IModelDocumentationProvider
    {
        string GetDocumentation(MemberInfo member);

        string GetDocumentation(Type type);
    }
}