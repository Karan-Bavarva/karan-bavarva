// import React from "react";
// import styles from "../styles/Projects.module.css";

// const projects = [
//     {
//     title: "Millennial GFX",
//     subtitle: "Developed in 2024",
//     category: "Web development",
//     tech: "JavaScript, TypeScript, Next.js (React‑based), Tailwind CSS, NodeJS, MongoDB",
//     description:
//       "Millennial GFX appears to be a sleek, personal portfolio or branding site for a designer or agency. It showcases modern graphics or motion design work, with fast transitions and clean layouts—typical of a creative portfolio aimed at engaging prospective clients or employers.",
//     bullets: [
//       "Performance & SEO: Static page generation (SSG) ensures fast load times and strong SEO.",
//       "Scalability: Leveraging React’s component model allows for future expansion and easy maintenance.",
//       "Smooth UX: Likely enhanced by modern animation libraries and well-structured responsive layouts.",
//     ],
//     },
//     {
//     title: "Veer International",
//     subtitle: "Developed in 2023",
//     category: "Web development",
//     tech: "WordPress, PHP, MySQL, jQuery",
//     description:
//       "Veer International is an import–export trading company specializing in food additives, whole & ground spices, flavors, seasonings, chemicals, antioxidants, and related agro products. They cater to both domestic and global clients, supplying ingredients to major food multinationals and fast‑food chains.",
//     bullets: [
//       "Roles: Admin, Supplier, Buyer",
//       "Admin manages product listings and approvals",
//       "Buyers can inquire about bulk products, request samples, and contact suppliers directly",
//       "Emphasis on B2B export processes with a catalog-based system",
//     ],
//     },
//     {
//     title: "Omnetlinks",
//     subtitle: "Developed in 2023",
//     category: "Web development",
//     tech: "inferred from typical LAMP + CMS/mobile setups",
//     description:
//       "IT services & software development provider (founded 2014; based in Rajkot, Gujarat).",
//     bullets: [
//       "End-to-end project delivery from planning → design → development → testing → deployment → support:",
//       "Admin: manages projects, content, user access",
//       "Mobile apps: Android/iOS apps with backend APIs",
//       "Graphic assets: marketing materials, logos, brochures",
//       "Digital campaigns: analytics tracking, lead generation, SEO audit flows",
//     ],
//     },
//     {
//     title: "Autonomous ERP",
//     subtitle: "Developed in 2022",
//     category: "Web development",
//     tech: "Laravel, JQuery, Ajax & MySQL",
//     description:
//       "Autonomous ERP is Inventory Management Project. SAAS based platform to purchase CRM, HR Payroll and Inventory Management.",
//     bullets: [
//       "Modules include customer acquisition to onboarding",
//       "OTP verification -> Module selection -> Proposal PDF -> Company details -> PO generation -> Payment Gateway -> Onboarding",
//       "Automated report generation for backend team",
//     ],
//   },
//   {
//     title: "Autonomous ERP",
//     subtitle: "Developed in 2022",
//     category: "Web development",
//     tech: "Laravel, JQuery, Ajax & MySQL",
//     description:
//       "Autonomous ERP is Inventory Management Project. SAAS based platform to purchase CRM, HR Payroll and Inventory Management.",
//     bullets: [
//       "Modules include customer acquisition to onboarding",
//       "OTP verification -> Module selection -> Proposal PDF -> Company details -> PO generation -> Payment Gateway -> Onboarding",
//       "Automated report generation for backend team",
//     ],
//   },
//   {
//     title: "VCTT",
//     subtitle: "Design conferences in 2022",
//     category: "Web development",
//     tech: "Laravel, Ajax & MySQL",
//     description:
//       "Mentorship platform to connect organization, mentees, and mentors in Trinidad and Tobago.",
//     bullets: [
//       "Roles: Admin, Organization, Mentor, Mentee",
//       "Admin approves organization; mentors join based on matching profiles",
//       "Mentorship program managed entirely on the platform",
//     ],
//   },
//   {
//     title: "Massage MyBody Australia",
//     subtitle: "Developed in 2022",
//     category: "Web development",
//     tech: "Laravel, JQuery, Ajax & MySQL",
//     description:
//       "Online directory to book high-quality massage professionals across Australia.",
//     bullets: [
//       "Roles: Admin, Service Provider, Client",
//       "Client searches and books massage providers",
//       "Admin approves and manages listings",
//     ],
//   },
//   {
//     title: "EngjobsEU",
//     subtitle: "Developed in 2021",
//     category: "Web development",
//     tech: "Laravel, JQuery, Ajax & MySQL",
//     description:
//       "Job portal for English-speaking international students and expats in Europe.",
//     bullets: [
//       "Roles: Admin, Job Seeker, Employer",
//       "Employer sends job match requests; Admin moderates",
//       "Builds global career paths and opportunities",
//     ],
//   },
 
// ];

