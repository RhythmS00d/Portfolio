const Uni = () => {
    return (
      <section className="uni">
        <div className="uniImage">
          <Image width={250} height={140} src={"/mq.jpg"} />
          <Image width={250} height={140} src={"/mqlogo.webp"} />
          <Image width={250} height={140} src={"/qsmq.png"} />
        </div>
        <div className="degree">
          <h3>Bachelor of Information Technology</h3>
          <h6>Software Development</h6>
        </div>
      </section>
    );
}

export {Uni}