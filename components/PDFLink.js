import PropTypes from 'prop-types';

export default function PDFLink({ title, href }) {
  return (
    <a href={href} target="_blank" className="flex items-center">
      <svg
        className="h-4 w-4 mr-1 inline text-red"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
      <span className="text-sm">{title}</span>
    </a>
  );
}

PDFLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
