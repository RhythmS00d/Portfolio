import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/footer";
import React, { useEffect } from "react";

import profilepic from "../public/profilepic.jpeg";
import java from "../public/java.png";
import jscss from "../public/jscss.png";
import react from "../public/react.png";
import python from "../public/python.png";
import mqlogo from "../public/mqlogo.webp";
import dominos from "../public/dominos.png";
import emergent from "../public/emergent.png";
import eleven from "../public/eleven.png";

const Home = () => {
  return (
    <main>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section>
        <div className="profilepic">
          <Image
            quality={100}
            width={200}
            height={200}
            id="profilepic"
            src={profilepic}
          />
        </div>
        <div className="welcome">
          <article>
            <h2>Rhythm Sood</h2>
            <span>
              <ul>
                <li><a href="tel:+61450294324">+61 450294324</a></li>
                <li><a href="mailto:rhythmsood1@gmail.com">rhythmsood1@gmail.com</a></li>
                <li>Paramatta, NSW 2150</li>
              </ul>
            </span>
          </article>
          <p>
            I am a Macquarie University student studying Bachelor of Information
            Technology. I am pursuing a major in software development with many
            different language/coding knowledge.
          </p>
        </div>
      </section>
      <section>
        <h2>
          These are some languages, frameworks and libraries that I have learnt
          over the 4 years.
        </h2>
        <div>
          <Image className="langLogo" src={python} width={100} height={100} />
          <Image className="langLogo" src={jscss} width={250} height={120} />
          <Image className="langLogo" src={react} width={100} height={100} />
          <Image className="langLogo" src={java} width={100} height={100} />
        </div>
      </section>
      <section className="aboutMe">
        <h3>Little about me</h3>
        <article>
          I am 22 years old. I am a very energetic, focused and commited
          individual. I have many goals in my life, the most important being to
          make my parents proud and provide them all the hapiness of the world.
          <p>
            I liked computers when I was in primary school. Always wondering how
            they work. Now, my degree helped me to understand the gift of
            technology and science. I try to learn as many new things as I can.
            The most learning I have gained is from my degree but I have also
            learned from youtube and other documentation available freely on
            internet.
          </p>
        </article>
      </section>
      <section className="uni">
        <div className="uniImage">
          <Image width={250} height={140} src={mqlogo} />
        </div>
      </section>
      <section className="work">
        <div className="workIntro">
          <h4>My Work History</h4>
          <span>
            Alongside my studies, I have also worked casually. Here is some of
            work history.
          </span>
        </div>
        <div className="workhistory">
          <ul>
            <li className="it">
              <div>
                <Image width={300} height={100} src={emergent} />
              </div>
              <aside>
                <h2>IT Support Helpdesk</h2>
                <h5>Emergent Cold PTY. LTD.</h5>
                <p>
                  Software Installation and system updating Installation of
                  basic and admin level of MS-Office Fixing system
                  errors/breakdown Network devices handling and fixing Fixing
                  computer/desktop errors
                </p>
              </aside>
            </li>
            <li className="dominos">
              <div>
                <Image width={100} height={100} src={dominos} />
              </div>
              <aside>
                <h2>Manager</h2>
                <h5>Domino's</h5>
                <p>
                  I worked in Domino's at Paramatta for around 3 years. It was a
                  great adventure with certain ups and downs along the way.
                  There are so many happy memories, good friends and family
                  within this job. I served as a Manager/Delivery Expert. My
                  main role was to look after the stock, roaster and customer
                  satisfaction.
                </p>
              </aside>
            </li>
            <li className="7eleven">
              <div>
                <Image width={100} height={100} src={eleven} />
              </div>
              <aside>
                <h2>Console Operator</h2>
                <h5>7 Eleven</h5>
                <p>
                  I worked in Domino's at Paramatta for around 3 years. It was a
                  great adventure with certain ups and downs along the way.
                  There are so many happy memories, good friends and family
                  within this job. I served as a Manager/Delivery Expert. My
                  main role was to look after the stock, roaster and customer
                  satisfaction.
                </p>
              </aside>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
