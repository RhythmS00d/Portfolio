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
          Yesterday is not ours to recover, but tomorrow is ours to win.
        </span>
      </article>
      <article className="socials">
        <Image
          src={"/icons8-instagram.gif"}
          width={60}
          height={60}
          alt="Instagram"
        />
        <Image src={"/github.svg"} width={60} height={60} alt="Github" />
      </article>
      <span>All rights reserved &#169;</span>
    </footer>
  );
}

export {Footer}