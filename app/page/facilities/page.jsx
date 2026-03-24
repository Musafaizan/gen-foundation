"use client";
import { useState, useRef } from "react";
import "./facilities.css";
import Image from "next/image";
import {
  ShoppingBasket, GraduationCap, Home, HeartPulse,
  Droplets, Baby, Utensils, Shirt, BookOpen, HandHeart,
} from "lucide-react";

import s15  from "../../../public/assets/s15.jpeg";
import s18  from "../../../public/assets/s18.jpeg";
import s19  from "../../../public/assets/s19.jpeg";
import se   from "../../../public/assets/se.jpeg";
import sg   from "../../../public/assets/sg.jpeg";
import sd   from "../../../public/assets/sd.jpeg";
import img7  from "../../../public/assets/ramzansaya.jpg";
import img8  from "../../../public/assets/clothsaya.jpg";
import img9  from "../../../public/assets/skillsaya.jpg";
import img10 from "../../../public/assets/widowsaya.avif";

const facilities = [
  { icon: ShoppingBasket, title: "Ration Drives",     tag: "Food Security",  color: "#f07b2f", image: s15,  desc: "Essential food supplies for families affected by lockdown and poverty." },
  { icon: GraduationCap,  title: "Education Support", tag: "Learning",       color: "#4caf82", image: s18,  desc: "Covering school expenses for children of families in need and orphans." },
  { icon: Home,           title: "Monthly Support",   tag: "Welfare",        color: "#5b8dd9", image: s19,  desc: "Regular ration and household help for widows and struggling families." },
  { icon: HeartPulse,     title: "Healthcare",        tag: "Health",         color: "#e91e8c", image: se,   desc: "Medical camps and healthcare access for underprivileged communities." },
  { icon: Droplets,       title: "Clean Water",       tag: "Infrastructure", color: "#0ea5e9", image: sg,   desc: "Water filtration plants in rural areas giving access to safe water." },
  { icon: Utensils,       title: "Iftar Programs",    tag: "Community",      color: "#f5a623", image: img7, desc: "Community Iftar gatherings during Ramadan for those in need." },
  { icon: Baby,           title: "Orphan Care",       tag: "Child Welfare",  color: "#a855f7", image: sd,   desc: "Care, education and support for orphaned children across Pakistan." },
  { icon: Shirt,          title: "Clothing Drives",   tag: "Essentials",     color: "#4caf82", image: img8, desc: "Seasonal clothing distributed to families and individuals in need." },
  { icon: BookOpen,       title: "Skill Training",    tag: "Empowerment",    color: "#f07b2f", image: img9, desc: "Vocational skills for youth and women to become self-sufficient." },
  { icon: HandHeart,      title: "Widow Support",     tag: "Support",        color: "#e91e8c", image: img10,desc: "Financial and emotional support helping widows rebuild their lives." },
];

export default function Facilities() {
  const [active, setActive] = useState(null);
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleMouseMove = (e, i) => {
    const rect = sectionRef.current.getBoundingClientRect();
    setImgPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setActive(i);
  };

  const current = active !== null ? facilities[active] : null;

  return (
    <section className="fac4" id="facilities" ref={sectionRef}>

      {/* Floating image that follows cursor */}
      <div
        className={"fac4__cursor-img" + (active !== null ? " fac4__cursor-img--show" : "")}
        style={{ left: imgPos.x, top: imgPos.y }}
      >
        {facilities.map((item, i) => (
          <div
            key={i}
            className={"fac4__cursor-frame" + (active === i ? " fac4__cursor-frame--active" : "")}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="220px"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      <div className="fac4__inner">

        {/* Header */}
        <div className="fac4__header">
          <div className="fac4__header-top">
            <span className="fac4__eyebrow">What We Do</span>
            <div className="fac4__header-line" />
          </div>
          <h2 className="fac4__heading">
            Our <span className="fac4__heading-em">Programs</span>
          </h2>
          <p className="fac4__subheading">
            Hover each program to explore — ten pillars of compassionate service.
          </p>
        </div>

        {/* Big list */}
        <ul className="fac4__list" onMouseLeave={() => setActive(null)}>
          {facilities.map((item, i) => {
            const Icon = item.icon;
            const isActive = active === i;
            const isOther = active !== null && !isActive;
            return (
              <li
                key={i}
                className={
                  "fac4__item" +
                  (isActive ? " fac4__item--active" : "") +
                  (isOther ? " fac4__item--other" : "")
                }
                style={{ "--c": item.color }}
                onMouseMove={(e) => handleMouseMove(e, i)}
              >
                <div className="fac4__item-inner">
                  {/* Number */}
                  <span className="fac4__item-num">{String(i + 1).padStart(2, "0")}</span>

                  {/* Icon */}
                  <div className="fac4__item-icon">
                    <Icon size={16} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <span className="fac4__item-title">{item.title}</span>

                  {/* Tag */}
                  <span className="fac4__item-tag">{item.tag}</span>

                  {/* Description (slides in on hover) */}
                  <p className="fac4__item-desc">{item.desc}</p>

                  {/* Arrow */}
                  <svg className="fac4__item-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Animated fill bar */}
                <span className="fac4__item-fill" />
              </li>
            );
          })}
        </ul>

        {/* Bottom quote */}
        <div className="fac4__quote">
          <span className="fac4__quote-mark">"</span>
          <p className="fac4__quote-text">From a small crisis response to a growing movement of compassion across Pakistan.</p>
        </div>

      </div>
    </section>
  );
}