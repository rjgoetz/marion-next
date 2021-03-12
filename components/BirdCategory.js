import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

export default function BirdCategory({
  image,
  link,
  subtitle,
  title,
  children,
}) {
  return (
    <div className="flex flex-col items-center mb-8 sm:gap-8 sm:flex-row md:gap-16 lg:gap-8 xl:gap-16">
      <div className="sm:w-2/3">
        <h2 className="mb-0">
          <Link href={link}>
            <a>{title}</a>
          </Link>
        </h2>
        <p className="font-semibold">{subtitle}</p>
        {children}
      </div>

      <div className="w-3/4 sm:w-1/3">
        <Link href={link}>
          <a>
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
            ></Image>
          </a>
        </Link>
      </div>
    </div>
  );
}

BirdCategory.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
