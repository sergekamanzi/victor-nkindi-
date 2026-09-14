import { motion } from 'framer-motion'
import { FaMicrophone, FaUsers, FaGlobe, FaBuilding, FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
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
  const [activeCard, setActiveCard] = useState(0)

  const jobs = [
    { title: "Media and Business Development", type: "Full Time", date: "14 Nov 2025", description: "Job Description Grow Rwanda is a Kigali-based professional services firm delivering world-class digital products, engineering, design, marketing, acco...", tag: "See More" },
    { title: "Corporate and Institutional Communication", type: "Full Time", date: "14 Nov 2025", description: "Job Description Grow Rwanda is a Kigali-based professional services firm delivering world-class digital products, engineering, design, marketing, acco...", tag: "See More" },
    { title: "Entrepreneurship Training - Mentoring and Coaching", type: "Full Time", date: "14 Nov 2025", description: "Job Description Grow Rwanda is a Kigali-based professional services firm delivering world-class digital products, engineering, design, marketing, acco...", tag: "See More" },
    { title: "Investment & Corporate Services", type: "Full Time", date: "14 Nov 2025", description: "Job Description Grow Rwanda is a Kigali-based professional services firm delivering world-class digital products, engineering, design, marketing, acco...", tag: "See More" },
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
            <div className="h-px w-16 sm:w-24 bg-gray-300"></div>
            <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-sky-400 uppercase">
              OUR SERVICES
            </p>
            <div className="h-px w-16 sm:w-24 bg-gray-300"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] tracking-tight text-gray-900">
            Global Dialogue &<br />Disruption
          </h1>
        </motion.div>

        {/* Services Cards */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Card 1: Speaking Engagements */}
          <motion.div variants={fadeInUp} className="bg-transparent rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-sky-300 transition-colors">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-sky-100 flex items-center justify-center mb-4 sm:mb-5">
              <FaMicrophone className="text-sky-500 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight">
              Speaking Engagements
            </h3>
          </motion.div>

          {/* Card 2: Panel Discussions */}
          <motion.div variants={fadeInUp} className="bg-transparent rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-sky-300 transition-colors">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-purple-100 flex items-center justify-center mb-4 sm:mb-5">
              <FaUsers className="text-purple-500 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight">
              Panel Discussions
            </h3>
          </motion.div>

          {/* Card 3: Digital Transformation */}
          <motion.div variants={fadeInUp} className="bg-transparent rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-sky-300 transition-colors">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-green-100 flex items-center justify-center mb-4 sm:mb-5">
              <FaGlobe className="text-green-500 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight">
              Digital Transformation
            </h3>
          </motion.div>

          {/* Card 4: Institutional Investment */}
          <motion.div variants={fadeInUp} className="bg-transparent rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-sky-300 transition-colors">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-orange-100 flex items-center justify-center mb-4 sm:mb-5">
              <FaBuilding className="text-orange-500 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight">
              Institutional Investment
            </h3>
          </motion.div>

          {/* Card 5: Media Entrepreneurship */}
          <motion.div variants={fadeInUp} className="bg-transparent rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-sky-300 transition-colors">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-pink-100 flex items-center justify-center mb-4 sm:mb-5">
              <FaPlay className="text-pink-500 text-xl sm:text-2xl" />
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
            CAREERS
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">
            Expertise That Creates Impact
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Driving Transformation Across Africa & Beyond
          </p>
        </motion.div>

        {/* Job Cards Carousel */}
        <motion.div variants={fadeInUp} className="relative h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px] flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={() => setActiveCard(Math.max(0, activeCard - 1))}
            className="absolute left-0 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center hover:bg-cyan-600 transition-colors shadow-lg"
          >
            <FaChevronLeft className="text-sm sm:text-base" />
          </button>

          <div className="relative w-full max-w-5xl mx-auto px-12 sm:px-16">
            {jobs.map((job, index) => {
              const isActive = index === activeCard
              const offset = index - activeCard
              const scale = isActive ? 1 : 0.85
              const opacity = isActive ? 1 : 0.6
              const zIndex = isActive ? 10 : 5 - Math.abs(offset)
              const translateX = offset * 80

              return (
                <motion.div
                  key={index}
                  initial={{ scale, opacity, x: translateX }}
                  animate={{ scale, opacity, x: translateX }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  onClick={() => setActiveCard(index)}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
                  style={{ zIndex }}
                >
                  <div
                    className={`rounded-xl p-4 sm:p-6 transition-all duration-300 ${
                      isActive
                        ? 'w-[280px] sm:w-[350px] md:w-[450px] lg:w-[520px] h-[220px] sm:h-[260px] md:h-[300px] bg-gradient-to-br from-cyan-500 to-teal-700 shadow-2xl'
                        : 'w-[240px] sm:w-[280px] md:w-[320px] h-[180px] sm:h-[220px] md:h-[260px] bg-gradient-to-br from-cyan-400 to-teal-600 shadow-lg'
                    }`}
                  >
                    {isActive ? (
                      <>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight mb-3">
                          {job.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs md:text-sm text-white/70 mb-4 line-clamp-2 leading-relaxed">
                          {job.description}
                        </p>
                        <span className="text-[10px] sm:text-xs md:text-sm bg-white/20 text-white px-3 py-1.5 rounded-full inline-block font-semibold">
                          {job.tag}
                        </span>
                      </>
                    ) : (
                      <>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 line-clamp-2 leading-tight">
                          {job.title}
                        </h3>
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
            className="absolute right-0 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center hover:bg-cyan-600 transition-colors shadow-lg"
          >
            <FaChevronRight className="text-sm sm:text-base" />
          </button>
        </motion.div>
      </div>
    </motion.section>
    </>
  )
}

export default Services
