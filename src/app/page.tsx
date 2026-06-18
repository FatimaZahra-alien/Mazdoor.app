'use client';

import Link from "next/link";
import { HardHat, Building2 } from "lucide-react";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28, paddingTop: 32 }}>

      {/* Header */}
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 8 }}>
          <span
            style={{
              display: "inline-block",
              width: 5,
              height: 30,
              borderRadius: 3,
              background: "var(--color-primary)",
            }}
          />
          <h1
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.5px",
              margin: 0,
            }}
          >
            Mazdoor
          </h1>
        </div>
        <p className="ur" style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", margin: "0 0 4px" }}>
          کام دیں یا کام لیں — ایک ٹیپ میں
        </p>
        <p style={{ fontSize: 13, color: "var(--color-muted)", margin: 0 }}>
          Give work or find work — in one tap
        </p>
      </div>

      {/* Role selection */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

        {/* Worker card */}
        <Link
          href="/signup?role=labour"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            background: "var(--color-primary)",
            borderRadius: "var(--radius-lg)",
            padding: "22px 20px",
            textDecoration: "none",
            borderLeft: "5px solid var(--color-primary-dark)",
            transition: "opacity 0.15s, transform 0.1s",
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 14,
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <HardHat size={32} color="#fff" strokeWidth={1.75} />
          </div>
          <div>
            <p className="ur" style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 2px" }}>
              میں کام کی تلاش میں ہوں
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", margin: 0 }}>
              I am looking for work
            </p>
          </div>
        </Link>

        {/* Employer card */}
        <Link
          href="/client/search"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            background: "rgba(255,255,255,0.08)",
            border: "1.5px solid rgba(255,255,255,0.2)",
            borderRadius: "var(--radius-lg)",
            padding: "22px 20px",
            textDecoration: "none",
            borderLeft: "5px solid rgba(255,255,255,0.35)",
            transition: "opacity 0.15s, transform 0.1s",
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 14,
              background: "rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Building2 size={32} color="#fff" strokeWidth={1.75} />
          </div>
          <div>
            <p className="ur" style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 2px" }}>
              مجھے مزدور چاہیے
            </p>
            <p style={{ fontSize: 13, color: "var(--color-muted)", margin: 0 }}>
              I need a worker
            </p>
          </div>
        </Link>
      </div>

      {/* Stats strip */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {[
          { num: "5,000+", labelUr: "رجسٹرڈ مزدور", labelEn: "Workers" },
          { num: "200+",   labelUr: "شہر",            labelEn: "Cities"  },
          { num: "4.8★",  labelUr: "ریٹنگ",          labelEn: "Rating"  },
        ].map(({ num, labelUr, labelEn }) => (
          <div key={labelEn} className="card" style={{ padding: "12px 8px", textAlign: "center" }}>
            <p style={{ fontSize: 18, fontWeight: 700, color: "var(--color-primary)", margin: "0 0 2px" }}>
              {num}
            </p>
            <p className="ur" style={{ fontSize: 11, color: "var(--color-muted)", margin: 0, lineHeight: 1.8 }}>
              {labelUr}
            </p>
          </div>
        ))}
      </div>

      {/* Help line */}
      <p style={{ textAlign: "center", fontSize: 12, color: "var(--color-muted)", marginTop: -8 }}>
        مدد کے لیے واٹس ایپ:{" "}
        <a href="https://wa.me/923000000000" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
          +92 300 0000000
        </a>
      </p>

    </div>
  );
}