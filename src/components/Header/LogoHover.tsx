import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LogoHover = () => {
  // Reference to the SVG element
  const svgRef = useRef(null);

  useEffect(() => {
    // Animation for the SVG element
    gsap.fromTo(
      svgRef.current,
      { x: '-10%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1,
        delay: 0.1, // Adjust delay as needed
        ease: 'power2.out'
      }
    );
  }, []);

  return (
    <div>
      <span className='font-custom font-bold px-2 flex justify-center items-center'>
        <svg
          ref={svgRef}
          className='w-[148px] h-[109px] lg:w-[196px] lg:h-[102px]'
          viewBox="0 0 342 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_555_9)">
          <path d="M4.57384 3.44395V3.45361M38.6606 64.1396C33.2586 64.1396 28.5391 60.4928 27.1935 55.2714L25.2331 47.6398C24.2166 46.2149 22.8903 45.0895 19.2357 44.8818C14.1096 44.8528 9.64184 41.3799 8.35911 36.4242L0.139955 4.5887C-0.0536648 3.84485 0.106071 3.06237 0.58044 2.44894C1.05481 1.83551 1.77604 1.48291 2.55052 1.48291H11.3651C11.4086 1.48291 11.4522 1.48291 11.4909 1.48291C15.281 1.48291 18.8097 4.23127 19.8698 8.05674L29.4782 45.7464C29.5605 45.8768 29.6427 46.0024 29.7202 46.1231C30.6544 47.5915 30.9013 47.8717 31.8016 47.9055C35.127 47.8958 38.2395 46.4178 40.3402 43.8433C42.9686 40.6216 44.8709 36.9652 46.0036 32.9707L53.1578 7.70897C53.7484 4.66598 56.6091 1.48291 60.8445 1.48291H70.2496C71.0289 1.48291 71.7695 1.85483 72.2391 2.47309C72.7086 3.09135 72.8586 3.90765 72.6457 4.65149L62.7227 39.0953C61.5609 43.1381 58.9906 46.6496 55.491 48.9923C53.942 50.0307 52.6544 51.3542 51.6621 52.9337L49.0676 57.0779C47.3638 61.0048 43.8447 63.6807 39.8368 64.0816C39.4544 64.1203 39.0575 64.1396 38.6557 64.1396H38.6606ZM31.1917 52.4458L31.6273 54.1315C32.4551 57.3339 35.3448 59.5703 38.6606 59.5703C38.9026 59.5703 39.1446 59.5606 39.3818 59.5365C41.7343 59.2998 43.9077 57.5803 44.9193 55.1459L45.0936 54.8126L47.7849 50.5186C49.1209 48.3885 50.8538 46.6013 52.9449 45.2006C55.549 43.4569 57.461 40.8438 58.3275 37.8394L67.4809 6.05223H60.8494C58.9664 6.05223 57.8289 7.57856 57.6498 8.61221L57.5966 8.84889L50.4133 34.212C49.1112 38.8103 46.9185 43.0222 43.898 46.7269C40.9162 50.3785 36.5017 52.4748 31.7774 52.4748H31.6854C31.516 52.47 31.3563 52.4555 31.1965 52.441L31.1917 52.4458ZM5.24667 6.05223L12.7978 35.2795C13.5626 38.2403 16.2394 40.3125 19.3035 40.3125H19.4293C21.0509 40.4042 22.4062 40.6554 23.5437 41.0177L15.4456 9.23047C14.9519 7.4578 13.2044 6.05223 11.4522 6.05223C11.4328 6.05223 11.4183 6.05223 11.3989 6.05223H5.24667Z" stroke="#111111" stroke-width="0.25" stroke-miterlimit="10"/>
//       <path d="M305.706 5.07175C301.689 3.49712 297.497 2.69531 293.271 2.69531C285.391 2.69531 277.893 5.68517 272.186 11.0901C263.458 19.4849 260.603 32.0819 264.717 43.9544C267.505 51.7068 273.101 57.6672 280.473 60.7151C290.241 64.8207 301.224 63.4199 310.619 56.8461L312.652 55.3681C312.938 55.1652 313.296 55.1459 313.596 55.3053C313.896 55.4454 314.085 55.7593 314.085 56.0926V61.8936C314.085 62.2559 314.385 62.5553 314.763 62.5553H322.987C323.35 62.5553 323.65 62.2559 323.65 61.8936V32.6954C323.65 20.4944 316.433 9.3899 305.701 5.06692L305.706 5.07175ZM312.372 41.38C310.402 46.3019 306.51 50.2191 301.674 52.1512C298.901 53.2187 296.079 53.7693 293.276 53.7693C287.7 53.7693 282.467 51.6151 278.541 47.7171C272.457 41.6311 270.758 32.7775 274.083 24.6049C276.053 19.7312 279.945 15.814 284.766 13.8481C293.024 10.5298 301.94 12.23 308.01 18.2967C314.075 24.3199 315.745 33.1735 312.376 41.38H312.372Z" fill="white"/>
//       <path d="M199.138 61.6811V68.9456C199.138 71.0661 197.88 72.9547 195.909 73.7565L192.507 75.1379L152.466 90.9421C152.263 91.0387 152.04 91.0049 151.851 90.8793C151.663 90.7538 151.551 90.5509 151.566 90.3142L151.663 84.4649L151.648 83.3636C151.633 81.2432 152.955 79.2773 154.94 78.49L155.099 78.4272C165.308 74.2443 172.888 71.24 175.744 70.1097L176.107 69.9696C182.632 67.3758 190.067 64.3715 198.214 61.0677C198.325 61.0339 198.402 61.0049 198.48 61.0049C198.606 61.0049 198.731 61.0532 198.843 61.1305C199.032 61.256 199.143 61.4589 199.143 61.6811H199.138Z" fill="white"/>
//       <path d="M194.501 12.2781H200.692C201.055 12.2781 201.369 11.9642 201.369 11.6019V3.4438C201.369 3.08154 201.055 2.76758 200.692 2.76758H171.053C158.889 2.76758 147.858 9.93552 143.603 20.6005C141.933 24.7689 141.081 28.918 141.081 32.9463C141.081 40.8871 143.981 48.1034 149.465 53.8126C157.897 62.589 170.453 65.4146 182.24 61.2172L182.351 61.2027C190.057 58.5606 196.03 53.0398 199.085 45.6834C203.136 35.8541 201.732 24.9428 195.256 15.7124L193.775 13.7175C193.571 13.4325 193.537 13.0896 193.697 12.7756C193.838 12.4762 194.138 12.2878 194.501 12.2878V12.2781ZM186.025 47.5962C184.069 49.5282 181.819 51.0401 179.326 52.0786C176.804 53.1026 174.156 53.6194 171.445 53.6194C168.735 53.6194 165.709 53.0687 162.984 52.0158C158.149 50.0499 154.257 46.152 152.33 41.2928C149.005 33.1927 150.66 24.3873 156.648 18.3207C162.621 12.3458 171.494 10.6456 179.781 13.8721C184.616 15.838 188.508 19.7552 190.464 24.6095C191.616 27.5801 192.168 30.2994 192.168 32.9415C192.168 38.4141 189.994 43.6161 186.02 47.5962H186.025Z" fill="white"/>
//       <path d="M224.303 52.0592C224.066 52.3249 224.017 52.7017 224.163 53.0349C224.322 53.3489 224.637 53.5373 224.981 53.5373H258.182C258.545 53.5373 258.845 53.8512 258.845 54.2135V62.3764C258.845 62.7532 258.545 63.0527 258.182 63.0527H212.705C212.342 63.0527 212.042 62.7532 212.042 62.3764V51.7163C212.042 51.5569 212.091 51.4023 212.202 51.2913L244.328 13.674C244.551 13.3891 244.594 13.0316 244.454 12.7128C244.314 12.3989 243.999 12.196 243.651 12.196H211.379C211.016 12.196 210.716 11.8966 210.716 11.5198V3.36168C210.716 2.99942 211.016 2.69995 211.379 2.69995H258.182C258.545 2.69995 258.845 2.99942 258.845 3.36168V11.7227C258.845 11.8821 258.796 12.0366 258.685 12.1477L224.303 52.0544V52.0592Z" fill="white"/>
//       <path d="M135.273 26.8845C134.014 21.0352 131.115 15.722 126.874 11.5053C121.138 5.82989 113.495 2.69995 105.363 2.69995C91.8727 2.69995 76.6687 12.3554 75.0617 30.2656C74.2872 39.1676 77.5061 47.8618 83.8714 54.1169C89.5589 59.8551 97.2021 63.0333 105.363 63.0333C112.062 63.0333 118.82 60.6569 124.381 56.3677L124.556 56.2277C124.696 56.1166 124.793 55.9427 124.807 55.7543C124.822 55.5659 124.759 55.3776 124.619 55.2375L119.008 49.3882C118.694 49.0742 118.171 49.0597 117.779 49.3399C114.187 52.0303 109.661 53.5518 105.363 53.5518C97.2166 53.5518 89.496 48.5187 86.1706 41.0175L84.9411 38.047C84.7814 37.6992 84.8637 37.2742 85.1444 37.0085C85.4106 36.7573 85.8221 36.68 86.1851 36.8346L86.248 36.8829C88.1407 37.762 90.2802 38.2354 92.41 38.2354H134.847C135.176 38.2354 135.447 37.9987 135.49 37.6847C135.694 36.1101 135.853 34.1152 135.853 32.9512C135.853 30.9225 135.65 28.8311 135.273 26.8797V26.8845ZM125.408 28.1886C125.233 28.4398 124.967 28.5799 124.667 28.5799H86.1561C85.8705 28.5799 85.5897 28.4398 85.4155 28.1886C85.2412 27.9375 85.2122 27.6235 85.3187 27.353L85.9334 25.7494C88.9587 17.6831 96.7761 12.2588 105.363 12.2588C113.95 12.2588 121.879 17.6831 124.904 25.7494L125.519 27.3675C125.616 27.6332 125.582 27.9326 125.408 28.1838V28.1886Z" fill="white"/>
//       <path d="M335.717 11.4958L334.623 9.52022H332.478V11.4958H330.9V4.85913H334.395C336.177 4.85913 337.12 5.68992 337.12 7.24039C337.12 8.16295 336.67 8.83917 335.988 9.20626L337.285 11.5006H335.717V11.4958ZM332.478 8.31269H334.308C335.107 8.31269 335.552 7.95043 335.552 7.24522C335.552 6.54002 335.107 6.17776 334.308 6.17776H332.478V8.31269Z" fill="white"/>
//       <path d="M333.955 0C329.516 0 325.91 3.60329 325.91 8.02771C325.91 12.4521 329.521 16.0554 333.955 16.0554C338.389 16.0554 342 12.4521 342 8.02771C342 3.60329 338.389 0 333.955 0ZM340.461 8.02771C340.461 11.6068 337.547 14.5194 333.955 14.5194C330.363 14.5194 327.449 11.6117 327.449 8.02771C327.449 4.44374 330.368 1.53599 333.955 1.53599C337.542 1.53599 340.461 4.44374 340.461 8.02771Z" fill="white"/>
// 
          </g>
          <defs>
            <clipPath id="clip0_555_9">
              <rect width="342" height="91" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </span>
    </div>
  );
};

export default LogoHover;

