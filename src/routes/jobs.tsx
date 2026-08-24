import { createFileRoute } from "@tanstack/react-router";
import { Share2, MapPin, Briefcase } from "lucide-react";

export const Route = createFileRoute("/jobs")({
  component: Jobs,
});

function Hero() {
  return (
    <section className="route-hero bg-gradient-to-br from-brand-gold/10 via-brand-orange/5 to-brand-orange/10 pt-32 pb-20 text-center">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
          <span className="text-gradient-brand">HireRapido Jobs</span> - Remote Job Board For Talent In Latin America
        </h1>
        <p className="mt-8 text-lg font-medium text-foreground max-w-3xl mx-auto leading-relaxed">
          HireRapido's mission is to connect elite LatAm talent with top US companies. Browse full-time and part-time remote roles across sales, marketing, design, accounting and more at cutting-edge startups and household names. Apply online in just five minutes!
        </p>
        <div className="mt-10">
          <a href="/#connect" className="inline-block rounded-full bg-foreground px-8 py-3 text-sm font-bold text-primary-foreground shadow-brand hover:opacity-90 transition-opacity">
            Sign up to apply
          </a>
        </div>
      </div>
      
      {/* Client Marquee Placeholder */}
      <div className="mt-20 border-t border-border/50 bg-white/50 backdrop-blur-sm py-8 flex flex-wrap justify-center gap-12 text-2xl font-bold text-muted-foreground/50 grayscale opacity-70">
        <span>EasyHealth</span>
        <span className="text-blue-500">check</span>
        <span className="text-green-500">Silvics</span>
        <span className="text-blue-600">coinbase</span>
        <span className="text-indigo-500">taloflow</span>
      </div>
    </section>
  );
}

function JobListings() {
  const categories = ["All", "Writing", "Software Development", "Marketing", "Customer Service", "All others"];
  
  const jobs = [
    { title: "Senior AI Engineer", time: "1 day ago", company: "Lemon.io" },
    { title: "Data Labeling Specialists", time: "2 days ago", company: "At Workad..." },
    { title: "Communications Manager", time: "3 days ago", company: "Marketp..." },
    { title: "Client Success Coach (CSM)", time: "4 days ago", company: "Impact..." },
    { title: "Sales Assistant", time: "1 week ago", company: "Innovati..." }
  ];

  return (
    <section className="py-16 bg-white min-h-[600px]">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`px-6 py-2 rounded-full text-sm font-bold border transition-colors ${
                i === 0 
                  ? "bg-foreground text-primary-foreground border-foreground" 
                  : "bg-white text-foreground border-foreground hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Job Cards */}
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <div key={i} className="bg-white rounded-2xl border border-border p-6 flex flex-col md:flex-row md:items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
              
              {/* Logo Placeholder */}
              <div className="w-16 h-16 rounded-xl bg-muted/50 border border-border/50 flex flex-col items-center justify-center shrink-0">
                <div className="w-6 h-6 bg-border rounded-sm opacity-20"></div>
                <span className="text-[8px] text-muted-foreground mt-2 text-center leading-none px-1 truncate w-full">{job.company}</span>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                  <span className="text-xs font-semibold text-red-400">{job.time}</span>
                </div>
                <div className="flex gap-3 mt-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/50 border border-border/50 text-xs font-semibold text-muted-foreground">
                    <MapPin className="w-3 h-3" /> Remote
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/50 border border-border/50 text-xs font-semibold text-muted-foreground">
                    <Briefcase className="w-3 h-3" /> LatAm
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="px-6 py-2 rounded-full border border-foreground text-sm font-bold text-foreground hover:bg-muted transition-colors">
                  Apply
                </button>
                <button className="px-6 py-2 rounded-full bg-foreground text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity">
                  View job
                </button>
              </div>

            </div>
          ))}
        </div>
        
        {/* Pagination Placeholder */}
        <div className="mt-16 flex items-center justify-center gap-2">
          <button className="w-10 h-10 rounded flex items-center justify-center bg-foreground text-primary-foreground font-bold text-sm">1</button>
          <button className="w-10 h-10 rounded border border-border bg-white flex items-center justify-center text-foreground font-bold text-sm hover:bg-muted">2</button>
          <button className="w-10 h-10 rounded border border-border bg-white flex items-center justify-center text-foreground font-bold text-sm hover:bg-muted">3</button>
          <span className="w-8 flex items-center justify-center text-muted-foreground">...</span>
          <button className="w-12 h-10 rounded border border-border bg-white flex items-center justify-center text-foreground font-bold text-sm hover:bg-muted">751</button>
          <button className="w-10 h-10 rounded border border-border bg-white flex items-center justify-center text-foreground font-bold text-sm hover:bg-muted">
            &gt;
          </button>
        </div>

      </div>
    </section>
  );
}

function Jobs() {
  return (
    <div className="bg-background">
      <main>
        <Hero />
        <JobListings />
      </main>
    </div>
  );
}
