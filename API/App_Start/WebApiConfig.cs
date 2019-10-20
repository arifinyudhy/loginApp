using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.OData.Builder;
using System.Web.Http.OData.Extensions;
using API.Models;
using API.Service;


namespace API
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            //Odata
            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
            builder.EntitySet<Car>("Cars");
            builder.EntitySet<User>("Users");
            config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());

            // Web API routes
            config.MapHttpAttributeRoutes();

            //enable CORS
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);


            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
