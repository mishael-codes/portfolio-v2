const About = () => {
  return (
    <>
      <div className="relative px-3 h-auto w-screen lg:w-3/5 lg:mx-auto flex flex-col items-center text-textColor">
        <div className="h-auto">
          <div className="w-full text-center">
            <h1 className=" left-2/4 z-10 text-textColor text-xl font-semibold uppercase underline underline-offset-2 decoration-accentColor mt-3 md:text-3xl">
              About
            </h1>
          </div>
          <div className="w-full p-6 text-textColor md:text-xl lg:ml-24 lg:flex lg:flex-col lg:items-start lg:justify-center lg:mt-6 xl:mt-0 lg:h-auto lg:w-3/4">
            <p className="first-letter:text-2xl md:first-letter:text-3xl first-letter:text-accentColor first-letter:font-semibold indent-3 mb-2">
              Hey — glad you&apos;re here. I&apos;m Mishael, a frontend developer
              with a focus on crafting clear, responsive interfaces that solve
              real user problems. I started building on the web in 2021 and
              enjoy turning ideas into polished, maintainable products.
            </p>
            <p className="first-letter:text-2xl md:first-letter:text-3xl first-letter:text-accentColor first-letter:font-semibold indent-3 mb-2">
              Whether you&apos;re a company looking for a reliable developer to
              join your team, or a client needing a polished website to boost
              your brand — I&apos;m all about delivering solid results with
              clarity and style.
            </p>
            <p className="first-letter:text-2xl md:first-letter:text-3xl first-letter:text-accentColor first-letter:font-semibold indent-3 mb-2">
              I’m especially interested in building websites that inform,
              entertain, and educate. On the side, I&apos;m exploring game
              development and have a thing for nature photography — helps me
              recharge and stay creative. I&apos;m also into webtoons and never
              say no to good music.
            </p>
            <p className="first-letter:text-2xl md:first-letter:text-3xl first-letter:text-accentColor first-letter:font-semibold indent-3">
              If you value thoughtful interfaces, fast performance and
              straightforward collaboration, I&apos;d love to hear about your
              project — let&apos;s build something that works and delights.
            </p>
          </div>
        </div>
        <div className="hidden lg:block overflow-x-hidden">
          <div>
            <div className="absolute top-1/4 -right-40 w-[75px] h-[75px] shadow-lg shadow-black bg-shadowColor rounded-full opacity-70 dark-circle"></div>
            <div className="absolute top-2/4 -right-40 w-[75px] h-[75px] shadow-lg shadow-black bg-accentColor rounded-full opacity-70 yellow-circle"></div>
            <div className="absolute top-3/4 -right-40 w-[75px] h-[75px] shadow-lg shadow-black bg-textColor rounded-full opacity-70 ash-circle"></div>
            <div className="absolute top-1/4 -left-40 w-[75px] h-[75px] shadow-lg shadow-black bg-shadowColor rounded-full opacity-70 dark-circle-left"></div>
            <div className="absolute top-2/4 -left-40 w-[75px] h-[75px] shadow-lg shadow-black bg-accentColor rounded-full opacity-70 yellow-circle-left"></div>
            <div className="absolute top-3/4 -left-40 w-[75px] h-[75px] shadow-lg shadow-black bg-textColor rounded-full opacity-70 ash-circle-left"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
