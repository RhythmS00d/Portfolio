import Head from 'next/head'
import Image from 'next/image'
import {Footer} from '../components/footer'
import React, { useEffect } from 'react';

import profilepic from "../public/profilepic.jpeg"
import java from "../public/java.png"
import jscss from "../public/jscss.png"
import react from "../public/react.png"
import python from "../public/python.png"

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
            <h2>Welcome to my portfolio</h2>
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
        <div className="work">
          <div className="workIntro">
            <h4>Work Life</h4>
            <span>
              Alongside my studies, I have also worked casually. Here is some of
              work history.
            </span>
          </div>
          <div className="workhistory">
            <ul>
              <li>
                <div>
                  <Image src={}/>
                </div>
                <aside>
                  <h4>Domino's</h4>
                  <p>
                    I worked in Domino's at Paramatta for around 3 years. It was
                    a great adventure with certain ups and downs along the way.
                    There are so many happy memories, good friends and family
                    within this job. I served as a Manager/Delivery Expert. My
                    main role was to look after the stock, roaster and customer
                    satisfaction.
                  </p>
                </aside>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="uni"></section>
      <Footer />
    </main>
  );
}

export default Home;