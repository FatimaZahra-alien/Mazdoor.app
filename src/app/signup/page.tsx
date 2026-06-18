"use client";

import { useState } from "react";
import { SKILLS, skillLabel } from "@/data/skills";
import { Phone, Mic, MapPin, CheckCircle2, ArrowLeft } from "lucide-react";

type Step = "phone" | "skills" | "wage" | "availability" | "done";
const STEPS: Step[] = ["phone", "skills", "wage", "availability", "done"];

export default function SignupPage() {
  const [step, setStep] = useState<number>(0);
  const [phone, setPhone] = useState<string>("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [wage, setWage] = useState<string>("");
  const [available, setAvailable] = useState<boolean | null>(null);

  const toggleSkill = (id: string) => {
    setSelectedSkills((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingTop: 16 }}>

      {/* Progress bar */}
      <div style={{ display: "flex", gap: 6 }}>
        {STEPS.map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 4,
              borderRadius: 4,
              background: i <= step ? "var(--color-primary)" : "var(--color-border)",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>

      {step > 0 && step < 4 && (
        <button
          onClick={back}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "none",
            border: "none",
            color: "var(--color-muted)",
            fontSize: 14,
            cursor: "pointer",
            padding: 0,
            marginTop: -8,
          }}
        >
          <ArrowLeft size={17} /> Back
        </button>
      )}

      {/* Step 1: Phone */}
      {step === 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-muted)", margin: "0 0 6px" }}>
              Step 1 of 4
            </p>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>Your phone number</h2>
            <p
              style={{
                fontFamily: "var(--font-urdu)",
                direction: "rtl",
                fontSize: 15,
                color: "var(--color-muted)",
                margin: 0,
                lineHeight: 2,
              }}
            >
              اپنا موبائل نمبر لکھیں
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              border: "1.5px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              padding: "12px 16px",
              background: "var(--color-surface)",
            }}
          >
            <Phone size={20} color="var(--color-muted)" strokeWidth={1.75} />
            <input
              type="tel"
              inputMode="numeric"
              placeholder="03XX-XXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: 18,
                letterSpacing: "0.05em",
                fontWeight: 500,
                background: "transparent",
                color: "var(--color-text)",
              }}
            />
          </div>

          <p style={{ fontSize: 12, color: "var(--color-muted)", textAlign: "center", margin: 0 }}>
            You'll receive an SMS verification code
          </p>

          <button
            disabled={phone.length < 10}
            onClick={next}
            className="btn btn-primary"
          >
            Continue · آگے بڑھیں
          </button>
        </div>
      )}

      {/* Step 2: Skills */}
      {step === 1 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-muted)", margin: "0 0 6px" }}>
              Step 2 of 4
            </p>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>Your skills</h2>
            <p
              style={{
                fontFamily: "var(--font-urdu)",
                direction: "rtl",
                fontSize: 15,
                color: "var(--color-muted)",
                margin: 0,
                lineHeight: 2,
              }}
            >
              آپ کیا کام کرتے ہیں؟
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            {SKILLS.map((skill) => {
              const selected = selectedSkills.includes(skill.id);
              return (
                <button
                  key={skill.id}
                  onClick={() => toggleSkill(skill.id)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    borderRadius: "var(--radius-md)",
                    padding: "16px 8px",
                    border: "1.5px solid",
                    borderColor: selected ? "var(--color-primary)" : "var(--color-border)",
                    background: selected ? "var(--color-primary)" : "var(--color-surface)",
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  <span style={{ fontSize: 28 }}>{skill.icon}</span>
                  <span
                    style={{
                      fontSize: 11,
                      color: selected ? "#fff" : "var(--color-text)",
                      textAlign: "center",
                      lineHeight: 1.5,
                      fontFamily: "var(--font-urdu)",
                      direction: "rtl",
                    }}
                  >
                    {skillLabel(skill, "ur")}
                  </span>
                </button>
              );
            })}
          </div>

          <p style={{ fontSize: 12, color: "var(--color-muted)", margin: 0 }}>
            {selectedSkills.length} selected · Select all that apply
          </p>

          <button
            disabled={selectedSkills.length === 0}
            onClick={next}
            className="btn btn-primary"
          >
            Continue · آگے بڑھیں
          </button>
        </div>
      )}

      {/* Step 3: Wage */}
      {step === 2 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-muted)", margin: "0 0 6px" }}>
              Step 3 of 4
            </p>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>Daily wage rate</h2>
            <p
              style={{
                fontFamily: "var(--font-urdu)",
                direction: "rtl",
                fontSize: 15,
                color: "var(--color-muted)",
                margin: 0,
                lineHeight: 2,
              }}
            >
              یومیہ مزدوری (اختیاری)
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              border: "1.5px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              padding: "12px 16px",
              background: "var(--color-surface)",
            }}
          >
            <span style={{ fontSize: 22, fontWeight: 700, color: "var(--color-primary)" }}>₨</span>
            <input
              type="number"
              inputMode="numeric"
              placeholder="1200"
              value={wage}
              onChange={(e) => setWage(e.target.value)}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: 22,
                fontWeight: 700,
                background: "transparent",
                color: "var(--color-text)",
              }}
            />
            <span style={{ fontSize: 13, color: "var(--color-muted)" }}>/ day</span>
          </div>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              minHeight: 48,
              borderRadius: "var(--radius-md)",
              border: "1.5px solid var(--color-border)",
              background: "var(--color-surface)",
              color: "var(--color-muted)",
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            <Mic size={18} />
            Record voice intro (optional)
          </button>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              fontSize: 13,
              color: "var(--color-muted)",
            }}
          >
            <MapPin size={16} />
            Location will be auto-detected
          </div>

          <button onClick={next} className="btn btn-primary">
            Continue · آگے بڑھیں
          </button>
        </div>
      )}

      {/* Step 4: Availability */}
      {step === 3 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-muted)", margin: "0 0 6px" }}>
              Step 4 of 4
            </p>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>Available today?</h2>
            <p
              style={{
                fontFamily: "var(--font-urdu)",
                direction: "rtl",
                fontSize: 15,
                color: "var(--color-muted)",
                margin: 0,
                lineHeight: 2,
              }}
            >
              کیا آپ آج کام کے لیے دستیاب ہیں؟
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <button
              onClick={() => setAvailable(true)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                borderRadius: "var(--radius-lg)",
                padding: "36px 16px",
                border: "2px solid",
                borderColor: available === true ? "var(--color-primary)" : "var(--color-border)",
                background: available === true ? "var(--color-primary)" : "var(--color-surface)",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              <span style={{ fontSize: 44 }}>✅</span>
              <div>
                <p style={{ fontSize: 18, fontWeight: 700, color: available === true ? "#fff" : "var(--color-text)", margin: "0 0 2px" }}>
                  Yes
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-urdu)",
                    direction: "rtl",
                    fontSize: 14,
                    color: available === true ? "rgba(255,255,255,0.8)" : "var(--color-muted)",
                    margin: 0,
                    lineHeight: 1.8,
                  }}
                >
                  ہاں
                </p>
              </div>
            </button>
            <button
              onClick={() => setAvailable(false)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                borderRadius: "var(--radius-lg)",
                padding: "36px 16px",
                border: "2px solid",
                borderColor: available === false ? "var(--color-danger)" : "var(--color-border)",
                background: available === false ? "var(--color-danger)" : "var(--color-surface)",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              <span style={{ fontSize: 44 }}>⛔</span>
              <div>
                <p style={{ fontSize: 18, fontWeight: 700, color: available === false ? "#fff" : "var(--color-text)", margin: "0 0 2px" }}>
                  No
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-urdu)",
                    direction: "rtl",
                    fontSize: 14,
                    color: available === false ? "rgba(255,255,255,0.8)" : "var(--color-muted)",
                    margin: 0,
                    lineHeight: 1.8,
                  }}
                >
                  نہیں
                </p>
              </div>
            </button>
          </div>

          <p style={{ fontSize: 12, color: "var(--color-muted)", textAlign: "center" }}>
            You can change this anytime from your home screen
          </p>

          <button
            disabled={available === null}
            onClick={next}
            className="btn btn-primary"
          >
            Finish · مکمل کریں
          </button>
        </div>
      )}

      {/* Step 5: Done */}
      {step === 4 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            paddingTop: 40,
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "var(--color-primary-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckCircle2 size={44} color="var(--color-primary)" strokeWidth={1.75} />
          </div>
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 8px" }}>You're live!</h2>
            <p
              style={{
                fontFamily: "var(--font-urdu)",
                direction: "rtl",
                fontSize: 18,
                color: "var(--color-primary-dark)",
                margin: "0 0 12px",
                lineHeight: 2,
              }}
            >
              مبارک ہو!
            </p>
            <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.7 }}>
              Your profile is ready. Clients can now see and contact you.
            </p>
          </div>
          <div
            style={{
              background: "var(--color-primary-light)",
              borderRadius: "var(--radius-md)",
              padding: "14px 20px",
              width: "100%",
            }}
          >
            <p style={{ fontSize: 13, color: "var(--color-primary-dark)", margin: 0, lineHeight: 1.7 }}>
              💡 Keep your availability updated daily so clients find you first.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}