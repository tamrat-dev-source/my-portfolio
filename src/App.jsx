import './App.css'
import profileImage from './assets/profile.jpg'
import sdlDashboardImage from './assets/sdl-dashboard.png'
import sdlcDashboardImage from './assets/sdlc-dashboard.png'
import bankLoanDashboard1 from './assets/bank-loan-dashboard-1.png'
import bankLoanDashboard2 from './assets/bank-loan-dashboard-2.png'
import bankLoanDashboard3 from './assets/bank-loan-dashboard-3.png'

function App() {
  return (
    <div className="portfolio" id="top">
      <header className="hero">
        <nav className="navbar">
          <h2 className="logo">Tamrat Portfolio</h2>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="hero-layout">
          <div className="hero-content">
            <p className="intro">Hello, my name is</p>
            <h1>Tamrat</h1>
            <h2>Power BI Developer | Data Analyst</h2>
            <p className="hero-text">
              I build enterprise dashboards, improve reporting workflows, and create
              practical data solutions using Power BI, SQL, Excel, React, and modern tools.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="hero-button">View My Work</a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              src={profileImage}
              alt="Tamrat profile"
              className="hero-image"
            />
          </div>
        </div>
      </header>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a Microsoft Certified Power BI Developer and data analyst with experience building
          enterprise dashboards, improving reporting workflows, and translating complex data into
          clear business insights. My background includes Power BI, DAX, Power Query, SQL, Excel,
          semantic modeling, and process improvement across nonprofit, consulting, and Fortune 100
          environments.
        </p>
        <p>
          I enjoy creating practical, results-driven solutions that improve visibility, reduce
          manual effort, and support better decision-making. In addition to analytics and reporting,
          I also build modern web-based portfolio projects using React and Vite to present technical
          work in a clear, professional format.
        </p>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>

        <div className="project-card">
          <h3>Power BI Developer / Business Intelligence Professional</h3>
          <p>
            Built and supported enterprise dashboards, governed semantic models, and reporting
            solutions in Fortune 100 and consulting environments. Delivered analytics tools used
            for executive visibility, KPI tracking, portfolio reviews, and operational decision-making.
          </p>
          <p>
            <strong>Focus Areas:</strong> Power BI, DAX, Power Query, Semantic Modeling, KPI Design,
            Executive Reporting, Performance Optimization
          </p>
        </div>

        <div className="project-card">
          <h3>Reporting Modernization &amp; Workflow Improvement</h3>
          <p>
            Improved reporting speed, data quality, and business visibility by modernizing legacy
            reporting processes, restructuring data flows, and supporting scalable analytics workflows.
            Helped reduce manual effort, improve consistency, and create more reliable reporting outputs.
          </p>
          <p>
            <strong>Focus Areas:</strong> SQL, ETL Optimization, Workflow Improvement, Data Quality,
            Reporting Automation, Process Design
          </p>
        </div>

        <div className="project-card">
          <h3>Cross-Functional Stakeholder Support</h3>
          <p>
            Worked with leadership, project teams, and business stakeholders to translate reporting
            needs into practical analytics solutions. Supported clearer decision-making by turning
            complex data into accessible dashboards, metrics, and reporting structures.
          </p>
          <p>
            <strong>Focus Areas:</strong> Stakeholder Engagement, Requirements Gathering, Dashboard Design,
            Business Insights, Data Storytelling
          </p>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Spread the Word Nevada – Volunteer/Event Intake Form Redesign</h3>
          <p>
            Led the redesign of event request intake and validation workflows by replacing fragmented,
            manual submission processes with a structured, logic-driven JotForm system. Rebuilt the intake
            experience using enforced validation rules, conditional logic based on request type, standardized
            pricing options, operational feasibility inputs like truck access and participant capacity, and
            clearer professional form language.
          </p>
          <p>
            <strong>Tools:</strong> JotForm, UX Writing, Form Logic, Validation Rules, Workflow Design
          </p>
          <p>
            <strong>Impact:</strong> Reduced incomplete or unusable submissions by an estimated 35–45%,
            decreased manual follow-up for missing information by roughly 30%, standardized intake for
            events serving 100+ participants, and improved internal visibility into event requirements
            and logistics.
          </p>
        </div>

        <div className="project-card">
          <h3>Spread the Word Nevada – Reading Program Data Improvement</h3>
          <p>
            Improved the reliability, consistency, and usability of program data used to track families,
            children, and book distribution across multiple Excel datasets. Audited and cleaned 10,200+
            enrollment records and 5,000+ family-shipping records, resolved duplicates and missing values,
            designed a more structured data model separating family-level, child-level, and shipping activity,
            standardized RIT Number as a unique identifier, and corrected broken XLOOKUP/VLOOKUP references.
          </p>
          <p>
            <strong>Tools:</strong> Excel, XLOOKUP, VLOOKUP, Data Cleaning, Data Structuring, Process Design
          </p>
          <p>
            <strong>Impact:</strong> Improved data accuracy and consistency by an estimated 40%+, reduced
            manual reconciliation effort by roughly 25–35%, enabled more reliable tracking of family shipments
            and child-level eligibility, and established a clean, scalable data foundation for reporting and
            future automation.
          </p>
        </div>

        <div className="project-card">
          <h3>Spread the Word Nevada – Integration &amp; Automation Implementation</h3>
          <p>
            Designed and tested an integration-ready workflow to automate data movement from intake forms into
            structured Excel datasets. Built intake forms aligned to Excel table structures, configured and
            tested Power Automate workflows from JotForm to Excel, identified platform limitations such as
            premium connector dependencies, evaluated alternative integration paths using JotForm native tools
            and SharePoint/OneDrive architecture, and worked with IT to resolve access and shared environment constraints.
          </p>
          <p>
            <strong>Tools:</strong> Power Automate, JotForm, Excel, SharePoint, OneDrive, Workflow Integration
          </p>
          <p>
            <strong>Impact:</strong> Reduced manual data entry by an estimated 80–90%, enabled near real-time
            data availability for tracking and reporting, and improved overall workflow efficiency and data
            reliability across program operations.
          </p>
        </div>

        <div className="project-card">
          <h3>SDL Project Health &amp; Task Analysis Dashboard</h3>
          <p>
            Built an automated Power BI dashboard to replace a manual Excel macro process that used
            Fibonacci-series-based scoring logic for project health analysis. Recreated the macro logic
            using Power BI columns and measures, enabling dynamic task analysis, project health KPIs,
            risk tracking, Top N task rankings, flexible inclusion of “Not Applicable” tasks, drill-downs,
            clickable SDL project links, and time-based filters.
          </p>
          <p>
            <strong>Tools:</strong> Power BI, DAX, Excel VBA Logic Migration, KPI Design, Interactive Reporting
          </p>
          <p>
            <strong>Impact:</strong> Delivered real-time, interactive insights for executives and team leads,
            eliminated reliance on static reporting, and solved a key usability challenge by creating a
            slicer-driven dynamic Top N task analysis experience.
          </p>
          <div className="project-image-wrapper">
            <a href={sdlDashboardImage} target="_blank" rel="noreferrer">
              <img
                src={sdlDashboardImage}
                alt="SDL Project Health and Task Analysis Dashboard"
                className="project-image"
              />
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>SDLC Project Health Indicator Dashboard</h3>
          <p>
            Developed a centralized portfolio management dashboard in Power BI to monitor project stability
            and risk across a large-scale environment. Migrated a legacy automated Excel/VBA tool into a
            more scalable Power BI solution by translating Fibonacci-weighted prioritization logic into DAX
            measures and calculated columns. The dashboard tracks risk factors such as prolonged idleness,
            missed release deadlines, and support inconsistencies to generate dynamic project health scores.
          </p>
          <p>
            <strong>Tools:</strong> Power BI, DAX, Calculated Columns, VBA Logic Migration, Portfolio Analytics
          </p>
          <p>
            <strong>Impact:</strong> Improved transparency, scalability, and organizational visibility by giving
            stakeholders a data-driven way to identify critical vs. healthy projects, analyze risk by business unit,
            and proactively manage bottlenecks and resource concerns.
          </p>
          <div className="project-image-wrapper">
            <a href={sdlcDashboardImage} target="_blank" rel="noreferrer">
              <img
                src={sdlcDashboardImage}
                alt="SDLC Project Health Indicator Dashboard"
                className="project-image"
              />
            </a>
          </div>
        </div>

        <div className="project-card">
  <h3>Bank Loan Portfolio Analytics Dashboard</h3>
  <p>
    Built an end-to-end Power BI dashboard to analyze a lending portfolio of
    approximately 38.6K loan applications, tracking funded amounts,
    repayments, interest performance, debt-to-income ratios, and loan
    quality. Designed executive KPI reporting, borrower trend analysis, and
    loan-level detail reporting to support both high-level portfolio
    monitoring and granular transactional review.
  </p>
  <p>
    <strong>Tools:</strong> Power BI, DAX, Data Modeling, Interactive Reporting
  </p>
  <p>
    <strong>Impact:</strong> Enabled clearer visibility into portfolio health,
    borrower behavior, and risk exposure through dynamic filtering, good-vs-bad
    loan analysis, and structured dashboard design.
  </p>

  <div className="project-links">
    <a
      href="https://github.com/tamrat-dev-source/my-portfolio/blob/main/src/projects/bank-loan-portfolio-analytics-dashboard/README.md"
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      View Full Project
    </a>
  </div>

  <div className="project-image-grid">
    <a href={bankLoanDashboard1} target="_blank" rel="noreferrer">
      <img
        src={bankLoanDashboard1}
        alt="Bank Loan Dashboard View 1"
        className="project-image"
      />
    </a>

    <a href={bankLoanDashboard2} target="_blank" rel="noreferrer">
      <img
        src={bankLoanDashboard2}
        alt="Bank Loan Dashboard View 2"
        className="project-image"
      />
    </a>

    <a href={bankLoanDashboard3} target="_blank" rel="noreferrer">
      <img
        src={bankLoanDashboard3}
        alt="Bank Loan Dashboard View 3"
        className="project-image"
      />
    </a>
  </div>
</div>
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            Built and deployed a responsive personal portfolio website using React and Vite to showcase technical
            projects, certifications, and professional experience. Focused on clean layout, strong project storytelling,
            and a modern presentation of analytics, reporting, and automation skills.
          </p>
          <p>
            <strong>Tools:</strong> React, Vite, JavaScript, CSS
          </p>
          <p>
            <strong>Impact:</strong> Created a professional personal brand asset that presents technical skills,
            project work, and certifications in a clear and recruiter-friendly format.
          </p>
        </div>
      </section>

      <section id="certifications" className="section">
        <h2>Certifications</h2>

        <div className="project-card">
          <h3>Microsoft Certified: Power BI Data Analyst Associate</h3>
          <p>
            Earned Microsoft’s PL-300 certification, validating hands-on skills in data modeling,
            data transformation, DAX, report development, dashboard design, and Power BI Service.
          </p>
          <p>
            <strong>Value:</strong> Demonstrates the ability to turn raw data into meaningful business insights
            through interactive reporting, visual storytelling, and scalable analytics solutions.
          </p>
        </div>

        <div className="project-card">
          <h3>Intel Certified: Power BI Publishing &amp; Development</h3>
          <p>
            Completed enterprise-focused Power BI publishing and development training centered on
            dashboard delivery, report lifecycle practices, and publishing standards in a professional environment.
          </p>
          <p>
            <strong>Value:</strong> Strengthened practical skills in delivering business-ready Power BI solutions
            that support reporting consistency, usability, and enterprise adoption.
          </p>
        </div>

        <div className="project-card">
          <h3>UiPath Certified Automation Developer Associate</h3>
          <p>
            Certified in robotic process automation using UiPath, including workflow development,
            reusable automation components, exception handling, and process design principles.
          </p>
          <p>
            <strong>Value:</strong> Demonstrates automation thinking and the ability to streamline repetitive
            business tasks through structured, reliable workflow design.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-category">
          <h3>BI &amp; Reporting</h3>
          <div className="skills-list">
            <span>Power BI</span>
            <span>DAX</span>
            <span>Power Query</span>
            <span>Excel</span>
            <span>Semantic Modeling</span>
            <span>Row-Level Security</span>
            <span>KPI Design</span>
            <span>Executive Reporting</span>
          </div>
        </div>

        <div className="skills-category">
          <h3>Data &amp; Automation</h3>
          <div className="skills-list">
            <span>SQL</span>
            <span>Azure Data Factory</span>
            <span>Python</span>
            <span>ETL Optimization</span>
            <span>Workflow Improvement</span>
            <span>Jotform</span>
            <span>UiPath</span>
            <span>Process Design</span>
          </div>
        </div>

        <div className="skills-category">
          <h3>Web &amp; Tools</h3>
          <div className="skills-list">
            <span>React</span>
            <span>Vite</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>GitHub</span>
            <span>VS Code</span>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p className="contact-intro">
          I’m open to data, reporting, BI, and analytics opportunities. Feel free to connect with me below.
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Email</h3>
            <a href="mailto:tdagnew.analytics@gmail.com">
              tdagnew.analytics@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <h3>GitHub</h3>
            <a
              href="https://github.com/tamrat-dev-source"
              target="_blank"
              rel="noreferrer"
            >
              github.com/tamrat-dev-source
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="footer-text">
          © 2018 Tamrat. Microsoft Certified Power BI Developer | Data Analyst
        </p>
        <a href="#top" className="back-to-top">Back to Top ↑</a>
      </footer>
    </div>
  )
}

export default App