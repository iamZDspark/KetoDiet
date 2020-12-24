using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KetoDietFatBurner.Models;
using KetoDietFatBurner.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace KetoDietFatBurner
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<MyDietPlanDBDatabaseSettings>(
            Configuration.GetSection(nameof(MyDietPlanDBDatabaseSettings)));
            services.AddSingleton<IMyDietPlanDBDatabaseSettings>(provider =>
                (IMyDietPlanDBDatabaseSettings)provider.GetRequiredService<IOptions<MyDietPlanDBDatabaseSettings>>().Value);
            services.AddScoped<DietPlanService>();
            services.AddScoped<DietTypeService>();
            services.AddScoped<IngredientsService>();
            services.AddScoped<LoginInfoService>();
            services.AddScoped<MealTypeService>();
            services.AddScoped<NutrientsTypeService>();
            services.AddScoped<RecipeMenuService>();
            services.AddScoped<UserInfoService>();
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
