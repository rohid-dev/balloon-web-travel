import React from "react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.25 0h7.5A6.25 6.25 0 0120 6.25v7.5A6.25 6.25 0 0113.75 20h-7.5A6.25 6.25 0 010 13.75v-7.5A6.25 6.25 0 016.25 0zm7.5 18.125a4.38 4.38 0 004.375-4.375v-7.5a4.38 4.38 0 00-4.375-4.375h-7.5A4.38 4.38 0 001.875 6.25v7.5a4.38 4.38 0 004.375 4.375h7.5z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 10a5 5 0 1110 0 5 5 0 01-10 0zm1.875 0A3.13 3.13 0 0010 13.125 3.13 3.13 0 0013.125 10 3.129 3.129 0 0010 6.875 3.129 3.129 0 006.875 10z"
        clipRule="evenodd"
      ></path>
      <circle cx="15.375" cy="4.625" r="0.666" fill="currentColor"></circle>
    </svg>
  );
}

export default InstagramIcon;
