import Link from 'next/link';

import { Logo } from './Logo';

const Footer = () => (
  <div className="bg-gray-50">
    <div className="max-w-screen-lg mx-auto px-3 pb-2 pt-16">
      <div className="footer-trial container grid grid-cols-1 gap-2 py-4">
        <div className="footer-left mx-auto text-center">
          <div className="text-4xl text-white uppercase">Ready to dive in?</div>
          <div className="text-4xl text-yellow-300 uppercase">
            Start your free trial today.
          </div>
          <p className="text-gray-200 text-2xl py-4">
            We have a free 7-day trial period with full access to all functions
          </p>
          <Link href="#">
            <a className="inline-flex text-center text-lg py-3 pl-5 pr-5 btn tracking-widest">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download for Windows
            </a>
          </Link>
        </div>

        <div></div>
      </div>

      <div className="footer grid grid-cols-5 gap-4 mt-32">
        <div className="col-span-2">
          <Logo />
        </div>

        <div className="text-left">
          <div className="footer-title">HIDEBROWSER</div>
          <ul className="">
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              {' '}
              <Link href="#">Download</Link>
            </li>
          </ul>
        </div>
        <div className="text-left">
          <div className="footer-title">Support</div>

          <ul>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Email Support</Link>
            </li>

            <li>
              <Link href="#">Telegram Support</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="footer-title">Legal</div>
          <ul>
            <li>
              <Link href="#">Terms of Service</Link>
            </li>

            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 pt-4">
        Copyright ©2021 Hidebrowser Inc. All rights reserved
      </div>
    </div>
  </div>
);

export { Footer };
