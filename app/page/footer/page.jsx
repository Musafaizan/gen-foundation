"use client";
import "./footer.css";
import Image from "next/image";
import sayalogo from "../../../public/assets/generouslogo.png";
import { Mail, Heart, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft">
      <div className="ft__container">

        <div className="ft__accent" />

        <div className="ft__main">

          <div className="ft__left">
            <span className="ft__pill">
              <Heart size={10} />
              <span>Making a Difference</span>
            </span>
            <h2 className="ft__headline">
              {"Let's create "}
              <em>{"impact"}</em>
              <br />
              {"side by side."}
            </h2>
            <p className="ft__tagline">
              {"Join us in building a better Pakistan — one family at a time."}
            </p>
          </div>

          <div className="ft__right">
            <p className="ft__label">
              <Mail size={13} />
              <span>{"Get in touch"}</span>
            </p>
            <a href="mailto:khalidatariq2323@gmail.com" className="ft__email">
              <span>{"khalidatariq2323@gmail.com"}</span>
              <ArrowUpRight size={18} className="ft__email-icon" />
            </a>
          </div>

        </div>

        <div className="ft__line" />

        <div className="ft__bottom">

          <div className="ft__logo">
            <Image src={sayalogo} alt="Generous Foundation" className="ft__logo-img" />
            <span className="ft__logo-name">{"Generous Foundation"}</span>
          </div>

          <p className="ft__copy">
            {`© ${year} Generous Foundation. All rights reserved.`}
          </p>

          <p className="ft__made">
            <span>{"Made with"}</span>
            <Heart size={10} className="ft__heart" />
            <span>{"for Pakistan"}</span>
          </p>

        </div>

      </div>
    </footer>
  );
}