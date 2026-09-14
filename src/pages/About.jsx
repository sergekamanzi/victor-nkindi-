import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

function About() {
  return (
    <>
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative w-full min-h-[25vh] sm:min-h-[35vh] bg-[#E2E3F6] text-gray-900 py-8 sm:py-10 md:py-12 lg:py-16"
    >
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <motion.div
          variants={staggerContainer}
          className="flex flex-col lg:flex-row bg-[#050A1A] rounded-none overflow-hidden shadow-lg"
        >
          {/* Left Column - About Me */}
          <motion.div
            variants={fadeInLeft}
            className="w-full lg:w-1/2 p-8 sm:p-10 md:p-14 lg:p-16 xl:p-20 flex flex-col justify-center space-y-4 sm:space-y-6"
          >
            <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-sky-400 uppercase">
              Introducing
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] sm:leading-[1.15] tracking-tight text-white">
              About Me
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
              A strategic connector in trade, investment promotion and cultural diplomacy sector, driving force behind impactful partnerships across Africa and beyond. Media & Communication Specialist, Tech and Business Development professional based in Rwanda.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
              As CEO of Hooza Media and Hooza & Partners, I deliver market intelligence, open strategic doors, and guide ventures from concept to success in over 20 African countries and the Caribbean. As a Board Director at the European Business Chamber of Rwanda, I promote investment in key sectors such as green mobility, biotech, energy, and creative industries. Recognised by Forbes Africa and the ITU, advocating for youth and women empowerment through entrepreneurship and innovation, I've mentored 2,500+ entrepreneurs, helping transform ideas into market-ready ventures. My mission: link people, ideas, and opportunities to shape Africa's inclusive, sustainable growth.
            </p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            variants={fadeInRight}
            className="w-full lg:w-1/2 h-48 sm:h-64 md:h-80 lg:h-auto min-h-[300px] lg:min-h-[60vh] overflow-hidden"
          >
            <img
              src="/about.jpeg"
              alt="Victor Nkindi - Bridging continents through media and policy"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>

    {/* Second Section - My Approach */}
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative w-full bg-white text-gray-900 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <motion.div variants={fadeInUp} className="mb-10 sm:mb-12 md:mb-16 text-center">
          <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-sky-400 uppercase mb-3 sm:mb-4">
            MY APPROACH
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.2] tracking-tight">
            How I Work
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-14 lg:gap-20">
          {/* Step 1 */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-sky-400 flex items-center justify-center shadow-lg shadow-sky-400/30">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-full w-12 lg:w-16 h-0.5 bg-sky-400/50" />
            </div>
            <p className="mt-4 sm:mt-6 text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-gray-500 uppercase">
              STEP 01
            </p>
            <h3 className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center leading-tight">
              Data-Driven Strategy
            </h3>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-sky-400 flex items-center justify-center shadow-lg shadow-sky-400/30">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-full w-12 lg:w-16 h-0.5 bg-sky-400/50" />
            </div>
            <p className="mt-4 sm:mt-6 text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-gray-500 uppercase">
              STEP 02
            </p>
            <h3 className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center leading-tight">
              Human-Centered Branding
            </h3>
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-sky-400 flex items-center justify-center shadow-lg shadow-sky-400/30">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <p className="mt-4 sm:mt-6 text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-gray-500 uppercase">
              STEP 03
            </p>
            <h3 className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center leading-tight">
              Case-Study-Based Coaching
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>

    {/* Third Section - Call to Action */}
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative w-full py-12 sm:py-14 md:py-16 lg:py-20"
    >
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <motion.div
          variants={staggerContainer}
          className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-lg"
        >
          {/* Left Column - Content */}
          <motion.div
            variants={fadeInLeft}
            className="w-full lg:w-1/2 p-8 sm:p-10 md:p-12 lg:p-14 xl:p-16 flex flex-col justify-center space-y-4 sm:space-y-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-[1.2] tracking-tight text-gray-900">
              Ready to Write Your Own Success Story?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
              Transform your career through expert coaching and strategic guidance. Let's work together to unlock your full potential.
            </p>
            <a
              href="mailto:contact@victornkindi.com"
              className="inline-flex items-center gap-2 bg-teal-400 text-black text-sm sm:text-base md:text-lg font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-teal-300 transition-colors w-fit"
            >
              Connect Me Now
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            variants={fadeInRight}
            className="w-full lg:w-1/2 h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden"
          >
            <img
              src="/about2.png"
              alt="Victor Nkindi - Ready to Write Your Own Success Story"
              className="w-full h-full object-contain object-center shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
    </>
  )
}

export default About
