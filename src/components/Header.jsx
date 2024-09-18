import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo2.png';
import { useState } from 'react';
import documents, { bmsLink, jarayonLink } from '../services/linkData';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isDocumentsDropdownOpen, setIsDocumentsDropdownOpen] = useState(false);
  const [isBmsDropdownOpen, setIsBmsDropdownOpen] = useState(false);
  const [isJarayonDropdownOpen, setIsJarayonDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className=" mx-auto px-4 md:container">
        <nav className='flex items-center justify-between py-4'>
          <Link to={'/'} >
            <div className='max-w-[100px]'>
                <img src={logo} alt="logo" className=' md:w-full'/>
            </div>
          </Link>
          <h1 className='text-[10px] md:block max-w-[900px] text-center  lg:text-3xl text-[#2e3192] font-semibold'>
          Toshkent shahar Madaniyat boshqarmasi tasarrufidagi Mirzo Ulug’bek tumani 2-sonli bolalar musiqa va san’at maktabi
          </h1>
          <div className='w-12 md:w-16 lg:w-20'>
            <Link to={'/'}>
              <div className='max-w-[60px]'>
                <img className='hidden md:block w-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Telegram_alternative_logo.svg/2048px-Telegram_alternative_logo.svg.png" alt="Telegram" />
              </div>
            </Link>
          </div>
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* nav links */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'}   md:flex items-center justify-between`}>
          <ul className=' flex flex-col gap-4  md:flex-row items-center justify-between w-full'>
            <li className='bg-[#268382] w-full md:w-44 h-14 flex items-center justify-center text-white'>
              <Link to='/importantinfo'>Asosiy ma'lumotlar</Link>
            </li>

            <li className='bg-[#268382] w-full md:w-44 h-14 flex items-center justify-center text-white relative'
              onMouseEnter={() => setIsDocumentsDropdownOpen(true)}
              onMouseLeave={() => setIsDocumentsDropdownOpen(false)}
            >
              <Link to='/' className='text-center'>
                Me'yoriy-huquqiy hujatlar
              </Link>
              {isDocumentsDropdownOpen && (
                <div className="absolute top-10 left-0 z-10 bg-[#268382] divide-y divide-gray-100 shadow w-full md:w-72 text-white mt-2">
                  <ul className="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    {documents.map((element, index) => (
                      <li className='border-white border-t text-center h-14 flex items-center justify-center' key={index}>
                        <Link to={element.url} className="block px-4 py-2 dark:hover:bg-gray-600 text-sm">
                          {element.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            <li className='bg-[#268382] w-full md:w-44 h-14 flex items-center justify-center text-white relative'
              onMouseEnter={() => setIsBmsDropdownOpen(true)}
              onMouseLeave={() => setIsBmsDropdownOpen(false)}
            >
              <Link to='/' className='text-center'>
                BMSM to‘g‘risida ma’lumotlar
              </Link>
              {isBmsDropdownOpen && (
                <div className="absolute top-10 left-0 z-10 bg-[#268382] divide-y divide-gray-100 shadow w-full md:w-72 text-white mt-2">
                  <ul className="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    {bmsLink.map((element, index) => (
                      <li className='border-white border-t text-center h-14 flex items-center justify-center' key={index}>
                        <Link to={element.url} className="block px-4 py-2 dark:hover:bg-gray-600 text-sm">
                          {element.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            <li className='bg-[#268382] w-full md:w-44 h-14 flex items-center justify-center text-white relative'
              onMouseEnter={() => setIsJarayonDropdownOpen(true)}
              onMouseLeave={() => setIsJarayonDropdownOpen(false)}
            >
              <Link to='/' className='text-center'>
                O‘quv jarayoni
              </Link>
              {isJarayonDropdownOpen && (
                <div className="absolute top-10 left-0 z-10 bg-[#268382] divide-y divide-gray-100 shadow w-full md:w-72 text-white mt-2">
                  <ul className="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    {jarayonLink.map((element, index) => (
                      <li className='border-white border-t text-center h-14 flex items-center justify-center' key={index}>
                        <Link to={element.url} className="block px-4 py-2 dark:hover:bg-gray-600 text-sm">
                          {element.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            <li className='bg-[#268382] w-full md:w-44 h-14 flex items-center justify-center text-white'>
              <Link to='/galery'>Maktab galereyasi</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
