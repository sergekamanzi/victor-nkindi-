import { NavLink } from 'react-router-dom'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const exploreLinks = [
  { name: 'About Me', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Conference Panels', to: '/panels' },
  { name: 'Moderations', to: '/moderations' },
]

function Contact() {
  return (
    <footer className="relative bg-[#0b0d12] text-white px-6 md:px-10 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/60 to-transparent" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div>
          <NavLink to="/" className="inline-flex items-center gap-2 text-lg font-bold">
            <span className="italic text-2xl">VN</span>
            <span className="text-sm font-semibold text-gray-300">
              | Victor Nkindi
            </span>
          </NavLink>
          <p className="mt-6 text-gray-400 text-sm md:text-base max-w-xs">
            Institutional leadership, media strategy, and policy advisory
            across European and African economic forums.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold tracking-widest text-sky-400">
            EXPLORE
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm md:text-base text-gray-300">
            {exploreLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.to} className="hover:text-white transition-colors">
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold tracking-widest text-sky-400">
            CONNECT
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm md:text-base text-gray-300">
            <li>
              <a href="mailto:contact@victornkindi.com" className="hover:text-white transition-colors">
                contact@victornkindi.com
              </a>
            </li>
            <li>
              <a href="tel:+250788275646" className="hover:text-white transition-colors">
                +250 788 275 646
              </a>
            </li>
            <li className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs md:text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Victor Nkindi · All rights reserved.</p>
        <p>Media Strategy · Policy Advisory · Institutional Leadership</p>
      </div>
    </footer>
  )
}

export default Contact
