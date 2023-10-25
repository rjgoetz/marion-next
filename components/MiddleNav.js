import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import PDFLink from './PDFLink';

const MiddleNav = ({ title, active, links, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${
        isOpen ? 'max-h-80' : 'max-h-12'
      } transition-max-height duration-500 overflow-hidden mb-8 md:mb-12 lg:max-h-full`}
    >
      <div className="h-full flex justify-between items-center mb-2 border-b border-brown py-2 lg:block lg:border-0 lg:mb-0">
        <h3 className="mb-0 text-black lg:border-b lg:border-brown lg:mb-4">
          {title}
        </h3>
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
            <li key={link.title} className="mb-0">
              <Link href={link.href}>
                <a
                  className={`${
                    link.title === active
                      ? 'text-green'
                      : 'font-normal text-brown hover:text-black'
                  }`}
                >
                  {link.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>

      {children}
    </div>
  );
};

MiddleNav.propTypes = {
  active: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const CompanyNav = ({ active }) => {
  return (
    <MiddleNav
      title="Company"
      active={active}
      links={[
        { title: 'About Us', href: '/about' },
        { title: 'Our Journey', href: '/about/journey' },
        { title: 'Mission', href: '/about/mission' },
        { title: 'Achievements', href: '/about/achievements' },
        { title: 'Testimonials', href: '/about/testimonials' },
        { title: 'News', href: '/about/news' },
      ]}
    >
      <h4>Literature</h4>
      <PDFLink href="/docs/MZ-Innovator.pdf" title="MZ Timeline"></PDFLink>
    </MiddleNav>
  );
};

const LeafEaterNav = ({ active }) => {
  return (
    <MiddleNav
      title="Leaf Eater"
      active={active}
      links={[
        { title: 'Overview', href: '/leaf-eater' },
        { title: 'Species Groups', href: '/leaf-eater/species' },
        { title: 'Nutrition Facts', href: '/leaf-eater/nutrition' },
        { title: 'Feeding Directions', href: '/leaf-eater/feeding' },
      ]}
    >
      <h4>Literature</h4>
      <PDFLink
        href="/docs/MZ-LeafEater-Broch_0915.pdf"
        title="MZ Leaf Eater Brochure"
      ></PDFLink>
    </MiddleNav>
  );
};

const ReptileNav = ({ active }) => {
  return (
    <MiddleNav
      title="Mozaic Reptile"
      active={active}
      links={[
        { title: 'Overview', href: '/reptile' },
        { title: 'Species Groups', href: '/reptile/species' },
        { title: 'Nutrition Facts', href: '/reptile/nutrition' },
        { title: 'Feeding Directions', href: '/reptile/feeding' },
      ]}
    >
      <h4>Literature</h4>
      <PDFLink
        href="/docs/MozaicReptile_03-12.pdf"
        title="Mozaic Reptile Brochure"
      ></PDFLink>
    </MiddleNav>
  );
};

const InsectNav = ({ active }) => {
  return (
    <MiddleNav
      title="Orthocal Insect"
      active={active}
      links={[
        { title: 'Overview', href: '/insect' },
        { title: 'Species Groups', href: '/insect/species' },
        { title: 'Nutrition Facts', href: '/insect/nutrition' },
        { title: 'Feeding Directions', href: '/insect/feeding' },
      ]}
    >
      <h4>Literature</h4>
      <PDFLink
        href="/docs/Orthocal_03-12.pdf"
        title="Orthocal Brochure"
      ></PDFLink>
    </MiddleNav>
  );
};

const ResourcesNav = ({ active }) => {
  return (
    <MiddleNav
      title="Resources"
      active={active}
      links={[
        { title: 'Literature', href: '/literature' },
        { title: 'Research', href: '/research' },
        { title: 'Links', href: '/links' },
      ]}
    ></MiddleNav>
  );
};

const LegalNav = ({ active }) => {
  return (
    <MiddleNav
      title="Legal"
      active={active}
      links={[
        { title: 'Terms of Use', href: '/legal' },
        { title: 'Privacy Policy', href: '/legal/privacy' },
        { title: 'Job Opportunities', href: '/legal/jobs' },
      ]}
    ></MiddleNav>
  );
};

const SubNav = ({ active, title, links, children }) => {
  return (
    <>
      <h4>{title}</h4>
      <ul className="list-none pl-0">
        {links.map((link) => {
          return (
            <li key={link.title} className="mb-0 text-sm leading-loose">
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
      {children}
    </>
  );
};

SubNav.propTypes = {
  active: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const AdultBirdNav = ({ active, children }) => {
  return (
    <SubNav
      active={active}
      title="Products"
      links={[
        { title: 'Jungle', href: '/bird/adult/jungle' },
        { title: 'Paradise', href: '/bird/adult/paradise' },
        { title: 'Hot & Healthy', href: '/bird/adult/hot-healthy' },
        { title: 'Allprem', href: '/bird/adult/allprem' },
        { title: 'Scenic Lory', href: '/bird/adult/lory' },
      ]}
    >
      {children}
    </SubNav>
  );
};

const JuvenileBirdNav = ({ active, children }) => {
  return (
    <SubNav
      active={active}
      title="Products"
      links={[
        { title: 'Hand Feeding', href: '/bird/juvenile/high-energy' },
        { title: 'Hand Weaning', href: '/bird/juvenile/hand-weaning' },
      ]}
    >
      {children}
    </SubNav>
  );
};

const BirdNav = ({ active, children }) => {
  return (
    <MiddleNav
      title="Scenic Bird Food"
      active={active}
      links={[
        { title: 'Overview', href: '/bird' },
        { title: 'Adult Birds', href: '/bird/adult' },
        { title: 'Juvenile Birds', href: '/bird/juvenile' },
      ]}
    >
      {children}
    </MiddleNav>
  );
};

export {
  CompanyNav,
  LeafEaterNav,
  ReptileNav,
  BirdNav,
  AdultBirdNav,
  JuvenileBirdNav,
  InsectNav,
  ResourcesNav,
  LegalNav,
};
