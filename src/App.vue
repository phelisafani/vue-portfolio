<script setup>
import { ref, onMounted } from 'vue'
import portrait from './assets/portrait.jpg'

// ---- Edit your content here ----
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const skillRows = [
  { label: 'Frontend', color: '#7dd3fc', tags: ['HTML', 'Bootstrap', 'JavaScript', 'Vue.js'] },
  { label: 'Backend', color: '#b8935a', tags: ['Python'] },
  { label: 'Database', color: '#a78bfa', tags: ['SQL', 'MySQL Workbench'] },
]

const projects = [
  {
    title: 'Commerce Redesign',
    desc: 'A property listings page with a clean, card-based layout for browsing homes — built with responsive design in mind.',
    tags: ['HTML', 'Bootstrap', 'JavaScript'],
    url: 'https://phelisafani.github.io/property-mini-listings/',
    linkText: 'View live site →',
  },
  {
    title: 'Real-Time Booking System',
    desc: 'Pawtopia — a pet care booking site with a clean, easy-to-navigate layout for scheduling appointments.',
    tags: ['Vue.js', 'Python', 'SQL'],
    url: 'https://phelisafani.github.io/Pawtopia/index.html',
    linkText: 'View live site →',
  },
  {
    title: 'Analytics Dashboard',
    desc: 'ModernTech Solutions — a company HR project with a clean, professional layout for presenting information.',
    tags: ['HTML', 'Bootstrap', 'JavaScript'],
    url: 'https://phelisafani.github.io/HR_Project/',
    linkText: 'View live site →',
  },
]

const resumeUrl = import.meta.env.BASE_URL + 'resume.pdf' // put your PDF in the public folder as resume.pdf

// ---- Behaviour ----
const menuOpen = ref(false)

onMounted(() => {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 }
  )
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
})
</script>

