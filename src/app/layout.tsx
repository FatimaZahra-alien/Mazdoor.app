import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "Mazdoor | مزدور — Find Daily Wage Workers",
  description: "Connecting daily wage workers with clients directly across Pakistan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ur">
      <body style={{ background: "#000", color: "#fff", margin: 0 }}>

        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay — dims video so solid cards pop */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        />

        {/* Scrollable content layer */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            minHeight: "100vh",
            paddingBottom: 96,
          }}
        >
          <main
            style={{
              maxWidth: 440,
              margin: "0 auto",
              padding: "0 16px",
            }}
          >
            {children}
          </main>
        </div>

        <BottomNav />
      </body>
    </html>
  );
}