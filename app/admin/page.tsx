"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Button } from "@/components/button";
import { LinesGradientShader } from "@/components/lines-gradient-shader";
import { 
  getAdminData, 
  updateAppStatus, 
  removeApplication, 
  updateLeadState, 
  removeLead, 
  createJob, 
  removeJob 
} from "@/lib/actions";
import { 
  Briefcase, 
  Users, 
  FolderLock, 
  Trash2, 
  LogOut, 
  TrendingUp, 
  Activity,
  CheckCircle,
  Clock,
  XCircle,
  Plus,
  ExternalLink,
  ChevronDown,
  Loader2
} from "lucide-react";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<"overview" | "applicants" | "leads" | "jobs">("overview");
  const [dbData, setDbData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Job form state
  const [newJob, setNewJob] = useState({
    title: "",
    department: "Paid Media & Performance",
    type: "Full-Time",
    location: "Remote (Global Alignment)",
    description: "",
    requirements: ""
  });
  const [jobSubmitError, setJobSubmitError] = useState<string | null>(null);
  const [jobSubmitSuccess, setJobSubmitSuccess] = useState(false);

  // Authenticate simple state local storage cache
  useEffect(() => {
    const cachedAuth = localStorage.getItem("nxt_admin_auth");
    if (cachedAuth === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
      localStorage.setItem("nxt_admin_auth", "true");
    } else {
      setLoginError("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("nxt_admin_auth");
    setUsername("");
    setPassword("");
  };

  const loadData = useCallback(async () => {
    setLoading(true);
    const res = await getAdminData();
    if (res.success && res.data) {
      setDbData(res.data);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      loadData();
    }
  }, [isLoggedIn, loadData]);

  const handleAppStatusChange = async (id: string, status: any) => {
    const res = await updateAppStatus(id, status);
    if (res.success) {
      loadData();
    }
  };

  const handleAppDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this candidate?")) {
      const res = await removeApplication(id);
      if (res.success) {
        loadData();
      }
    }
  };

  const handleLeadStatusChange = async (id: string, status: any) => {
    const res = await updateLeadState(id, status);
    if (res.success) {
      loadData();
    }
  };

  const handleLeadDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this business lead?")) {
      const res = await removeLead(id);
      if (res.success) {
        loadData();
      }
    }
  };

  const handleJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setJobSubmitError(null);
    setJobSubmitSuccess(false);

    const res = await createJob(newJob);
    if (res.success) {
      setJobSubmitSuccess(true);
      setNewJob({
        title: "",
        department: "Paid Media & Performance",
        type: "Full-Time",
        location: "Remote (Global Alignment)",
        description: "",
        requirements: ""
      });
      loadData();
    } else {
      setJobSubmitError(res.error || "Failed to create job opening.");
    }
  };

  const handleJobDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this job listing?")) {
      const res = await removeJob(id);
      if (res.success) {
        loadData();
      }
    }
  };

  const departments = [
    "Paid Media & Performance",
    "SEO & Content Strategy",
    "Social & Creative",
    "Operations & Tech"
  ];

  if (!isLoggedIn) {
    return (
      <main className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-neutral-950 flex items-center justify-center px-4">
        <LinesGradientShader
          className="absolute inset-0 bg-transparent dark:bg-transparent -z-10"
          bandSpacing={60}
          bandThickness={90}
          waveAmplitude={0.12}
          speed={0.4}
        />
        
        <div className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white/70 p-8 shadow-xl backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/70 animate-in fade-in zoom-in-95 duration-200">
          <div className="mx-auto h-12 w-12 rounded-xl bg-brand-primary flex items-center justify-center text-white mb-6 dark:bg-white dark:text-black">
            <FolderLock className="size-6" />
          </div>
          
          <h1 className="text-2xl font-black text-center text-neutral-900 dark:text-white mb-2 tracking-tight">
            Admin Portal Access
          </h1>
          <p className="text-sm text-center text-neutral-500 dark:text-neutral-200 mb-8">
            Please enter your administrator credentials to login.
          </p>

          {loginError && (
            <div className="mb-5 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold text-center">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                Username
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="block w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="block w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
              />
            </div>

            <Button type="submit" className="w-full py-2.5 mt-2 justify-center font-bold cursor-pointer">
              Login to Dashboard
            </Button>
          </form>
        </div>
      </main>
    );
  }

  const stats = dbData ? {
    apps: dbData.talentApplications.length,
    leads: dbData.hireTalentSubmissions.length,
    jobs: dbData.jobListings.length,
    pendingApps: dbData.talentApplications.filter((a: any) => a.status === "Pending").length,
    newLeads: dbData.hireTalentSubmissions.filter((l: any) => l.status === "Lead").length
  } : { apps: 0, leads: 0, jobs: 0, pendingApps: 0, newLeads: 0 };

  return (
    <main className="relative min-h-screen w-full bg-neutral-50 dark:bg-neutral-950 pt-28 pb-16">
      <Container className="max-w-7xl px-4 md:px-8">
        
        {/* Admin Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Secure Access</span>
            </div>
            <Heading as="h1" className="text-3xl font-black text-neutral-900 dark:text-white mt-1">
              Dashboard Control Panel
            </Heading>
          </div>
          <button 
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold border border-neutral-300 dark:border-neutral-800 rounded-full text-neutral-600 hover:text-red-500 dark:text-neutral-200 dark:hover:text-red-400 bg-white dark:bg-neutral-900 cursor-pointer transition-colors self-start sm:self-center"
          >
            <LogOut className="size-3.5" /> Log Out
          </button>
        </div>

        {/* Dashboard Tabs Selectors */}
        <div className="flex gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-px mb-8 overflow-x-auto">
          {[
            { id: "overview", label: "Overview", icon: <TrendingUp className="size-4" /> },
            { id: "applicants", label: `Applicants (${stats.apps})`, icon: <Users className="size-4" /> },
            { id: "leads", label: `Client Leads (${stats.leads})`, icon: <Activity className="size-4" /> },
            { id: "jobs", label: `Active Jobs (${stats.jobs})`, icon: <Briefcase className="size-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-3 border-b-2 font-semibold text-sm transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-brand-secondary text-brand-secondary dark:border-brand-accent dark:text-brand-accent"
                  : "border-transparent text-neutral-500 hover:text-neutral-800 dark:text-neutral-200 dark:hover:text-white"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <Loader2 className="size-8 animate-spin text-brand-secondary dark:text-brand-accent" />
          </div>
        ) : (
          <div>
            {/* OVERVIEW TAB */}
            {activeTab === "overview" && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold text-neutral-400 dark:text-neutral-300 uppercase tracking-wider">Talent Applications</span>
                      <Users className="size-5 text-brand-secondary dark:text-brand-accent" />
                    </div>
                    <p className="text-3xl font-black text-neutral-900 dark:text-white mt-4">{stats.apps}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-200 mt-1">
                      <span className="font-semibold text-brand-secondary dark:text-brand-accent">{stats.pendingApps}</span> pending review
                    </p>
                  </div>

                  <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold text-neutral-400 dark:text-neutral-300 uppercase tracking-wider">Business Leads</span>
                      <Activity className="size-5 text-brand-secondary dark:text-brand-accent" />
                    </div>
                    <p className="text-3xl font-black text-neutral-900 dark:text-white mt-4">{stats.leads}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-200 mt-1">
                      <span className="font-semibold text-brand-secondary dark:text-brand-accent">{stats.newLeads}</span> new inquiries
                    </p>
                  </div>

                  <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold text-neutral-400 dark:text-neutral-300 uppercase tracking-wider">Open Positions</span>
                      <Briefcase className="size-5 text-brand-secondary dark:text-brand-accent" />
                    </div>
                    <p className="text-3xl font-black text-neutral-900 dark:text-white mt-4">{stats.jobs}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-200 mt-1">Listed on open roles list</p>
                  </div>
                </div>

                {/* Recent entries */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Recent Applications */}
                  <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-xs">
                    <h3 className="font-bold text-base text-neutral-900 dark:text-white border-b border-neutral-100 dark:border-neutral-800 pb-3 mb-4">
                      Recent Candidate Sign-ups
                    </h3>
                    <div className="space-y-4">
                      {dbData?.talentApplications.slice(0, 3).map((app: any) => (
                        <div key={app.id} className="flex justify-between items-center p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950/40">
                          <div>
                            <p className="text-sm font-bold text-neutral-800 dark:text-neutral-100">{app.fullName}</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-200 mt-0.5">{app.role} • {app.experienceYears} yrs exp</p>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            app.status === "Shortlisted" ? "bg-green-500/10 text-green-500" :
                            app.status === "Rejected" ? "bg-red-500/10 text-red-500" : "bg-yellow-500/10 text-yellow-500"
                          }`}>
                            {app.status}
                          </span>
                        </div>
                      ))}
                      {(!dbData?.talentApplications || dbData.talentApplications.length === 0) && (
                        <p className="text-xs text-neutral-500 text-center py-6">No applications logged yet.</p>
                      )}
                    </div>
                  </div>

                  {/* Recent Leads */}
                  <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-xs">
                    <h3 className="font-bold text-base text-neutral-900 dark:text-white border-b border-neutral-100 dark:border-neutral-800 pb-3 mb-4">
                      Recent Agency Leads
                    </h3>
                    <div className="space-y-4">
                      {dbData?.hireTalentSubmissions.slice(0, 3).map((lead: any) => (
                        <div key={lead.id} className="flex justify-between items-center p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950/40">
                          <div>
                            <p className="text-sm font-bold text-neutral-800 dark:text-neutral-100">{lead.companyName}</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-200 mt-0.5">Needs {lead.roleNeeded} • {lead.budget}</p>
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-secondary/10 text-brand-secondary">
                            {lead.status}
                          </span>
                        </div>
                      ))}
                      {(!dbData?.hireTalentSubmissions || dbData.hireTalentSubmissions.length === 0) && (
                        <p className="text-xs text-neutral-500 text-center py-6">No client leads logged yet.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TALENT APPLICATIONS TAB */}
            {activeTab === "applicants" && (
              <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs overflow-hidden animate-in fade-in duration-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/20 text-xs font-bold uppercase tracking-wider text-neutral-500">
                        <th className="px-6 py-4">Name / Contact</th>
                        <th className="px-6 py-4">Specialization</th>
                        <th className="px-6 py-4">Experience</th>
                        <th className="px-6 py-4">Links</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 text-sm">
                      {dbData?.talentApplications.map((app: any) => (
                        <tr key={app.id} className="hover:bg-neutral-50/30 dark:hover:bg-neutral-900/10">
                          <td className="px-6 py-4">
                            <p className="font-bold text-neutral-900 dark:text-white">{app.fullName}</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-200 mt-0.5">{app.email}</p>
                          </td>
                          <td className="px-6 py-4 font-medium text-neutral-800 dark:text-neutral-250">
                            {app.role}
                          </td>
                          <td className="px-6 py-4 text-neutral-600 dark:text-neutral-200">
                            {app.experienceYears} Years
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-3">
                              {app.resumeLink && (
                                <a href={app.resumeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-brand-secondary hover:underline dark:text-brand-accent">
                                  Resume <ExternalLink className="size-3" />
                                </a>
                              )}
                              {app.portfolioLink && (
                                <a href={app.portfolioLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-brand-secondary hover:underline dark:text-brand-accent">
                                  Portfolio <ExternalLink className="size-3" />
                                </a>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <select
                              value={app.status}
                              onChange={(e) => handleAppStatusChange(app.id, e.target.value)}
                              className="rounded-md border border-neutral-250 bg-white px-2 py-1 text-xs font-semibold outline-none dark:border-neutral-750 dark:bg-neutral-950 dark:text-white cursor-pointer"
                            >
                              <option value="Pending">Pending</option>
                              <option value="Shortlisted">Shortlisted</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => handleAppDelete(app.id)}
                              className="p-1.5 rounded-lg text-neutral-400 hover:text-red-500 dark:hover:text-red-400 cursor-pointer"
                            >
                              <Trash2 className="size-4.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                      {(!dbData?.talentApplications || dbData.talentApplications.length === 0) && (
                        <tr>
                          <td colSpan={6} className="px-6 py-12 text-center text-xs text-neutral-500">
                            No candidate applications found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* CLIENT LEADS TAB */}
            {activeTab === "leads" && (
              <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs overflow-hidden animate-in fade-in duration-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/20 text-xs font-bold uppercase tracking-wider text-neutral-500">
                        <th className="px-6 py-4">Company / Agent</th>
                        <th className="px-6 py-4">Contact Detail</th>
                        <th className="px-6 py-4">Role Needed</th>
                        <th className="px-6 py-4">Budget / Timeline</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 text-sm">
                      {dbData?.hireTalentSubmissions.map((lead: any) => (
                        <tr key={lead.id} className="hover:bg-neutral-50/30 dark:hover:bg-neutral-900/10">
                          <td className="px-6 py-4">
                            <p className="font-bold text-neutral-900 dark:text-white">{lead.companyName}</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-200 mt-0.5">{lead.contactName}</p>
                          </td>
                          <td className="px-6 py-4 text-neutral-600 dark:text-neutral-200">
                            <p>{lead.email}</p>
                            <p className="text-xs text-neutral-500 mt-0.5">{lead.phone}</p>
                          </td>
                          <td className="px-6 py-4 font-medium text-neutral-800 dark:text-neutral-250">
                            {lead.roleNeeded}
                          </td>
                          <td className="px-6 py-4">
                            <p className="font-semibold text-neutral-700 dark:text-neutral-300">{lead.budget}</p>
                            <p className="text-xs text-neutral-500 mt-0.5">{lead.timeline}</p>
                          </td>
                          <td className="px-6 py-4">
                            <select
                              value={lead.status}
                              onChange={(e) => handleLeadStatusChange(lead.id, e.target.value)}
                              className="rounded-md border border-neutral-250 bg-white px-2 py-1 text-xs font-semibold outline-none dark:border-neutral-750 dark:bg-neutral-950 dark:text-white cursor-pointer"
                            >
                              <option value="Lead">Lead</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Closed">Closed</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => handleLeadDelete(lead.id)}
                              className="p-1.5 rounded-lg text-neutral-400 hover:text-red-500 dark:hover:text-red-400 cursor-pointer"
                            >
                              <Trash2 className="size-4.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                      {(!dbData?.hireTalentSubmissions || dbData.hireTalentSubmissions.length === 0) && (
                        <tr>
                          <td colSpan={6} className="px-6 py-12 text-center text-xs text-neutral-500">
                            No client leads found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ACTIVE JOBS TAB */}
            {activeTab === "jobs" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-200">
                {/* Add Job opening Form */}
                <div className="lg:col-span-4 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-xs h-fit">
                  <h3 className="font-bold text-base text-neutral-900 dark:text-white border-b border-neutral-100 dark:border-neutral-800 pb-3 mb-5">
                    Create Job Listing
                  </h3>

                  {jobSubmitError && (
                    <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold">
                      {jobSubmitError}
                    </div>
                  )}

                  {jobSubmitSuccess && (
                    <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-semibold">
                      Job listing created successfully!
                    </div>
                  )}

                  <form onSubmit={handleJobSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wide mb-1">
                        Job Title
                      </label>
                      <input
                        type="text"
                        required
                        value={newJob.title}
                        onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                        placeholder="e.g. Media Buyer"
                        className="block w-full rounded-lg border border-neutral-205 bg-white px-3 py-2 text-xs outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wide mb-1">
                        Department
                      </label>
                      <select
                        value={newJob.department}
                        onChange={(e) => setNewJob({ ...newJob, department: e.target.value })}
                        className="block w-full rounded-lg border border-neutral-205 bg-white px-3 py-2 text-xs outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white cursor-pointer"
                      >
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wide mb-1">
                          Type
                        </label>
                        <select
                          value={newJob.type}
                          onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                          className="block w-full rounded-lg border border-neutral-205 bg-white px-3 py-2 text-xs outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white cursor-pointer"
                        >
                          <option value="Full-Time">Full-Time</option>
                          <option value="Part-Time">Part-Time</option>
                          <option value="Contract">Contract</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wide mb-1">
                          Location
                        </label>
                        <input
                          type="text"
                          required
                          value={newJob.location}
                          onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                          className="block w-full rounded-lg border border-neutral-205 bg-white px-3 py-2 text-xs outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wide mb-1">
                        Description
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={newJob.description}
                        onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                        placeholder="Job roles & context..."
                        className="block w-full rounded-lg border border-neutral-205 bg-white px-3 py-2 text-xs outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wide mb-1">
                        Requirements
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={newJob.requirements}
                        onChange={(e) => setNewJob({ ...newJob, requirements: e.target.value })}
                        placeholder="Must-have competencies, minimum experience..."
                        className="block w-full rounded-lg border border-neutral-205 bg-white px-3 py-2 text-xs outline-none focus:border-brand-secondary dark:border-neutral-800 dark:bg-neutral-950 dark:text-white resize-none"
                      />
                    </div>

                    <Button type="submit" className="w-full py-2.5 mt-2 justify-center font-bold flex items-center gap-1.5 cursor-pointer">
                      <Plus className="size-4" /> Create Opening
                    </Button>
                  </form>
                </div>

                {/* Job listings lists */}
                <div className="lg:col-span-8 space-y-4">
                  {dbData?.jobListings.map((job: any) => (
                    <div key={job.id} className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-xs flex justify-between items-start gap-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-secondary/10 text-brand-secondary uppercase">
                            {job.department}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 uppercase">
                            {job.type}
                          </span>
                        </div>
                        <h4 className="font-bold text-lg text-neutral-900 dark:text-white">{job.title}</h4>
                        <p className="text-xs text-neutral-400">{job.location}</p>
                        
                        <div className="pt-2 text-xs text-neutral-600 dark:text-neutral-300 space-y-1">
                          <p><strong>Description:</strong> {job.description}</p>
                          <p><strong>Requirements:</strong> {job.requirements}</p>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleJobDelete(job.id)}
                        className="p-2 rounded-lg text-neutral-400 hover:text-red-500 dark:hover:text-red-400 cursor-pointer shrink-0"
                      >
                        <Trash2 className="size-4.5" />
                      </button>
                    </div>
                  ))}
                  {(!dbData?.jobListings || dbData.jobListings.length === 0) && (
                    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-12 text-center text-xs text-neutral-500">
                      No active job listings found. Create one on the left.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </Container>
    </main>
  );
}
