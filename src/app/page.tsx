"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const tracks = [
  { n: "01", title: "Foundations", desc: "Divisions, fields, PIC clauses, and your first compiled program.", lessons: 12, tone: "lime" },
  { n: "02", title: "Business logic", desc: "Arithmetic, decisions, loops, tables, and report-ready data.", lessons: 18, tone: "amber" },
  { n: "03", title: "Files & records", desc: "Sequential, indexed, and relative files with real transactions.", lessons: 15, tone: "blue" },
  { n: "04", title: "Production COBOL", desc: "JCL, DB2, CICS, testing, modernization, and APIs.", lessons: 22, tone: "coral" },
];

const references = ["ACCEPT", "ADD", "CALL", "COMPUTE", "DISPLAY", "EVALUATE", "IF", "INSPECT", "MOVE", "PERFORM", "READ", "SEARCH", "SORT", "STRING", "UNSTRING", "WRITE"];

const samples = [
  { title: "Payroll processor", level: "Intermediate", type: "Batch", desc: "Calculate gross pay, taxes, and net pay from employee records.", slug: "payroll" },
  { title: "Banking ledger", level: "Advanced", type: "Files", desc: "Post transactions and produce a balanced end-of-day report.", slug: "banking-ledger" },
  { title: "Invoice generator", level: "Intermediate", type: "Reports", desc: "Turn line items into aligned, print-ready customer invoices.", slug: "invoice" },
];

const hello = `       IDENTIFICATION DIVISION.\n       PROGRAM-ID. HELLO-COBOL.\n\n       PROCEDURE DIVISION.\n           DISPLAY \"Hello, mainframe.\"\n           STOP RUN.`;

export default function Home() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => references.filter((r) => r.includes(query.toUpperCase())), [query]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <Link href="/" className="brand" aria-label="COBOL Campus home"><span className="brand-mark">C</span><span>COBOL<span className="brand-light">.campus</span></span></Link>
        <nav aria-label="Main navigation"><Link href="/course">Course</Link><a href="#reference">Reference</a><Link href="/tools">Tools</Link><a href="#projects">Projects</a></nav>
        <Link href="/learn/getting-started" className="nav-cta">Start learning <span>↗</span></Link>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> The complete COBOL field guide</div>
            <h1>The language that<br /><em>runs the world.</em></h1>
            <p>Master COBOL from your first <code>DISPLAY</code> to production-grade banking systems. Clear lessons, executable examples, and the reference you&apos;ll keep open at work.</p>
            <div className="hero-actions"><Link href="/learn/getting-started" className="primary-button">Begin the course <span>→</span></Link><a href="#projects" className="text-button">Explore examples <span>↓</span></a></div>
            <div className="proof"><span><b>22</b> deep lessons</span><i /><span><b>10</b> applications</span><i /><span><b>6</b> developer tools</span></div>
          </div>
          <div className="terminal-wrap" aria-label="COBOL Hello World example">
            <div className="terminal-shadow" />
            <div className="terminal">
              <div className="terminal-bar"><div><span /><span /><span /></div><small>hello.cbl</small><b>COBOL</b></div>
              <pre><code>{hello.split("\n").map((line, i) => <span key={i}><i>{String(i + 1).padStart(2, "0")}</i>{line.replace(/^(\s+)/, "$1")}{"\n"}</span>)}</code></pre>
              <div className="terminal-output"><span>$</span> cobc -x hello.cbl && ./hello<br /><strong>Hello, mainframe.</strong><br /><i>Process finished with exit code 0</i></div>
            </div>
            <div className="status-stamp">ISO 2023<br /><b>READY</b></div>
          </div>
        </section>

        <section className="ticker" aria-label="Topics"><div>DATA DIVISION <span>◆</span> FILE HANDLING <span>◆</span> BUSINESS LOGIC <span>◆</span> JCL <span>◆</span> DB2 <span>◆</span> CICS <span>◆</span> MODERNIZATION</div></section>

        <section className="section curriculum" id="learn">
          <div className="section-heading"><div><span className="kicker">01 / Guided curriculum</span><h2>From curious to<br />production-ready.</h2></div><p>Four focused tracks build on one another. Follow them in order or jump directly to what you need.</p></div>
          <div className="track-grid">{tracks.map((track) => <Link href={`/learn/${track.n === "01" ? "getting-started" : track.title.toLowerCase().replaceAll(" ", "-")}`} className={`track-card ${track.tone}`} key={track.n}><div className="track-top"><span>{track.n}</span><b>↗</b></div><div><small>{track.lessons} LESSONS</small><h3>{track.title}</h3><p>{track.desc}</p></div><div className="track-progress"><span /><span /><span /><span /></div></Link>)}</div>
        </section>

        <section className="section reference" id="reference">
          <div className="reference-copy"><span className="kicker">02 / Quick reference</span><h2>Every verb.<br />Every clause.<br /><em>One search away.</em></h2><p>Concise syntax, plain-English explanations, pitfalls, and working examples for the language you use every day.</p><label className="search"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search statements…" aria-label="Search COBOL statements" /><kbd>/</kbd></label></div>
          <div className="reference-list">{filtered.slice(0, 8).map((item, i) => <Link href={`/reference/${item.toLowerCase()}`} key={item}><span>{String(i + 1).padStart(2, "0")}</span><b>{item}</b><small>{i % 3 === 0 ? "I/O" : i % 3 === 1 ? "DATA" : "CONTROL"}</small><i>→</i></Link>)}{filtered.length === 0 && <p className="empty">No statement found. Try MOVE or PERFORM.</p>}</div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-heading"><div><span className="kicker">03 / Learn by shipping</span><h2>Real programs,<br />not toy snippets.</h2></div><p>Study complete, annotated applications modeled after the systems COBOL developers maintain every day.</p></div>
          <div className="project-grid">{samples.map((sample, i) => <Link href={`/projects/${sample.slug}`} className="project-card" key={sample.slug}><div className="project-visual"><span>0{i + 1}</span><div className={`mini-ui mini-${i}`}><i /><i /><i /><b>{i === 0 ? "$ 4,218.60" : i === 1 ? "BALANCED" : "INV-1042"}</b></div></div><div className="project-body"><div><small>{sample.type}</small><small>{sample.level}</small></div><h3>{sample.title}</h3><p>{sample.desc}</p><span>View project <b>→</b></span></div></Link>)}</div><div className="all-projects"><Link href="/projects">Browse all 10 applications →</Link><Link href="/tools">Open developer workbench →</Link></div>
        </section>

        <section className="cta-band"><span className="kicker">READY WHEN YOU ARE</span><h2>Your mainframe journey<br />starts with one line.</h2><Link href="/learn/getting-started">Start lesson 01 <span>→</span></Link></section>
      </main>
      <footer><Link href="/" className="brand"><span className="brand-mark">C</span><span>COBOL.campus</span></Link><p>Built for the next generation of mainframe engineers.</p><div><a href="#learn">Curriculum</a><a href="#reference">Reference</a><a href="#projects">Projects</a></div><small>© 2026 COBOL Campus</small></footer>
    </div>
  );
}
