import React from "react";
import Image from "next/image";
import Link from "next/link";
import iconInstagram from "../public/icons8-instagram.gif"
import iconGithub from "../public/github.svg"

const Footer = () => {
  return (
    <footer>
      <article className="info">
        <div>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact me</Link>
        </div>
        <span>
          Yesterday is not ours to recover, but tomorrow is ours to win.
        </span>
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