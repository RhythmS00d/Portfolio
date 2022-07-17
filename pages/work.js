import Image from "next/image";

const Work = () => {
    return (
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
                <Image width={300} height={100} src={"/emergent.png"} />
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
                <Image width={100} height={100} src={"/dominos.png"} />
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
                <Image width={100} height={100} src={"/eleven.png"} />
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
    );
}

export default Work