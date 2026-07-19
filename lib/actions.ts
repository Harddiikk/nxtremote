"use server";

import {
  addApplication,
  addLead,
  getDb,
  updateApplicationStatus,
  deleteApplication,
  updateLeadStatus,
  deleteLead,
  addJob,
  deleteJob
} from "./db";
import { createAirtableRecord } from "./airtable";

// Public actions
export async function submitApplication(data: {
  fullName: string;
  email: string;
  role: string;
  experienceYears: number;
  portfolioLink: string;
  resumeLink: string;
  message: string;
}) {
  if (!data.fullName || !data.email || !data.role) {
    return { success: false, error: "Please fill in all required fields." };
  }

  try {
    addApplication({
      fullName: data.fullName,
      email: data.email,
      role: data.role,
      experienceYears: Number(data.experienceYears) || 0,
      portfolioLink: data.portfolioLink || "",
      resumeLink: data.resumeLink || "",
      message: data.message || ""
    });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to submit application." };
  }
}

export async function submitLead(data: {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  roleNeeded: string;
  budget: string;
  timeline: string;
  details: string;
}) {
  if (!data.companyName || !data.contactName || !data.email || !data.roleNeeded) {
    return { success: false, error: "Please fill in all required fields." };
  }

  try {
    addLead({
      companyName: data.companyName,
      contactName: data.contactName,
      email: data.email,
      phone: data.phone || "",
      roleNeeded: data.roleNeeded,
      budget: data.budget || "",
      timeline: data.timeline || "",
      details: data.details || ""
    });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to submit request." };
  }
}

// Playbook / NXT Academy lead magnet — writes straight to the Airtable
// "Playbook Downloads" table so downloads land in the CRM.
export async function submitPlaybookLead(data: { name: string; email: string }) {
  if (!data.name?.trim() || !data.email?.trim()) {
    return { success: false, error: "Please add your name and work email." };
  }

  try {
    await createAirtableRecord(
      {
        Name: data.name.trim(),
        Email: data.email.trim(),
        Resource: "Agency Playbook: High-Performance Remote Marketing Team",
        Source: "NXT Academy download",
        "Downloaded At": new Date().toISOString(),
      },
      "Playbook Downloads"
    );
    return { success: true };
  } catch (error: any) {
    // Never block the user's download on a CRM hiccup — surface but still let them proceed.
    return { success: false, error: error?.message || "Could not record the download." };
  }
}

// Admin Actions (Credentials are checked in action if wanted, simple check for now)
export async function getAdminData() {
  try {
    const db = getDb();
    return { success: true, data: db };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to load database." };
  }
}

export async function updateAppStatus(id: string, status: "Pending" | "Shortlisted" | "Rejected") {
  try {
    updateApplicationStatus(id, status);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update status." };
  }
}

export async function removeApplication(id: string) {
  try {
    deleteApplication(id);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete application." };
  }
}

export async function updateLeadState(id: string, status: "Lead" | "Contacted" | "Closed") {
  try {
    updateLeadStatus(id, status);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to update lead." };
  }
}

export async function removeLead(id: string) {
  try {
    deleteLead(id);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete lead." };
  }
}

export async function createJob(data: {
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string;
}) {
  if (!data.title || !data.department || !data.type) {
    return { success: false, error: "Please fill in all required fields." };
  }

  try {
    addJob({
      title: data.title,
      department: data.department,
      type: data.type,
      location: data.location || "Remote",
      description: data.description || "",
      requirements: data.requirements || ""
    });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to create job." };
  }
}

export async function removeJob(id: string) {
  try {
    deleteJob(id);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to delete job." };
  }
}