<template>
  <header class="site-nav">
    <div class="nav-inner">
      <a href="#top" class="monogram">P<span>.</span>F<small>Full-Stack Developer</small></a>
      <nav class="links" :class="{ open: menuOpen }">
        <a v-for="item in navItems" :key="item.href" :href="item.href" @click="menuOpen = false">{{ item.label }}</a>
      </nav>
      <a href="#contact" class="nav-cta">Let's talk</a>
      <button class="nav-toggle" aria-label="Toggle menu" @click="menuOpen = !menuOpen">☰</button>
    </div>
  </header>

  <section class="hero" id="top">
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <div class="eyebrow reveal">Student developer · open to internships</div>
        <h1 class="hero-name reveal">Building <em>the full stack,</em><br />end to end.</h1>
        <div class="hero-role reveal">
          Full-Stack Web Developer <span class="bar">/</span> Frontend <span class="bar">·</span> Backend
          <span class="bar">·</span> Cloud
        </div>
        <p class="hero-desc reveal">
          I'm training to design and build complete web products — from interface to database — with an emphasis on
          clean architecture and interfaces people actually enjoy using.
        </p>
        <div class="hero-actions reveal">
          <a href="#projects" class="btn btn-primary">View Projects →</a>
          <a href="#contact" class="btn btn-ghost">Get in Touch</a>
        </div>
        <div class="hero-stack-legend reveal">
          <div v-for="row in skillRows" :key="row.label" class="stack-chip">
            <span class="dot" :style="{ background: row.color }"></span>{{ row.label }}
          </div>
        </div>
      </div>

      <div class="hero-visual reveal">
        <div class="stack-layers" aria-hidden="true">
          <div class="stack-layer l1"></div>
          <div class="stack-layer l2"></div>
          <div class="stack-layer l3"></div>
          <div class="stack-layer l4"></div>
        </div>
        <div class="portrait-frame">
          <img :src="portrait" alt="Portrait of Phelisa Fani, Full-Stack Web Developer" />
          <div class="portrait-tag"><span class="ping"></span>Cape Town, South Africa</div>
        </div>
      </div>
    </div>
    <div class="scroll-cue"><span class="line"></span>Scroll</div>
  </section>

  <section class="about" id="about">
    <div class="wrap">
      <div class="section-head reveal"><div class="eyebrow">01 · About</div></div>
      <div class="about-grid">
        <p class="about-lede reveal">
          I care about the whole system — <em>not just the parts that are visible.</em> Good software is felt in the
          details of what's underneath.
        </p>
        <div class="about-body reveal">
          <p>
            I am Phelisa Fani, a full-stack web development student currently studying at Life Choices Academy (LCA)
            in Cape Town. I'm building my skills across responsive interfaces, REST APIs, databases, and the tools that
            ship it all — one project at a time.
          </p>
          <p>
            So far I'm most comfortable with HTML, Bootstrap, and JavaScript on the frontend, Vue.js for building
            interfaces, Python on the backend, and SQL with MySQL Workbench for working with data — and I'm growing my
            range with every project.
          </p>
          <div class="about-stats">
            <div><div class="stat-num">LCA</div><div class="stat-label">Studying At</div></div>
            <div><div class="stat-num">Cape Town</div><div class="stat-label">Based In</div></div>
            <div><div class="stat-num">Full-Stack</div><div class="stat-label">Focus Area</div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="skills" id="skills">
    <div class="wrap">
      <div class="section-head reveal">
        <h2 class="section-title">The stack, layer by layer.</h2>
        <p class="section-note">Here's what I've worked with so far, across each layer of a full-stack build.</p>
      </div>
      <div class="stack-rows reveal">
        <div v-for="row in skillRows" :key="row.label" class="stack-row">
          <div class="stack-row-label"><span class="dot" :style="{ background: row.color }"></span><span>{{ row.label }}</span></div>
          <div class="tags"><span v-for="tag in row.tags" :key="tag" class="tag">{{ tag }}</span></div>
        </div>
      </div>
    </div>
  </section>

  <section class="projects" id="projects">
    <div class="wrap">
      <div class="section-head reveal">
        <h2 class="section-title">Selected work.</h2>
        <p class="section-note">A few projects that show how I think through a problem end to end.</p>
      </div>
      <div class="project-list reveal">
        <div v-for="(p, i) in projects" :key="p.title" class="project-row">
          <div class="project-index">{{ String(i + 1).padStart(2, '0') }}</div>
          <div>
            <div class="project-title">
              <a :href="p.url" target="_blank" rel="noopener">{{ p.title }} <span class="project-arrow">↗</span></a>
            </div>
            <p class="project-desc">{{ p.desc }}</p>
          </div>
          <div class="project-meta">
            <div class="project-tags"><span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span></div>
            <a :href="p.url" class="project-link" target="_blank" rel="noopener">{{ p.linkText }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="experience" id="education">
    <div class="wrap">
      <div class="section-head reveal"><h2 class="section-title">Where I'm learning.</h2></div>
      <div class="timeline reveal">
        <div class="tl-item">
          <div class="tl-period">Current</div>
          <div>
            <div class="tl-role">Full-Stack Web Development</div>
            <div class="tl-org">Life Choices Academy (LCA) — Cape Town</div>
            <p class="tl-desc">
              Studying full-stack web development, covering frontend interfaces, backend logic, databases, and the
              fundamentals of shipping a complete web application.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="contact" id="contact">
    <div class="wrap">
      <div class="eyebrow reveal">02 · Contact</div>
      <h2 class="contact-title reveal">Have a project in mind? <em>Let's build it properly.</em></h2>
      <a href="mailto:faniphelisa@outlook.com" class="contact-email reveal">faniphelisa@outlook.com</a>
      <div class="contact-links reveal">
        <a href="https://github.com/phelisafani" target="_blank" rel="noopener">GitHub</a>
        <a href="https://www.linkedin.com/in/phelisa-fani-51a91b417" target="_blank" rel="noopener">LinkedIn</a>
        <a :href="resumeUrl" target="_blank" rel="noopener">Resume (PDF)</a>
      </div>
      <footer class="site-footer">
        <span>© 2026 P.F. All rights reserved.</span>
        <span>Designed &amp; built by Phelisa Fani — Cape Town, South Africa</span>
      </footer>
    </div>
  </section>
</template>

<style>
:root{
    --ink:#12151c;
    --ink-soft:#1b202b;
    --bone:#f6f3ec;
    --bone-dim:#eae5d8;
    --brass:#b8935a;
    --brass-light:#d9bc8c;
    --slate:#8891a0;
    --charcoal:#1d212b;
    --ivory:#fbf9f4;
    --line-dark: rgba(246,243,236,0.12);
    --line-light: rgba(29,33,43,0.12);
    --ff-display: 'Fraunces', serif;
    --ff-body: 'Inter', sans-serif;
    --ff-mono: 'JetBrains Mono', monospace;
  }

  *{box-sizing:border-box; margin:0; padding:0;}
  html{scroll-behavior:smooth;}
  body{
    background:var(--ink);
    color:var(--ivory);
    font-family:var(--ff-body);
    line-height:1.6;
    -webkit-font-smoothing:antialiased;
    overflow-x:hidden;
  }

  a{color:inherit; text-decoration:none;}
  ul{list-style:none;}
  img{max-width:100%; display:block;}

  ::selection{background:var(--brass); color:var(--ink);}

  .wrap{
    max-width:1180px;
    margin:0 auto;
    padding:0 40px;
  }

  .eyebrow{
    font-family:var(--ff-mono);
    font-size:12.5px;
    letter-spacing:0.14em;
    text-transform:uppercase;
    color:var(--brass);
    display:flex;
    align-items:center;
    gap:10px;
  }
  .eyebrow::before{
    content:"";
    width:22px; height:1px;
    background:var(--brass);
    display:inline-block;
  }

  /* ============ NAV ============ */
  header.site-nav{
    position:fixed;
    top:0; left:0; right:0;
    z-index:100;
    background:rgba(18,21,28,0.72);
    backdrop-filter:blur(14px);
    -webkit-backdrop-filter:blur(14px);
    border-bottom:1px solid var(--line-dark);
  }
  .nav-inner{
    max-width:1180px;
    margin:0 auto;
    padding:18px 40px;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  .monogram{
    font-family:var(--ff-display);
    font-size:22px;
    font-weight:600;
    letter-spacing:0.02em;
    display:flex;
    align-items:baseline;
    gap:2px;
    color:var(--ivory);
  }
  .monogram span{color:var(--brass);}
  .monogram small{
    font-family:var(--ff-mono);
    font-size:10px;
    letter-spacing:0.16em;
    text-transform:uppercase;
    color:var(--slate);
    margin-left:10px;
    font-weight:400;
    display:inline-block;
    padding-top:2px;
  }
  nav.links{
    display:flex;
    gap:36px;
  }
  nav.links a{
    font-size:13.5px;
    letter-spacing:0.02em;
    color:var(--slate);
    position:relative;
    padding:4px 0;
    transition:color .25s ease;
  }
  nav.links a:hover, nav.links a:focus-visible{color:var(--ivory);}
  nav.links a::after{
    content:"";
    position:absolute; left:0; bottom:0;
    width:0; height:1px;
    background:var(--brass);
    transition:width .25s ease;
  }
  nav.links a:hover::after, nav.links a:focus-visible::after{width:100%;}

  .nav-cta{
    font-family:var(--ff-mono);
    font-size:12px;
    letter-spacing:0.06em;
    border:1px solid var(--brass);
    color:var(--brass-light);
    padding:9px 18px;
    border-radius:2px;
    transition:background .25s ease, color .25s ease;
  }
  .nav-cta:hover{background:var(--brass); color:var(--ink);}

  .nav-toggle{display:none; background:none; border:none; color:var(--ivory); font-size:22px; cursor:pointer;}

  /* ============ HERO ============ */
  section.hero{
    position:relative;
    min-height:100vh;
    display:flex;
    align-items:center;
    padding:140px 0 100px;
    overflow:hidden;
  }

  .hero-grid{
    display:grid;
    grid-template-columns:1.05fr 0.95fr;
    gap:60px;
    align-items:center;
    position:relative;
    z-index:2;
  }

  .hero-copy .eyebrow{margin-bottom:26px;}

  h1.hero-name{
    font-family:var(--ff-display);
    font-weight:500;
    font-size:clamp(44px, 5.6vw, 74px);
    line-height:1.02;
    letter-spacing:-0.01em;
    color:var(--ivory);
    margin-bottom:20px;
  }
  h1.hero-name em{
    font-style:italic;
    color:var(--brass-light);
    font-weight:400;
  }

  .hero-role{
    font-family:var(--ff-mono);
    font-size:16px;
    color:var(--slate);
    letter-spacing:0.02em;
    margin-bottom:28px;
  }
  .hero-role .bar{color:var(--brass);}

  p.hero-desc{
    max-width:460px;
    font-size:16.5px;
    color:#c7cbd4;
    margin-bottom:40px;
  }

  .hero-actions{
    display:flex;
    gap:16px;
    margin-bottom:56px;
  }
  .btn{
    font-family:var(--ff-mono);
    font-size:13px;
    letter-spacing:0.04em;
    padding:14px 26px;
    border-radius:2px;
    transition:transform .25s ease, background .25s ease, color .25s ease, border-color .25s ease;
    display:inline-flex;
    align-items:center;
    gap:8px;
  }
  .btn-primary{background:var(--brass); color:var(--ink); font-weight:500;}
  .btn-primary:hover{background:var(--brass-light); transform:translateY(-2px);}
  .btn-ghost{border:1px solid var(--line-dark); color:var(--ivory);}
  .btn-ghost:hover{border-color:var(--brass); color:var(--brass-light); transform:translateY(-2px);}

  .hero-stack-legend{
    display:flex;
    gap:28px;
    flex-wrap:wrap;
  }
  .stack-chip{
    font-family:var(--ff-mono);
    font-size:11.5px;
    color:var(--slate);
    display:flex;
    align-items:center;
    gap:8px;
    letter-spacing:0.03em;
  }
  .stack-chip .dot{width:7px; height:7px; border-radius:50%;}

  /* Portrait + stack-layer signature graphic */
  .hero-visual{
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .stack-layers{
    position:absolute;
    inset:0;
    z-index:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:14px;
    transform:translateX(6%);
  }
  .stack-layer{
    height:26px;
    border-radius:2px;
    opacity:0.85;
  }
  .stack-layer.l1{width:78%; background:linear-gradient(90deg, var(--brass), transparent); margin-left:auto; opacity:.55;}
  .stack-layer.l2{width:92%; background:linear-gradient(90deg, transparent, var(--brass-light)); opacity:.35;}
  .stack-layer.l3{width:70%; background:linear-gradient(90deg, var(--brass), transparent); margin-left:auto; opacity:.45;}
  .stack-layer.l4{width:85%; background:linear-gradient(90deg, transparent, var(--slate)); opacity:.3;}

  .portrait-frame{
    position:relative;
    z-index:2;
    width:360px;
    aspect-ratio:3/4;
    border-radius:4px;
    overflow:hidden;
    border:1px solid var(--line-dark);
    box-shadow:0 40px 80px -30px rgba(0,0,0,0.7);
  }
  .portrait-frame img{
    width:100%; height:100%;
    object-fit:cover;
    filter:grayscale(8%) contrast(1.03);
  }
  .portrait-frame::after{
    content:"";
    position:absolute; inset:0;
    background:linear-gradient(180deg, rgba(18,21,28,0) 55%, rgba(18,21,28,0.55) 100%);
  }
  .portrait-tag{
    position:absolute;
    bottom:18px; left:18px;
    z-index:3;
    font-family:var(--ff-mono);
    font-size:11px;
    letter-spacing:0.08em;
    text-transform:uppercase;
    color:var(--bone);
    display:flex;
    align-items:center;
    gap:8px;
  }
  .portrait-tag .ping{
    width:7px; height:7px; border-radius:50%;
    background:#6ee7a8;
    box-shadow:0 0 0 3px rgba(110,231,168,0.18);
  }

  .scroll-cue{
    position:absolute;
    bottom:36px; left:40px;
    display:flex;
    align-items:center;
    gap:12px;
    font-family:var(--ff-mono);
    font-size:11px;
    color:var(--slate);
    letter-spacing:0.1em;
    text-transform:uppercase;
    z-index:2;
  }
  .scroll-cue .line{width:36px; height:1px; background:var(--slate); position:relative; overflow:hidden;}
  .scroll-cue .line::after{
    content:"";
    position:absolute; left:-100%; top:0; bottom:0; width:100%;
    background:var(--brass);
    animation:scrollline 2.4s ease-in-out infinite;
  }
  @keyframes scrollline{ 0%{left:-100%;} 50%{left:0;} 100%{left:100%;} }

  /* ============ SECTION SHELLS ============ */
  section{padding:130px 0;}
  .section-head{
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    margin-bottom:64px;
    gap:40px;
    flex-wrap:wrap;
  }
  h2.section-title{
    font-family:var(--ff-display);
    font-weight:500;
    font-size:clamp(30px, 3.6vw, 44px);
    letter-spacing:-0.01em;
  }
  .section-note{
    max-width:340px;
    color:var(--slate);
    font-size:14.5px;
  }

  /* ============ ABOUT ============ */
  section.about{background:var(--ink-soft); border-top:1px solid var(--line-dark); border-bottom:1px solid var(--line-dark);}
  .about-grid{
    display:grid;
    grid-template-columns:0.9fr 1.1fr;
    gap:70px;
  }
  .about-lede{
    font-family:var(--ff-display);
    font-size:26px;
    font-weight:400;
    line-height:1.42;
    color:var(--ivory);
  }
  .about-lede em{color:var(--brass-light); font-style:italic;}
  .about-body p{color:#b6bcc7; font-size:15.5px; margin-bottom:18px;}
  .about-stats{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:24px;
    margin-top:34px;
    padding-top:34px;
    border-top:1px solid var(--line-dark);
  }
  .stat-num{
    font-family:var(--ff-display);
    font-size:32px;
    color:var(--brass-light);
  }
  .stat-label{
    font-family:var(--ff-mono);
    font-size:11px;
    color:var(--slate);
    letter-spacing:0.06em;
    text-transform:uppercase;
    margin-top:6px;
  }

  /* ============ SKILLS — stack layers ============ */
  .stack-rows{display:flex; flex-direction:column; gap:1px; background:var(--line-dark); border:1px solid var(--line-dark);}
  .stack-row{
    background:var(--ink);
    display:grid;
    grid-template-columns:220px 1fr;
    align-items:center;
    padding:26px 30px;
    gap:24px;
    transition:background .25s ease;
  }
  .stack-row:hover{background:var(--ink-soft);}
  .stack-row-label{
    display:flex;
    align-items:center;
    gap:12px;
  }
  .stack-row-label .dot{width:9px; height:9px; border-radius:50%; flex-shrink:0;}
  .stack-row-label span{
    font-family:var(--ff-mono);
    font-size:13px;
    letter-spacing:0.04em;
    text-transform:uppercase;
    color:var(--ivory);
  }
  .tags{display:flex; flex-wrap:wrap; gap:10px;}
  .tag{
    font-family:var(--ff-mono);
    font-size:12.5px;
    color:#c7cbd4;
    border:1px solid var(--line-dark);
    padding:7px 13px;
    border-radius:2px;
    letter-spacing:0.01em;
  }

  /* ============ PROJECTS ============ */
  section.projects{background:var(--ink);}
  .project-list{display:flex; flex-direction:column;}
  .project-row{
    display:grid;
    grid-template-columns:70px 1.3fr 1fr;
    gap:36px;
    padding:38px 0;
    border-top:1px solid var(--line-dark);
    align-items:start;
    transition:padding-left .3s ease;
  }
  .project-list .project-row:last-child{border-bottom:1px solid var(--line-dark);}
  .project-row:hover{padding-left:14px;}
  .project-index{
    font-family:var(--ff-mono);
    font-size:13px;
    color:var(--brass);
    padding-top:4px;
  }
  .project-title{
    font-family:var(--ff-display);
    font-size:26px;
    font-weight:500;
    margin-bottom:10px;
    display:flex;
    align-items:center;
    gap:12px;
  }
  .project-title a{transition:color .2s ease;}
  .project-title a:hover{color:var(--brass-light);}
  .project-arrow{
    font-size:16px;
    color:var(--brass);
    transition:transform .25s ease;
  }
  .project-row:hover .project-arrow{transform:translate(4px,-4px);}
  .project-desc{color:#aeb4c0; font-size:14.5px; max-width:480px;}
  .project-meta{display:flex; flex-direction:column; gap:14px; align-items:flex-start;}
  .project-tags{display:flex; flex-wrap:wrap; gap:8px;}
  .project-tags .tag{font-size:11.5px; padding:5px 10px;}
  .project-link{
    font-family:var(--ff-mono);
    font-size:12px;
    color:var(--slate);
    border-bottom:1px solid var(--line-dark);
    padding-bottom:2px;
  }
  .project-link:hover{color:var(--brass-light); border-color:var(--brass-light);}

  /* ============ EXPERIENCE ============ */
  section.experience{background:var(--ink-soft); border-top:1px solid var(--line-dark); border-bottom:1px solid var(--line-dark);}
  .timeline{display:flex; flex-direction:column;}
  .tl-item{
    display:grid;
    grid-template-columns:160px 1fr;
    gap:36px;
    padding:30px 0;
    border-top:1px solid var(--line-dark);
  }
  .timeline .tl-item:last-child{border-bottom:1px solid var(--line-dark);}
  .tl-period{
    font-family:var(--ff-mono);
    font-size:12.5px;
    color:var(--brass);
    letter-spacing:0.03em;
    padding-top:3px;
  }
  .tl-role{font-family:var(--ff-display); font-size:20px; margin-bottom:6px;}
  .tl-org{color:var(--slate); font-size:13.5px; margin-bottom:12px; font-family:var(--ff-mono);}
  .tl-desc{color:#b6bcc7; font-size:14.5px; max-width:600px;}

  /* ============ CONTACT / FOOTER ============ */
  section.contact{
    background:var(--ink);
    text-align:center;
    padding:150px 0 90px;
  }
  .contact .eyebrow{justify-content:center; margin-bottom:26px;}
  .contact .eyebrow::before{display:none;}
  h2.contact-title{
    font-family:var(--ff-display);
    font-weight:500;
    font-size:clamp(36px, 6vw, 64px);
    max-width:820px;
    margin:0 auto 40px;
    line-height:1.08;
  }
  h2.contact-title em{color:var(--brass-light); font-style:italic;}
  .contact-email{
    font-family:var(--ff-mono);
    font-size:18px;
    color:var(--ivory);
    display:inline-block;
    padding-bottom:6px;
    border-bottom:1px solid var(--brass);
    margin-bottom:56px;
    transition:color .25s ease;
  }
  .contact-email:hover{color:var(--brass-light);}
  .contact-links{
    display:flex;
    justify-content:center;
    gap:34px;
    margin-bottom:100px;
    font-family:var(--ff-mono);
    font-size:13px;
    color:var(--slate);
  }
  .contact-links a:hover{color:var(--ivory);}

  footer.site-footer{
    border-top:1px solid var(--line-dark);
    padding-top:28px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-family:var(--ff-mono);
    font-size:11.5px;
    color:var(--slate);
    letter-spacing:0.02em;
    flex-wrap:wrap;
    gap:12px;
  }

  /* ============ REVEAL ANIM ============ */
  .reveal{opacity:0; transform:translateY(22px); transition:opacity .7s ease, transform .7s ease;}
  .reveal.in{opacity:1; transform:translateY(0);}

  @media (prefers-reduced-motion: reduce){
    .reveal{opacity:1; transform:none; transition:none;}
    .scroll-cue .line::after{animation:none;}
  }

  /* ============ RESPONSIVE ============ */
  @media (max-width: 980px){
    .wrap{padding:0 26px;}
    .nav-inner{padding:16px 26px;}
    nav.links{
      position:fixed; top:64px; left:0; right:0;
      background:var(--ink-soft);
      flex-direction:column;
      padding:24px 26px;
      gap:20px;
      border-bottom:1px solid var(--line-dark);
      transform:translateY(-140%);
      transition:transform .3s ease;
    }
    nav.links.open{transform:translateY(0);}
    .nav-toggle{display:block;}
    .nav-cta{display:none;}

    .hero-grid{grid-template-columns:1fr; gap:70px;}
    .hero-visual{order:-1;}
    .portrait-frame{width:280px; margin:0 auto;}
    .stack-layers{display:none;}
    .hero-actions{flex-wrap:wrap;}
    .scroll-cue{display:none;}

    .about-grid{grid-template-columns:1fr; gap:40px;}
    .about-stats{grid-template-columns:repeat(3,1fr); gap:14px;}

    .stack-row{grid-template-columns:1fr; gap:14px;}
    .project-row{grid-template-columns:1fr; gap:16px;}
    .project-index{display:none;}
    .tl-item{grid-template-columns:1fr; gap:8px;}

    section{padding:90px 0;}
  }

</style>
