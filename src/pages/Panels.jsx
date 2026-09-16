import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'

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

function Panels() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative w-full bg-[#E2E3F6] text-gray-900 py-6 sm:py-8 md:py-10"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <motion.div variants={fadeInUp} className="mb-4 sm:mb-6">
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Panel 1: UPCOMING */}
          <motion.div variants={fadeInUp} className="relative bg-white rounded-lg overflow-hidden group shadow-lg">
            <div className="relative h-32 sm:h-40 md:h-48">
              <img
                src="/hero.png"
                alt="Global Economic Outlook"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded">
                UPCOMING
              </div>
            </div>
          </motion.div>

          {/* Panel 2: European-African Economic Forum */}
          <motion.div variants={fadeInUp} className="bg-white rounded-lg p-4 sm:p-5 md:p-6 flex flex-col shadow-lg">
            <p className="text-xs text-sky-600 font-semibold mb-2">
              NOV 15, 2024 • GENEVA, SWITZERLAND
            </p>
            <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">
              European-African Economic Forum
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">
              Digital Transformation in Africa: The Next Frontier
            </p>
            <p className="text-xs text-gray-500 mb-3 flex-1">
              Delivering the opening keynote on sovereign wealth funds and their role in accelerating digital infrastructure across Sub-Saharan Africa.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-sky-600 font-semibold">
                ROLE: KEYNOTE SPEAKER
              </span>
              <a href="#" className="text-xs text-gray-900 font-semibold hover:text-sky-600 transition-colors">
                DETAILS →
              </a>
            </div>
          </motion.div>

          {/* Panel 3: Pan-African Media Summit */}
          <motion.div variants={fadeInUp} className="bg-white rounded-lg p-4 sm:p-5 md:p-6 flex flex-col shadow-lg">
            <p className="text-xs text-sky-600 font-semibold mb-2">
              OCT 2023 • KIGALI, RWANDA
            </p>
            <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">
              Pan-African Media Summit
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">
              The Future of Independent Journalism
            </p>
            <p className="text-xs text-gray-500 mb-3 flex-1">
              Panel discussion on sustainable business models for digital media in emerging markets, focusing on subscription vs. ad-
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-sky-600 font-semibold">
                ROLE: PANELIST
              </span>
              <button className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                <FaPlay className="text-xs" />
              </button>
            </div>
          </motion.div>

          {/* Panel 4: Global Investment Consortium */}
          <motion.div variants={fadeInUp} className="bg-white rounded-lg overflow-hidden flex flex-col shadow-lg">
            <div className="relative h-24 sm:h-28 md:h-32">
              <img
                src="/hero.png"
                alt="Global Investment Consortium"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
              <p className="text-xs text-sky-600 font-semibold mb-2">
                JUN 2023 • LONDON, UK
              </p>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">
                Global Investment Consortium
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3">
                Mitigating Risk in Emerging Tech
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-sky-600 font-semibold">
                  ROLE: MODERATOR
                </span>
                <a href="#" className="text-xs text-gray-900 font-semibold hover:text-sky-600 transition-colors">
                  GALLERY
                </a>
              </div>
            </div>
          </motion.div>

          {/* Panel 5: World Economic Dialogue */}
          <motion.div variants={fadeInUp} className="bg-white rounded-lg p-4 sm:p-5 md:p-6 flex flex-col shadow-lg">
            <p className="text-xs text-sky-600 font-semibold mb-2">
              FEB 2023 • DAVOS, SWITZERLAND
            </p>
            <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">
              World Economic Dialogue
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">
              Bridging the Capital Divide
            </p>
            <p className="text-xs text-gray-500 mb-3 flex-1">
              A critical assessment of venture capital allocation discrepancies between the Global North and South, and policy...
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-sky-600 font-semibold">
                ROLE: SPEAKER
              </span>
              <a href="#" className="text-xs text-gray-900 font-semibold hover:text-sky-600 transition-colors">
                TRANSCRIPT
              </a>
            </div>
          </motion.div>

          {/* Panel 6: Africa Tech Summit */}
          <motion.div variants={fadeInUp} className="bg-white rounded-lg overflow-hidden flex flex-col shadow-lg">
            <div className="relative h-24 sm:h-28 md:h-32">
              <img
                src="/hero.png"
                alt="Africa Tech Summit"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
              <p className="text-xs text-sky-600 font-semibold mb-2">
                NOV 2022 • NAIROBI, KENYA
              </p>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">
                Africa Tech Summit
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3">
                Scaling Media Startups
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-sky-600 font-semibold">
                  ROLE: PANELIST
                </span>
                <a href="#" className="text-xs text-gray-900 font-semibold hover:text-sky-600 transition-colors">
                  GALLERY
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Panels
