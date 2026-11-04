import './App.css'
import profileImage from './assets/profile.jpg'
import portfolioWallpaper from './assets/Portfolio wallpaper.jpg'
import sdlDashboardImage from './assets/sdl-dashboard.png'
import sdlcDashboardImage from './assets/sdlc-dashboard.png'
import bankLoanDashboard1 from './assets/bank-loan-dashboard-1.png'
import bankLoanDashboard2 from './assets/bank-loan-dashboard-2.png'
import bankLoanDashboard3 from './assets/bank-loan-dashboard-3.png'
import childBookDashboard1 from './assets/child-book-dashboard-1.png'
import intelCert from './assets/intel-cert.png'
import pl300Cert from './assets/pl300-cert.png'
import uipathCert from './assets/uipath-cert.jpg'
import daxiosHome from './assets/daxios/daxios-home.png'
import daxiosBeginnerZone from './assets/daxios/daxios-beginner-zone.png'
import daxiosFormulaHelper from './assets/daxios/daxios-formula-helper.png'
import daxiosFormulaNotebook from './assets/daxios/daxios-formula-notebook.png'
import daxiosMistakeDetective from './assets/daxios/daxios-mistake-detective.png'
import homeLabArchitecture from './assets/homelab/Home_Lab_Network_Architecture_Public_Safe.png'
import homeLabActiveDirectory from './assets/homelab/01_Active_Directory_organizational_units.png'
import homeLabDhcpLease from './assets/homelab/03_DHCP_client_address_lease.png'
import homeLabMappedDrive from './assets/homelab/06_CLIENT01_mapped_drive.png'

const sdlTaskDashboardPublicLink = 'https://app.powerbi.com/view?r=eyJrIjoiNGM1MmZiZjItOTE1MC00NWQ5LWJlYTAtZTY1Y2I2MzMyNDliIiwidCI6ImMzOWM0NDIyLWI2MDAtNGI0Zi1iYzg1LWI0N2I3OGYxNjM0NSJ9'
const sdlcDashboardPublicLink = 'https://app.powerbi.com/view?r=eyJrIjoiOWZlNGNmYjEtYjYzNC00YTE5LWFhNzQtM2Y0Mjk5ZmUwMDRjIiwidCI6ImMzOWM0NDIyLWI2MDAtNGI0Zi1iYzg1LWI0N2I3OGYxNjM0NSJ9'
const childBookDashboardPublicLink = 'https://app.powerbi.com/view?r=eyJrIjoiYzMxODQ1YmMtOWYzZS00ZDUxLThjMWUtZjZjZGQ4M2QzZTQ0IiwidCI6ImMzOWM0NDIyLWI2MDAtNGI0Zi1iYzg1LWI0N2I3OGYxNjM0NSJ9'

