"use client";

import Link from "next/link";
import SiteHeader from "../site-header";
import { FRONT_DOOR } from "../site";
import "./academy.css";
import { useMemo, useState } from "react";
import { academyCourses, audienceGuidance, leaderSessions, type AcademyAudience } from "./catalog";

const audiences: AcademyAudience[] = ["Employees", "Managers", "Leaders"];

export default function AcademyPage() {
  const [audience, setAudience] = useState<AcademyAudience>("Employees");
  const [courseId, setCourseId] = useState("ignite");
  const courses = useMemo(() => academyCourses.filter((course) => course.audience === audience), [audience]);
  const selected = courses.find((course) => course.id === courseId) || courses[0];
  const guidance = audienceGuidance[audience];

  function chooseAudience(next: AcademyAudience) {
    const nextCourses = academyCourses.filter((course) => course.audience === next);
    setAudience(next);
    setCourseId(nextCourses[0].id);
    document.getElementById("academy-catalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function chooseCourse(id: string) {
    setCourseId(id);
    window.setTimeout(() => document.getElementById("course-detail")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  }

  return (
    <div className="academy-page">
      <SiteHeader current="academy" />

      <main>
        <section className="academy-hero">
          <div className="academy-hero-copy">
            <p className="eyebrow">MILLER AI ACADEMY</p>
            <h1>LEARN.<br />BUILD.<br /><span>KEEP MOVING.</span></h1>
            <p className="academy-hero-thesis">Build the confidence and practical capability to use AI responsibly, improve work, and move good ideas forward.</p>
            <div className="academy-hero-actions">
              <a className="button button-blue" href="#academy-catalog">EXPLORE THE ACADEMY →</a>
              <Link className="academy-secondary-link" href="/">SEE ENTERPRISE AI ENABLEMENT</Link>
            </div>
          </div>
          <div className="academy-hero-side">
            <div>
              <p className="academy-side-label">THE ACADEMY PROMISE</p>
              <h2>START WITH<br />CURIOSITY</h2>
              <p>You do not need a polished idea, a business case, or prior coding experience. Choose the learning experience that matches what you need to do.</p>
              <ul>
                <li><strong>03</strong><span>employee learning experiences</span></li>
                <li><strong>02</strong><span>manager capability programs</span></li>
                <li><strong>02</strong><span>leadership offerings</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="academy-principles" aria-label="How the Academy works">
          <article><span>01</span><strong>LEARN BY DOING</strong><p>Practical experience builds confidence faster than a presentation about tools.</p></article>
          <article><span>02</span><strong>OWN THE WORK</strong><p>Employees and business units stay closest to the problems and the solutions.</p></article>
          <article><span>03</span><strong>GET HELP TO MOVE</strong><p>AI Enablement makes the tools, policy, and support easier to navigate.</p></article>
          <article><span>04</span><strong>GROW WHAT HELPS</strong><p>Useful work can stay personal, support a team, or receive broader support when that makes sense.</p></article>
        </section>

        <section className="academy-catalog-section" id="academy-catalog">
          <div className="academy-section-heading">
            <div><p className="section-kicker">CHOOSE YOUR PERSPECTIVE</p><h2>THE CAPABILITY YOUR ROLE NEEDS</h2></div>
            <p>The Academy is not one required path. Start where your responsibility sits and choose the experience that helps you act.</p>
          </div>

          <div className="academy-audience-tabs" role="tablist" aria-label="Academy audiences">
            {audiences.map((name) => (
              <button key={name} type="button" role="tab" aria-selected={audience === name} className={audience === name ? "active" : ""} onClick={() => chooseAudience(name)}>
                <span>{name === "Employees" ? "01" : name === "Managers" ? "02" : "03"}</span>{name}
              </button>
            ))}
          </div>

          <div className="academy-audience-intro">
            <span>{guidance.label}</span>
            <strong>{guidance.title}</strong>
            <p>{guidance.description}</p>
          </div>

          <div className={`academy-course-grid academy-course-grid-${audience.toLowerCase()}`}>
            {courses.map((course, index) => (
              <button type="button" key={course.id} className={selected.id === course.id ? "academy-course-card active" : "academy-course-card"} onClick={() => chooseCourse(course.id)} aria-pressed={selected.id === course.id}>
                <div className="academy-card-head"><span>{String(index + 1).padStart(2, "0")}</span><small>{course.format.split("·")[0].trim()}</small></div>
                {course.framework && <b>{course.framework}</b>}
                <h3>{course.title}</h3>
                <p>{course.subtitle}</p>
                <em>VIEW EXPERIENCE →</em>
              </button>
            ))}
          </div>

          <article className="academy-detail" id="course-detail" aria-live="polite">
            <div className="academy-detail-title">
              <p className="detail-label">{selected.audience.toUpperCase()} / {selected.format.toUpperCase()}</p>
              {selected.framework && <span className="academy-framework">{selected.framework}</span>}
              <h2>{selected.title}</h2>
              <h3>{selected.subtitle}</h3>
              <p>{selected.description}</p>
              <div className="academy-detail-for"><small>BUILT FOR</small><strong>{selected.for}</strong></div>
            </div>
            <div className="academy-detail-outcomes">
              <span>WHAT YOU LEAVE ABLE TO DO</span>
              <ul>{selected.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
              <div><small>LEAVE-BEHIND</small><strong>{selected.leaveBehind}</strong></div>
            </div>
          </article>

          <div className="academy-program-detail">
            <section>
              <div className="academy-subhead"><span>THE EXPERIENCE</span><h3>WHAT HAPPENS</h3></div>
              {selected.agenda.map((group) => (
                <div className="academy-agenda-group" key={group.heading}>
                  <h4>{group.heading}</h4>
                  {group.rows.map((row, index) => (
                    <div className="academy-agenda-row" key={`${group.heading}-${row.title}`}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div><strong>{row.title}</strong><p>{row.description}</p></div>
                    </div>
                  ))}
                </div>
              ))}
            </section>
            <aside>
              <div className="academy-subhead"><span>THE VALUE</span><h3>WHAT YOU LEAVE WITH</h3></div>
              <div className="academy-leave-grid">
                {selected.leaveWith.map((item, index) => (
                  <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h4>{item.title}</h4><p>{item.description}</p></article>
                ))}
              </div>
              <div className="academy-help-card">
                <small>ONE PLACE TO START</small>
                <h3>NOT SURE WHICH EXPERIENCE FITS?</h3>
                <p>AI Enablement can help you understand what is available and choose the right way to move.</p>
                <a href={FRONT_DOOR}>ASK AI ENABLEMENT →</a>
              </div>
            </aside>
          </div>

          {audience === "Leaders" && (
            <section className="leader-sessions" aria-label="Leadership sessions bookable individually">
              <div className="academy-subhead"><span>ALSO BOOKABLE ON THEIR OWN</span><h3>THE SIX LEADERSHIP SESSIONS</h3></div>
              <p className="leader-sessions-note">AI-Driven Leadership runs as a half day in three modules. Any session can also be booked individually for a leadership team or a single meeting.</p>
              <div className="leader-session-grid">
                {leaderSessions.map((session) => (
                  <article key={session.id}>
                    <div className="leader-session-head"><span>{session.module}</span><small>{session.format}</small></div>
                    {session.framework && <b>{session.framework}</b>}
                    <h4>{session.title}</h4>
                    <p>{session.subtitle}</p>
                  </article>
                ))}
              </div>
            </section>
          )}
        </section>
      </main>

      <footer className="academy-footer">
        <div><strong>MILLER AI ACADEMY</strong><p>Build capability. Keep ownership close to the work. Make responsible action easier.</p></div>
        <Link href="/">RETURN TO ENTERPRISE AI ENABLEMENT →</Link>
      </footer>
    </div>
  );
}
