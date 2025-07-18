import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/Logo.svg";
import MailingListForm from "../../../../components/MailingListForm";

export default function Footer() {
  return (
    <footer className="pb-[14rem] pt-[10rem] px-[5%] xsmall:px-0 xsmall:pb-[17rem] xsmall:pt-[11.5rem] small:pb-[15rem] small:pt-[9rem]  small:max-w-[1121px] small:mx-auto">
      <div className="">
        <Link
          href="/"
          className="mx-auto w-fit block max-w-[172px] w-[clamp(120px, 8vw, 172px)] xsmall:w-full small:hidden"
          aria-label="home"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 156 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M61.1417 40.6506V14.1307H68.2493C72.4405 14.1307 75.1143 16.8182 75.1143 21.9091V23.3239C75.1143 28.4858 72.4405 31.2813 68.2493 31.2813H66.1537V40.6506H61.1417ZM66.1537 19.0795V26.3295H68.0067C69.4649 26.3295 70.3138 25.375 70.3138 22.9716V22.2642C70.3138 19.9318 69.4621 19.0824 68.0067 19.0824H66.1537V19.0795Z"
                fill="#1D1D1B"
              />
              <path
                d="M89.1178 40.6506H77.757V14.1307H89.1178V19.2585H82.862V24.5625H88.5114V29.6903H82.862V35.5256H89.1178V40.6534V40.6506Z"
                fill="#1D1D1B"
              />
              <path
                d="M92.0624 40.6506V14.1307H99.655C103.542 14.1307 106.368 16.5341 106.368 21.0256V22.0511C106.368 25.3409 104.85 27.4602 102.54 28.3807L106.943 40.6506H101.263L97.1618 27.6023V40.6506H92.0595H92.0624ZM97.1646 19.0795V25.8693H98.9556C100.383 25.8693 101.266 24.9148 101.266 22.5455V22.0511C101.266 19.858 100.386 19.0795 98.9556 19.0795H97.1646Z"
                fill="#1D1D1B"
              />
              <path
                d="M120.645 40.6506H109.284V14.1307H114.448V35.5227H120.645V40.6506Z"
                fill="#1D1D1B"
              />
              <path
                d="M122.983 40.6506V14.1307H128.147V40.6506H122.983Z"
                fill="#1D1D1B"
              />
              <path
                d="M142.391 36.4432V14.1307H146.582V40.6506H139.11L135.889 17.9858V40.6506H131.698V14.1307H139.17L142.391 36.4432Z"
                fill="#1D1D1B"
              />
              <path
                d="M150.138 40.6506V14.1307H155.303V40.6506H150.138Z"
                fill="#1D1D1B"
              />
              <path
                d="M0.299805 14.1932V40.5142L5.57688 43.5V32.1222L18.4748 39.4403L19.2307 39.8807V24.9119L0.299805 14.1932ZM13.7985 27.9403V30.6875L5.57688 26.0256V23.2784L13.7985 27.9403Z"
                fill="#1D1D1B"
              />
              <path
                d="M25.839 1.94034L23.4078 0.551136L23.3091 0.5H23.0975L3.48974 11.625L8.86271 14.679L15.1128 11.1392L29.4943 19.2869L42.9761 11.6477L25.839 1.94034ZM32.1822 11.6335L29.469 13.1733L20.4971 8.08807L23.2104 6.5483L32.1822 11.6335Z"
                fill="#1D1D1B"
              />
              <path
                d="M22.8268 27.4034V47.1733L9.30552 39.5085V45.608L23.2273 53.5L28.1039 50.7301V30.5142L31.8156 28.4119V48.6278L37.0927 45.6307V25.4233L40.8213 23.304V43.5171L46.104 40.5227V14.2102L22.8268 27.4034Z"
                fill="#1D1D1B"
              />
            </g>
          </svg>
        </Link>

        <div className="small:flex justify-between flex-row-reverse small:items-end small:gap-4">
          <div className="text-center pt-16 small:text-left">
            <h4 className="font-normal text-[1.8rem] tracking-[0.12em] uppercase text-theme-dark">
              Join our mailing list
            </h4>
            <div className="w-full mx-auto flex gap-4 justify-center flex-col text-center pt-10 xsmall:flex-row xsmall:w-fit">
              <MailingListForm
                theme="dark"
                placeholder="Email address"
                buttonText="sign up"
              />
              <ul className="hidden xsmall:flex justify-center gap-4 small:hidden">
                <li>
                  <a
                    href="https://www.facebook.com/roscoandperlini.builders/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Link to our Facebook page"
                  >
                    <div className="min-h-[4.8rem] aspect-square flex justify-center items-center bg-theme-purple text-white rounded-sm">
                      <svg
                        width="11"
                        height="24"
                        viewBox="0 0 11 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.49433 24H7.29176V11.8954H10.6425L11 7.84374H7.29176V5.53331C7.29176 4.579 7.48299 4.2023 8.39758 4.2023H10.9917V0H7.66591C4.10733 0 2.49433 1.58214 2.49433 4.61249V7.84374H0V11.9456H2.49433V23.9916V24Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/roscoandperlini"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Link to our Instagram page"
                  >
                    <div className="min-h-[4.8rem] aspect-square flex justify-center items-center bg-theme-purple text-white rounded-sm">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_80_6196)">
                          <path
                            d="M13 2.34C16.47 2.34 16.88 2.35 18.25 2.42C19.52 2.48 20.21 2.69 20.66 2.87C21.27 3.11 21.7 3.39 22.15 3.84C22.61 4.3 22.89 4.73 23.12 5.33C23.3 5.79 23.51 6.48 23.57 7.74C23.63 9.11 23.65 9.52 23.65 12.99C23.65 16.46 23.64 16.87 23.57 18.24C23.51 19.51 23.3 20.2 23.12 20.65C22.88 21.26 22.6 21.69 22.15 22.15C21.7 22.61 21.26 22.89 20.66 23.12C20.2 23.3 19.51 23.51 18.25 23.57C16.88 23.63 16.47 23.65 13 23.65C9.53 23.65 9.12 23.64 7.75 23.57C6.48 23.51 5.79 23.3 5.34 23.12C4.73 22.88 4.3 22.6 3.84 22.15C3.39 21.69 3.1 21.26 2.87 20.65C2.69 20.19 2.48 19.5 2.42 18.24C2.36 16.87 2.34 16.46 2.34 12.99C2.34 9.52 2.35 9.11 2.42 7.74C2.48 6.47 2.69 5.78 2.87 5.33C3.11 4.72 3.39 4.29 3.84 3.84C4.3 3.38 4.73 3.1 5.34 2.87C5.8 2.69 6.49 2.48 7.75 2.42C9.12 2.36 9.53 2.34 13 2.34ZM13 0C9.47 0 9.03 0.02 7.64 0.08C6.26 0.14 5.31 0.36 4.48 0.68C3.62 1.01 2.9 1.46 2.18 2.18C1.46 2.9 1.01 3.63 0.68 4.48C0.36 5.31 0.14 6.25 0.08 7.64C0.02 9.03 0 9.47 0 13C0 16.53 0.01 16.97 0.08 18.36C0.14 19.74 0.36 20.69 0.68 21.52C1.01 22.37 1.46 23.1 2.18 23.82C2.9 24.54 3.63 24.99 4.48 25.32C5.31 25.64 6.25 25.86 7.64 25.92C9.03 25.98 9.47 26 13 26C16.53 26 16.97 25.99 18.36 25.92C19.74 25.86 20.69 25.64 21.52 25.32C22.38 24.99 23.1 24.54 23.82 23.82C24.54 23.1 24.99 22.37 25.32 21.52C25.64 20.69 25.86 19.75 25.92 18.36C25.98 16.97 26 16.53 26 13C26 9.47 25.99 9.03 25.92 7.64C25.86 6.26 25.64 5.31 25.32 4.48C24.99 3.63 24.54 2.9 23.82 2.18C23.1 1.46 22.37 1.01 21.52 0.68C20.69 0.36 19.75 0.14 18.36 0.08C16.97 0.02 16.53 0 13 0Z"
                            fill="white"
                          />
                          <path
                            d="M13.0003 6.33008C9.31031 6.33008 6.32031 9.32008 6.32031 13.0101C6.32031 16.7001 9.31031 19.6901 13.0003 19.6901C16.6903 19.6901 19.6803 16.7001 19.6803 13.0101C19.6803 9.32008 16.6903 6.33008 13.0003 6.33008ZM13.0003 17.3401C10.6103 17.3401 8.67031 15.4001 8.67031 13.0101C8.67031 10.6201 10.6103 8.68008 13.0003 8.68008C15.3903 8.68008 17.3303 10.6201 17.3303 13.0101C17.3303 15.4001 15.3903 17.3401 13.0003 17.3401Z"
                            fill="white"
                          />
                          <path
                            d="M21.4999 6.06C21.4999 6.92 20.7999 7.62 19.9399 7.62C19.0799 7.62 18.3799 6.92 18.3799 6.06C18.3799 5.2 19.0799 4.5 19.9399 4.5C20.7999 4.5 21.4999 5.2 21.4999 6.06Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_80_6196">
                            <rect width="26" height="26" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="small:flex flex-col justify-between h-full gap-[2rem]">
            <Link
              href="/"
              className="hidden small:block mr-auto w-fit max-w-[172px] w-[clamp(120px, 8vw, 172px)]"
              aria-label="Home"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 156 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M61.1417 40.6506V14.1307H68.2493C72.4405 14.1307 75.1143 16.8182 75.1143 21.9091V23.3239C75.1143 28.4858 72.4405 31.2813 68.2493 31.2813H66.1537V40.6506H61.1417ZM66.1537 19.0795V26.3295H68.0067C69.4649 26.3295 70.3138 25.375 70.3138 22.9716V22.2642C70.3138 19.9318 69.4621 19.0824 68.0067 19.0824H66.1537V19.0795Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M89.1178 40.6506H77.757V14.1307H89.1178V19.2585H82.862V24.5625H88.5114V29.6903H82.862V35.5256H89.1178V40.6534V40.6506Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M92.0624 40.6506V14.1307H99.655C103.542 14.1307 106.368 16.5341 106.368 21.0256V22.0511C106.368 25.3409 104.85 27.4602 102.54 28.3807L106.943 40.6506H101.263L97.1618 27.6023V40.6506H92.0595H92.0624ZM97.1646 19.0795V25.8693H98.9556C100.383 25.8693 101.266 24.9148 101.266 22.5455V22.0511C101.266 19.858 100.386 19.0795 98.9556 19.0795H97.1646Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M120.645 40.6506H109.284V14.1307H114.448V35.5227H120.645V40.6506Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M122.983 40.6506V14.1307H128.147V40.6506H122.983Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M142.391 36.4432V14.1307H146.582V40.6506H139.11L135.889 17.9858V40.6506H131.698V14.1307H139.17L142.391 36.4432Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M150.138 40.6506V14.1307H155.303V40.6506H150.138Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M0.299805 14.1932V40.5142L5.57688 43.5V32.1222L18.4748 39.4403L19.2307 39.8807V24.9119L0.299805 14.1932ZM13.7985 27.9403V30.6875L5.57688 26.0256V23.2784L13.7985 27.9403Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M25.839 1.94034L23.4078 0.551136L23.3091 0.5H23.0975L3.48974 11.625L8.86271 14.679L15.1128 11.1392L29.4943 19.2869L42.9761 11.6477L25.839 1.94034ZM32.1822 11.6335L29.469 13.1733L20.4971 8.08807L23.2104 6.5483L32.1822 11.6335Z"
                    fill="#1D1D1B"
                  />
                  <path
                    d="M22.8268 27.4034V47.1733L9.30552 39.5085V45.608L23.2273 53.5L28.1039 50.7301V30.5142L31.8156 28.4119V48.6278L37.0927 45.6307V25.4233L40.8213 23.304V43.5171L46.104 40.5227V14.2102L22.8268 27.4034Z"
                    fill="#1D1D1B"
                  />
                </g>
              </svg>
            </Link>

            <ul className="flex flex-wrap justify-center items-center tracking-[0.02em] gap-x-[1.6rem] font-sans text-[1.4rem] mx-auto mt-10 text-theme-dark font-light small:h-[4.2rem] small:items-center small:justify-start small:mx-0 ">
              <li className="py-3 small:p-0">
                <Link
                  href="/"
                  className=" hover:text-theme-purple duration-300"
                >
                  Home
                </Link>
              </li>
              <li className="py-3 small:p-0">
                <Link
                  href="/about"
                  className="hover:text-theme-purple duration-300"
                >
                  About
                </Link>
              </li>
              <li className="py-3 small:p-0">
                <Link
                  href="/services"
                  className="hover:text-theme-purple duration-300"
                >
                  Services
                </Link>
              </li>
              <li className="py-3 small:p-0">
                <Link
                  href="/projects"
                  className="hover:text-theme-purple duration-300"
                >
                  Projects
                </Link>
              </li>
              <li className="py-3 small:p-0">
                <Link
                  href="/faqs"
                  className="hover:text-theme-purple duration-300"
                >
                  FAQ's
                </Link>
              </li>
              <li className="py-3 small:p-0">
                <Link
                  href="/contact"
                  className="hover:text-theme-purple duration-300"
                >
                  Contact
                </Link>
              </li>
              <li className="py-3 small:p-0">
                <Link
                  href="/terms-of-service"
                  className="hover:text-theme-purple duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li className="py-3 small:p-0">
                <Link
                  href="/privacy-policy"
                  className="hover:text-theme-purple duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              {/* <li className="py-3 small:p-0">
                <Link
                  href="/contact"
                  className="hover:text-theme-purple duration-300"
                >
                  Cookies Policy
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="small:flex justify-between w-full">
          {/* socials large screen */}
          <ul className="flex justify-center gap-4 mt-10 xsmall:hidden small:flex small:items-end">
            <li>
              <a
                href="https://www.facebook.com/roscoandperlini.builders/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link to our Facebook page"
              >
                <div className="min-h-[4.8rem] aspect-square flex justify-center items-center bg-theme-purple text-white rounded-sm">
                  <svg
                    width="11"
                    height="24"
                    viewBox="0 0 11 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.49433 24H7.29176V11.8954H10.6425L11 7.84374H7.29176V5.53331C7.29176 4.579 7.48299 4.2023 8.39758 4.2023H10.9917V0H7.66591C4.10733 0 2.49433 1.58214 2.49433 4.61249V7.84374H0V11.9456H2.49433V23.9916V24Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/roscoandperlini"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link to our Instagram page"
              >
                <div className="min-h-[4.8rem] aspect-square flex justify-center items-center bg-theme-purple text-white rounded-sm">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_80_6196)">
                      <path
                        d="M13 2.34C16.47 2.34 16.88 2.35 18.25 2.42C19.52 2.48 20.21 2.69 20.66 2.87C21.27 3.11 21.7 3.39 22.15 3.84C22.61 4.3 22.89 4.73 23.12 5.33C23.3 5.79 23.51 6.48 23.57 7.74C23.63 9.11 23.65 9.52 23.65 12.99C23.65 16.46 23.64 16.87 23.57 18.24C23.51 19.51 23.3 20.2 23.12 20.65C22.88 21.26 22.6 21.69 22.15 22.15C21.7 22.61 21.26 22.89 20.66 23.12C20.2 23.3 19.51 23.51 18.25 23.57C16.88 23.63 16.47 23.65 13 23.65C9.53 23.65 9.12 23.64 7.75 23.57C6.48 23.51 5.79 23.3 5.34 23.12C4.73 22.88 4.3 22.6 3.84 22.15C3.39 21.69 3.1 21.26 2.87 20.65C2.69 20.19 2.48 19.5 2.42 18.24C2.36 16.87 2.34 16.46 2.34 12.99C2.34 9.52 2.35 9.11 2.42 7.74C2.48 6.47 2.69 5.78 2.87 5.33C3.11 4.72 3.39 4.29 3.84 3.84C4.3 3.38 4.73 3.1 5.34 2.87C5.8 2.69 6.49 2.48 7.75 2.42C9.12 2.36 9.53 2.34 13 2.34ZM13 0C9.47 0 9.03 0.02 7.64 0.08C6.26 0.14 5.31 0.36 4.48 0.68C3.62 1.01 2.9 1.46 2.18 2.18C1.46 2.9 1.01 3.63 0.68 4.48C0.36 5.31 0.14 6.25 0.08 7.64C0.02 9.03 0 9.47 0 13C0 16.53 0.01 16.97 0.08 18.36C0.14 19.74 0.36 20.69 0.68 21.52C1.01 22.37 1.46 23.1 2.18 23.82C2.9 24.54 3.63 24.99 4.48 25.32C5.31 25.64 6.25 25.86 7.64 25.92C9.03 25.98 9.47 26 13 26C16.53 26 16.97 25.99 18.36 25.92C19.74 25.86 20.69 25.64 21.52 25.32C22.38 24.99 23.1 24.54 23.82 23.82C24.54 23.1 24.99 22.37 25.32 21.52C25.64 20.69 25.86 19.75 25.92 18.36C25.98 16.97 26 16.53 26 13C26 9.47 25.99 9.03 25.92 7.64C25.86 6.26 25.64 5.31 25.32 4.48C24.99 3.63 24.54 2.9 23.82 2.18C23.1 1.46 22.37 1.01 21.52 0.68C20.69 0.36 19.75 0.14 18.36 0.08C16.97 0.02 16.53 0 13 0Z"
                        fill="white"
                      />
                      <path
                        d="M13.0003 6.33008C9.31031 6.33008 6.32031 9.32008 6.32031 13.0101C6.32031 16.7001 9.31031 19.6901 13.0003 19.6901C16.6903 19.6901 19.6803 16.7001 19.6803 13.0101C19.6803 9.32008 16.6903 6.33008 13.0003 6.33008ZM13.0003 17.3401C10.6103 17.3401 8.67031 15.4001 8.67031 13.0101C8.67031 10.6201 10.6103 8.68008 13.0003 8.68008C15.3903 8.68008 17.3303 10.6201 17.3303 13.0101C17.3303 15.4001 15.3903 17.3401 13.0003 17.3401Z"
                        fill="white"
                      />
                      <path
                        d="M21.4999 6.06C21.4999 6.92 20.7999 7.62 19.9399 7.62C19.0799 7.62 18.3799 6.92 18.3799 6.06C18.3799 5.2 19.0799 4.5 19.9399 4.5C20.7999 4.5 21.4999 5.2 21.4999 6.06Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_80_6196">
                        <rect width="26" height="26" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </a>
            </li>
          </ul>

          <h4 className="text-center font-light tracking-[0.02em] text-[1.4rem] mt-16 text-theme-dark small:text-right small:mt-[6rem]">
            {" "}
            &copy; {new Date().getFullYear()} Perlini Property Management Ltd
          </h4>
        </div>
      </div>
    </footer>
  );
}
