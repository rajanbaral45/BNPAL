"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Menu, X, Check, Plus, Minus,
  Code2, Palette, Smartphone, Search, Megaphone, ShoppingBag
} from "lucide-react";

const services = [
  { n:"01", icon: Megaphone, title:"Digital Growth", text:"Data-led campaigns and content systems that turn attention into measurable business growth." },
  { n:"02", icon: Palette, title:"Brand & Creative", text:"Distinctive identities, visual systems and motion that make brands impossible to ignore." },
  { n:"03", icon: Smartphone, title:"Mobile Experiences", text:"Fast, intuitive mobile products designed around real people and real business goals." },
  { n:"04", icon: Search, title:"SEO & Visibility", text:"Technical and content strategies built to increase discoverability and qualified traffic." },
  { n:"05", icon: Code2, title:"Web Design & Development", text:"High-performance websites engineered for conversion, accessibility and long-term scale." },
  { n:"06", icon: ShoppingBag, title:"UI/UX", text:"Design eye-catching UI/UX interfaces for effortless user interaction.." },
];

const projects = [
  {
    title:"Aarohan",
    tag:"Digital Product",
    image:"https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85",
    size:"large"
  },
  {
    title:"Northline",
    tag:"Brand Identity",
    image:"https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1100&q=85",
    size:"small"
  },
  {
    title:"Mero Commerce",
    tag:"E-commerce",
    image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1100&q=85",
    size:"small"
  }
];

