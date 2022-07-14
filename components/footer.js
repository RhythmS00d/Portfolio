import React from "react";
import Image from "next/image";
import iconInstagram from "../public/icons8-instagram.gif"
import iconGithub from "../public/github.svg"

const Footer = () => {
  return (
    <footer>
      <article className="info">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact me</a>
      </article>
      <article className="socials">
        <Image src={iconInstagram} alt="Instagram" />
        <Image src={iconGithub} alt="Github" />
      </article>
      <span>All rights reserved &#169;</span>
    </footer>
  );
}

export {Footer}