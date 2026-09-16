import { motion } from 'framer-motion'
import { FaMicrophone, FaUsers, FaGlobe, FaBuilding, FaPlay, FaChevronLeft, FaChevronRight, FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

function Services() {
  const [activeCard, setActiveCard] = useState(2)

  const jobs = [
    { title: "Healthcare Interp", type: "Part Time", date: "10 Nov 2025", description: "General Assessment - English proficiency and medical terminology required for interpretation services...", tag: "See More" },
    { title: "Testing", type: "Full Time", date: "12 Nov 2025", description: "English Assessment - Quality assurance and testing protocols for digital products...", tag: "See More" },
    { title: "General Talent", type: "Full Time", date: "14 Nov 2025", description: "General Assessment - Multi-disciplinary talent acquisition and development programs...", tag: "See More" },
    { title: "Engineer", type: "Full Time", date: "15 Jan 2026", description: "Technical Assessment - Software engineering and infrastructure development roles...", tag: "See More" },
    { title: "The CEO", type: "Full Time", date: "20 Jan 2026", description: "Executive Assessment - Leadership and strategic management positions...", tag: "See More" },
  ]

  return (
    <>
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative w-full bg-[#E2E3F6] text-gray-900 py-8 sm:py-10 md:py-12 lg:py-16"
    >
      <div className="mx-auto w-[90%] max-w-[1200px]">
        {/* Header Section */}
        <motion.div variants={fadeInUp} className="text-center mb-6 sm:mb-8 md:mb-10">
          <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6">
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] tracking-tight text-gray-900">
            Global Dialogue &<br />Disruption
          </h1>
        </motion.div>

        {/* Services Cards */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Card 1: Speaking Engagements */}
          <motion.div variants={fadeInUp} className="bg-transparent rounded-xl p-6 sm:p-8 border border-gray-200">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-sky-100 flex items-center justify-center mb-4 sm:mb-5">
              <FaMicrophone className="text-sky-500 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight">
              Speaking Engagements
            </h3>
          </motion.div>

          {/* Card 2: Panel Discussions */}
          <motion.div variants={fadeInUp} className="bg-transparent rounded-xl p-6 sm:p-8 border border-gray-200">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-sky-100 flex items-center justify-center mb-4 sm:mb-5">
              <FaUsers className="text-sky-500 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight">
              Panel Discussions
            </h3>
          </motion.div>

          {/* Card 3: Digital Transformation */}
          <motion.div variants={fadeInUp} className="bg-transparent rounded-xl p-6 sm:p-8 border border-gray-200">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-sky-100 flex items-center justify-center mb-4 sm:mb-5">
              <FaGlobe className="text-sky-500 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight">
              Digital Transformation
            </h3>
          </motion.div>

          {/* Card 4: Institutional Investment */}
          <motion.div variants={fadeInUp} className="bg-transparent rounded-xl p-6 sm:p-8 border border-gray-200">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-sky-100 flex items-center justify-center mb-4 sm:mb-5">
              <FaBuilding className="text-sky-500 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight">
              Institutional Investment
            </h3>
          </motion.div>

          {/* Card 5: Media Entrepreneurship */}
          <motion.div variants={fadeInUp} className="bg-transparent rounded-xl p-6 sm:p-8 border border-gray-200">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-sky-100 flex items-center justify-center mb-4 sm:mb-5">
              <FaPlay className="text-sky-500 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight">
              Media Entrepreneurship
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>

    {/* Jobs/Careers Section */}
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative w-full bg-white text-gray-900 py-8 sm:py-10 md:py-12 lg:py-16"
    >
      <div className="mx-auto w-[90%] max-w-[1400px]">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wider mb-3 sm:mb-4">
            Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">
            Expertise That Creates Impact
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Driving Transformation Across Africa & Beyond
          </p>
        </motion.div>

        {/* Job Cards Carousel */}
        <motion.div variants={fadeInUp} className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] flex items-center justify-center overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={() => setActiveCard(Math.max(0, activeCard - 1))}
            className="absolute left-0 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-sky-500 to-cyan-600 text-white flex items-center justify-center hover:from-sky-600 hover:to-cyan-700 transition-all duration-300 shadow-lg"
          >
            <FaChevronLeft className="text-sm sm:text-base" />
          </button>

          <div className="relative w-full max-w-6xl mx-auto px-8 sm:px-12">
            {jobs.map((job, index) => {
              const isActive = index === activeCard
              const offset = index - activeCard
              const scale = isActive ? 1 : 0.75
              const opacity = isActive ? 1 : 0.4
              const zIndex = isActive ? 10 : 5 - Math.abs(offset)
              const translateX = offset * 120

              return (
                <motion.div
                  key={index}
                  initial={{ scale, opacity, x: translateX }}
                  animate={{ scale, opacity, x: translateX }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  onClick={() => setActiveCard(index)}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
                  style={{ zIndex }}
                >
                  <div
                    className={`rounded-xl p-4 sm:p-6 transition-all duration-300 ${
                      isActive
                        ? 'w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] h-[240px] sm:h-[280px] md:h-[320px] bg-gradient-to-r from-sky-500 to-cyan-600 shadow-2xl'
                        : 'w-[200px] sm:w-[240px] md:w-[280px] h-[160px] sm:h-[180px] md:h-[200px] bg-gradient-to-r from-sky-400 to-cyan-500 shadow-lg'
                    }`}
                  >
                    {isActive ? (
                      <>
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                            {job.title}
                          </h3>
                          <span className="text-[10px] sm:text-xs text-white/80 font-semibold">
                            {job.date}
                          </span>
                        </div>
                        <p className="text-[10px] sm:text-xs md:text-sm text-white/70 mb-4 line-clamp-2 leading-relaxed">
                          {job.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-xs md:text-sm text-white/60">
                            {job.type}
                          </span>
                          <button className="text-[10px] sm:text-xs md:text-sm bg-white/20 text-white px-3 py-1.5 rounded-full font-semibold hover:bg-white/30 transition-colors">
                            View details & apply
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 line-clamp-2 leading-tight">
                          {job.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-white/60">
                          {job.type}
                        </p>
                      </>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setActiveCard(Math.min(jobs.length - 1, activeCard + 1))}
            className="absolute right-0 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-sky-500 to-cyan-600 text-white flex items-center justify-center hover:from-sky-600 hover:to-cyan-700 transition-all duration-300 shadow-lg"
          >
            <FaChevronRight className="text-sm sm:text-base" />
          </button>
        </motion.div>
      </div>
    </motion.section>

    {/* Let's Talk Contact Section */}
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative w-full bg-white text-gray-900 py-8 sm:py-10 md:py-12"
    >
      <div className="mx-auto w-[90%] max-w-[1000px]">
        <motion.div variants={fadeInUp} className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Contact Info */}
            <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-sky-50 to-cyan-50">
              <div className="mb-6 sm:mb-8">
                <div className="w-12 h-1 bg-sky-500 mb-4 sm:mb-6"></div>
                <h2 className="text-sm sm:text-base font-bold tracking-widest text-sky-600 mb-4 sm:mb-6 flex items-center gap-2">
                  LET'S TALK
                  <motion.span
                    animate={{ rotate: [0, 20, -20, 20, -20, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    className="text-lg sm:text-xl inline-block"
                  >
                    👋
                  </motion.span>
                </h2>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6 text-gray-900">
                  Let's build something <span className="text-sky-600">worth remembering.</span>
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                  Ready to make things happen? Tell me about your brand, your goals and where you'd like to be, and let's design the path there together.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sky-500 flex items-center justify-center">
                    <FaEnvelope className="text-white text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">Email</p>
                    <a href="mailto:contact@victornkindi.com" className="text-sm sm:text-base md:text-lg text-gray-900 hover:text-sky-600 transition-colors font-medium">
                      contact@victornkindi.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sky-500 flex items-center justify-center">
                    <FaPhone className="text-white text-sm sm:text-base" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">Phone</p>
                    <a href="tel:+250788275646" className="text-sm sm:text-base md:text-lg text-gray-900 hover:text-sky-600 transition-colors font-medium">
                      +250 788 275 646
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="p-6 sm:p-8 md:p-10">
              <form className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-xs sm:text-sm font-bold tracking-widest text-gray-900 mb-2 sm:mb-3">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 sm:px-5 sm:py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold tracking-widest text-gray-900 mb-2 sm:mb-3">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 sm:px-5 sm:py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold tracking-widest text-gray-900 mb-2 sm:mb-3">
                    PROJECT / MESSAGE
                  </label>
                  <textarea
                    placeholder="Tell me about your brand and goals..."
                    rows="4"
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 sm:px-5 sm:py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all text-sm sm:text-base resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-cyan-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:from-sky-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl"
                >
                  SEND MESSAGE
                  <FaArrowRight className="text-sm sm:text-base" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
    </>
  )
}

export default Services
