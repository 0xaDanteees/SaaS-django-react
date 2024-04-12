import { Fragment, useState } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'
import useDarkMode from 'hooks/useDarkMode'
import { Helmet } from 'react-helmet'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'


const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Blog', href: '/blog', current: false },
  { name: 'Servicios', href: '/servicios', current: false },
  { name: 'Nosotros', href: '/nosotros', current: false },
  { name: 'Contacto', href: '/contacto', current: false },
]

const Menu_t = () => (
  <><NavLink to="/" className="nav__link mx-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold">
    Inicio
  </NavLink><NavLink to="/blog" className="nav__link mx-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold">
      Portafolio
    </NavLink><NavLink to="/servicios" className="nav__link mx-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold">
      Servicios
    </NavLink><NavLink to="/nosotros" className="nav__link mx-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold">
      Nosotros
    </NavLink><NavLink to="/contacto" className="nav__link mx-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold">
      Contacto
    </NavLink></>
);


const social = {
  solutions: [
    { name: 'Data cleaning', href: '/servicios/data/cleaning' },
    { name: 'Data mining', href: '/servicios/data/mining' },
    { name: 'Data Presentation', href: '/servicios/data/presentation' },
    { name: 'Data Analysis', href: '/servicios/data/analysis' },
  ],
  support: [
    { name: 'casos de estudio', href: '/blog' },
    { name: 'seguimiento', href: '/seguimiento' },
  ],
  company: [
    { name: 'Contacto', href: '/contacto' },
    { name: 'Nosotros', href: '/nosotros' },
  ],
  legal: [
    { name: 'Privacidad', href: '/privacidad' },
    { name: 'Terminos', href: '/terminos' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/',
      icon: (props) => (
        <i className='bx bxl-linkedin text-xl mt-0.5'></i>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/',
      icon: (props) => (
        <i className='bx bxl-twitter text-xl mt-0.5'></i>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/0xaDanteees',
      icon: (props) => (
        <i className='bx bxl-github text-xl mt-0.5' ></i>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/',
      icon: (props) => (
        <i className='bx bxl-facebook text-xl mt-0.5' ></i>
      ),
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar({ account }) {

  const [darkTheme, setDarkTheme] = useDarkMode();
  const ThemeIcon = () => {
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span>
        {darkTheme ? (
          <i className='dark:text-dark-txt hover:text-blue-900  ml-4 md:mr-3 mr-2 inline-flex text-xl'></i>
        ) : (
          <i className='dark:text-dark-txt hover:text-blue-900  ml-4 md:mr-3 mr-2 inline-flex text-xl'></i>
        )}
      </span>
    );
  };

  // SEARCH
  const [effectSearch, setEffectSearch] = useState(false);
  const [term, setTerm] = useState('')

  const handleChange = e => {
    setTerm(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    setTimeout(() => window.location.href = ('/search/' + term), 0.2);
    setTerm('')
  }

  const authLinks = (
    <Fragment>
      <button className='bx bx-user-circle text-3xl dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-medium'></button>
    </Fragment>
  )
  const guestLinks = (
    <Fragment>
      <button className='bx bx-user-circle text-3xl dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-medium'></button>
    </Fragment>
  )

  // Toggle Menu
  const[toggleMenu, setToggleMenu] = useState(false);

  // Remove ParticlesJS
  const[navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 128){
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      {/*It comes to my attention than I had styling classes defined under the project name, so Just changing personal info from now on before reuploading LOL */}
      <Helmet>
        <title>Teos Analytics | Data Solutions</title>
        <meta name="description" content="Home - [redacted] Analytics" />
        <link rel="canonical" href="" />
      </Helmet>

      {/* Top navigation */}
      <div className="top-navigation  dark:bg-dark-main">
        <div className="max-w-full mx-auto h-11 px-4 flex items-center justify-between sm:px-6 lg:px-8 ">
          <form className="hidden lg:block lg:flex-1">
            <div className="flex">
              <i className='top-navigation__icon bx bx-phone mt-0.5 mr-1 text-gray-500 dark:text-dark-txt'></i> <span className='top-navigation__text dark:text-dark-txt text-xs font-gilroy-bold'>+52 55[redacted]</span>
              <span className="h-6 w-px bg-gray-400 dark:bg-dark-third mx-2" aria-hidden="true" />
              <i className='top-navigation__icon bx bxl-gmail mt-0.5 mr-1 text-gray-500 dark:text-dark-txt'></i> <span className='top-navigation__text dark:text-dark-txt text-xs font-gilroy-bold'>[redacted]@gmail.com</span>
            </div>
          </form>

          <p className="flex-1 text-center text-sm font-gilroy-medium text-white lg:flex-none">

          </p>

          <div className="flex lg:flex-1 lg:items-center lg:justify-end space-x-5">
            {social.social.map((item) => (
              <a key={item.name} href={item.href} target="_blank" className="top-navigation__social-media text-gray-400 hover:text-blue-600 border px-1 rounded-full">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>

          < a href="/" className="top-navigation__button ml-5 text-sm font-gilroy-semibold text-gray-400 hover:text-blue-600 rounded-full border border-gray-400 py-1 px-5">
            Acceder
          </a>
        </div>
      </div>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? 'fixed inset-0 z-50 overflow-y-auto' : '',
            'top-navigation bg-white dark:bg-dark-main border-t border-gray-200 dark:border-dark-third lg:static lg:overflow-y-visible'
          )
        }
      >
        {({ open }) => (
          <>
            <div className="max-w-fulll mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <NavLink to="/">
                      {/* Dark Image */}
                      <img
                        src="[redactedLogo]"
                        width={130}
                        height={110}
                        layout="fixed"
                        alt=""
                        className="dark:hidden  flex"
                      />
                      {/* White Image */}
                      <img
                        src="[RedactedLogo]"
                        width={130}
                        height={110}
                        layout="fixed"
                        alt=""
                        className="hidden md:hidden dark:flex"
                      />
                    </NavLink>
                    <NavLink to="/datasets" className="nav__link mx-2 px-6 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold">
                      Datasets
                    </NavLink>
                  </div>
                </div>

                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-3 md:max-w-xl md:mx-auto lg:max-w-auto lg:mx-17 xl:px-0">
                    <form onSubmit={e => onSubmit(e)} className="w-full">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <button
                          type="submit"
                          className="nav__label pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </button>
                        <input
                          id="search"
                          name="search"
                          required
                          onChange={(e) => { handleChange(e) }}
                          className="nav__input block w-full font-gilroy-light bg-white dark:bg-dark-bg border dark:border-dark-bg border-gray-300 rounded-full py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                          placeholder="Search"
                          type="search"
                        />
                      </div>
                    </form>
                  </div>
                </div>

           

                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                  <Menu_t></Menu_t>
                  {/*                     
                    {
                      account ?
                      authLinks:guestLinks
                    } */}
                </div>
              </div>
            </div>
            
            {/* Toggle menu */}

            <div className='teos__navbar-menu'>
              {toggleMenu
                ? <RiCloseLine color='#fff' size={30} onClick={()=> setToggleMenu(false)} />
                : <RiMenu3Line color='#fff' size={30} onClick={()=> setToggleMenu(true)} />
              } 

              {toggleMenu && (
                <div className='teos__navbar-menu_container scale-up-center'>
                  <div className='teos__navbar-menu_container-links'>
                  <Menu_t />
                </div>
              </div>
              )}
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                      'block rounded-md py-2 px-3 text-base font-gilroy-medium'
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  )
}

export default Navbar