
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap');

/* =========================
   1. GLOBAL STYLES
========================= */

:root {
  --bg: #0b1718;
  --surface: #102223;
  --surface2: #142a2b;
  --text: #f2f8f6;
  --muted: #a1b6b1;
  --line: rgba(184, 224, 212, 0.13);
  --accent: #79f2c0;
  --accent2: #6dd7e8;
  --shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
  width: 100%;
  overflow-x: clip;
}

body {
  margin: 0;
  width: 100%;
  min-width: 320px;
  background: var(--bg);
  color: var(--text);
  font-family: 'Manrope', sans-serif;
  line-height: 1.65;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

button {
  -webkit-tap-highlight-color: transparent;
}

img,
video,
iframe {
  display: block;
  max-width: 100%;
}

button,
input,
textarea,
a {
  -webkit-tap-highlight-color: transparent;
}

.container {
  width: min(1120px, calc(100% - 44px));
  margin-inline: auto;
}

.background-glow {
  position: absolute;
  pointer-events: none;
  filter: blur(80px);
  opacity: 0.15;
  border-radius: 50%;
  z-index: -1;
}

.glow-one {
  width: 380px;
  height: 380px;
  background: #19b98a;
  top: 180px;
  left: -160px;
}

.glow-two {
  width: 340px;
  height: 340px;
  background: #287b9b;
  top: 750px;
  right: -180px;
}

/* =========================
   2. NAVIGATION
========================= */

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(11, 23, 24, 0.92);
  -webkit-backdrop-filter: blur(18px);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--line);
}

.navbar {
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  font-weight: 800;
  letter-spacing: -0.04em;
  font-size: 1.05rem;
}

.brand-mark {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: var(--accent);
  color: #09201a;
  border-radius: 10px;
  font-weight: 800;
}

.brand-dot {
  color: var(--accent);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
  color: var(--muted);
  font-size: 0.84rem;
}

.nav-links a {
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--accent);
}

.nav-contact {
  border: 1px solid var(--line);
  padding: 9px 13px;
  border-radius: 10px;
  color: var(--text) !important;
}

.nav-contact:hover {
  border-color: var(--accent);
}

.theme-toggle,
.menu-toggle {
  border: 1px solid var(--line);
  color: var(--text);
  background: var(--surface);
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 11px;
  cursor: pointer;
  display: grid;
  place-items: center;
}

.menu-toggle {
  display: none;
}

/* =========================
   3. HERO SECTION
========================= */

.hero {
  min-height: 650px;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
  align-items: center;
  gap: 50px;
  padding-top: 64px;
  padding-bottom: 92px;
  position: relative;
}

.hero-copy,
.hero-visual {
  min-width: 0;
}

.eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.13em;
  color: var(--accent);
  margin: 0 0 18px;
}

.status-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 12px var(--accent);
  margin-right: 8px;
}

.hero h1 {
  font-size: clamp(2.7rem, 5.2vw, 4.8rem);
  letter-spacing: -0.065em;
  line-height: 1.12;
  margin: 0;
  max-width: 650px;
  overflow-wrap: break-word;
}

