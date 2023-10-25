import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-beige">
      <div className="bg-filmstrip h-24 bg-repeat-x"></div>
      <footer>
        <div className="container py-8 text-center lg:text-left">
          <div className="lg:flex lg:justify-between lg:items-center lg:flex-row-reverse">
            <nav className="lg:inline-block">
              <ul className="list-none pl-0 leading-loose text-sm lg:mb-0">
                <li className="inline-block mr-6 lg:mr-8">
                  <a href="/newsletter">Newsletter</a>
                </li>
                <li className="inline-block mr-6 lg:mr-8">
                  <Link href="/about">
                    <a>About Us</a>
                  </Link>
                </li>
                <li className="inline-block mr-6 lg:mr-8">
                  <Link href="/legal">
                    <a>Terms of Use</a>
                  </Link>
                </li>
                <li className="inline-block mr-6 lg:mr-0">
                  <Link href="/legal/privacy">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </nav>

            <p className="mb-0 text-sm font-normal lg:inline-block">
              &copy;{' '}
              {`${new Date().getFullYear()} Marion Natural Foods Corp. All rights reserved.`}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
