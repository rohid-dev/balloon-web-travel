import React from "react";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8.15 3.295H9.96V.14A23.394 23.394 0 007.322 0C4.71 0 2.921 1.643 2.921 4.663v2.779H.038v3.527h2.883v8.876h3.534V10.97H9.22l.439-3.527H6.454v-2.43c0-1.02.275-1.718 1.696-1.718z"
      ></path>
    </svg>
  );
}

export default FacebookIcon;
