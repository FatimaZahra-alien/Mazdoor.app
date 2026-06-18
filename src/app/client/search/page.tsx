"use client";

import { useState, useMemo } from "react";
import { SKILLS, skillLabel } from "@/data/skills";
import { MOCK_LABOURERS } from "@/data/mock";
import { Phone, MessageCircle, Star, MapPin, SlidersHorizontal } from "lucide-react";

export default function ClientSearchPage() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [onlyAvailable, setOnlyAvailable] = useState<boolean>(true);

  const results = useMemo(() => {
    return MOCK_LABOURERS.filter((l) => {
      if (onlyAvailable && !l.isAvailable) return false;
      if (activeSkill && !l.skills.includes(activeSkill)) return false;
      return true;
    }).sort((a, b) => a.distanceKm - b.distanceKm);
  }, [activeSkill, onlyAvailable]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingTop: 8 }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: "var(--color-text)" }}>
            Find Workers
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
            قریبی مزدور تلاش کریں
          </p>
        </div>
        <button
          onClick={() => setOnlyAvailable((v) => !v)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 14px",
            borderRadius: "var(--radius-full)",
            border: "1.5px solid",
            borderColor: onlyAvailable ? "var(--color-primary)" : "var(--color-border)",
            background: onlyAvailable ? "var(--color-primary-light)" : "var(--color-surface)",
            color: onlyAvailable ? "var(--color-primary)" : "var(--color-muted)",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          <SlidersHorizontal size={15} strokeWidth={2} />
          {onlyAvailable ? "Available" : "All"}
        </button>
      </div>

      {/* Skill filter */}
      <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
        <button
          onClick={() => setActiveSkill(null)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            padding: "10px 14px",
            borderRadius: "var(--radius-md)",
            border: "1.5px solid",
            borderColor: activeSkill === null ? "var(--color-primary)" : "var(--color-border)",
            background: activeSkill === null ? "var(--color-primary-light)" : "var(--color-surface)",
            flexShrink: 0,
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: 22 }}>🔍</span>
          <span style={{ fontSize: 10, color: "var(--color-muted)", fontWeight: 500 }}>All</span>
        </button>
        {SKILLS.map((skill) => (
          <button
            key={skill.id}
            onClick={() => setActiveSkill(skill.id)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              padding: "10px 14px",
              borderRadius: "var(--radius-md)",
              border: "1.5px solid",
              borderColor: activeSkill === skill.id ? "var(--color-primary)" : "var(--color-border)",
              background: activeSkill === skill.id ? "var(--color-primary-light)" : "var(--color-surface)",
              flexShrink: 0,
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 22 }}>{skill.icon}</span>
            <span
              style={{
                fontSize: 10,
                color: "var(--color-muted)",
                fontWeight: 500,
                fontFamily: "var(--font-urdu)",
                direction: "rtl",
                lineHeight: 1.6,
                width: 52,
                textAlign: "center",
              }}
            >
              {skillLabel(skill, "ur")}
            </span>
          </button>
        ))}
      </div>

      {/* Results count */}
      <p style={{ fontSize: 12, color: "var(--color-muted)", margin: 0 }}>
        {results.length} workers found · sorted by distance
      </p>

      {/* Results */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {results.length === 0 && (
          <div style={{ textAlign: "center", padding: "48px 0", color: "var(--color-muted)" }}>
            <p style={{ fontFamily: "var(--font-urdu)", direction: "rtl", fontSize: 16, lineHeight: 2 }}>
              کوئی مزدور دستیاب نہیں
            </p>
            <p style={{ fontSize: 13 }}>No workers found</p>
          </div>
        )}
        {results.map((l) => (
          <div
            key={l.id}
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderLeft: "4px solid var(--color-primary)",
              borderRadius: "var(--radius-md)",
              padding: "14px 14px 14px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {/* Top row */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: "var(--color-primary-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  flexShrink: 0,
                }}
              >
                {l.photo}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, fontSize: 16, color: "var(--color-text)" }}>
                    {l.name}
                  </span>
                  <span
                    className={l.isAvailable ? "chip" : "chip chip-danger"}
                  >
                    {l.isAvailable ? "Available" : "Busy"}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--color-muted)" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <Star size={13} fill="#f59e0b" color="#f59e0b" />
                    {l.rating}
                    <span style={{ color: "var(--color-border)" }}>({l.ratingCount})</span>
                  </span>
                  <span>·</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <MapPin size={13} />
                    {l.distanceKm} km
                  </span>
                </div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <p style={{ fontWeight: 700, fontSize: 16, color: "var(--color-primary)", margin: 0 }}>
                  ₨{l.dailyWage}
                </p>
                <p style={{ fontSize: 11, color: "var(--color-muted)", margin: 0 }}>per day</p>
              </div>
            </div>

            {/* Skills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {l.skills.map((sid: string) => {
                const skill = SKILLS.find((s) => s.id === sid);
                return (
                  <span
                    key={sid}
                    style={{
                      fontSize: 12,
                      background: "var(--color-bg)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-full)",
                      padding: "3px 10px",
                      color: "var(--color-text)",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    {skill?.icon} {skillLabel(skill, "ur")}
                  </span>
                );
              })}
            </div>

            <div style={{ height: 1, background: "var(--color-border)" }} />

            {/* Footer: exp + actions */}
            <div style={{ display: "flex", gap: 8 }}>
              <a
                href={`tel:${l.phone}`}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  minHeight: 48,
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-primary)",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <Phone size={18} />
                <span style={{ fontFamily: "var(--font-urdu)", direction: "rtl", lineHeight: 1.6 }}>
                  کال کریں
                </span>
              </a>
              <a
                href={`https://wa.me/${l.phone.replace("+", "")}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  minHeight: 48,
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-surface)",
                  border: "1.5px solid var(--color-primary)",
                  color: "var(--color-primary)",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}