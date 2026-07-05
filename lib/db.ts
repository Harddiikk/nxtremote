import fs from "fs";
import path from "path";

export interface JobListing {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string;
  createdAt: string;
}

export interface TalentApplication {
  id: string;
  fullName: string;
  email: string;
  role: string;
  experienceYears: number;
  portfolioLink: string;
  resumeLink: string;
  message: string;
  status: "Pending" | "Shortlisted" | "Rejected";
  createdAt: string;
}

export interface HireTalentSubmission {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  roleNeeded: string;
  budget: string;
  timeline: string;
  details: string;
  status: "Lead" | "Contacted" | "Closed";
  createdAt: string;
}

interface DbData {
  jobListings: JobListing[];
  talentApplications: TalentApplication[];
  hireTalentSubmissions: HireTalentSubmission[];
}

const dbPath = path.join(process.cwd(), "lib", "db.json");

const defaultData: DbData = {
  jobListings: [
    {
      id: "job-1",
      title: "Senior Meta Ads Media Buyer",
      department: "Paid Media & Performance",
      type: "Full-Time",
      location: "Remote (Global Alignment)",
      description: "Scale Meta Ads campaigns for fast-growing e-commerce brands and lead generation accounts. Build campaign architectures, perform audits, and direct creatives.",
      requirements: "5+ years agency experience, verified ROAS tracker, fluency in slack / ClickUp.",
      createdAt: new Date().toISOString()
    },
    {
      id: "job-2",
      title: "Technical SEO Architect",
      department: "SEO & Content Strategy",
      type: "Full-Time",
      location: "Remote (Global Alignment)",
      description: "Run advanced site speed optimization, schema markup integration, custom script building, and keyword mapping on enterprise client properties.",
      requirements: "Proven portfolio of ranking keywords in high-difficulty niches, tools stack: Ahrefs, ScreamingFrog, GSC.",
      createdAt: new Date().toISOString()
    }
  ],
  talentApplications: [
    {
      id: "app-1",
      fullName: "Alex Rivera",
      email: "alex@nxtremote.com",
      role: "Paid Media & Performance",
      experienceYears: 4,
      portfolioLink: "https://portfolio.nxtremote.com/alex",
      resumeLink: "https://linkedin.com/in/alex-rivera-ads",
      message: "Hey! I've scaled budgets from 10k/mo to 120k/mo maintaining 3x+ MER. Looking forward to joining an elite agency team.",
      status: "Pending",
      createdAt: new Date().toISOString()
    }
  ],
  hireTalentSubmissions: [
    {
      id: "lead-1",
      companyName: "Growth Labs Agency",
      contactName: "David Miller",
      email: "david@growthlabs.com",
      phone: "+1 415 555 2671",
      roleNeeded: "Paid Media & Performance",
      budget: "$1,599 - $2,500/mo",
      timeline: "Immediate (1-7 Days)",
      details: "We need an experienced Media Buyer to take over 3 scaling DTC accounts immediately.",
      status: "Lead",
      createdAt: new Date().toISOString()
    }
  ]
};

// Thread-safe read/write sync operations
export function getDb(): DbData {
  try {
    if (!fs.existsSync(dbPath)) {
      // Ensure the directory exists
      const dir = path.dirname(dbPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(dbPath, JSON.stringify(defaultData, null, 2), "utf8");
      return defaultData;
    }
    const raw = fs.readFileSync(dbPath, "utf8");
    return JSON.parse(raw) as DbData;
  } catch (error) {
    console.error("DB read error, using fallback", error);
    return defaultData;
  }
}

export function saveDb(data: DbData) {
  try {
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("DB write error", error);
  }
}

// Helper methods for direct usage
export function addApplication(app: Omit<TalentApplication, "id" | "status" | "createdAt">): TalentApplication {
  const db = getDb();
  const newApp: TalentApplication = {
    ...app,
    id: "app-" + Math.random().toString(36).substring(2, 9),
    status: "Pending",
    createdAt: new Date().toISOString()
  };
  db.talentApplications.unshift(newApp);
  saveDb(db);
  return newApp;
}

export function updateApplicationStatus(id: string, status: "Pending" | "Shortlisted" | "Rejected") {
  const db = getDb();
  const app = db.talentApplications.find(a => a.id === id);
  if (app) {
    app.status = status;
    saveDb(db);
  }
}

export function deleteApplication(id: string) {
  const db = getDb();
  db.talentApplications = db.talentApplications.filter(a => a.id !== id);
  saveDb(db);
}

export function addLead(lead: Omit<HireTalentSubmission, "id" | "status" | "createdAt">): HireTalentSubmission {
  const db = getDb();
  const newLead: HireTalentSubmission = {
    ...lead,
    id: "lead-" + Math.random().toString(36).substring(2, 9),
    status: "Lead",
    createdAt: new Date().toISOString()
  };
  db.hireTalentSubmissions.unshift(newLead);
  saveDb(db);
  return newLead;
}

export function updateLeadStatus(id: string, status: "Lead" | "Contacted" | "Closed") {
  const db = getDb();
  const lead = db.hireTalentSubmissions.find(l => l.id === id);
  if (lead) {
    lead.status = status;
    saveDb(db);
  }
}

export function deleteLead(id: string) {
  const db = getDb();
  db.hireTalentSubmissions = db.hireTalentSubmissions.filter(l => l.id !== id);
  saveDb(db);
}

export function addJob(job: Omit<JobListing, "id" | "createdAt">): JobListing {
  const db = getDb();
  const newJob: JobListing = {
    ...job,
    id: "job-" + Math.random().toString(36).substring(2, 9),
    createdAt: new Date().toISOString()
  };
  db.jobListings.unshift(newJob);
  saveDb(db);
  return newJob;
}

export function deleteJob(id: string) {
  const db = getDb();
  db.jobListings = db.jobListings.filter(j => j.id !== id);
  saveDb(db);
}
