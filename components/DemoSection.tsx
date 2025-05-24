// not used in the demo, but useful for organizing sections

import React from "react";

interface DemoSectionProps {
  title: string;
  children: React.ReactNode;
}

const DemoSection: React.FC<DemoSectionProps> = ({ title, children }) => {
  return (
    <section
      style={{
        margin: "2rem 0",
        padding: "1rem",
        border: "1px solid #eee",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default DemoSection;
