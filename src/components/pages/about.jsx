const About = () => {
  return (
    <>
      <div className="relative px-6 py-16 w-full lg:w-4/5 xl:w-3/4 mx-auto flex flex-col items-center">
        <div className="w-full relative z-10">
          <div className="w-full text-center mb-16">
            <h2 className="inline-block text-3xl font-bold tracking-wider uppercase text-white relative">
              About Me
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-accentColor rounded-full"></div>
            </h2>
          </div>

          <div className="w-full max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 text-gray-300 text-lg leading-relaxed shadow-2xl space-y-6">
            <p>
              Hey — glad you&apos;re here. I&apos;m <span className="text-white font-semibold">Mishael</span>, a frontend
              developer with a focus on crafting clear, responsive interfaces
              that solve real user problems. I started building on the web in
              2021 and enjoy turning ideas into polished, maintainable products.
            </p>
            <p>
              Whether you&apos;re a company looking for a reliable developer to
              join your team, or a client needing a polished website to boost
              your brand — I&apos;m all about delivering solid results with
              clarity and style.
            </p>
            <p>
              I’m especially interested in building websites that inform,
              entertain, and educate. On the side, I&apos;m exploring game
              development and have a thing for nature photography — helps me
              recharge and stay creative. I&apos;m also into <span className="text-accentColor font-medium">webtoons</span> and never
              say no to good music.
            </p>
            <p className="text-white font-medium border-l-4 border-accentColor pl-4 mt-8 italic">
              If you value thoughtful interfaces, fast performance and
              straightforward collaboration, I&apos;d love to hear about your
              project — let&apos;s build something that works and delights.
            </p>
          </div>
        </div>

        {/* Background Decorative Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 -right-10 w-64 h-64 bg-accentColor rounded-full opacity-20 blur-[80px]"></div>
          <div className="absolute bottom-1/4 -left-10 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-[100px]"></div>
        </div>
      </div>
    </>
  );
};

export default About;
