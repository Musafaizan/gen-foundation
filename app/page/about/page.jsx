"use client";
import "./about.css";
import {
  Heart,
  Users,
  Layers,
  CalendarDays,
  Handshake,
  Sprout,
  ShieldCheck,
  MapPin,
  Target,
  Globe,
} from "lucide-react";

const stats = [
  { icon: <Heart size={15} />,        value: "1K+",  label: "Families Helped" },
  { icon: <Users size={15} />,        value: "20+", label: "Volunteers"       },
  { icon: <Layers size={15} />,       value: "10+",  label: "Active Programs"  },
  { icon: <CalendarDays size={15} />, value: "3+",   label: "Years of Service" },
];

const values = [
  { icon: <Handshake size={16} />,   title: "Compassion",    desc: "We act with empathy and care for every person we serve."         },
  { icon: <Sprout size={16} />,      title: "Impact",        desc: "Every initiative creates lasting and meaningful change."          },
  { icon: <ShieldCheck size={16} />, title: "Transparency",  desc: "Complete openness in all our programs and finances."             },
];

const highlights = [
  { icon: <MapPin size={14} />,  text: "helping families in need" },
  { icon: <Target size={14} />,  text: "Focused on education, health & relief"   },
  { icon: <Globe size={14} />,   text: "needy communities"    },
];

export default function AboutStory() {
  return (
    <section className="ab-section" id="about">

      {/* ── bg shapes ── */}
      <span className="ab-shape ab-shape--a" />
      <span className="ab-shape ab-shape--b" />

      {/* ══════════════════════════════
          HEADER
      ══════════════════════════════ */}
      <div className="ab-header">
        <span className="ab-header__pill">
          <Sprout size={10} />
          Our Foundation
        </span>
        <h2 className="ab-header__title">
          Changing Lives,{" "}
          <em>One Step at a Time</em>
        </h2>
        <div className="ab-header__bar" />
        <p className="ab-header__sub">
          Since 2023, Saya Welfare has been delivering hope, education,
          and opportunity to thousands of families across Pakistan.
        </p>
      </div>

      {/* ══════════════════════════════
          STATS
      ══════════════════════════════ */}
      <div className="ab-stats">
        {stats.map((s, i) => (
          <div className="ab-stat" key={i}>
            <span className="ab-stat__icon">{s.icon}</span>
            <span className="ab-stat__val">{s.value}</span>
            <span className="ab-stat__label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ══════════════════════════════
          GRID
      ══════════════════════════════ */}
      <div className="ab-grid">

        {/* ── Left ── */}
        <div className="ab-left">

          <div className="ab-desc">
            <p>
              We started in <strong>2023</strong> with a simple mission: to provide food and basic necessities to families in need.
              What began as a small ration drive has grown into a full-scale
              welfare organization spanning education, healthcare, and
              emergency relief across the country.
            </p>
          </div>

          <ul className="ab-highlights">
            {highlights.map((h, i) => (
              <li className="ab-highlight" key={i}>
                <span className="ab-highlight__icon">{h.icon}</span>
                <span>{h.text}</span>
              </li>
            ))}
          </ul>

          {/* Mission card */}
          <div className="ab-mission">
            <div className="ab-mission__top">
              <Heart size={14} className="ab-mission__icon" />
              <span className="ab-mission__label">Our Mission</span>
            </div>
            <p className="ab-mission__text">
              To empower underprivileged communities through sustainable
              welfare programs rooted in dignity, compassion, and faith.
            </p>
          </div>

        </div>

        {/* ── Right ── */}
        <div className="ab-right">
          {values.map((v, i) => (
            <div className="ab-value" key={i}>
              <div className="ab-value__icon-wrap">
                {v.icon}
              </div>
              <div>
                <p className="ab-value__title">{v.title}</p>
                <p className="ab-value__desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}