// export default function Projects() {
//   return (
//     <section className={styles.projectsSection}>
//       <h1 className={styles.sectionTitle}>Portfolio</h1>

//       <div className={styles.grid}>
//         {projects.map((proj, index) => (
//           <div key={index} className={styles.card}>
//             <h2 className={styles.projectTitle}>{proj.title}</h2>
//             <p className={styles.subtitle}>{proj.subtitle}</p>
//             <p className={styles.category}><strong>{proj.category}</strong></p>
//             <p className={styles.tech}>{proj.tech}</p>
//             <p className={styles.description}>{proj.description}</p>
//             <ul className={styles.bullets}>
//               {proj.bullets.map((point, i) => (
//                 <li key={i}>• {point}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






import React, { useMemo, useState } from "react";
import styles from "../styles/Projects.module.css";

/** Keep your existing data & wording — I only extended structure a bit.
 *  You can optionally add { live: "https://...", code: "https://..." } per project.
 */
const projects = [
  {
    title: "Millennial GFX",
    subtitle: "Developed in 2024",
    category: "Web development",
    tech: "JavaScript, TypeScript, Next.js (React‑based), Tailwind CSS, NodeJS, MongoDB",
    description:
      "Millennial GFX appears to be a sleek, personal portfolio or branding site for a designer or agency. It showcases modern graphics or motion design work, with fast transitions and clean layouts—typical of a creative portfolio aimed at engaging prospective clients or employers.",
    bullets: [
      "Performance & SEO: Static page generation (SSG) ensures fast load times and strong SEO.",
      "Scalability: Leveraging React’s component model allows for future expansion and easy maintenance.",
      "Smooth UX: Likely enhanced by modern animation libraries and well-structured responsive layouts.",
    ],
  },
  {
    title: "Veer International",
    subtitle: "Developed in 2023",
    category: "Web development",
    tech: "WordPress, PHP, MySQL, jQuery",
    description:
      "Veer International is an import–export trading company specializing in food additives, whole & ground spices, flavors, seasonings, chemicals, antioxidants, and related agro products. They cater to both domestic and global clients, supplying ingredients to major food multinationals and fast‑food chains.",
    bullets: [
      "Roles: Admin, Supplier, Buyer",
      "Admin manages product listings and approvals",
      "Buyers can inquire about bulk products, request samples, and contact suppliers directly",
      "Emphasis on B2B export processes with a catalog-based system",
    ],
  },
  {
    title: "Omnetlinks",
    subtitle: "Developed in 2023",
    category: "Web development",
    tech: "inferred from typical LAMP + CMS/mobile setups",
    description:
      "IT services & software development provider (founded 2014; based in Rajkot, Gujarat).",
    bullets: [
      "End-to-end project delivery from planning → design → development → testing → deployment → support:",
      "Admin: manages projects, content, user access",
      "Mobile apps: Android/iOS apps with backend APIs",
      "Graphic assets: marketing materials, logos, brochures",
      "Digital campaigns: analytics tracking, lead generation, SEO audit flows",
    ],
  },
  {
    title: "Autonomous ERP",
    subtitle: "Developed in 2022",
    category: "Web development",
    tech: "Laravel, JQuery, Ajax & MySQL",
    description:
      "Autonomous ERP is Inventory Management Project. SAAS based platform to purchase CRM, HR Payroll and Inventory Management.",
    bullets: [
      "Modules include customer acquisition to onboarding",
      "OTP verification -> Module selection -> Proposal PDF -> Company details -> PO generation -> Payment Gateway -> Onboarding",
      "Automated report generation for backend team",
    ],
  },
  {
    title: "Autonomous ERP",
    subtitle: "Developed in 2022",
    category: "Web development",
    tech: "Laravel, JQuery, Ajax & MySQL",
    description:
      "Autonomous ERP is Inventory Management Project. SAAS based platform to purchase CRM, HR Payroll and Inventory Management.",
    bullets: [
      "Modules include customer acquisition to onboarding",
      "OTP verification -> Module selection -> Proposal PDF -> Company details -> PO generation -> Payment Gateway -> Onboarding",
      "Automated report generation for backend team",
    ],
  },
  {
    title: "VCTT",
    subtitle: "Design conferences in 2022",
    category: "Web development",
    tech: "Laravel, Ajax & MySQL",
    description:
      "Mentorship platform to connect organization, mentees, and mentors in Trinidad and Tobago.",
    bullets: [
      "Roles: Admin, Organization, Mentor, Mentee",
      "Admin approves organization; mentors join based on matching profiles",
      "Mentorship program managed entirely on the platform",
    ],
  },
  {
    title: "Massage MyBody Australia",
    subtitle: "Developed in 2022",
    category: "Web development",
    tech: "Laravel, JQuery, Ajax & MySQL",
    description:
      "Online directory to book high-quality massage professionals across Australia.",
    bullets: [
      "Roles: Admin, Service Provider, Client",
      "Client searches and books massage providers",
      "Admin approves and manages listings",
    ],
  },
  {
    title: "EngjobsEU",
    subtitle: "Developed in 2021",
    category: "Web development",
    tech: "Laravel, JQuery, Ajax & MySQL",
    description:
      "Job portal for English-speaking international students and expats in Europe.",
    bullets: [
      "Roles: Admin, Job Seeker, Employer",
      "Employer sends job match requests; Admin moderates",
      "Builds global career paths and opportunities",
    ],
  },
];

