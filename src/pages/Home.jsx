import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const expertise = [
  'Digital Marketing',
  'Content Creation',
  'Media & Communications',
  'Entrepreneurship',
  'Leadership',
  'Strategy',
  'Business Development',
  'Networking',
  'Public Speaking',
  'Innovation',
]

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

function Counter({ value, duration = 2 }) {
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      let startTime = null
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const elapsed = (currentTime - startTime) / 1000
        const progress = Math.min(elapsed / duration, 1)
        setCount(Math.floor(progress * value))
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(value)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration])

  return <span ref={nodeRef}>{count}</span>
}

function Home() {
  return (
    <>
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative bg-[#E2E3F6] text-gray-900 px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16">
        <motion.div variants={fadeInLeft} className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
            Institutional Leader &amp; Media Entrepreneur
          </h1>
          <p className="mt-4 sm:mt-6 text-gray-700 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
            Operating at the intersection of media, finance, and global policy.
            Founder of Hooza Media and trusted advisor across European and
            African economic forums.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
            <a
              href="#strategy"
              className="bg-gradient-to-r from-sky-500 to-cyan-600 text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded flex items-center gap-2 hover:from-sky-600 hover:to-cyan-700 transition-all duration-300"
            >
              EXPLORE SERVICES <span aria-hidden="true">→</span>
            </a>
            <a
              href="#bio"
              className="border border-gray-500 text-gray-900 text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded hover:border-gray-900 transition-colors"
            >
              READ BIO
            </a>
          </div>

          {/* Stats Section */}
          <motion.div variants={fadeInUp} className="mt-6 sm:mt-8 flex flex-nowrap items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5 overflow-x-auto pb-2 lg:pb-0">
            <div className="text-center lg:text-left flex-shrink-0">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900"><Counter value={55} /></p>
              <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-widest text-gray-600 uppercase mt-0.5">Happy Clients</p>
            </div>
            <div className="text-center lg:text-left flex-shrink-0">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900"><Counter value={125} /></p>
              <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-widest text-gray-600 uppercase mt-0.5">Projects Done</p>
            </div>
            <div className="text-center lg:text-left flex-shrink-0">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900"><Counter value={12} /></p>
              <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-widest text-gray-600 uppercase mt-0.5">Awards Winning</p>
            </div>
            <div className="text-center lg:text-left flex-shrink-0">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900"><Counter value={20} /></p>
              <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-widest text-gray-600 uppercase mt-0.5">Years Experience</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInRight} className="relative flex-1 flex justify-center py-4 sm:py-6">
          {/* outline offset behind the blob for depth */}
          <div className="absolute w-48 h-56 xs:w-56 xs:h-64 sm:w-64 sm:h-72 md:w-80 md:h-96 lg:w-96 lg:h-[26rem] translate-x-2 sm:translate-x-3 translate-y-2 sm:translate-y-3 md:translate-x-4 md:translate-y-4 rounded-tl-2xl rounded-tr-[100px] rounded-br-[100px] rounded-bl-2xl border-2 border-sky-400/30" />
          <div className="relative w-48 h-56 xs:w-56 xs:h-64 sm:w-64 sm:h-72 md:w-80 md:h-96 lg:w-96 lg:h-[26rem] bg-[#2E9BCA] rounded-tl-2xl rounded-tr-[100px] rounded-br-[100px] rounded-bl-2xl overflow-hidden flex items-end justify-center">
            <img
              src="/hero.png"
              alt="Victor Nkindi"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        variants={fadeInUp}
        href="#foundations"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest text-gray-500 hover:text-gray-900 transition-colors"
      >
        SCROLL TO BEGIN
        <span className="animate-bounce" aria-hidden="true">↓</span>
      </motion.a>
    </motion.section>

    <motion.section 
      id="foundations"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="bg-[#050A1A] text-white px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
        <motion.div variants={fadeInUp}>
          <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-sky-400">
            FOUNDATIONS
          </p>
          <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
            Core Values
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-md">
            Built on rigorous academic training and an unyielding commitment
            to structural integrity, transparency, and institutional
            excellence.
          </p>
          <a
            href="/CV.pdf"
            className="mt-6 sm:mt-8 inline-block bg-white text-gray-900 text-[10px] sm:text-xs md:text-sm font-bold tracking-wide px-5 sm:px-6 py-2.5 sm:py-3 rounded hover:bg-gray-200 transition-colors"
          >
            DOWNLOAD CV
          </a>
        </motion.div>

        <motion.div variants={fadeInUp} className="lg:border-l lg:border-gray-700/30 lg:pl-8 sm:lg:pl-12 flex flex-col gap-6 sm:gap-8 md:gap-10">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Structural Integrity</h3>
            <p className="mt-2 sm:mt-3 text-gray-400 text-sm sm:text-base md:text-lg">
              Approaching every media and policy challenge as an
              architectural problem requiring a solid, scalable foundation.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Global Competence</h3>
            <p className="mt-2 sm:mt-3 text-gray-400 text-sm sm:text-base md:text-lg">
              Bridging diverse cultural and economic landscapes with
              precision, intelligence, and high-density information
              architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>

    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      className="bg-[#E2E3F6] py-4 sm:py-6 md:py-8 overflow-hidden"
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {[0, 1].map((i) => (
          <div key={i} className="flex shrink-0 items-center">
            {expertise.map((item) => (
              <span
                key={item}
                className="mx-4 sm:mx-6 text-xs sm:text-sm md:text-base font-semibold tracking-wide text-gray-700"
              >
                {item} <span className="text-sky-500 ml-4 sm:ml-6">★</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </motion.section>

    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="bg-white text-gray-900 px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp}>
          <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-sky-400">
            MILESTONES
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
            Key Achievements
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <motion.div variants={fadeInUp} className="lg:col-span-2 lg:row-span-2 bg-gray-100 rounded-xl p-6 sm:p-8 md:p-10 flex flex-col min-h-72 sm:min-h-80 lg:min-h-96">
            <p className="text-[10px] sm:text-xs font-bold tracking-widest text-sky-400">
              PRESS
            </p>
            <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold">
              Forbes Africa Feature
            </h3>
            <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-lg">
              Recognized for pioneering digital media strategies and fostering
              cross-continental investment frameworks that bridge European
              capital with African innovation.
            </p>
            {/* image goes in this open area */}
            <div className="flex-1 flex items-end">
              <img
                src="/forbes.jpg"
                alt="Forbes Africa Feature"
                className="w-full max-h-40 sm:max-h-48 md:max-h-56 object-contain object-bottom"
              />
            </div>
            <a
              href="/ADVRT Accenture_proof_005.pdf"
              className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wide inline-flex items-center gap-1 hover:text-gray-600 transition-colors"
            >
              READ ARTICLE <span aria-hidden="true">↗</span>
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gray-100 rounded-xl p-6 sm:p-8 md:p-10 flex flex-col min-h-48 sm:min-h-55">
            <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-sky-400 uppercase">
              AWARDS
            </p>
            <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight">
              ITU Recognition
            </h3>
            <div className="flex-1" />
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Awarded for significant contributions to telecommunications and
              digital infrastructure development.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-[#050A1A] text-white rounded-xl p-6 sm:p-8 md:p-10 flex flex-col min-h-48 sm:min-h-55">
            <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-teal-400 uppercase">
              METRICS
            </p>
            <h3 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              15+
            </h3>
            <div className="flex-1" />
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Years of executive leadership in media and institutional
              advisory roles.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
    </>
  )
}

export default Home
