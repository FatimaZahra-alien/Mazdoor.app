"use client";

import { useState } from "react";
import { SKILLS, skillLabel } from "@/data/skills";
import { MOCK_JOBS } from "@/data/mock";
import { Plus, MapPin, Calendar, Users, X, Flame } from "lucide-react";

interface Job {
  id: string;
  skill: string;
  description: string;
  workersNeeded: number;
  wage: number | string;
  urgent: boolean;
  location: string;
  date: string;
}

interface FormState {
  skill: string | null;
  workersNeeded: number;
  wage: string;
  urgent: boolean;
}

export default function JobsPage() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [jobs, setJobs] = useState<Job[]>(MOCK_JOBS);
  const [form, setForm] = useState<FormState>({
    skill: null,
    workersNeeded: 1,
    wage: "",
    urgent: false,
  });

  const submitJob = () => {
    if (!form.skill) return;
    setJobs((prev) => [
      {
        id: `j${Date.now()}`,
        skill: form.skill!,
        description: "",
        workersNeeded: form.workersNeeded,
        wage: form.wage || 0,
        urgent: form.urgent,
        location: "My location",
        date: "Today",
      },
      ...prev,
    ]);
    setForm({ skill: null, workersNeeded: 1, wage: "", urgent: false });
    setShowForm(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingTop: 8 }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: "var(--color-text)" }}>
            Job Board
          </h1>
          <p
            style={{
              fontFamily: "var(--font-urdu)",
              direction: "rtl",
              fontSize: 14,
              color: "var(--color-muted)",
              margin: "2px 0 0",
              lineHeight: 1.8,
            }}
          >
            کام کا اعلان
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "var(--color-accent)",
            color: "#1a1a1a",
            border: "none",
            borderRadius: "var(--radius-full)",
            padding: "10px 18px",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          <Plus size={18} strokeWidth={2.5} />
          Post Job
        </button>
      </div>

      {/* New job form */}
      {showForm && (
        <div
          style={{
            background: "var(--color-surface)",
            border: "1.5px solid var(--color-primary)",
            borderRadius: "var(--radius-lg)",
            padding: "18px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ fontWeight: 700, fontSize: 16, margin: 0 }}>New Job</p>
              <p
                style={{
                  fontFamily: "var(--font-urdu)",
                  direction: "rtl",
                  fontSize: 13,
                  color: "var(--color-muted)",
                  margin: 0,
                  lineHeight: 1.8,
                }}
              >
                نیا کام
              </p>
            </div>
            <button
              onClick={() => setShowForm(false)}
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: 8,
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--color-muted)",
              }}
            >
              <X size={18} />
            </button>
          </div>

          <div>
            <p className="section-label">Type of work · کس قسم کا کام؟</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {SKILLS.map((skill) => (
                <button
                  key={skill.id}
                  onClick={() => setForm((f) => ({ ...f, skill: skill.id }))}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                    borderRadius: "var(--radius-sm)",
                    padding: "10px 4px",
                    border: "1.5px solid",
                    borderColor: form.skill === skill.id ? "var(--color-primary)" : "var(--color-border)",
                    background: form.skill === skill.id ? "var(--color-primary)" : "var(--color-surface)",
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  <span style={{ fontSize: 22 }}>{skill.icon}</span>
                  <span
                    style={{
                      fontSize: 9,
                      color: form.skill === skill.id ? "#fff" : "var(--color-muted)",
                      textAlign: "center",
                      lineHeight: 1.4,
                      fontFamily: "var(--font-urdu)",
                      direction: "rtl",
                    }}
                  >
                    {skillLabel(skill, "ur")}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1 }}>
              <p className="section-label">Workers needed</p>
              <input
                type="number"
                min={1}
                value={form.workersNeeded}
                onChange={(e) => setForm((f) => ({ ...f, workersNeeded: Number(e.target.value) }))}
                className="input"
                style={{ fontSize: 18, fontWeight: 600 }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <p className="section-label">Daily wage (₨)</p>
              <input
                type="number"
                placeholder="1200"
                value={form.wage}
                onChange={(e) => setForm((f) => ({ ...f, wage: e.target.value }))}
                className="input"
                style={{ fontSize: 18, fontWeight: 600 }}
              />
            </div>
          </div>

          <button
            onClick={() => setForm((f) => ({ ...f, urgent: !f.urgent }))}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              minHeight: 48,
              borderRadius: "var(--radius-md)",
              border: "1.5px solid",
              borderColor: form.urgent ? "var(--color-danger)" : "var(--color-border)",
              background: form.urgent ? "var(--color-danger-light)" : "var(--color-surface)",
              color: form.urgent ? "var(--color-danger)" : "var(--color-muted)",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <Flame size={18} />
            Urgent · فوری ضرورت
          </button>

          <button
            disabled={!form.skill}
            onClick={submitJob}
            className="btn btn-primary"
          >
            Post Job · پوسٹ کریں
          </button>
        </div>
      )}

      {/* Job list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {jobs.map((job) => {
          const skill = SKILLS.find((s) => s.id === job.skill);
          return (
            <div
              key={job.id}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderLeft: job.urgent
                  ? "4px solid var(--color-danger)"
                  : "4px solid var(--color-primary)",
                borderRadius: "var(--radius-md)",
                padding: "14px 14px 14px 16px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                position: "relative",
              }}
            >
              {job.urgent && (
                <span
                  style={{
                    position: "absolute",
                    top: -10,
                    right: 12,
                    background: "var(--color-danger)",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: "var(--radius-full)",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <Flame size={12} /> URGENT
                </span>
              )}

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: job.urgent ? "var(--color-danger-light)" : "var(--color-primary-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    flexShrink: 0,
                  }}
                >
                  {skill?.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 700, fontSize: 16, margin: "0 0 4px", color: "var(--color-text)" }}>
                    {skillLabel(skill, "ur")}
                  </p>
                  {job.description && (
                    <p style={{ fontSize: 13, color: "var(--color-muted)", margin: 0 }}>{job.description}</p>
                  )}
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <p style={{ fontWeight: 700, fontSize: 16, color: "var(--color-primary)", margin: 0 }}>
                    ₨{job.wage}
                  </p>
                  <p style={{ fontSize: 11, color: "var(--color-muted)", margin: 0 }}>per day</p>
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, fontSize: 13, color: "var(--color-muted)" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <Users size={14} /> {job.workersNeeded} workers
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <MapPin size={14} /> {job.location}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <Calendar size={14} /> {job.date}
                </span>
              </div>

              <button
                className="btn btn-primary"
                style={{ minHeight: 46 }}
              >
                <span style={{ fontFamily: "var(--font-urdu)", direction: "rtl", lineHeight: 1.6 }}>
                  درخواست دیں
                </span>
                &nbsp;· Apply
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}