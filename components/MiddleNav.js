import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const MiddleNav = ({ title, active, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${
        isOpen ? 'max-h-80' : 'max-h-12'
      } transition-max-height duration-500 overflow-hidden mb-8 md:mb-12 lg:max-h-full`}
    >
      <div className="h-full flex justify-between items-center mb-2 border-b border-brown py-2 lg:block lg:border-0 lg:mb-0">
        <h3 className="lg:border-b lg:border-brown lg:mb-4">{title}</h3>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <svg
            className={`text-black w-6 h-6 inline-block stroke-1 ${
              isOpen && 'transform rotate-180'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            title="chevron down"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <ul className="list-none pl-0 leading-loose">
        {links.map((link) => {
          return (
            <li>
              <Link href={link.href}>
                <a
                  className={`${
                    link.title === active
                      ? 'text-green'
                      : 'font-light text-brown hover:text-black'
                  }`}
                >
                  {link.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

MiddleNav.propTypes = {
  active: PropTypes.string.isRequired,
  links: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

const CompanyNav = ({ active }) => {
  return (
    <MiddleNav
      title="Company"
      active={active}
      links={[
        { title: 'About Us', href: '/about' },
        { title: 'Mission', href: '/about/mission' },
        { title: 'Achievements', href: '/about/achievements' },
        { title: 'Testimonials', href: '/about/testimonials' },
        { title: 'News', href: '/about/news' },
      ]}
    ></MiddleNav>
  );
};

export { CompanyNav };
