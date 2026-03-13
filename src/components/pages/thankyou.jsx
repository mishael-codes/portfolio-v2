import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const ThankYou = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-6 bg-transparent overflow-hidden">
      
      {/* Background Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-accentColor rounded-full opacity-[0.08] blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="glass max-w-2xl w-full mx-auto rounded-3xl p-10 md:p-16 text-center relative z-10 border border-white/10 shadow-2xl flex flex-col items-center">
        
        <div className="w-24 h-24 bg-accentColor/10 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
          <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-5xl text-accentColor drop-shadow-lg" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Message <span className="text-accentColor">Received</span>!
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
          Thank you for reaching out. I appreciate you taking the time to contact me. I&apos;ll get back to you as soon as possible!
        </p>

        <Link
          to="/"
          className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-accentColor text-background font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] active:scale-95"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform" />
          <span>Return to Home</span>
        </Link>
      </div>

    </div>
  );
};

export default ThankYou;
