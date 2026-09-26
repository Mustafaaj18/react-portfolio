import { NavLink, Routes, Route, Link, useNavigate } from "react-router-dom";

// Portfolio projects
const projects = [
  {
    title: "Library Booking Website",
    category: "Web Development",
    image: "/images/library-booking.png",
    description:
      "A fictional website concept that allows visitors to browse library resources, view available study spaces, and request a booking.",
    role: "Designed the page structure and planned the user-friendly booking flow.",
    outcome: "Created a clean prototype concept with straightforward navigation."
  },
  {
    title: "Weather Dashboard",
    category: "Web Development",
    image: "/images/weather-dashboard.png",
    description:
      "A fictional dashboard concept that presents weather conditions, temperatures, and a short forecast in an easy-to-read layout.",
    role: "Planned the dashboard layout and organized the information for quick viewing.",
    outcome: "Created a responsive interface concept focused on clarity and usability."
  },
  {
    title: "Event Planner",
    category: "Application Project",
    image: "/images/event-planner.png",
    description:
      "A fictional application concept for organizing events, managing dates, and keeping track of event details.",
    role: "Designed the interface and planned the basic application workflow.",
    outcome: "Produced a simple project concept that can be expanded with additional features."
  }
];

function Layout({ children }) {
  return (
    <div className="site">
      <header className="navbar">
        <Link className="brand" to="/">
          <span className="logo">AJ</span>
          <span>AJ Morgan</span>
        </Link>

        {/* Main navigation menu */}
        <nav className="nav-links" aria-label="Main navigation">
          {[
            ["Home", "/"],
            ["About Me", "/about"],
            ["Projects", "/projects"],
            ["Education", "/education"],
            ["Services", "/services"],
            ["Contact Me", "/contact"]
          ].map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <p>© 2026 AJ Morgan. Portfolio Website.</p>
        <p>Software Engineering Technician • Toronto, Ontario</p>
      </footer>
    </div>
  );
}
// Home page with a welcome message and portfolio mission.

function Home() {
  return (
    <section className="hero page-section">
      <div className="hero-copy">
        <p className="eyebrow">SOFTWARE ENGINEERING TECHNICIAN</p>

        <h1>Building simple ideas into useful digital experiences.</h1>

        <p className="lead">
          Welcome to my portfolio. I’m AJ Morgan, a student developer interested
          in web development, programming, and creative technology.
        </p>

        <div className="button-row">
          <Link className="button primary" to="/about">
            About Me
          </Link>

          <Link className="button secondary" to="/projects">
            View Projects
          </Link>
        </div>
      </div>

      <div className="hero-card">
        <div className="avatar large">AJ</div>

        <h2>My Mission</h2>

        <p>
          My mission is to keep learning, build practical software, and create
          clean experiences that solve real problems.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="page-section narrow">
      <SectionTitle eyebrow="ABOUT ME" title="A little about me." />

      <div className="about-grid">
        <div className="profile-placeholder">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="profile-image"
          />
        </div>

        <div>
          <h2>AJ Morgan</h2>

          <p>
            I am a Software Engineering Technician student at Centennial
            College. I enjoy learning how software works and building projects
            that combine programming, design, and problem solving.
          </p>

          <p>
            My current interests include front-end development, Python,
            JavaScript, React, and interactive digital projects. I am focused on
            developing practical skills that can support a future career in
            software and web development.
          </p>

          <div className="info-list">
            <div>
              <strong>Location</strong>
              <span>Toronto, Ontario</span>
            </div>

            <div>
              <strong>Program</strong>
              <span>Software Engineering Technician</span>
            </div>

            <div>
              <strong>Graduation</strong>
              <span>2027</span>
            </div>

            <div>
              <strong>Email</strong>
              <span>aj@gmail.com</span>
            </div>
          </div>

          <a
            className="button primary"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Resume PDF
          </a>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="page-section">
      <SectionTitle
        eyebrow="PROJECTS"
        title="Projects I have worked on."
      />

      <div className="project-grid">
        {projects.map((project) => (
          <article className="card project-card" key={project.title}>

            {/* Project image */}
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <span className="tag">{project.category}</span>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <h3>My Role</h3>
            <p>{project.role}</p>

            <h3>Outcome</h3>
            <p>{project.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="page-section narrow">
      <SectionTitle
        eyebrow="EDUCATION"
        title="Education & qualifications."
      />

      <div className="timeline">
        <article className="timeline-item">
          <div className="timeline-dot" />

          <span className="date">2025 — 2027</span>

          <h2>Software Engineering Technician</h2>

          <h3>Centennial College</h3>

          <p>
            Diploma program focused on software development, programming,
            databases, web technologies, and practical application development.
          </p>
        </article>

        <article className="timeline-item">
          <div className="timeline-dot" />

          <span className="date">Current Skills Development</span>

          <h2>Programming & Web Development</h2>

          <h3>Practical Learning</h3>

          <p>
            Building projects with Python, C, JavaScript, HTML/CSS, SQL, Linux,
            GitHub, and Jira while developing problem-solving and teamwork
            skills.
          </p>
        </article>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    [
      "01",
      "Web Development",
      "Responsive websites using HTML, CSS, JavaScript, and React."
    ],
    [
      "02",
      "Front-End Development",
      "Clean interfaces with reusable components and user-friendly layouts."
    ],
    [
      "03",
      "Python Programming",
      "Basic scripting, application logic, and automation concepts."
    ],
    [
      "04",
      "Database Development",
      "Basic SQL and structured data concepts for application projects."
    ],
    [
      "05",
      "UI Design",
      "Simple, modern layouts focused on readability and usability."
    ],
    [
      "06",
      "Project Support",
      "GitHub-based project organization and collaborative development."
    ]
  ];

  return (
    <section className="page-section">
      <SectionTitle
        eyebrow="SERVICES"
        title="What I can help with."
      />

      <div className="service-grid">
        {services.map(([number, title, text]) => (
          <article className="card service-card" key={number}>
            <span className="service-number">{number}</span>

            <h2>{title}</h2>

            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const navigate = useNavigate();

  // Handle the contact form and return the user to the Home page.
  function handleSubmit(event) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <section className="page-section narrow">
      <SectionTitle
        eyebrow="CONTACT ME"
        title="Let’s connect."
      />

      <div className="contact-grid">
        <div className="contact-panel">
          <h2>Contact Information</h2>

          <p>
            If you would like to discuss a project or opportunity, send me a
            message.
          </p>

          <div className="contact-detail">
            <strong>Email</strong>
            <span>aj@gmail.com</span>
          </div>

          <div className="contact-detail">
            <strong>Phone</strong>
            <span>902-0000000</span>
          </div>

          <div className="contact-detail">
            <strong>Location</strong>
            <span>Toronto, Ontario</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              First Name
              <input name="firstName" required />
            </label>

            <label>
              Last Name
              <input name="lastName" required />
            </label>
          </div>

          <label>
            Contact Number
            <input
              name="contactNumber"
              type="tel"
              required
            />
          </label>

          <label>
            Email Address
            <input
              name="email"
              type="email"
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="6"
              required
            />
          </label>

          <button className="button primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
    </div>
  );
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;