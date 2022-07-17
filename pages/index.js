import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/footer";
import React from "react";

const Home = () => {
  return (
    <main className="">
      <Head>
        <title>Rhythm Sood</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <div className="logo">
            <span>
              <h4>RHYTHM SOOD</h4>
            </span>
            <div>
              <a href="/contact">
                <Image src={"/envelope.svg"} width={30} height={30} />
              </a>
              <a href="/work">
                <Image src={"/briefcase.svg"} width={30} height={30} />
              </a>
              <a href="blank">
                <Image src={"/linkedin.svg"} width={35} height={50} />
              </a>
              <a href="https://github.com/RhythmS00d">
                <Image src={"/github2.svg"} width={32} height={40} />
              </a>
              <a href="https://www.instagram.com/rhythm_sood/">
                <Image src={"/instagram.svg"} width={30} height={30} />
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="box one">
        <div className="box two"></div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
