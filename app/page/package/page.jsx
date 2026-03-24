'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import help1 from "../../../public/assets/help1.jpeg";
import help2 from "../../../public/assets/help2.jpeg";
import help3 from "../../../public/assets/help3.jpeg";
import help4 from "../../../public/assets/help4.jpeg";
import help5 from "../../../public/assets/help5.jpeg";  
import help6 from "../../../public/assets/help6.jpeg";
import help7 from "../../../public/assets/help7.jpeg";  
import help8 from "../../../public/assets/help8.jpeg";
import help9 from "../../../public/assets/help9.jpeg";


import "./package.css";

const images = [
    { src: help1, alt: "Ration Drive",        label: "Ration Distribution"   },
    { src: help2, alt: "Iftar Gathering",      label: "Iftar Gatherings"      },
    { src: help3, alt: "Orphan Care",          label: "Orphan Care"           },
    { src: help4, alt: "Community Support",    label: "Community Support"     },
    { src: help5, alt: "Food Packages",        label: "Food Packages"         },
    { src: help6, alt: "Medical Aid",          label: "Medical Aid"           },
    { src: help7, alt: "Education Support",    label: "Education Support"     },
    { src: help8, alt: "Shelter Program",      label: "Shelter Program"       },
    { src: help9, alt: "Volunteer Work",       label: "Volunteer Work"        },
];

const stats = [
    { value: "5,000+", label: "Families Served"    },
    { value: "12",     label: "Active Programs"    },
    { value: "3",      label: "Cities Reached"     },
    { value: "200+",   label: "Volunteers"         },
];

const Efforts = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('ef--visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const items = sectionRef.current?.querySelectorAll('.ef__animate');
        items?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="ef" ref={sectionRef} id="packages">

            {/* ── Background texture ── */}
            <div className="ef__noise" aria-hidden />

            <div className="ef__container">

                {/* ── Header ── */}
                <div className="ef__header ef__animate">
                    <span className="ef__eyebrow">Our Work on the Ground</span>
                    <h2 className="ef__heading">
                        Every Action<br />
                        <em>Tells a Story</em>
                    </h2>
                    <p className="ef__sub">
                        From Ramadan ration drives to year-round orphan care, our teams
                        work tirelessly across communities — here is a glimpse of what
                        your support makes possible.
                    </p>
                    <div className="ef__rule" />
                </div>

                {/* ── Stats Row ── */}
                <div className="ef__stats ef__animate">
                    {stats.map((s, i) => (
                        <div className="ef__stat" key={i} style={{ '--i': i }}>
                            <span className="ef__stat-value">{s.value}</span>
                            <span className="ef__stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* ── Mosaic Grid ── */}
                <div className="ef__grid">
                    {images.map((img, i) => (
                        <div
                            className={`ef__cell ef__cell--${i + 1} ef__animate`}
                            key={i}
                            style={{ '--i': i }}
                        >
                            <div className="ef__cell-inner">
                                <img
                                    src={typeof img.src === 'object' ? img.src.src : img.src}
                                    alt={img.alt}
                                    className="ef__img"
                                    loading="lazy"
                                />
                                <div className="ef__cell-overlay">
                                    <span className="ef__cell-num">0{i + 1}</span>
                                    <span className="ef__cell-label">{img.label}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Footer line ── */}
                <div className="ef__footer ef__animate">
                    <div className="ef__footer-line" />
                    <p className="ef__footer-text">
                        "And whoever saves one life — it is as if he has saved all of mankind."
                        <span className="ef__footer-cite"> — Al-Qur'an 5:32</span>
                    </p>
                    <div className="ef__footer-line" />
                </div>

            </div>
        </section>
    );
};

export default Efforts;