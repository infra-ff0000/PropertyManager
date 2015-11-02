using PropertyManager.Core.Domain;
using System.Data.Entity;

namespace PropertyManager.Core.Infrastructure
{
    public class PropertyManagerDbContext : DbContext
    {

        public PropertyManagerDbContext() : base("PropertyManager")
        {

        }

        public IDbSet<Property> Properties { get; set; }
        public IDbSet<Tenant> Tenants { get; set; }
        public IDbSet<Lease> Leases { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Property>().HasKey(p => p.PropertyId);
            modelBuilder.Entity<Property>().HasMany(p => p.Leases).WithRequired(l => l.Property).HasForeignKey(l => l.PropertyId);

            modelBuilder.Entity<Tenant>().HasKey(t => t.TenantId);
            modelBuilder.Entity<Lease>().HasKey(l => l.LeaseId);




            base.OnModelCreating(modelBuilder);
        }

    }
}
