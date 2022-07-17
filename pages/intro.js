const Intro = () => {
    return (
      <section className="introtome">
        <div className="profilepic">
          <Image
            quality={100}
            width={500}
            height={500}
            id="profilepic"
            src={"/profilepic.jpeg"}
          />
        </div>
        <div className="welcome">
          <article>
            <h2>Rhythm Sood</h2>
            <span>
              <ul>
                <li>
                  <a href="tel:+61450294324">+61 450294324</a>
                </li>
                <li>
                  <a href="mailto:rhythmsood1@gmail.com">
                    rhythmsood1@gmail.com
                  </a>
                </li>
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
    );
}

export {Intro}