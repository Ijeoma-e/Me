import React from "react";

interface Job {
  company: string;
  role: string;
  period: string;
  desc: string;
  logo: string;
  link?: string;
}

const jobs: Job[] = [
  {
    company: "Payskul Ltd",
    role: "QA Engineer / Product Manager",
    period: "May 2025 – Present",
    desc: "Conduct functional, regression, and exploratory testing for the PaySkul App (Android and Web). Lead release readiness testing, demo testing, and stakeholder communication. Manage test documentation, user flows, bug tracking, and contribute to QA process improvement.",
    logo: "Payskul.jpeg",
  },
  {
    company: "Jarmortech",
    role: "QA Engineer",
    period: "Aug 2024 – Apr 2025",
    desc: "Performed manual and API testing, created test plans and test cases, executed automated tests using Cypress and Postman, logged defects, and collaborated with developers to ensure application quality through the SDLC.",
    logo: "jamor_technology_logo.jpeg",
  },
  {
    company: "jarmortech",
    role: "QA Engineer Intern",
    period: "May 2024 – Aug 2024",
    desc: "Reviewed system specifications, executed manual and automated tests, analyzed results, reported bugs, and conducted post-release testing in collaboration with development teams.",
    logo: "jamor_technology_logo.jpeg",
  },
  {
    company: "Dynasty Ocean Shipping Ltd",
    role: "QA Engineer Intern",
    period: "Jan 2024 – Jun 2024",
    desc: "Collaborated with system engineers and developers to improve reliability. Identified bugs, wrote comprehensive test cases, and conducted integration, unit, and API testing using Cypress and JavaScript.",
    logo: "dynasty.png",
  },
  {
    company: "Kobo360 Logistic",
    role: "HR Associate",
    period: "Dec 2019 – Nov 2023",
    desc: "Provided administrative support, managed documentation, maintained filing systems, and coordinated internal communications and schedules. Supported team operations and handled internal inquiries.",
    logo: "kobo360.png",
    link: "https://kobo360.com",
  },
];


const Experience: React.FC = () => {
  return (
    <section id="Experience" className="fh5co-blog">
      <div className="site-container">
        <h2 className="universal-h2 universal-h2-bckg">Experience</h2>
        <div
          className="experience-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          {jobs.map((job, index) => (
            <div
              key={index}
              className="single-experience-card"
              style={{
                padding: "1.5rem",
                border: "1px solid #eee",
                borderRadius: "8px",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "240px",
              }}
            >
              <div>
                <h4 style={{ marginBottom: "0.25rem", fontWeight: 600 }}>
                  {job.role} <br />
                  <span style={{ fontWeight: 400, color: "#555" }}>
                    @{job.company}
                  </span>
                </h4>
                <span style={{ fontSize: "0.9rem", color: "#888" }}>
                  {job.period}
                </span>
                <p
                  style={{
                    marginTop: "0.75rem",
                    fontSize: "0.95rem",
                    lineHeight: "1.5",
                  }}
                >
                  {job.desc}
                </p>
              </div>
              {job.logo && (
                <div style={{ marginTop: "1rem" }}>
                  <a
                    href={job.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`/images/${job.logo}`}
                      alt={job.company}
                      style={{
                        height: "40px",
                        width: "auto",
                        objectFit: "contain",
                        borderRadius: "4px",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                      }}
                    />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
