const Languages = () => {
  return (
    <section>
      <h2>
        These are some languages, frameworks and libraries that I have learnt
        over the 4 years.
      </h2>
      <div>
        <Image
          className="langLogo"
          src={"/python.png"}
          width={100}
          height={100}
        />
        <Image
          className="langLogo"
          src={"/jscss.png"}
          width={250}
          height={120}
        />
        <Image
          className="langLogo"
          src={"/react.png"}
          width={100}
          height={100}
        />
        <Image
          className="langLogo"
          src={"/java.png"}
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

export { Languages };