function App() {
  return (
    <div className="portfolio" id="top">
      <header
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(4, 16, 44, 0.82), rgba(4, 16, 44, 0.88)), url(${portfolioWallpaper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <nav className="navbar">
          <h2 className="logo">Tamrat Portfolio</h2>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="hero-layout">
          <div className="hero-content">
            <p className="intro">Hello, my name is</p>
            <h1>Tamrat</h1>
            <h2>Power BI Developer | Data Analyst | IT Support Professional</h2>
            <p className="hero-text">
              I develop Power BI dashboards, improve data quality, automate workflows,
              and troubleshoot Windows systems using SQL, Power Query, Power Automate,
              Active Directory, and Microsoft technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="hero-button">View My Work</a>
            </div>

            <div className="top-links">
              <a href="https://github.com/tamrat-dev-source" target="_blank" rel="noreferrer" className="top-link-btn">
                GitHub
              </a>
              <a href={sdlTaskDashboardPublicLink} target="_blank" rel="noreferrer" className="top-link-btn">
                SDL Live Dashboard
              </a>
              <a href={sdlcDashboardPublicLink} target="_blank" rel="noreferrer" className="top-link-btn">
                SDLC Live Dashboard
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img src={profileImage} alt="Tamrat profile" className="hero-image" />
          </div>
        </div>
      </header>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a Microsoft Certified Power BI Data Analyst Associate with experience in
          business intelligence, data analytics, workflow automation, and IT support.
          My work spans enterprise and nonprofit environments, including reporting for
          more than 1,000 projects and 10,000 tasks, data improvement across 15,200+
          records, and technical support for approximately 500 to 700 employees.
        </p>
        <p>
          I turn reporting requirements into Power BI dashboards, reliable datasets,
          and repeatable workflows. I also troubleshoot Windows systems, administer
          Active Directory accounts, and build documented technical projects using
          Windows Server, Hyper-V, React, and Vite.
        </p>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>

        <div className="project-card">
          <h3>Business Intelligence &amp; Power BI Development</h3>
          <p>
            Developed interactive dashboards, data models, and KPI reports for project
            and operational analysis. Delivered reporting for more than 1,000 projects
            and 10,000 tasks, with dynamic filters, task rankings, and project health
            indicators to support management decisions.
          </p>
          <p>
            <strong>Focus Areas:</strong> Power BI, DAX, Power Query, SQL, Semantic Modeling,
            Data Visualization, KPI Reporting, Dashboard Development
          </p>
        </div>

        <div className="project-card">
          <h3>Data Analytics &amp; Workflow Automation</h3>
          <p>
            Cleaned and validated more than 15,200 program records, resolving duplicates,
            missing values, and inconsistent identifiers. Redesigned intake forms and
            tested automated workflows linking forms and Excel. Reduced manual data
            reconciliation by an estimated 25% to 35%.
          </p>
          <p>
            <strong>Focus Areas:</strong> Excel, Data Cleaning, Data Quality, Power Automate,
            Jotform, ETL/ELT, Workflow Design, Process Improvement
          </p>
        </div>

        <div className="project-card">
          <h3>IT Support &amp; Systems Administration</h3>
          <p>
            Supported Windows and Microsoft 365 users in environments serving hundreds
            of employees, handling approximately 40 to 60 incidents and service requests
            weekly. Troubleshot authentication, software, network, and device issues.
            Performed Active Directory account administration and documented resolutions.
          </p>
          <p>
            <strong>Focus Areas:</strong> Windows, Active Directory, Microsoft 365,
            ServiceNow, Zendesk, NinjaOne, Hudu, PowerShell, Incident Management
          </p>
        </div>

        <div className="project-card">
          <h3>Technical Collaboration &amp; Problem Solving</h3>
          <p>
            Worked with business stakeholders, technical teams, and end users to define
            requirements, investigate issues, validate results, and document solutions.
            Improved the consistency of reporting processes, technical support, and
            operational workflows through structured testing and clear communication.
          </p>
          <p>
            <strong>Focus Areas:</strong> Requirements Gathering, Troubleshooting,
            Stakeholder Communication, Data Validation, Technical Documentation,
            Quality Assurance
          </p>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Daxios – Gamified DAX Learning App</h3>
          <p>
            Built a web first gamified DAX learning platform for Power BI developers and data analysts featuring
            interactive lessons, scenario based quizzes, DAX formula practice, XP progression, streaks, badges,
            Formula Helper, Formula Notebook, and DAX debugging challenges. Developed the Version 1 Beginner Zone
            with 8 structured lessons covering DAX fundamentals, SUM, AVERAGE, COUNT, COUNTA, IF logic, measures,
            calculated columns, KPI cards, and the Beginner DAX Badge challenge.
          </p>
          <p>
            <strong>Tools:</strong> Power BI, DAX, React Native, Expo, TypeScript, JavaScript, GitHub, Playwright,
            VS Code, Product Design, UX Design, Frontend Testing
          </p>
          <p>
            <strong>Impact:</strong> Developed a production style learning platform featuring 8 structured beginner
            lessons, randomized quiz logic, 80 percent progression rules, retry based learning, Formula Helper,
            Formula Notebook, Mistake Detective, badge progression, responsive web design, and a validated regression
            suite with 140 passing Playwright tests.
          </p>

          <div className="project-links">
            <a href="https://github.com/tamrat-dev-source/my-portfolio/blob/main/src/projects/daxios-gamified-dax-learning-app/README.md" target="_blank" rel="noopener noreferrer" className="project-link">
              View Full Project
            </a>
            <a href="https://github.com/tamrat-dev-source/Daxios" target="_blank" rel="noopener noreferrer" className="project-link">
              View GitHub App Repo
            </a>
          </div>

          <div className="project-image-grid">
            <a href={daxiosHome} target="_blank" rel="noreferrer">
              <img src={daxiosHome} alt="Daxios Home screen" className="project-image" />
            </a>
            <a href={daxiosBeginnerZone} target="_blank" rel="noreferrer">
              <img src={daxiosBeginnerZone} alt="Daxios Beginner Zone Roadmap" className="project-image" />
            </a>
            <a href={daxiosFormulaHelper} target="_blank" rel="noreferrer">
              <img src={daxiosFormulaHelper} alt="Daxios Formula Helper" className="project-image" />
            </a>
            <a href={daxiosFormulaNotebook} target="_blank" rel="noreferrer">
              <img src={daxiosFormulaNotebook} alt="Daxios Formula Notebook" className="project-image" />
            </a>
            <a href={daxiosMistakeDetective} target="_blank" rel="noreferrer">
              <img src={daxiosMistakeDetective} alt="Daxios Mistake Detective" className="project-image" />
            </a>
          </div>
        </div>

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
          <div className="project-links">
            <a href={sdlTaskDashboardPublicLink} target="_blank" rel="noreferrer" className="project-link-btn">
              Live Power BI Dashboard
            </a>
          </div>
          <div className="project-image-wrapper">
            <a href={sdlTaskDashboardPublicLink} target="_blank" rel="noreferrer">
              <img src={sdlDashboardImage} alt="SDL Project Health and Task Analysis Dashboard" className="project-image" />
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
          <div className="project-links">
            <a href={sdlcDashboardPublicLink} target="_blank" rel="noreferrer" className="project-link-btn">
              Live Power BI Dashboard
            </a>
          </div>
          <div className="project-image-wrapper">
            <a href={sdlcDashboardPublicLink} target="_blank" rel="noreferrer">
              <img src={sdlcDashboardImage} alt="SDLC Project Health Indicator Dashboard" className="project-image" />
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
            <a href="https://github.com/tamrat-dev-source/my-portfolio/blob/main/src/projects/bank-loan-portfolio-analytics-dashboard/README.md" target="_blank" rel="noopener noreferrer" className="project-link">
              View Full Project
            </a>
          </div>

          <div className="project-image-grid">
            <a href={bankLoanDashboard1} target="_blank" rel="noreferrer">
              <img src={bankLoanDashboard1} alt="Bank Loan Dashboard View 1" className="project-image" />
            </a>
            <a href={bankLoanDashboard2} target="_blank" rel="noreferrer">
              <img src={bankLoanDashboard2} alt="Bank Loan Dashboard View 2" className="project-image" />
            </a>
            <a href={bankLoanDashboard3} target="_blank" rel="noreferrer">
              <img src={bankLoanDashboard3} alt="Bank Loan Dashboard View 3" className="project-image" />
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>Book Distribution Impact Dashboard</h3>
          <p>
            Built an end-to-end Power BI dashboard to analyze book distribution performance across low-income families,
            tracking children served, total families, eligible families, eligibility rate, delivered shipments, and
            total books distributed. Designed interactive KPI monitoring, delivery breakdown analysis, family structure
            segmentation, and trend reporting to support program visibility and operational insight.
          </p>
          <p>
            <strong>Tools:</strong> Power BI, DAX, Data Modeling, Interactive Reporting
          </p>
          <p>
            <strong>Impact:</strong> Improved visibility into eligibility, shipment outcomes, and distribution reach by
            transforming program data into a clear dashboard for monitoring service performance and identifying trends
            across households and delivery activity.
          </p>
          <div className="project-links">
            <a href={childBookDashboardPublicLink} target="_blank" rel="noreferrer" className="project-link-btn">
              Live Power BI Dashboard
            </a>
          </div>
          <div className="project-image-wrapper">
            <a href={childBookDashboardPublicLink} target="_blank" rel="noreferrer">
              <img src={childBookDashboard1} alt="Book Distribution Impact Dashboard" className="project-image" />
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>Windows Server 2022 Active Directory &amp; IT Support Home Lab</h3>
          <p>
            Built and validated a virtual enterprise-style IT support environment using Microsoft Hyper-V,
            Windows Server 2022, and a Windows 10 domain-joined client. Configured Active Directory Domain
            Services, DNS, DHCP, Group Policy, security groups, and shared network resources to simulate
            day-to-day help desk and junior systems administration responsibilities.
          </p>
          <p>
            <strong>Tools:</strong> Windows Server 2022, Windows 10, Hyper-V, Active Directory, DNS, DHCP,
            Group Policy, NTFS and Share Permissions, PowerShell, Command Prompt
          </p>
          <p>
            <strong>Verified Results:</strong> Connected DC01 and CLIENT01 through an internal virtual switch;
            validated client DHCP and DNS configuration, domain administration, departmental organizational
            units, security groups, and Group Policy drive mapping. Practiced password resets, disabled-account
            troubleshooting, and network share access validation.
          </p>

          <div className="project-links">
            <a
              href="https://github.com/tamrat-dev-source/windows-server-2022-it-support-homelab"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Full Project &amp; Technical Case Study
            </a>
          </div>

          <div className="project-image-wrapper">
            <a href={homeLabArchitecture} target="_blank" rel="noreferrer">
              <img
                src={homeLabArchitecture}
                alt="Verified Windows Server 2022 Home Lab network architecture diagram"
                className="project-image"
              />
            </a>
          </div>

          <div className="project-image-grid">
            <a href={homeLabActiveDirectory} target="_blank" rel="noreferrer">
              <img
                src={homeLabActiveDirectory}
                alt="Active Directory organizational units for IT, HR, and Finance"
                className="project-image"
              />
            </a>
            <a href={homeLabDhcpLease} target="_blank" rel="noreferrer">
              <img
                src={homeLabDhcpLease}
                alt="DHCP management showing CLIENT01's address lease"
                className="project-image"
              />
            </a>
            <a href={homeLabMappedDrive} target="_blank" rel="noreferrer">
              <img
                src={homeLabMappedDrive}
                alt="CLIENT01 displaying the mapped IT Shared Drive"
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
        <h2>Education & Certifications</h2>

        <div className="project-card">
          <h3>Bachelor's in Law LLB — (AAU) University</h3>
          <p>
            Earned a Bachelor of Laws (LLB) degree from Addis Ababa University (AAU) building a strong foundation in legal analysis,
            research, structured writing, critical reasoning, and professional communication.
          </p>
          <p>
            <strong>Value:</strong> Strengthens my ability to approach business and data problems with disciplined analysis,
            attention to detail, and clear communication — skills that also support reporting, stakeholder collaboration,
            and decision-making in analytics environments.
          </p>
        </div>

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
          <div className="cert-card-image">
            <a href={pl300Cert} target="_blank" rel="noreferrer">
              <img src={pl300Cert} alt="Microsoft PL-300 Certificate" className="cert-image" />
            </a>
          </div>
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
          <div className="cert-card-image">
            <a href={intelCert} target="_blank" rel="noreferrer">
              <img src={intelCert} alt="Intel Power BI Certificate" className="cert-image" />
            </a>
          </div>
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
          <div className="cert-card-image">
            <a href={uipathCert} target="_blank" rel="noreferrer">
              <img src={uipathCert} alt="UiPath Certificate" className="cert-image" />
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-category">
          <h3>Business Intelligence &amp; Reporting</h3>
          <div className="skills-list">
            <span>Power BI Desktop</span>
            <span>Power BI Service</span>
            <span>DAX</span>
            <span>Power Query</span>
            <span>SQL</span>
            <span>Excel</span>
            <span>Semantic Modeling</span>
            <span>Dimensional Modeling</span>
            <span>Row-Level Security</span>
            <span>KPI Design</span>
            <span>Executive Dashboards</span>
          </div>
        </div>

        <div className="skills-category">
          <h3>Data Engineering &amp; Automation</h3>
          <div className="skills-list">
            <span>Microsoft Fabric</span>
            <span>Azure Data Factory</span>
            <span>SQL Server</span>
            <span>Snowflake</span>
            <span>ETL/ELT</span>
            <span>Python</span>
            <span>Power Automate</span>
            <span>Power Apps</span>
            <span>UiPath</span>
            <span>Jotform</span>
            <span>Data Cleaning</span>
            <span>Workflow Improvement</span>
          </div>
        </div>

        <div className="skills-category">
          <h3>IT Support &amp; Systems Administration</h3>
          <div className="skills-list">
            <span>Windows 10/11</span>
            <span>Windows Server 2022</span>
            <span>Active Directory</span>
            <span>Group Policy</span>
            <span>Hyper-V</span>
            <span>DNS</span>
            <span>DHCP</span>
            <span>Microsoft 365</span>
            <span>PowerShell</span>
            <span>ServiceNow</span>
            <span>Zendesk</span>
            <span>NinjaOne</span>
            <span>Hudu</span>
            <span>Remote Troubleshooting</span>
          </div>
        </div>

        <div className="skills-category">
          <h3>Software Development &amp; Technical Tools</h3>
          <div className="skills-list">
            <span>React</span>
            <span>React Native</span>
            <span>Vite</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>Playwright</span>
            <span>Technical Documentation</span>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p className="contact-intro">
         I'm open to opportunities in Power BI development, data analytics, IT support, and workflow automation. I bring experience in business intelligence, technical troubleshooting, data management, and process improvement. Connect with me to discuss employment opportunities, technical projects, or professional collaboration.
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
            <a href="https://github.com/tamrat-dev-source" target="_blank" rel="noreferrer">
              github.com/tamrat-dev-source
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="footer-text">
         © 2026 Tamrat. Power BI Developer | Data Analyst | IT Support | Workflow Automation
        </p>
        <a href="#top" className="back-to-top">Back to Top ↑</a>
      </footer>
    </div>
  )
}

export default App