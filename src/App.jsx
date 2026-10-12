import { useEffect, useState } from 'react'
import { ArrowRight, Check, Menu, X } from 'lucide-react'
import {
  EXPERIENCE_TILES,
  FAQS,
  HERO_SLIDES,
  JOURNEY,
  NAV_LINKS,
  PROGRAMS,
} from './data'

const HERO_INTERVAL_MS = 2800

function Caption({ children }) {
  return <figcaption className="img-caption">{children}</figcaption>
}

export default function App() {
  const [heroIndex, setHeroIndex] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [selectedPrograms, setSelectedPrograms] = useState([])
  const [activeProgramId, setActiveProgramId] = useState(null)
  const [isSheet, setIsSheet] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const activeProgram = PROGRAMS.find((program) => program.id === activeProgramId) || null
  const drawerMedia = activeProgram?.media || []
  const drawerImages = []
  const seenDrawerImages = new Set()
  for (const item of drawerMedia) {
    if (item.type !== 'pair') continue
    ;(item.images || []).forEach((src, index) => {
      if (seenDrawerImages.has(src)) return
      seenDrawerImages.add(src)
      const caption =
        item.captions?.[index] ||
        item.caption ||
        `${activeProgram.university} campus`
      drawerImages.push({ src, caption })
    })
  }
  const drawerVideo = drawerMedia.find((item) => item.type === 'video') || null

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (reduceMotion) return undefined
    const id = window.setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_SLIDES.length)
    }, HERO_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 720px)')
    const sync = () => setIsSheet(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen || activeProgram ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, activeProgram])

  useEffect(() => {
    if (!activeProgram) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setActiveProgramId(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeProgram])

  const slide = HERO_SLIDES[heroIndex]
  const closeMenu = () => setMenuOpen(false)

  function toggleProgram(id) {
    setSelectedPrograms((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  function goToInterest(programId) {
    if (programId) {
      setSelectedPrograms((prev) => (prev.includes(programId) ? prev : [...prev, programId]))
    }
    document.querySelector('#interest')?.scrollIntoView({ behavior: 'smooth' })
  }

  function openDrawer(programId) {
    setActiveProgramId(programId)
  }

  function closeDrawer() {
    setActiveProgramId(null)
  }

  function markInterestFromDrawer() {
    const id = activeProgram?.id
    closeDrawer()
    if (id) goToInterest(id)
  }

  function onSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page">
      <header
        className={`nav ${scrolled ? 'nav-scrolled' : ''} ${menuOpen ? 'nav-menu-open' : ''}`}
      >
        <div className="nav-inner">
          <a className="brand" href="#top" aria-label="GradRight home">
            <img src="/figma/gradright-logo.svg" alt="GradRight" />
          </a>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary">
            <div className="nav-menu-list">
              {NAV_LINKS.map((link) => (
                <a key={link.href} className="nav-menu-item" href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className="nav-menu-actions">
              <a href="#programs" className="btn btn-primary" onClick={closeMenu}>
                Browse Programs
              </a>
              <a href="#interest" className="btn btn-secondary" onClick={closeMenu}>
                Talk to an Advisor
              </a>
            </div>
          </nav>
          <a href="#programs" className="btn btn-primary nav-cta">
            Browse Programs
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Variant change: full-bleed hero carousel */}
      <section className="hero hero-bleed" id="top">
        <div className="hero-bg" aria-hidden="true">
          {HERO_SLIDES.map((item, index) => (
            <figure key={item.src} className={`hero-slide ${index === heroIndex ? 'is-active' : ''}`}>
              <img src={item.src} alt="" />
              <div className="hero-scrim" />
            </figure>
          ))}
        </div>
        <div className="hero-inner">
          <h1>
            Your 2027 summer in the U.S. <em>sorted</em>
          </h1>
          <p className="hero-copy">
            Three faculty-led university immersions. Seven days. Real classrooms, real companies,
            and a whole new perspective on your field.
          </p>
          <div className="hero-actions">
            <a href="#programs" className="btn btn-primary">
              Explore Programs
            </a>
            <a href="#interest" className="btn btn-secondary">
              Talk to an advisor
            </a>
          </div>
        </div>
        <div className="hero-caption-bar" aria-live="polite">
          <p className="hero-caption-text">{slide.caption}</p>
          <div className="hero-dots" role="tablist" aria-label="Hero slides">
            {HERO_SLIDES.map((item, index) => (
              <button
                key={item.src}
                type="button"
                role="tab"
                aria-selected={index === heroIndex}
                aria-label={item.caption}
                className={index === heroIndex ? 'is-active' : ''}
                onClick={() => setHeroIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="Summer immersion overview">
        <div className="metrics-inner metrics-inner-stats">
          <div className="metric">
            <strong>03</strong>
            <span>Immersion Programs</span>
          </div>
          <div className="metric">
            <strong>02</strong>
            <span>U.S. Destinations</span>
          </div>
          <div className="metric">
            <strong>07</strong>
            <span>Day Experiences</span>
          </div>
          <div className="metric">
            <strong>2027</strong>
            <span>Summer</span>
          </div>
        </div>
      </section>

      <section className="programs" id="programs">
        <div className="programs-head">
          <h2>
            Choose your <em>immersion</em>
          </h2>
          <p>Three faculty-led programs across San Diego and New Orleans.</p>
        </div>
        <div className="programs-list">
          {PROGRAMS.map((program) => (
            <article className="program-card" key={program.id}>
              <div className="program-copy">
                <img
                  className={`program-logo${program.university === 'Tulane University' ? '' : ' program-logo-lg'}`}
                  src={program.logo}
                  alt={program.university}
                />
                <h2>{program.title}</h2>
                <p>{program.desc}</p>
                <div className="program-actions">
                  <button
                    type="button"
                    className={`btn btn-primary btn-cta-${program.cta}`}
                    onClick={() => openDrawer(program.id)}
                  >
                    View Program Details{' '}
                    <img src="/figma/arrow-right.svg" alt="" width={16} height={16} />
                  </button>
                  <div className="program-fee">
                    <span>Program Fee</span>
                    <strong>
                      {program.fee} <small>/ student</small>
                    </strong>
                  </div>
                </div>
              </div>
              <div className={`program-media ${program.accent}`}>
                <img src={program.image} alt={`${program.school} campus`} loading="lazy" />
                <div className="program-media-shade" aria-hidden="true" />
                <span className="program-date">{program.date}</span>
                <div className="program-badges">
                  {program.badges.map((badge) => (
                    <span className="glass-pill" key={badge}>
                      <img src="/figma/check-white.svg" alt="" width={12} height={12} />
                      {badge}
                    </span>
                  ))}
                </div>
                <Caption>{program.caption}</Caption>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="section-head">
          <p className="eyebrow">The Experience</p>
          <h2>
            More than a <em>classroom.</em>
          </h2>
          <p>Campus days, city streets, cohort nights, and the quiet between them.</p>
        </div>
        <div className="experience-mosaic">
          {EXPERIENCE_TILES.map((tile) => (
            <article className="experience-tile" key={tile.src}>
              <img src={tile.src} alt={tile.alt} loading="lazy" />
              <div className="experience-tile-overlay" aria-hidden="true" />
              <div className="experience-tile-copy">
                <h3>{tile.label}</h3>
                <p>{tile.copy}</p>
              </div>
              <Caption>{tile.caption}</Caption>
            </article>
          ))}
        </div>
      </section>

      <section className="interest" id="interest">
        <div className="interest-bg" aria-hidden="true">
          <img src="/figma/interest-bg.jpg" alt="" loading="lazy" />
          <div className="interest-gradient" />
        </div>
        <p className="interest-caption">
          Mardi Gras parade float rolling through a New Orleans crowd
        </p>
        <div className="interest-inner">
          <div className="interest-copy">
            <p className="eyebrow light">Mark your Interest</p>
            <h2>Tell us about yourself</h2>
            <p>Share a few details and an advisor will help you find the right fit.</p>
          </div>
          <div className="interest-card">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon">
                  <Check size={22} />
                </div>
                <h3>You’re on your way</h3>
                <p>
                  Thanks for raising your hand. An immersion advisor will be in touch with your next
                  steps.
                </p>
                <button type="button" className="text-link" onClick={() => setSubmitted(false)}>
                  Submit another response{' '}
                  <img src="/figma/arrow-up-right.svg" alt="" width={15} height={15} />
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="form-grid">
                  <label>
                    Full name
                    <input required placeholder="Your name" />
                  </label>
                  <label>
                    Email address
                    <input required type="email" placeholder="you@example.com" />
                  </label>
                  <label>
                    Phone number
                    <span className="phone-field">
                      <span>+91</span>
                      <input required type="tel" placeholder="00000 00000" />
                    </span>
                  </label>
                  <label>
                    College / university
                    <input required placeholder="Where you study" />
                  </label>
                  <label>
                    Program / course
                    <input required placeholder="e.g. B.Tech Computer Science" />
                  </label>
                  <label>
                    Year of study
                    <span className="select-field">
                      <select required defaultValue="">
                        <option value="" disabled>
                          Select year
                        </option>
                        <option>Year before final</option>
                        <option>Final year</option>
                      </select>
                      <img src="/figma/chevron-down.svg" alt="" width={20} height={20} />
                    </span>
                  </label>
                  <label>
                    Graduation year
                    <span className="select-field">
                      <select required defaultValue="">
                        <option value="" disabled>
                          Select year
                        </option>
                        <option>2027</option>
                        <option>2028</option>
                        <option>2029</option>
                        <option>2030</option>
                      </select>
                      <img src="/figma/chevron-down.svg" alt="" width={20} height={20} />
                    </span>
                  </label>
                  <label>
                    I’d like help with
                    <span className="select-field">
                      <select defaultValue="Program details">
                        <option>Program details</option>
                        <option>Fee & inclusions</option>
                        <option>Application process</option>
                        <option>Travel arrangements</option>
                        <option>Speaking to an advisor</option>
                      </select>
                      <img src="/figma/chevron-down.svg" alt="" width={20} height={20} />
                    </span>
                  </label>
                </div>
                <div className="choice-block">
                  <p>Which program to choose ?</p>
                  <div className="choice-grid">
                    {PROGRAMS.map((program) => {
                      const selected = selectedPrograms.includes(program.id)
                      return (
                        <button
                          key={program.id}
                          type="button"
                          className={selected ? 'choice selected' : 'choice'}
                          onClick={() => toggleProgram(program.id)}
                          aria-pressed={selected}
                        >
                          <span className="choice-check">
                            {selected ? <Check size={12} /> : null}
                          </span>
                          <span>
                            <b>{program.formTitle}</b>
                            <small>{program.formAffiliation}</small>
                          </span>
                          <img src="/figma/arrow-up-right.svg" alt="" width={15} height={15} />
                        </button>
                      )
                    })}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary submit">
                  Register your interest
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="journey" id="how">
        <div className="section-head">
          <p className="eyebrow">How It Works</p>
          <h2>
            From choosing your program to <em>taking off</em>
          </h2>
          <p>Six clear steps. One team beside you at every turn.</p>
        </div>
        <div className="journey-grid">
          {JOURNEY.map(([step, title, body]) => (
            <article className="journey-card" key={step}>
              <span className="journey-num">{step}</span>
              <div className="journey-card-heading">
                <h3>{title}</h3>
                <img src="/figma/arrow-right-purple.svg" alt="" width={24} height={24} />
              </div>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ready">
        <div className="ready-visual" aria-hidden="true">
          <div className="ready-blend-base" />
          <img className="ready-photo" src="/figma/cta-bg.jpg" alt="" loading="lazy" />
          <div className="ready-fade" />
        </div>
        <p className="ready-caption">
          The Immaculata and jacaranda bloom at the University of San Diego
        </p>
        <div className="ready-inner">
          <div className="ready-copy">
            <h2>
              Where will your <em>summer take you?</em>
            </h2>
            <p>Pick the immersion you’re leaning towards and tell us. We’ll take it from there.</p>
            <div className="ready-actions">
              <a href="#interest" className="btn btn-primary">
                Mark Your Interest
              </a>
              <a href="#interest" className="btn btn-secondary btn-glass">
                Talk to an Advisor
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" id="faqs">
        <div className="faq-copy">
          <p className="eyebrow">FAQs</p>
          <h2>
            A few things you might be <em>wondering</em>
          </h2>
          <p>Still have a question? We’re one conversation away.</p>
        </div>
        <div className="faq-list">
          {FAQS.map(([q, a], index) => {
            const open = faqOpen === index
            return (
              <div className={`faq-item ${open ? 'open' : ''}`} key={q}>
                <button
                  type="button"
                  onClick={() => setFaqOpen(open ? -1 : index)}
                  aria-expanded={open}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{q}</span>
                  <span className="faq-toggle" aria-hidden="true">
                    <img
                      src={open ? '/figma/icon-close.svg' : '/figma/icon-plus.svg'}
                      alt=""
                      width={15}
                      height={15}
                    />
                  </span>
                </button>
                <div className="faq-answer" id={`faq-answer-${index}`}>
                  <p>{a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-banner">
          <img
            className="footer-banner-img"
            src="/figma/footer-banner-2800.jpg"
            srcSet="/figma/footer-banner-2800.jpg 2800w, /figma/footer-banner.jpg 5600w"
            sizes="100vw"
            alt="GradRight"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="footer-body">
          <div className="footer-grid">
            <div className="footer-contact">
              <div className="footer-socials" aria-label="Social media">
                <a
                  href="https://www.instagram.com/gradright/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/figma/social-ig.svg" alt="" width={28} height={28} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC53ArBGsaT6gGi6RfugKKnw/featured"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/figma/social-yt.svg" alt="" width={28} height={28} />
                </a>
                <a
                  href="https://www.linkedin.com/company/gradright/about/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/figma/social-li.svg" alt="" width={28} height={28} />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=09056877079&text=Hello%20there!"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/figma/social-wa.svg" alt="" width={28} height={28} />
                </a>
                <a href="https://x.com/gradright" aria-label="X" target="_blank" rel="noopener noreferrer">
                  <img src="/figma/social-x.svg" alt="" width={28} height={28} />
                </a>
              </div>
              <div className="footer-contact-meta">
                <a href="tel:+917278262232">+91 72782 62232</a>
                <a href="mailto:grad@gradright.com">grad@gradright.com</a>
              </div>
            </div>
            <div className="footer-links">
              <div>
                <strong>About GradRight</strong>
                <a href="https://gradright.com/about-us/" target="_blank" rel="noopener noreferrer">
                  Our Story
                </a>
                <a href="https://gradright.com/grievance-redressal/" target="_blank" rel="noopener noreferrer">
                  Grievance Redressal
                </a>
                <a href="https://gradright.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
                <a href="https://gradright.com/terms-and-conditions/" target="_blank" rel="noopener noreferrer">
                  Terms & Conditions
                </a>
                <a href="https://gradright.com/media-room/" target="_blank" rel="noopener noreferrer">
                  Media Kit
                </a>
                <a href="https://gradright.com/contact-us/" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </div>
              <div>
                <strong>Resources</strong>
                <a href="https://gradright.com/selection/" target="_blank" rel="noopener noreferrer">
                  University Selection
                </a>
                <a href="https://gradright.com/financing/" target="_blank" rel="noopener noreferrer">
                  Education Loans
                </a>
                <a href="https://gradright.com/news/" target="_blank" rel="noopener noreferrer">
                  FilterED
                </a>
                <a href="https://gradright.com/reviews/" target="_blank" rel="noopener noreferrer">
                  Reviews
                </a>
                <a href="https://gradright.com/blogs/" target="_blank" rel="noopener noreferrer">
                  Blogs
                </a>
              </div>
            </div>
          </div>
          <p className="footer-copy">Copyright © 2026 GradRight. All rights reserved.</p>
        </div>
      </footer>

      {activeProgram ? (
        <div
          className="program-drawer-scrim"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDrawer()
          }}
        >
          <aside
            className={`program-drawer${isSheet ? ' is-sheet' : ''}${reduceMotion ? ' is-instant' : ''}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
          >
            <div className="drawer-head">
              <div className="drawer-handle" aria-hidden="true" />
              <div className="drawer-head-row">
                <span className="drawer-kicker">PROGRAM DETAILS</span>
                <button
                  type="button"
                  className="drawer-close"
                  onClick={closeDrawer}
                  aria-label="Close program details"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="drawer-scroll">
              <div
                className={`drawer-image ${activeProgram.accent}`}
                role="img"
                aria-label={`${activeProgram.university} campus`}
                style={{
                  backgroundImage: `url(${activeProgram.drawerImage || activeProgram.image})`,
                }}
              />
              <div className="drawer-body">
                <p className="drawer-school">
                  <img
                    className={`university-logo drawer-university-logo${
                      activeProgram.university === 'Tulane University' ? '' : ' program-logo-lg'
                    }`}
                    src={activeProgram.logo}
                    alt={activeProgram.school}
                  />
                </p>
                <h2 id="drawer-title">{activeProgram.title}</h2>
                <p className="drawer-description">{activeProgram.desc}</p>
                <div className="drawer-pills">
                  <span>{activeProgram.city}</span>
                  <span>{activeProgram.cohort}</span>
                  <span>One week</span>
                </div>
                <div className="drawer-fee">
                  <span>PROGRAM FEE</span>
                  <strong>
                    {activeProgram.fee}
                    <small> / student</small>
                  </strong>
                </div>
                <section className="drawer-section">
                  <h3>What you’ll experience</h3>
                  <ul className="drawer-list">
                    {activeProgram.experience.map((item) => (
                      <li key={item}>
                        <Check size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {drawerImages.length || drawerVideo ? (
                  <section className="drawer-section drawer-media-inline" aria-label="Campus media">
                    <h3>Campus & city highlights</h3>
                    {drawerImages.length ? (
                      <div
                        className="drawer-bento"
                        data-count={Math.min(drawerImages.length, 4)}
                      >
                        {drawerImages.slice(0, 4).map((item, index) => (
                          <figure
                            key={item.src}
                            className={`drawer-bento-item${index === 0 ? ' is-feature' : ''}`}
                          >
                            <img src={item.src} alt={item.caption} loading="lazy" />
                            <figcaption>{item.caption}</figcaption>
                          </figure>
                        ))}
                      </div>
                    ) : null}
                    {drawerVideo ? (
                      <div className="drawer-bento-video">
                        <iframe
                          key={drawerVideo.youtubeId}
                          className="drawer-media-video"
                          src={`https://www.youtube-nocookie.com/embed/${drawerVideo.youtubeId}?rel=0`}
                          title={drawerVideo.caption || `${activeProgram.university} video`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        />
                        {drawerVideo.caption ? (
                          <p className="drawer-media-caption">{drawerVideo.caption}</p>
                        ) : null}
                      </div>
                    ) : null}
                  </section>
                ) : null}

                <section className="drawer-section">
                  <h3>Full Curriculum</h3>
                  <ul className="drawer-curriculum">
                    {activeProgram.curriculum.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
                <section className="drawer-section">
                  <h3>{activeProgram.whyHeading}</h3>
                  <div className="drawer-reasons">
                    {activeProgram.why.map(([heading, copy]) => (
                      <article key={heading}>
                        <h4>{heading}</h4>
                        <p>{copy}</p>
                      </article>
                    ))}
                  </div>
                </section>
                <p className="drawer-note">
                  Company visits are subject to availability and final confirmation.
                </p>
              </div>
            </div>
            <div className="drawer-footer">
              <button
                type="button"
                className={`btn btn-primary btn-cta-${activeProgram.cta}`}
                onClick={markInterestFromDrawer}
              >
                Mark your interest <ArrowRight size={16} />
              </button>
            </div>
          </aside>
        </div>
      ) : null}
    </div>
  )
}