const faqs = [
  ["What does BNPAL do?", "BNPAL is a digital studio focused on web, mobile, branding, e-commerce, SEO and digital growth."],
  ["Do you work with startups and established businesses?", "Yes. We shape the process around the size, goals and stage of each business."],
  ["How does a project start?", "We begin with a discovery conversation, define the goals and scope, then provide a clear roadmap and estimate."],
  ["Can BNPAL handle design and development together?", "Absolutely. Our integrated approach keeps strategy, design, development and launch aligned."],
  ["Do you offer ongoing support?", "Yes. We can provide maintenance, optimization, analytics and growth support after launch."]
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      <header className="nav">
        <a href="#" className="logo">BNPAL<span>.</span></a>
        <nav className="desktopNav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="navCta" href="#contact">Let&apos;s connect <ArrowUpRight size={17}/></a>
        <button className="menuBtn" onClick={() => setMenu(!menu)} aria-label="Open menu">
          {menu ? <X/> : <Menu/>}
        </button>
      </header>

      <AnimatePresence>
        {menu && (
          <motion.div className="mobileMenu" initial={{opacity:0,y:-15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-15}}>
            {["about","services","work","process","faq","contact"].map((id) =>
              <a key={id} href={"#"+id} onClick={() => setMenu(false)}>{id === "work" ? "Our Work" : id[0].toUpperCase()+id.slice(1)}</a>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <section className="hero">
        <div className="orb orb1"/><div className="orb orb2"/>
        <div className="heroGrid"/>
        <div className="container heroInner">
          <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
            <p className="eyebrow">BNPAL / DIGITAL STUDIO</p>
            <h1>We build <em>digital experiences</em> that move businesses forward.</h1>
            <p className="heroText">Strategy, design, technology and growth — brought together to create brands people remember and products people love to use.</p>
            <div className="heroActions">
              <a className="primaryBtn" href="#contact">Start a project <ArrowRight size={18}/></a>
              <a className="textBtn" href="#work">Explore our work <ArrowUpRight size={18}/></a>
            </div>
          </motion.div>
          <motion.div className="heroVisual" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.9,delay:.15}}>
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1500&q=90" alt="BNPAL creative team working" />
            <div className="visualCard"><span>01</span><strong>Ideas → Impact</strong><small>Digital, built with purpose.</small></div>
          </motion.div>
        </div>
      </section>

      <section className="trustStrip">
        <div className="container trustInner">
          <span>DESIGN</span><i/><span>TECHNOLOGY</span><i/><span>GROWTH</span><i/><span>BRANDING</span><i/><span>EXPERIENCE</span>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container twoCol">
          <div>
            <p className="eyebrow green">WHO WE ARE</p>
            <h2>Small enough to care. <span>Bold enough to make a difference.</span></h2>
          </div>
          <div className="aboutCopy">
            <p>BNPAL is a modern digital studio helping ambitious organizations turn ideas into meaningful digital experiences.</p>
            <p>We combine thoughtful strategy, sharp creative direction and reliable engineering to create work that looks exceptional and performs even better.</p>
            <a className="underLink" href="#contact">Tell us what you&apos;re building <ArrowUpRight size={17}/></a>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="sectionHead">
            <div><p className="eyebrow green">WHAT WE DO</p><h2>Everything you need to <span>grow digitally.</span></h2></div>
            <p>From first idea to launch and beyond, BNPAL brings the right specialists together around one clear goal.</p>
          </div>
          <div className="serviceGrid">
            {services.map((s) => {
              const Icon = s.icon;
              return <motion.article className="serviceCard" key={s.n} whileHover={{y:-7}}>
                <div className="serviceTop"><span>{s.n}</span><Icon size={25}/></div>
                <h3>{s.title}</h3><p>{s.text}</p><ArrowUpRight className="serviceArrow" size={20}/>
              </motion.article>
            })}
          </div>
        </div>
      </section>

      <section className="section work" id="work">
        <div className="container">
          <div className="sectionHead">
            <div><p className="eyebrow green">SELECTED WORK</p><h2>Good work speaks <span>for itself.</span></h2></div>
            <a className="underLink" href="#contact">View all projects <ArrowUpRight size={17}/></a>
          </div>
          <div className="projectGrid">
            {projects.map((p) => <motion.a href="#contact" className={"project "+p.size} key={p.title} whileHover={{scale:.985}}>
              <img src={p.image} alt={p.title}/>
              <div className="projectOverlay"><div><small>{p.tag}</small><h3>{p.title}</h3></div><span><ArrowUpRight/></span></div>
            </motion.a>)}
          </div>
        </div>
      </section>

      <section className="process" id="process">
        <div className="container">
          <div className="processIntro">
            <p className="eyebrow">HOW WE WORK</p>
            <h2>A simple process.<br/><span>Exceptional outcomes.</span></h2>
          </div>
          <div className="steps">
            {[
              ["01","Discover","We listen, ask the right questions and define what success looks like."],
              ["02","Plan","We turn insight into a focused roadmap, scope and creative direction."],
              ["03","Create","Designers and developers work together to turn the idea into reality."],
              ["04","Launch & Grow","We launch confidently, measure results and keep improving."]
            ].map(([n,t,d]) => <div className="step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section tech">
        <div className="container">
          <p className="eyebrow green">OUR TOOLKIT</p>
          <div className="techTitle"><h2>Powered by the <span>right technology.</span></h2><p>Modern tools. Clean architecture. Fast, maintainable products.</p></div>
          <div className="techCloud">{["Next.js","React","TypeScript","Node.js","Python","WordPress","Shopify","Figma","Framer Motion","PostgreSQL","AWS","Google Cloud"].map(x=><span key={x}>{x}</span>)}</div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="container twoCol">
          <div><p className="eyebrow green">FAQ</p><h2>Got questions?<br/><span>We&apos;ve got answers.</span></h2></div>
          <div className="faqList">
            {faqs.map(([q,a],i) => <div className="faqItem" key={q}>
              <button onClick={() => setOpenFaq(openFaq===i?null:i)}><span>{q}</span>{openFaq===i?<Minus size={19}/>:<Plus size={19}/>}</button>
              <AnimatePresence>{openFaq===i && <motion.p initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}>{a}</motion.p>}</AnimatePresence>
            </div>)}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contactInner">
          <div><p className="eyebrow">LET&apos;S MAKE SOMETHING</p><h2>Have a big idea?<br/><span>Let&apos;s build it.</span></h2></div>
          <div className="contactRight"><p>Tell us a little about your project. We&apos;ll get back to you with the next steps.</p><a className="contactBtn" href="mailto:hello@bnpal.com">hello@bnpal.com <ArrowUpRight/></a></div>
        </div>
      </section>

      <footer>
        <div className="container footerTop"><a className="logo" href="#">BNPAL<span>.</span></a><p>Digital experiences for ambitious businesses.</p><a className="backTop" href="#">Back to top ↑</a></div>
        <div className="container footerBottom"><span>© 2026 BNPAL. All rights reserved.</span><span>Built with purpose in Nepal.</span></div>
      </footer>
    </main>
  );
}
