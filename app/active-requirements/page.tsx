import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";
import { Instagram, Facebook, Mail } from "lucide-react";

const filters = {
  description: "Advanced filtering options to narrow down active requirements by specific criteria.",
  items: [
    "Sector",
    "Stakeholder Type",
    "Program Type",
    "Country / Region",
    "Capacity Range",
    "Compliance Level",
  ],
} as const;

const tableFields = {
  description: "Structured table view showing key information for each active requirement.",
  items: [
    "Stakeholder",
    "Sector",
    "Requirement Type",
    "Summary",
    "Status",
    "View",
  ],
} as const;

const detailFields = {
  description: "Comprehensive details for selected requirements including all technical and operational specifications.",
  items: [
    "Sector",
    "Stakeholder Type",
    "Technical Requirements",
    "Capacity Expectations",
    "Compliance Expectations",
    "Timeline",
    "Participation Criteria",
  ],
} as const;

const tableData = [
  { stakeholder: "Manufacturer", sector: "Automotive / EV", type: "Capacity Expansion", summary: "5-axis CNC machine addition for EV motor housing production", status: "Under Review", action: "View" },
  { stakeholder: "OEM", sector: "Aerospace", type: "Supplier Alignment", summary: "Precision aluminum structural components with traceability", status: "Open", action: "View" },
  { stakeholder: "Association", sector: "Railway", type: "Cluster Compliance Program", summary: "Prepare 15 fabrication units for safety audit readiness", status: "Planning Phase", action: "View" },
  { stakeholder: "Workforce", sector: "Heavy Mobility", type: "Student Integration", summary: "10 quality inspection trainees for structured exposure program", status: "Active", action: "View" },
  { stakeholder: "Financial Institution", sector: "Automotive", type: "Acquisition Evaluation", summary: "Operational review of mid-size forging unit", status: "Confidential Review", action: "View" },
  { stakeholder: "Manufacturer", sector: "Marine", type: "Capability Enhancement", summary: "Marine-grade stainless steel fabrication certification", status: "In Progress", action: "View" },
  { stakeholder: "OEM", sector: "Railway", type: "Component Sourcing", summary: "Brake system components with safety compliance", status: "Open", action: "View" },
  { stakeholder: "Association", sector: "Automotive", type: "Cluster Development", summary: "IATF 16949 readiness program for 20 member units", status: "Planning Phase", action: "View" },
];

export default function ActiveRequirementsPage() {
  return (
    <div className="flex flex-col gap-14">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_420px_at_12%_10%,color-mix(in_oklab,var(--navy)_10%,transparent),transparent_60%),radial-gradient(900px_380px_at_90%_20%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_60%)] opacity-90" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Active Requirements
            </h1>
            <p className="max-w-2xl text-lg text-foreground/75">
              A structured view of active mandates and requirements across sectors and stakeholders, with advanced filtering and detailed specifications.
            </p>
          </div>
          <div className="relative h-64 w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-border bg-muted lg:h-80">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" alt="Active requirements dashboard visualization" className="object-contain p-4 w-full h-full" />
          </div>
        </div>
      </section>

      {/* Requirements Overview */}
      <section className="space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Requirements Management</h2>
          <p className="max-w-3xl text-foreground/75">
            Our platform provides a comprehensive system for viewing, filtering, and managing active manufacturing requirements across all sectors.
          </p>
        </div>
        <Card className="overflow-hidden">
          <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1 space-y-4">
              <p className="text-foreground/80">
                The Active Requirements system connects OEM needs with manufacturing capabilities through a structured, transparent process. Use filters to find relevant opportunities and view detailed specifications.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Advanced Filtering</h4>
                  <p className="mt-1 text-sm text-foreground/70">Multi-criteria filters for precise requirement matching.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Real-time Updates</h4>
                  <p className="mt-1 text-sm text-foreground/70">Live status tracking and requirement changes.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Detailed Specifications</h4>
                  <p className="mt-1 text-sm text-foreground/70">Complete technical and compliance requirements.</p>
                </div>
                <div className="rounded-xl bg-foreground/[0.03] px-4 py-3">
                  <h4 className="font-semibold">Stakeholder Matching</h4>
                  <p className="mt-1 text-sm text-foreground/70">Automated matching based on capabilities and certifications.</p>
                </div>
              </div>
            </div>
            <div className="relative h-40 w-full max-w-xs shrink-0 overflow-hidden rounded-xl border border-border bg-muted lg:h-48">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" alt="Requirements management system overview" className="object-contain p-3 w-full h-full" />
            </div>
          </div>
        </Card>
      </section>

      {/* Filters and Table */}
      <section className="space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Browse Requirements</h2>
          <p className="max-w-3xl text-foreground/75">
            Use filters to narrow down requirements and view them in a structured table format.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <div className="p-6">
              <CardTitle>Filters</CardTitle>
              <CardDescription>{filters.description}</CardDescription>
              <ul className="space-y-2 text-sm text-foreground/80">
                {filters.items.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <div className="lg:col-span-2">
            <Card>
              <div className="p-6">
                <CardTitle>Table View</CardTitle>
                <CardDescription>{tableFields.description}</CardDescription>
                <div className="overflow-x-auto rounded-lg border border-border">
                  <table className="w-full border-separate border-spacing-0 text-sm">
                    <thead className="bg-muted/50">
                      <tr>
                        {tableFields.items.map((h) => (
                          <th
                            key={h}
                            className="border-b border-border px-4 py-3 text-left font-semibold text-foreground"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => (
                        <tr key={index} className={index < tableData.length - 1 ? "border-b border-border/50" : ""}>
                          <td className="px-4 py-4 text-foreground/60">{row.stakeholder}</td>
                          <td className="px-4 py-4 text-foreground/60">{row.sector}</td>
                          <td className="px-4 py-4 text-foreground/60">{row.type}</td>
                          <td className="px-4 py-4 text-foreground/60">{row.summary}</td>
                          <td className="px-4 py-4 text-foreground/60">{row.status}</td>
                          <td className="px-4 py-4 text-foreground/60">{row.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Detail Fields */}
      <section className="space-y-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">Requirement Details</h2>
          <p className="max-w-3xl text-foreground/75">
            Comprehensive information available for each selected requirement.
          </p>
        </div>
        <Card>
          <div className="p-6">
            <CardTitle>Detail Fields</CardTitle>
            <CardDescription>{detailFields.description}</CardDescription>
            <div className="grid gap-3 sm:grid-cols-2">
              {detailFields.items.map((f) => (
                <div key={f} className="rounded-xl bg-foreground/[0.03] px-4 py-3 text-sm font-medium text-foreground/80">
                  {f}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-border bg-muted px-8 py-10 text-center">
        <h3 className="text-2xl font-semibold tracking-tight">Find Your Requirements</h3>
        <p className="mt-2 text-foreground/75">
          Browse active manufacturing requirements and connect with opportunities.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href="/join-network" variant="primary" className="w-full sm:w-auto">
            Join Network
          </ButtonLink>
          <ButtonLink href="/request-strategic-discussion" variant="secondary" className="w-full sm:w-auto">
            Request Strategic Discussion
          </ButtonLink>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-gradient-to-br from-accent/5 to-accent/10 border-t border-border py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="Balbird Industries" width={40} height={40} className="rounded-full" />
                <span className="text-lg font-semibold">Balbird Industries</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="/careers" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/help" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="/contact" className="hover:text-foreground transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
