import BgDots from "@/components/assets/BgDots";
import GradientLine from "@/components/assets/GradientLine";
import ButtonLink from "@/components/common/ButtonLink";
import ButtonLinkNew from "@/components/common/ButtonLinkNew";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="relative w-screen h-screen flex justify-center items-center flex-col text-theme-dark">
        {/* dots */}
        <div className="absolute top-0 left-0 h-[60%] xsmall:h-[75%] small:h-full w-auto -z-10">
          <BgDots />
        </div>
        <div className="absolute top-0 right-0 h-[60%] xsmall:h-[75%] small:h-full w-auto -z-10 scale-y-[-1] rotate-180">
          <BgDots />
        </div>
        {/* content */}
        <div className="relative flex justify-center items-center flex-col w-full h-[70%]">
          <div className="max-w-[clamp(13rem,40vw,19.6rem)] mb-[3.5rem] small:mb-[6rem]">
            <Link href="/">
              {/* header-logo */}
              {/* <svg
                width="100%"
                height="100%"
                viewBox="0 0 211 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_316_43181)">
                  <path
                    d="M107.182 15.8996C106.786 15.5399 106.241 15.2014 105.535 14.8629C104.819 14.6196 103.835 14.7995 102.542 15.4342C101.397 15.9948 100.136 16.7459 98.7778 17.6874C98.4035 16.8094 98.0507 15.8785 97.7192 14.9052C100.446 11.0758 102.777 8.06094 104.637 5.92408C104.958 5.55383 105.108 5.0778 105.097 4.52772C105.086 3.95648 104.84 3.48044 104.359 3.1102C103.878 2.72937 103.151 2.63416 102.114 2.82458C100.788 3.13135 99.6332 3.46987 98.6815 3.84011C98.1362 4.03053 97.5374 4.22094 96.8852 4.43251C95.8801 4.76044 95.0995 5.35284 94.5756 6.2097C94.041 7.07714 93.8806 8.06094 94.1051 9.13995C94.18 9.48904 94.2655 9.86987 94.3403 10.2718C94.5863 11.3826 94.8643 12.578 95.153 13.858C93.4742 16.0795 91.9559 18.2586 90.6728 20.3638C89.3148 22.5641 88.6626 24.2143 88.6626 25.4203C88.6626 25.9386 88.8016 26.3195 89.0582 26.5628C89.2935 26.7743 89.6356 26.8695 90.0526 26.8272C90.8225 26.7532 91.5817 26.4676 92.3088 25.9915C92.9396 25.5578 93.7523 24.8596 94.7253 23.9181C95.4951 23.1671 96.3826 22.3631 97.3663 21.5168C98.3928 24.4576 99.7294 26.8801 101.365 28.7314C101.814 29.1968 102.413 29.4401 103.151 29.4401C103.194 29.4401 103.237 29.4401 103.279 29.4401C104.017 29.4084 104.723 29.292 105.396 29.0804C105.739 28.9535 105.942 28.6996 105.995 28.3611C106.049 28.0226 105.931 27.7158 105.632 27.4725C103.675 26.1396 101.686 23.5267 99.7187 19.6973C101.782 18.1952 104.199 17.2431 106.915 16.8517C107.139 16.8094 107.289 16.6824 107.353 16.4709C107.417 16.2593 107.353 16.0583 107.182 15.889V15.8996ZM101.782 5.72309C100.67 6.98193 98.9916 9.01301 96.7889 11.774C96.5323 10.7796 96.3078 9.7535 96.1046 8.70623C96.0512 8.33598 96.1046 8.00805 96.2864 7.72243C96.4682 7.43681 96.7248 7.23582 97.0563 7.11945C97.5802 6.93962 98.0827 6.7492 98.5639 6.55879C99.4728 6.16739 100.553 5.82887 101.75 5.53268C101.761 5.54325 101.782 5.57499 101.793 5.63846C101.793 5.6702 101.793 5.69135 101.772 5.72309H101.782ZM96.6179 19.2742C94.8108 20.6705 93.2818 21.9188 92.0628 23.0084C93.0893 21.5168 94.4152 19.6021 96.0405 17.2854C96.2222 17.9413 96.4147 18.6077 96.6179 19.2742Z"
                    fill="black"
                  />
                  <path
                    d="M14.8626 31.6509H9.80507L7.22817 19.0942H4.97204V31.6509H0V0.35968H7.49548C9.63399 0.35968 11.3769 0.983812 12.7348 2.23208C14.2425 3.60728 14.991 5.54315 14.991 8.03968V11.3931C14.991 13.9213 14.2425 15.8784 12.7348 17.2536C12.521 17.4651 12.2857 17.6555 12.0077 17.8354L14.852 31.6509H14.8626ZM10.0296 8.05026C10.0296 7.00299 9.80507 6.26249 9.35598 5.81819C8.96036 5.45852 8.35088 5.27869 7.50617 5.27869H4.97204V14.1752H7.50617C8.35088 14.1752 8.97105 13.9954 9.35598 13.6357C9.80507 13.2232 10.0296 12.4721 10.0296 11.4036V8.05026Z"
                    fill="black"
                  />
                  <path
                    d="M25.0311 32C22.8605 32 21.1177 31.3864 19.7918 30.1699C18.2841 28.7418 17.5356 26.7848 17.5356 24.3094V7.69058C17.5356 5.21521 18.2841 3.26876 19.7918 1.83008C21.1177 0.602975 22.8605 0 25.0311 0C27.2017 0 28.9446 0.613554 30.2705 1.83008C31.7781 3.25818 32.5266 5.21521 32.5266 7.69058V24.32C32.5266 26.7954 31.7781 28.7418 30.2705 30.1805C28.9446 31.4076 27.2017 32.0106 25.0311 32.0106V32ZM25.0311 4.90843C24.1864 4.90843 23.5662 5.08826 23.1813 5.44793C22.7322 5.8605 22.5077 6.61157 22.5077 7.68V24.3094C22.5077 25.3778 22.7322 26.1289 23.1813 26.5415C23.5769 26.9012 24.1864 27.081 25.0311 27.081C25.8758 27.081 26.5174 26.9012 26.8809 26.5415C27.33 26.1501 27.5546 25.4096 27.5546 24.3094V7.69058C27.5546 6.59041 27.33 5.83934 26.8809 5.45851C26.5174 5.09884 25.8972 4.91901 25.0311 4.91901V4.90843Z"
                    fill="black"
                  />
                  <path
                    d="M42.5135 32.0001C40.343 32.0001 38.6001 31.3865 37.2742 30.17C35.7665 28.7419 35.0181 26.7849 35.0181 24.3095V20.2368H39.9901V24.3095C39.9901 25.3779 40.2146 26.129 40.6637 26.5416C41.0594 26.9012 41.6688 27.0811 42.5135 27.0811C43.3583 27.0811 43.9998 26.9012 44.3634 26.5416C44.8124 26.1502 45.037 25.4097 45.037 24.3095V22.3419C45.037 20.9667 44.481 19.7819 43.369 18.7664C43.123 18.5548 42.4922 18.174 41.4764 17.6027C40.065 16.8622 39.0171 16.2064 38.3541 15.6351C37.2742 14.6831 36.4402 13.5935 35.8735 12.3769C35.2961 11.1604 35.0181 9.84868 35.0181 8.44173V7.68008C35.0181 5.20471 35.7665 3.25826 37.2742 1.81958C38.6001 0.592477 40.343 -0.010498 42.5135 -0.010498C44.6841 -0.010498 46.427 0.603056 47.7529 1.81958C49.2605 3.24768 50.009 5.20471 50.009 7.68008V10.4093H45.037V7.68008C45.037 6.57992 44.8124 5.82884 44.3634 5.44801C43.9998 5.08835 43.3796 4.90851 42.5135 4.90851C41.6474 4.90851 41.0487 5.08835 40.6637 5.44801C40.2146 5.86058 39.9901 6.61165 39.9901 7.68008V8.44173C39.9901 9.81694 40.5461 10.9912 41.6581 11.975C41.9575 12.2183 42.5456 12.5674 43.4224 13.0434C44.9835 13.8791 46.0742 14.5667 46.673 15.0956C48.897 17.0632 50.0197 19.4751 50.0197 22.3419V24.3095C50.0197 26.7849 49.2712 28.7313 47.7636 30.17C46.4377 31.3971 44.6948 32.0001 42.5242 32.0001H42.5135Z"
                    fill="black"
                  />
                  <path
                    d="M60.0922 32C57.9857 32 56.2321 31.3864 54.8528 30.1699C53.3452 28.6783 52.5967 26.7319 52.5967 24.3094V7.69058C52.5967 5.27868 53.3452 3.32165 54.8528 1.83008C56.2428 0.602975 57.9857 0 60.0922 0C62.1986 0 64.0056 0.613554 65.3315 1.83008C66.8392 3.25818 67.5876 5.21521 67.5876 7.69058V10.4621H62.6156V7.69058C62.6156 6.59041 62.4018 5.83934 61.9847 5.45851C61.5891 5.09884 60.9583 4.91901 60.0922 4.91901C59.2261 4.91901 58.6273 5.09884 58.2424 5.45851C57.7933 5.87107 57.5687 6.62215 57.5687 7.69058V24.32C57.5687 25.3884 57.7933 26.1395 58.2424 26.5521C58.638 26.9117 59.2475 27.0916 60.0922 27.0916C60.9369 27.0916 61.5998 26.9117 61.9847 26.5521C62.4018 26.1607 62.6156 25.4202 62.6156 24.32V20.3002H67.5876V24.32C67.5876 26.7954 66.8392 28.7418 65.3315 30.1805C64.0056 31.4076 62.2628 32.0106 60.0922 32.0106V32Z"
                    fill="black"
                  />
                  <path
                    d="M77.7992 32C75.6286 32 73.8857 31.3864 72.5598 30.1699C71.0522 28.7418 70.3037 26.7848 70.3037 24.3094V7.69058C70.3037 5.21521 71.0522 3.26876 72.5598 1.83008C73.8857 0.602975 75.6286 0 77.7992 0C79.9698 0 81.7127 0.613554 83.0385 1.83008C84.5462 3.25818 85.2947 5.21521 85.2947 7.69058V24.32C85.2947 26.7954 84.5462 28.7418 83.0385 30.1805C81.7127 31.4076 79.9698 32.0106 77.7992 32.0106V32ZM77.7992 4.90843C76.9545 4.90843 76.3343 5.08826 75.9494 5.44793C75.5003 5.8605 75.2758 6.61157 75.2758 7.68V24.3094C75.2758 25.3778 75.5003 26.1289 75.9494 26.5415C76.345 26.9012 76.9545 27.081 77.7992 27.081C78.6439 27.081 79.2855 26.9012 79.649 26.5415C80.0981 26.1501 80.3226 25.4096 80.3226 24.3094V7.69058C80.3226 6.59041 80.0981 5.83934 79.649 5.45851C79.2855 5.09884 78.6653 4.91901 77.7992 4.91901V4.90843Z"
                    fill="black"
                  />
                  <path
                    d="M115.854 31.6299H110.882V0.338684H118.377C120.516 0.338684 122.259 0.962816 123.617 2.21108C125.124 3.58629 125.873 5.52215 125.873 8.01868V11.4144C125.873 13.9427 125.124 15.8997 123.617 17.2749C122.291 18.502 120.548 19.105 118.377 19.105H115.843V31.6193L115.854 31.6299ZM115.854 14.1965H118.388C119.233 14.1965 119.853 14.0167 120.238 13.657C120.687 13.2445 120.911 12.4934 120.911 11.425V8.02926C120.911 6.98199 120.687 6.24149 120.238 5.7972C119.842 5.43753 119.233 5.25769 118.388 5.25769H115.854V14.1965Z"
                    fill="black"
                  />
                  <path
                    d="M133.561 5.25775V13.1282H139.164V18.0472H133.561V26.7216H141.698V31.6406H128.6V0.338745H141.698V5.25775H133.561Z"
                    fill="black"
                  />
                  <path
                    d="M159.629 31.63H154.572L151.995 19.0733H149.739V31.63H144.767V0.338745H152.262C154.401 0.338745 156.143 0.962877 157.501 2.21114C159.009 3.58635 159.758 5.52222 159.758 8.01874V11.3721C159.758 13.9004 159.009 15.8574 157.501 17.2326C157.288 17.4442 157.052 17.6346 156.774 17.8144L159.619 31.63H159.629ZM154.796 8.02932C154.796 6.98205 154.572 6.24155 154.123 5.79726C153.727 5.43759 153.117 5.25775 152.273 5.25775H149.739V14.1543H152.273C153.117 14.1543 153.738 13.9744 154.123 13.6148C154.572 13.2022 154.796 12.4511 154.796 11.3827V8.02932Z"
                    fill="black"
                  />
                  <path
                    d="M175.807 31.63H162.708V0.338745H167.681V26.711H175.818V31.63H175.807Z"
                    fill="black"
                  />
                  <path
                    d="M183.174 31.63H178.202V0.338745H183.174V31.63Z"
                    fill="black"
                  />
                  <path
                    d="M202.057 31.63H199.17L191.578 15.7622V31.63H186.606V0.338745H189.493L197.085 16.1642V0.338745H202.057V31.63Z"
                    fill="black"
                  />
                  <path
                    d="M210.462 31.63H205.49V0.338745H210.462V31.63Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_316_43181">
                    <rect width="210.462" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg> */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 155 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60.8419 40.6506V14.1307H67.9495C72.1407 14.1307 74.8144 16.8182 74.8144 21.9091V23.3239C74.8144 28.4858 72.1407 31.2813 67.9495 31.2813H65.8539V40.6506H60.8419ZM65.8539 19.0795V26.3295H67.7069C69.1651 26.3295 70.014 25.375 70.014 22.9716V22.2642C70.014 19.9318 69.1622 19.0824 67.7069 19.0824H65.8539V19.0795Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M88.818 40.6506H77.4572V14.1307H88.818V19.2585H82.5622V24.5625H88.2116V29.6903H82.5622V35.5256H88.818V40.6534V40.6506Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M91.7626 40.6506V14.1307H99.3552C103.242 14.1307 106.068 16.5341 106.068 21.0256V22.0511C106.068 25.3409 104.55 27.4602 102.241 28.3807L106.643 40.6506H100.963L96.8619 27.6023V40.6506H91.7597H91.7626ZM96.8648 19.0795V25.8693H98.6558C100.083 25.8693 100.966 24.9148 100.966 22.5455V22.0511C100.966 19.858 100.086 19.0795 98.6558 19.0795H96.8648Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M120.345 40.6506H108.984V14.1307H114.149V35.5227H120.345V40.6506Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M122.683 40.6506V14.1307H127.847V40.6506H122.683Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M142.091 36.4432V14.1307H146.282V40.6506H138.811L135.59 17.9858V40.6506H131.398V14.1307H138.87L142.091 36.4432Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M149.839 40.6506V14.1307H155.003V40.6506H149.839Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M0 14.1932V40.5142L5.27707 43.5V32.1222L18.175 39.4403L18.9309 39.8807V24.9119L0 14.1932ZM13.4987 27.9403V30.6875L5.27707 26.0256V23.2784L13.4987 27.9403Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M25.5392 1.94034L23.108 0.551136L23.0093 0.5H22.7977L3.18994 11.625L8.5629 14.679L14.813 11.1392L29.1945 19.2869L42.6763 11.6477L25.5392 1.94034ZM31.8824 11.6335L29.1692 13.1733L20.1973 8.08807L22.9106 6.5483L31.8824 11.6335Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M22.527 27.4034V47.1733L9.00572 39.5085V45.608L22.9275 53.5L27.8041 50.7301V30.5142L31.5158 28.4119V48.6278L36.7928 45.6307V25.4233L40.5215 23.304V43.5171L45.8042 40.5227V14.2102L22.527 27.4034Z"
                  fill="#1D1D1B"
                />
              </svg>
            </Link>
          </div>
          <h2 className="text-[clamp(8rem,20vw,13.9rem)] font-body font-semibold leading-[0.9] mb-[3rem] small:mb-[5rem]">
            404
          </h2>
          <h4 className="mx-[5%] xsmall:mx-[2%] small:mx-auto text-[clamp(1.8rem,4vw,2.4rem)] font-headings text-center">
            Opps we can’t find the page you are looking for
          </h4>

          <div className="w-fit pt-[3rem] small:pt-[5rem]">
            <ButtonLinkNew
              destination={"/"}
              text="BACK TO HOME"
              ctaType="general"
              theme="dark"
              hoverEffect="outline"
            />
          </div>
          {/* top line */}
          <div className="absolute top-0 left-0 right-0 mx-auto w-[90%] max-h-[5.5px] overflow-hidden small:max-w-[1218px]">
            <svg
              viewBox="0 0 390 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.7"
                y="0.5"
                width="100%"
                height="4"
                fill="url(#top)"
              />
              <defs>
                <linearGradient
                  id="top"
                  x1="390"
                  y1="4.49985"
                  x2="0"
                  y2="4.49985"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D9D9D9" stopOpacity="0" />
                  <stop
                    offset="0.15625"
                    stopColor="#5003B4"
                    stopOpacity="0.5"
                  />
                  <stop offset="0.317708" stopColor="#CB425C" />
                  <stop offset="0.5" stopColor="#580BE5" />
                  <stop offset="0.708333" stopColor="#4804F8" />
                  <stop
                    offset="0.921875"
                    stopColor="#F9BA17"
                    stopOpacity="0.6"
                  />
                  <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>{" "}
          </div>
          {/* bottom line */}
          <div className="absolute bottom-0 left-0 right-0 mx-auto w-[90%] max-h-[5.5px] overflow-hidden small:max-w-[1218px]">
            <svg
              viewBox="0 0 390 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.7"
                y="0.5"
                width="100%"
                height="4"
                fill="url(#bottom)"
              />
              <defs>
                <linearGradient
                  id="bottom"
                  x1="390"
                  y1="4.49985"
                  x2="0"
                  y2="4.49985"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D9D9D9" stopOpacity="0" />
                  <stop
                    offset="0.15625"
                    stopColor="#5003B4"
                    stopOpacity="0.5"
                  />
                  <stop offset="0.317708" stopColor="#CB425C" />
                  <stop offset="0.5" stopColor="#580BE5" />
                  <stop offset="0.708333" stopColor="#4804F8" />
                  <stop
                    offset="0.921875"
                    stopColor="#F9BA17"
                    stopOpacity="0.6"
                  />
                  <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
