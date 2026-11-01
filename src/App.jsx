import './App.css'

const skills = [
  {
    title: 'Embedded Systems',
    items: ['Microcontrollers', 'Embedded C', 'Firmware', 'Sensor Interfacing'],
  },
  {
    title: 'Communication Protocols',
    items: ['UART', 'SPI', 'I2C', 'CAN'],
  },
  {
    title: 'IoT & Cloud',
    items: ['IoT Architecture', 'Grafana', 'Data Pipelines', 'Dashboards'],
  },
  {
    title: 'Core ECE',
    items: ['Advanced Communication Tech', 'Signal Processing', 'Wireless Systems'],
  },
]

const projects = [
  {
    tag: 'Cloud · IoT · Visualization',
    title: 'Cloud Data Thinning with Grafana Dashboard',
    desc: 'Reducing redundant cloud data through data thinning techniques, with real-time monitoring and visualization on a Grafana dashboard for efficient storage and analysis.',
    chips: ['Grafana', 'Cloud', 'Data Optimization'],
  },
  {
    tag: 'Embedded · Signal Processing',
    title: 'Baby Monitoring System via Cry Analysis',
    desc: 'An infant monitoring system that interprets a baby\'s cry to detect needs — hunger, anger, burping, and stomach pain — helping caregivers respond quickly and accurately.',
    chips: ['Cry Classification', 'Embedded', 'Sensors'],
  },
]

function App() {
  return (
    <>
      <nav className="nav">
        <a className="nav-logo" href="#top">AK<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <p className="hero-eyebrow">// hello world</p>
        <h1>
          Abiramy <span className="accent">K</span>
        </h1>
        <p className="hero-role">
          Final-year B.E. Electronics &amp; Communication Engineering student
          specializing in <strong>Advanced Communication Technology</strong> at
          Chennai Institute of Technology.
        </p>
        <p className="hero-sub">
          Passionate about embedded systems and IoT — building things that talk
          to each other, one protocol at a time.
        </p>
        <div className="protocol-chips">
          <span>UART</span>
          <span>SPI</span>
          <span>I²C</span>
          <span>CAN</span>
        </div>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn ghost" href="#contact">Get in Touch</a>
        </div>
      </header>

      <section className="section" id="about">
        <h2><span className="num">01.</span> About Me</h2>
        <div className="about-grid">
          <p>
            I'm a fourth-year Electronics and Communication Engineering student
            at Chennai Institute of Technology, specializing in Advanced
            Communication Technology. My interests sit at the intersection of
            hardware and software — embedded systems, IoT, and the protocols
            that make devices communicate: UART, SPI, I²C, and CAN.
          </p>
          <p>
            I enjoy turning signals into insight — whether that's compressing
            and visualizing cloud data on Grafana dashboards, or decoding an
            infant's cry into something meaningful for caregivers.
          </p>
        </div>
      </section>

      <section className="section" id="skills">
        <h2><span className="num">02.</span> What I Work With</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="card" key={s.title}>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <h2><span className="num">03.</span> Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project card" key={p.title}>
              <p className="project-tag">{p.tag}</p>
              <h3>{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-chips">
                {p.chips.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="education">
        <h2><span className="num">04.</span> Education</h2>
        <div className="card edu">
          <div>
            <h3>B.E. Electronics &amp; Communication Engineering</h3>
            <p>Specialization: Advanced Communication Technology</p>
          </div>
          <div className="edu-meta">
            <p className="edu-school">Chennai Institute of Technology</p>
            <p className="edu-year">Final Year · Class of 2026</p>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <h2><span className="num">05.</span> Let's Connect</h2>
        <p>
          I'm open to internships, collaborations, and opportunities in embedded
          systems and IoT. Reach out — I'd love to talk.
        </p>
        <div className="contact-links">
          <a className="btn primary" href="mailto:your.email@example.com">Email Me</a>
          <a className="btn ghost" href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn ghost" href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

      <footer className="footer">
        <p>Designed &amp; built by Abiramy K</p>
      </footer>
    </>
  )
}

export default App
