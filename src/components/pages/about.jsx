const About = () => (
  <div className="section-shell grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
    <div>
      <h2 className="section-title max-w-xs text-white">A thoughtful approach to the web.</h2>
    </div>
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <p className="body-copy">
          I am Mishael, a frontend developer focused on making digital products feel simple and alive.
          I started building for the web in 2021 and have kept learning through every project.
        </p>
        <p className="body-copy mt-6">
          I enjoy the space between a good idea and a finished product, where structure, visual design
          and technology meet.
        </p>
      </div>
      <div className="number-list">
        <article><strong>01</strong><span className="text-sm leading-7 text-stone-300">Clear interfaces that respect attention</span></article>
        <article><strong>02</strong><span className="text-sm leading-7 text-stone-300">Responsive work that feels natural everywhere</span></article>
        <article><strong>03</strong><span className="text-sm leading-7 text-stone-300">Friendly collaboration from first sketch to launch</span></article>
      </div>
    </div>
  </div>
);

export default About;
