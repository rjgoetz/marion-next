import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="top-nav relative flex justify-between">
      <div className="p-3 w-5/6 flex items-center sm:px-8 sm:py-6 md:w-9/12 lg:w-6/12">
        <Link href="/">
          <a>
            <Image
              src="/images/mz-logo.svg"
              width={400}
              height={55}
              alt="Marion Zoological Logo"
            ></Image>
          </a>
        </Link>
      </div>

      <div
        className={`absolute top-0 left-0 w-full h-screen z-40 bg-black transition-opacity transition-visibility duration-300 ${
          isOpen ? 'visible opacity-40' : 'invisible opacity-0'
        } lg:hidden`}
      ></div>

      <div className="w-1/6 bg-beige flex justify-center items-center md:w-2/12 lg:w-6/12 lg:bg-transparent 2xl:w-5/12">
        <button className="w-6 h-6 my-3 lg:hidden" onClick={toggleNav}>
          <svg
            className="text-brown"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            title="hamburger"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <nav
          className={`absolute right-0 top-0 px-6 py-4 bg-beige h-screen z-50 transition-visibility transition-opacity duration-300 w-2/3 sm:w-2/5 md:w-1/3 ${
            isOpen ? 'visible opacity-100' : 'invisible opacity-0'
          } lg:static lg:h-6 lg:w-full lg:visible lg:opacity-100 lg:bg-transparent lg:p-0 lg:h-28`}
        >
          <div className="flex justify-end lg:hidden">
            <button className="w-6 h-6" onClick={toggleNav}>
              <svg
                className="text-brown"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                title="close_menu"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="list-none pl-0 lg:flex lg:mb-0">
            <li className="font-normal lg:inline-block lg:bg-white lg:w-1/3 lg:pt-12 lg:px-4 lg:text-center lg:max-h-28 lg:cursor-pointer lg:overflow-hidden lg:transition-height lg:duration-500 lg:hover:max-h-80">
              Company
              <ul className="list-none leading-loose text-sm pl-2 lg:pl-0 lg:text-left lg:mt-12">
                <li>
                  <li>
                    <Link href="/about">
                      <a className="block">About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/mission">
                      <a className="block">Mission</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/achievements">
                      <a className="block">Achievements</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/testimonials">
                      <a className="block">Testimonials</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/news">
                      <a className="block">News</a>
                    </Link>
                  </li>
                </li>
              </ul>
            </li>

            <li className="font-normal lg:inline-block lg:bg-white lg:w-1/3 lg:pt-12 lg:px-4 lg:text-center lg:max-h-28 lg:cursor-pointer lg:overflow-hidden lg:transition-height lg:duration-500 lg:hover:max-h-80">
              Foods
              <ul className="list-none text-sm leading-loose pl-2 lg:pl-0 lg:mt-12 lg:text-left">
                <li>
                  <Link href="/">
                    <a className="block">Leaf Eater</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="block">Mozaic Reptile</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="block">Scenic Bird Food</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="block">Orthocal Insect</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="font-normal lg:inline-block lg:bg-white lg:w-1/3 lg:pt-12 lg:px-4 lg:text-center lg:cursor-pointer lg:max-h-28 lg:cursor-pointer lg:overflow-hidden lg:transition-height lg:duration-500 lg:hover:max-h-80">
              Resources
              <ul className="list-none text-sm leading-loose pl-2 lg:pl-0 lg:mt-12 lg:text-left">
                <li>
                  <Link href="/">
                    <a className="block">Literature</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="block">Research</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="block">Links</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
