"use client";
import "./hero.css";
import { useEffect } from "react";
import Image from "next/image";
import boy from "../../../public/assets/boyimg.png";

const Hero = ({ onDonateClick }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section className="hero" id="hero">

      {/* ── Decorative triangles ── */}
      <div className="tri tri--top-mid" />
      <div className="tri tri--right-1" />
      <div className="tri tri--right-2" />
      <div className="dot dot--green" />

      {/* ══════════ LEFT CONTENT ══════════ */}
      <div className="hero__left">

        <p className="hero__tagline">Make a difference today</p>

        <h1 className="hero__heading">
          <span className="line line--1">
            Small acts
            {/* ── Rotating Sun ── */}
            <span className="sun-wrap" aria-hidden="true">
              <svg className="sun" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
                <g className="sun__rays">
                  <ellipse cx="45" cy="12" rx="4.5" ry="9" fill="#F7A800" />
                  <ellipse cx="45" cy="78" rx="4.5" ry="9" fill="#F7A800" />
                  <ellipse cx="12" cy="45" rx="9" ry="4.5" fill="#F7A800" />
                  <ellipse cx="78" cy="45" rx="9" ry="4.5" fill="#F7A800" />
                  <ellipse cx="22" cy="22" rx="4.5" ry="9" fill="#F7A800" transform="rotate(-45 22 22)" />
                  <ellipse cx="68" cy="22" rx="4.5" ry="9" fill="#F7A800" transform="rotate(45 68 22)" />
                  <ellipse cx="22" cy="68" rx="4.5" ry="9" fill="#F7A800" transform="rotate(45 22 68)" />
                  <ellipse cx="68" cy="68" rx="4.5" ry="9" fill="#F7A800" transform="rotate(-45 68 68)" />
                </g>
                <circle cx="45" cy="45" r="18" fill="#F7A800" />
                <path
                  d="M45 35 Q54 37 52 46 Q50 55 41 53 Q32 51 34 42 Q36 33 45 35Z"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </svg>
            </span>
          </span>
          <span className="line line--2">of kindness with</span>
          <span className="line line--3">big impact.</span>
        </h1>

        <div className="hero__buttons">
          <button className="btn-donate" onClick={onDonateClick}>
            <svg className="btn-donate__heart" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            DONATE NOW
          </button>

          {/* <button className="btn-explore">
            EXPLORE MORE
            <span className="btn-explore__bar" />
          </button> */}
        </div>

      </div>

      {/* ══════════ RIGHT — IMAGE ══════════ */}
      <div className="hero__right">
        {/* Twinkling stars */}
        <span className="star star--1">✦</span>
        <span className="star star--2">✦</span>
        <span className="star star--3">✦</span>

        <Image
          src={boy}
          alt="Hero"
          className="hero__img"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
      </div>

    </section>
  );
};

export default Hero;