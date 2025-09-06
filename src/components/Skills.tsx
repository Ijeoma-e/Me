import React from "react";

const skills = [
  "Manual & Exploratory Testing",
  "API Testing (Postman, Swagger)",
  "UI Automation (Cypress, JavaScript)",
  "Test Management (TestRail, JIRA)",
  "Cross-Browser & Mobile Testing",
  "CI/CD Integration (Git, Jenkins)",
  "Bug Reporting & Tracking (JIRA, Zoho)",
  "Regression & Functional Testing",
  "SQL for Data Validation",
  "JavaScript, Mocha",
  "Release Readiness & Go/No-Go Testing",
  "Collaboration with Dev & Product Teams",
  "Agile & Scrum Methodologies",
  "Live Demo Testing for Stakeholders",
];


const Skills: React.FC = () => {
  return (
    <section id="Skills" className="fh5co-books">
      <div className="site-container">
        <h2 className="universal-h2 universal-h2-bckg">Core Skills</h2>

        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {skills.map((skill, index) => (
            <div
              className="single-skill"
              key={index}
              style={{
                padding: "1rem",
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: "8px",
                textAlign: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <h4
                className="single-skill__title"
                style={{ fontSize: "1rem", margin: 0, color: "#444" }}
              >
                {skill}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