function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function Projects() {
  const [category, setCategory] = useState("All");
  const [tags, setTags] = useState(new Set());
  const [toast, setToast] = useState("");

  // Build tag list from your tech strings (split by comma or & and trim)
  const allTags = useMemo(() => {
    const split = (t) =>
      t.split(/,|&/g).map((x) => x.replace(/[()]/g, "").trim()).filter(Boolean);
    return Array.from(new Set(projects.flatMap((p) => split(p.tech)))).sort((a, b) =>
      a.localeCompare(b)
    );
  }, []);

  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map(p => p.category)))], []);

  const filtered = useMemo(() => {
    const inCat = (p) => (category === "All" ? true : p.category === category);
    const inTags = (p) => {
      if (!tags.size) return true;
      const words = p.tech.toLowerCase();
      return [...tags].every((t) => words.includes(t.toLowerCase()));
    };
    return projects.filter((p) => inCat(p) && inTags(p));
  }, [category, tags]);

  const toggleTag = (t) => {
    const next = new Set(tags);
    if (next.has(t)) next.delete(t);
    else next.add(t);
    setTags(next);
  };

  // const copyLink = async (proj) => {
  //   const url = `${window.location.origin}${window.location.pathname}#${slug(proj.title)}`;
  //   try {
  //     await navigator.clipboard.writeText(url);
  //     setToast("Link copied");
  //     setTimeout(() => setToast(""), 1400);
  //   } catch {
  //     setToast("Copy failed");
  //     setTimeout(() => setToast(""), 1400);
  //   }
  // };

  const tilt = (e) => {
    const card = e.currentTarget;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = card.getBoundingClientRect();
    const cx = e.clientX - r.left;
    const cy = e.clientY - r.top;
    const rx = ((cy / r.height) - 0.5) * -6; // X tilt
    const ry = ((cx / r.width) - 0.5) * 6;   // Y tilt
    card.style.setProperty("--tiltX", `${rx}deg`);
    card.style.setProperty("--tiltY", `${ry}deg`);
    card.style.transform = `translateY(-6px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const clearTilt = (e) => {
    const card = e.currentTarget;
    card.style.transform = "";
  };

  return (
    <section className={styles.projectsSection}>
      <h1 className={styles.sectionTitle}>Portfolio</h1>

      {/* Filters */}
      <div className={styles.filters} role="tablist" aria-label="Categories">
        {categories.map((c) => (
          <button
            key={c}
            className={styles.filterBtn}
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Tag chips */}
      <div className={styles.tags}>
        {allTags.map((t) => (
          <button
            key={t}
            className={`${styles.tagChip} ${tags.has(t) ? styles.tagChipActive : ""}`}
            aria-pressed={tags.has(t)}
            onClick={() => toggleTag(t)}
            title="Click to filter"
          >
            {t}
          </button>
        ))}
      </div>

      <div className={styles.grid} aria-live="polite">
        {filtered.map((proj, index) => (
          <article
            key={index}
            id={slug(proj.title)}
            className={styles.card}
            tabIndex={0}
            onMouseMove={tilt}
            onMouseLeave={clearTilt}
          >
            <header className={styles.cardHeader}>
              <div>
                <h2 className={styles.projectTitle}>{proj.title}</h2>
                <p className={styles.subtitle}>{proj.subtitle}</p>
                <p className={styles.category}><strong>{proj.category}</strong></p>
              </div>

              <div className={styles.actions} aria-hidden="true">
                {/* Show these only if provided in data */}
                {proj.live && (
                  <a href={proj.live} className={styles.actionBtn} aria-label="Live site">Live</a>
                )}
                {proj.code && (
                  <a href={proj.code} className={styles.actionBtn} aria-label="Source code">Code</a>
                )}
                {/* <button
                  className={styles.actionBtn}
                  aria-label="Copy project link"
                  onClick={() => copyLink(proj)}
                  title="Copy link"
                >
                  Copy
                </button> */}
              </div>
            </header>

            <p className={styles.tech}>{proj.tech}</p>
            <p className={styles.description}>{proj.description}</p>

            <details className={styles.details}>
              <summary className={styles.summary}>Learn more</summary>
              <ul className={styles.bullets}>
                {proj.bullets.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </details>
          </article>
        ))}
      </div>

      {/* Toast */}
      {!!toast && <div className={styles.toast}>{toast}</div>}
    </section>
  );
}
