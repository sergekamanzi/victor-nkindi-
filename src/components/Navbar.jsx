import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About Me', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Conference Panels & Moderations', to: '/panels' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="bg-[#E2E3F6] text-gray-900 px-6 md:px-10 py-4 relative">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="inline-flex items-center gap-2 text-lg font-bold">
          <span className="italic text-2xl">VN</span>
          <span className="text-sm font-semibold text-gray-600">
            | Victor Nkindi
          </span>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `pb-1 transition-colors hover:text-gray-900 ${
                    isActive
                      ? 'text-gray-900 border-b-2 border-gray-900'
                      : 'text-gray-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-6">
          
          <a
            href="#invest"
            className="bg-gradient-to-r from-sky-500 to-cyan-600 text-white text-sm font-semibold px-5 py-2 rounded hover:from-sky-600 hover:to-cyan-700 transition-all duration-300"
          >
            Let's Connect <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-gray-900 transition-transform ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-900 transition-opacity ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-900 transition-transform ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-4 pb-4 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-600'}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 pb-4">
          <NavLink to="/contact" className="text-sm font-semibold" onClick={closeMenu}>
            Contact
          </NavLink>
          <a
            href="#invest"
            onClick={closeMenu}
            className="bg-gradient-to-r from-sky-500 to-cyan-600 text-white text-sm font-semibold px-5 py-2 rounded text-center hover:from-sky-600 hover:to-cyan-700 transition-all duration-300"
          >
            Invest
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

