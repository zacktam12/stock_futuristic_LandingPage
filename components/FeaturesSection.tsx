import React from "react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Real-time Data",
    description: "Get up-to-date stock prices and market trends instantly.",
    icon: (
      <span role="img" aria-label="clock">
        ⏱️
      </span>
    ),
  },
  {
    title: "Custom Watchlists",
    description: "Track your favorite stocks in personalized watchlists.",
    icon: (
      <span role="img" aria-label="list">
        📋
      </span>
    ),
  },
  {
    title: "Analytics Tools",
    description: "Analyze stock performance with interactive charts and tools.",
    icon: (
      <span role="img" aria-label="chart">
        📈
      </span>
    ),
  },
];

const FeaturesSection: React.FC = () => (
  <section style={{ padding: "2rem 0", background: "#f9f9f9" }}>
    <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Features</h2>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      {features.map((feature, idx) => (
        <div
          key={idx}
          style={{
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            padding: "1.5rem",
            width: "260px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            {feature.icon}
          </div>
          <h3 style={{ margin: "0 0 0.5rem" }}>{feature.title}</h3>
          <p style={{ color: "#555" }}>{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
