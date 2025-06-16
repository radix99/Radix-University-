
import React from "react";

export default function App() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#1e3a8a" }}>Radix University</h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>منصة تعليمية - Educational Platform</p>
      </header>

      <section style={{ display: "grid", gap: "1.5rem" }}>
        <article style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "10px" }}>
          <h2 style={{ fontSize: "1.2rem" }}>📘 مقال تعليمي / Educational Article</h2>
          <p>
            هذا مثال لمقال تعليمي يشرح مفاهيم علمية ببساطة. <br />
            This is an example of an educational article explaining concepts simply.
          </p>
        </article>

        <article style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "10px" }}>
          <h2 style={{ fontSize: "1.2rem" }}>🎥 فيديو تعليمي / Educational Video</h2>
          <iframe width="100%" height="215" src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Educational Video" frameBorder="0" allowFullScreen></iframe>
        </article>

        <article style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "10px" }}>
          <h2 style={{ fontSize: "1.2rem" }}>📷 صورة تعليمية / Educational Image</h2>
          <img src="https://via.placeholder.com/400x200" alt="صورة تعليمية" style={{ width: "100%", borderRadius: "10px" }} />
        </article>
      </section>

      <footer style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.9rem", color: "#888" }}>
        تواصل معنا على / Contact us on: Facebook | Telegram <br />
        © 2025 Radix University
      </footer>
    </main>
  );
}
