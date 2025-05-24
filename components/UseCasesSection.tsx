// not used

import React from "react";

interface UseCase {
  title: string;
  description: string;
}

const useCases: UseCase[] = [
  {
    title: "Portfolio Tracking",
    description: "Monitor your stock portfolio performance in real-time.",
  },
  {
    title: "Market Analysis",
    description:
      "Analyze market trends and make informed investment decisions.",
  },
  {
    title: "Alerts & Notifications",
    description: "Get notified about significant price changes and news.",
  },
];

const UseCasesSection: React.FC = () => (
  <section>
    <h2>Use Cases</h2>
    <ul>
      {useCases.map((useCase, idx) => (
        <li key={idx}>
          <h3>{useCase.title}</h3>
          <p>{useCase.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default UseCasesSection;