.gradient-text {
  background: linear-gradient(105deg, var(--accent), var(--accent2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-description {
  max-width: 560px;
  color: var(--muted);
  font-size: 1.02rem;
  margin: 25px 0 28px;
}

.hero-description strong {
  color: var(--text);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 13px 18px;
  font-weight: 800;
  font-size: 0.86rem;
  line-height: 1.5;
  cursor: pointer;
  text-align: center;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.button:hover {
  transform: translateY(-2px);
  filter: brightness(1.07);
}

.button-primary {
  background: var(--accent);
  color: #09201a;
}

.button-secondary {
  border-color: var(--line);
  background: rgba(255, 255, 255, 0.025);
  color: var(--text);
}

.hero-facts {
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  margin-top: 44px;
}

.hero-facts div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.hero-facts strong {
  font-size: 1rem;
}

.hero-facts span {
  font-size: 0.75rem;
  color: var(--muted);
}

/* =========================
   4. HERO ILLUSTRATION
========================= */

.hero-visual {
  min-height: 390px;
  display: grid;
  place-items: center;
  position: relative;
}

.profile-card {
  width: min(100%, 390px);
  background: linear-gradient(145deg, #163031, #0e1c1e);
  border: 1px solid rgba(121, 242, 192, 0.25);
  border-radius: 22px;
  box-shadow: var(--shadow);
  transform: rotate(2deg);
  position: relative;
  z-index: 2;
  overflow: hidden;
}

.profile-top {
  min-height: 48px;
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 16px;
}

.profile-top > span {
  width: 7px;
  height: 7px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #4d716b;
}

.profile-top p {
  font: 0.67rem 'DM Mono', monospace;
  color: var(--muted);
  margin: 0 0 0 12px;
}

.code-art {
  padding: 30px 25px 38px;
  font: clamp(0.68rem, 1.3vw, 0.9rem)/2 'DM Mono', monospace;
  color: #d9e9e4;
  overflow-wrap: anywhere;
}

.code-art p {
  margin: 0;
}

.code-art .indent {
  padding-left: 22px;
}

.code-purple {
  color: #d0a6ff;
}

.code-blue {
  color: #8ddfff;
}

.code-green {
  color: #a6efad;
}

.code-comment {
  color: #6e9990;
  margin-top: 17px !important;
  font-size: 0.72rem;
  overflow-wrap: anywhere;
}

.orbit {
  position: absolute;
  border: 1px solid rgba(121, 242, 192, 0.2);
  border-radius: 50%;
  pointer-events: none;
}

.orbit-large {
  width: 360px;
  height: 360px;
}

.orbit-small {
  width: 270px;
  height: 270px;
  border-style: dashed;
}

.floating-chip {
  position: absolute;
  max-width: 90%;
  background: #1b3736;
  border: 1px solid rgba(121, 242, 192, 0.25);
  padding: 10px 13px;
  border-radius: 12px;
  font-size: 0.72rem;
  font-weight: 700;
  box-shadow: var(--shadow);
  z-index: 3;
}

.chip-one {
  top: 64px;
  right: -8px;
}

.chip-two {
  bottom: 43px;
  left: -12px;
}

.scroll-cue {
  position: absolute;
  bottom: 28px;
  left: 0;
  font: 0.66rem 'DM Mono', monospace;
  letter-spacing: 0.1em;
  color: var(--muted);
}

.scroll-cue span {
  color: var(--accent);
  margin-left: 8px;
}

/* =========================
   5. SECTION HEADINGS
========================= */

.section {
  padding-top: 92px;
  padding-bottom: 44px;
}

.section-heading {
  margin-bottom: 34px;
}

.section-heading h2,
.contact-inner h2 {
  font-size: clamp(2rem, 4vw, 3.15rem);
  letter-spacing: -0.055em;
  line-height: 1.2;
  margin: 0;
  overflow-wrap: break-word;
}

.section-intro {
  color: var(--muted);
  max-width: 600px;
  margin: 15px 0 0;
  font-size: 0.94rem;
}

/* =========================
   6. ABOUT SECTION
========================= */

.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 28px;
}

.glass-panel {
  background: linear-gradient(
    145deg,
    rgba(21, 47, 47, 0.8),
    rgba(13, 29, 30, 0.85)
  );
  border: 1px solid var(--line);
  border-radius: 18px;
}

.about-panel {
  min-width: 0;
  padding: 30px;
}

.panel-icon {
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  border-radius: 13px;
  background: rgba(121, 242, 192, 0.12);
  color: var(--accent);
  font-size: 1.4rem;
}

.about-panel h3 {
  font-size: 1.3rem;
  margin: 20px 0 10px;
}

.about-panel p {
  font-size: 0.9rem;
  color: var(--muted);
}

.about-details {
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.detail-row {
  display: grid;
  grid-template-columns: 110px minmax(0, 1fr);
  gap: 16px;
  padding: 23px 0;
  border-bottom: 1px solid var(--line);
}

.detail-row:last-child {
  border-bottom: 0;
}

.detail-label {
  font: 0.67rem 'DM Mono', monospace;
  letter-spacing: 0.08em;
  color: var(--accent);
  padding-top: 4px;
}

.detail-row strong {
  font-size: 0.95rem;
  overflow-wrap: anywhere;
}

.detail-row p {
  margin: 5px 0 0;
  color: var(--muted);
  font-size: 0.82rem;
}

/* =========================
   7. SKILLS SECTION
========================= */

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.skill-card {
  min-width: 0;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 22px 19px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.skill-card:hover,
.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(121, 242, 192, 0.4);
}

.skill-symbol {
  display: grid;
  place-items: center;
  width: 39px;
  height: 39px;
  border-radius: 12px;
  background: rgba(121, 242, 192, 0.1);
  color: var(--accent);
  font-size: 1.1rem;
  font-weight: 800;
}

.skill-card h3 {
  font-size: 0.98rem;
  margin: 17px 0 4px;
  overflow-wrap: break-word;
}

.skill-card p {
  font-size: 0.77rem;
  color: var(--muted);
  margin: 0 0 18px;
}

.skill-track {
  height: 4px;
  background: #28403e;
  border-radius: 10px;
  overflow: hidden;
}

.skill-track span {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  border-radius: 10px;
}

.skill-card small {
  display: block;
  font-size: 0.68rem;
  color: var(--muted);
  margin-top: 11px;
}

.small-note {
  font-size: 0.72rem;
  color: var(--muted);
  margin-top: 18px;
}

/* =========================
   8. PROJECTS SECTION
========================= */

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.project-card {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--surface);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.project-featured {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.project-visual {
  min-height: 205px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #142f30;
}

.visual-organ {
  background: radial-gradient(circle at 50% 45%, #236b5d, #142d2d 68%);
}

.visual-colour {
  background: radial-gradient(circle at 70% 30%, #274d60, #142629 65%);
}

.visual-portfolio {
  background: radial-gradient(circle at 30% 70%, #275346, #122526 68%);
}

.visual-label {
  position: absolute;
  top: 17px;
  left: 19px;
  right: 12px;
  font: 0.62rem 'DM Mono', monospace;
  letter-spacing: 0.08em;
  color: #b6d8cf;
}

.visual-icon {
  font-size: 5rem;
  color: #9cf4ce;
  text-shadow: 0 0 40px rgba(121, 242, 192, 0.5);
}

.visual-caption {
  font: 0.72rem 'DM Mono', monospace;
  color: #b6d8cf;
  margin-top: 8px;
  text-align: center;
}

.colour-circles {
  display: flex;
  gap: 9px;
}

.colour-circles i {
  display: block;
  width: 48px;
  height: 75px;
  border-radius: 50%;
  background: linear-gradient(150deg, #7ddcc0, #1e6766);
  transform: rotate(22deg);
}

.colour-circles i:nth-child(2) {
  background: linear-gradient(150deg, #a8d5e5, #315c87);
  transform: rotate(-12deg);
}

.colour-circles i:nth-child(3) {
  background: linear-gradient(150deg, #f4cf8b, #c16b52);
  transform: rotate(16deg);
}

.colour-circles i:nth-child(4) {
  background: linear-gradient(150deg, #d8b6f2, #7b5aa5);
  transform: rotate(-18deg);
}

.mini-window {
  max-width: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 23px 27px;
  border: 1px solid rgba(121, 242, 192, 0.35);
  border-radius: 12px;
  background: rgba(9, 25, 25, 0.65);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.2);
}

.mini-window b {
  font-size: 1rem;
}

.mini-window span {
  font-size: 0.72rem;
  color: var(--muted);
}

.mini-window i {
  height: 4px;
  width: 65%;
  border-radius: 4px;
  background: var(--accent);
  margin-top: 8px;
}

.project-content {
  min-width: 0;
  padding: 23px;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: var(--accent);
  font: 0.62rem 'DM Mono', monospace;
  flex-wrap: wrap;
}

.project-content h3 {
  font-size: 1.12rem;
  margin: 13px 0 8px;
  overflow-wrap: break-word;
}

.project-content p {
  font-size: 0.83rem;
  color: var(--muted);
  margin: 0 0 17px;
}

.text-link {
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--accent);
}

.text-link:hover {
  text-decoration: underline;
}

/* =========================
   9. CERTIFICATES
========================= */

.certificate-list {
  border-top: 1px solid var(--line);
}

.certificate-item {
  display: flex;
  align-items: center;
  gap: 17px;
  padding: 22px 5px;
  border-bottom: 1px solid var(--line);
}

.certificate-icon {
  width: 43px;
  height: 43px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 13px;
  background: rgba(121, 242, 192, 0.1);
  color: var(--accent);
  font-size: 1.25rem;
}

.certificate-item > div:nth-child(2) {
  flex: 1;
  min-width: 0;
}

.certificate-item h3 {
  font-size: 0.98rem;
  margin: 0 0 3px;
  overflow-wrap: break-word;
}

.certificate-item p {
  font-size: 0.8rem;
  color: var(--muted);
  margin: 0;
}

.certificate-item span:not(.certificate-arrow) {
  font-size: 0.69rem;
  color: #78948d;
}

.certificate-arrow {
  flex-shrink: 0;
  font-size: 1.2rem;
  color: var(--accent);
}

/* =========================
   10. CONTACT SECTION
========================= */

.contact-section {
  margin-top: 95px;
  padding: 80px 0;
  background: linear-gradient(
    120deg,
    rgba(24, 70, 60, 0.38),
    rgba(12, 30, 32, 0.2)
  );
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.contact-inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr);
  gap: 70px;
  align-items: center;
}

.contact-inner h2 {
  font-size: clamp(2.3rem, 4vw, 3.5rem);
}

.contact-links {
  display: flex;
  gap: 21px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.contact-links a {
  font-size: 0.82rem;
  color: var(--muted);
  border-bottom: 1px solid var(--line);
  padding-bottom: 5px;
}

.contact-links a span {
  color: var(--accent);
  margin-left: 5px;
}

.contact-form {
  min-width: 0;
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.contact-form label {
  font-size: 0.76rem;
  font-weight: 700;
  margin-top: 4px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  min-width: 0;
  background: rgba(3, 14, 15, 0.4);
  border: 1px solid var(--line);
  border-radius: 9px;
  padding: 12px;
  color: var(--text);
  outline: none;
  resize: vertical;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--accent);
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #708b84;
  font-size: 0.8rem;
}

.submit-button {
  margin-top: 8px;
}

.form-note {
  font-size: 0.68rem;
  color: var(--muted);
  margin: 3px 0 0;
}

/* =========================
   11. FOOTER
========================= */

.site-footer {
  padding: 25px 0;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  color: var(--muted);
  font-size: 0.72rem;
}

.footer-inner p {
  margin: 0;
}

/* =========================
   12. LIGHT THEME
========================= */

body.light-theme {
  --bg: #f4faf7;
  --surface: #ffffff;
  --surface2: #e9f4ef;
  --text: #142b29;
  --muted: #526d66;
  --line: rgba(27, 76, 65, 0.15);
  --shadow: 0 24px 70px rgba(22, 67, 54, 0.12);
}

body.light-theme .site-header {
  background: rgba(244, 250, 247, 0.94);
}

body.light-theme .profile-card {
  background: linear-gradient(145deg, #e1f5eb, #f5fbf8);
}

body.light-theme .code-art {
  color: #203c36;
}

body.light-theme .profile-top p,
body.light-theme .code-comment {
  color: #66847b;
}

body.light-theme .floating-chip {
  background: #e5f5ed;
}

body.light-theme .project-visual {
  filter: saturate(0.85);
}

body.light-theme .contact-form input,
body.light-theme .contact-form textarea {
  background: #f7fcf9;
  color: var(--text);
}

body.light-theme .glass-panel {
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.95),
    rgba(232, 246, 239, 0.9)
  );
}

/* =========================
   13. TABLET RESPONSIVENESS
========================= */

@media (max-width: 1000px) {
  .hero {
    gap: 28px;
  }

  .nav-links {
    gap: 15px;
  }

  .contact-inner {
    gap: 35px;
  }

  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 850px) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
    padding-top: 65px;
    padding-bottom: 85px;
  }

  .hero-copy {
    max-width: 720px;
  }

  .hero-visual {
    min-height: 360px;
    margin-top: 10px;
  }

  .scroll-cue {
    bottom: 20px;
  }

  .about-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .contact-inner {
    grid-template-columns: minmax(0, 1fr);
    gap: 35px;
  }

  .nav-links {
    gap: 12px;
    font-size: 0.78rem;
  }

  .project-featured {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* =========================
   14. MOBILE NAVIGATION
========================= */

@media (max-width: 700px) {
  .navbar {
    min-height: 67px;
  }

  .menu-toggle {
    display: grid;
    margin-left: auto;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 18px 22px 22px;
    background: var(--bg);
    border-bottom: 1px solid var(--line);
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    font-size: 0.9rem;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    padding: 7px 5px;
  }

  .nav-contact {
    width: fit-content;
  }

  .theme-toggle {
    align-self: flex-start;
  }
}

/* =========================
   15. SMALL MOBILE SCREENS
========================= */

@media (max-width: 620px) {
  .container {
    width: calc(100% - 32px);
  }

  .hero {
    min-height: auto;
    padding-top: 48px;
    padding-bottom: 85px;
  }

  .hero h1 {
    font-size: clamp(2.4rem, 10vw, 3.6rem);
    line-height: 1.13;
  }

  .hero-description {
    font-size: 0.92rem;
  }

  .hero-actions {
    align-items: stretch;
  }

  .hero-actions .button {
    max-width: 100%;
  }

  .hero-facts {
    gap: 20px;
    margin-top: 32px;
  }

  .hero-facts span {
    font-size: 0.67rem;
  }

  .hero-visual {
    min-height: 330px;
    margin-top: 10px;
  }

  .profile-card {
    width: calc(100% - 20px);
  }

  .code-art {
    padding: 24px 16px 30px;
    font-size: 0.7rem;
  }

  .orbit-large {
    width: 300px;
    height: 300px;
  }

  .orbit-small {
    width: 235px;
    height: 235px;
  }

  .chip-one {
    right: 0;
    top: 35px;
  }

  .chip-two {
    left: 0;
    bottom: 25px;
  }

  .section {
    padding-top: 65px;
    padding-bottom: 35px;
  }

  .section-heading {
    margin-bottom: 26px;
  }

  .section-heading h2 {
    font-size: clamp(1.9rem, 8vw, 2.7rem);
  }

  .about-panel {
    padding: 23px;
  }

  .detail-row {
    grid-template-columns: 85px minmax(0, 1fr);
    gap: 10px;
    padding: 20px 0;
  }

  .detail-row strong {
    font-size: 0.88rem;
  }

  .skills-grid,
  .projects-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .skill-card {
    padding: 22px;
  }

  .project-featured {
    grid-column: auto;
    display: block;
  }

  .project-visual {
    min-height: 190px;
  }

  .project-content {
    padding: 20px;
  }

  .certificate-item {
    align-items: flex-start;
    gap: 12px;
  }

  .certificate-item h3 {
    font-size: 0.88rem;
  }

  .certificate-arrow {
    display: none;
  }

  .contact-section {
    margin-top: 65px;
    padding: 60px 0;
  }

  .contact-inner h2 {
    font-size: clamp(2.2rem, 9vw, 3rem);
  }

  .contact-form {
    padding: 20px;
  }

  .footer-inner {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .footer-inner p {
    order: 3;
    width: 100%;
  }
}

/* =========================
   16. VERY SMALL SCREENS
========================= */

@media (max-width: 380px) {
  .container {
    width: calc(100% - 24px);
  }

  .brand {
    gap: 7px;
    font-size: 0.92rem;
  }

  .hero h1 {
    font-size: 2.25rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-actions .button {
    width: 100%;
  }

  .hero-facts {
    gap: 14px;
  }

  .orbit-large {
    width: 260px;
    height: 260px;
  }

  .orbit-small {
    width: 215px;
    height: 215px;
  }

  .floating-chip {
    font-size: 0.64rem;
    padding: 8px 10px;
  }

  .detail-row {
    grid-template-columns: 1fr;
    gap: 5px;
  }

  .project-meta {
    flex-direction: column;
    gap: 6px;
  }
}

/* =========================
   17. ACCESSIBILITY
========================= */

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
