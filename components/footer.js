import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <article className="info">
        <div>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact me</Link>
        </div>
        <span>
          YESTERDAY IS NOT OURS TO RECOVER, BUT TOMORROW IS OURS TO WIN.
        </span>
      </article>
      <article className="socials">
        <div>
          <a href="https://www.instagram.com/rhythm_sood/">
            <Image
              src={"/icons8-instagram.gif"}
              width={60}
              height={60}
              alt="Instagram"
            />
          </a>
          <a href="https://github.com/RhythmS00d">
            <Image src={"/github.svg"} width={50} height={60} alt="Github" />
          </a>
        </div>
        <span>All rights reserved &#169;</span>
      </article>
    </footer>
  );
}

export {Footer}