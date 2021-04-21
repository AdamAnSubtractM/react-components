import React from "react";
import { lightTheme, darkTheme } from "../utils/theme";
import { DefaultTheme } from "styled-components";

interface LogoProps {
  themeId: DefaultTheme["id"];
}

const Logo: React.FC<LogoProps> = ({ themeId }) => (
  // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 257 266">
  //   <g filter="url(#filter0_d)">
  //     <circle
  //       cx="127"
  //       cy="132"
  //       r="63"
  //       fill={
  //         themeId === `dark`
  //           ? darkTheme.colors.mainBg
  //           : lightTheme.colors.mainBg
  //       }
  //     />
  //   </g>
  //   <path
  //     fill={
  //       themeId === `dark`
  //         ? darkTheme.colors.mainAccent
  //         : lightTheme.colors.mainAccent
  //     }
  //     d="M127.805 83.0478l7.308 32.3552 28.047-17.7105-17.711 28.0465 32.356 7.309-32.356 7.308 17.711 28.047-28.047-17.711-7.308 32.356-7.309-32.356-28.0467 17.711 17.7107-28.047-32.3553-7.308 32.3553-7.309-17.7107-28.0465 28.0467 17.7105 7.309-32.3552z"
  //   />
  //   <path
  //     fill={
  //       themeId === `dark`
  //         ? darkTheme.colors.mainPurple
  //         : lightTheme.colors.mainPurple
  //     }
  //     d="M153.969 189.031c-2.532 1.25-13.063 5.469-22.969 5.875 11.11 31.014 40.406 41.736 53.13 37.136C228.5 216 125.25 10.25 69.935 35.1167c-20.2888 9.8885-1.3831 53.426 2.1586 65.9143 3.9375-7.6873 13.3438-17.2497 18-20.0622C87.5 74.25 84.6249 62.75 84.6249 57.8751 125.875 86.2501 171.406 192.75 171.406 210.031c-8.156-7.281-17.437-19.562-17.437-21z"
  //   />
  //   <path
  //     fill={
  //       themeId === `dark`
  //         ? darkTheme.colors.mainPurple
  //         : lightTheme.colors.mainPurple
  //     }
  //     d="M189.359 141c-1.718 12.562-7.593 22.25-8.64 23.969 18.281 0 75.817-9.719 75.817-32.469C252 84.5 3.34255 82.2241.8125 132.5c.4375 23.563 38.1976 30.437 67.125 32.75 2.0733.166 3.5625-1.75 2.75-5.172-1.3125-2.109-4.4843-8.937-6.0781-19.094-10.5-1.166-32.4093-4.184-33.6093-6.984C64.5001 115 196 120.75 224.5 134c2.758 1.282-31.641 8-35.141 7z"
  //   />
  //   <path
  //     fill={
  //       themeId === `dark`
  //         ? darkTheme.colors.mainPurple
  //         : lightTheme.colors.mainPurple
  //     }
  //     d="M183.203 103.656c-3.812-8.4372-14.297-18.9294-18.078-21.8122C172.625 67.8438 183 44.25 183 38 130.5 87.5 72.5 226.25 72.5 230c9.8334-11.167 29.584-34.753 29.984-39.953 11.125 4.812 21.969 5.156 28.524 4.812C102.008 244.359 75 272 52.5 264 6.24992 249.25 147.834-17.5497 200.199 1.71002 235.23 14.5948 197.209 87.65 183.203 103.656z"
  //   />
  //   <defs>
  //     <filter
  //       id="filter0_d"
  //       width="158"
  //       height="158"
  //       x="48"
  //       y="60"
  //       colorInterpolationFilters="sRGB"
  //       filterUnits="userSpaceOnUse"
  //     >
  //       <feFlood floodOpacity="0" result="BackgroundImageFix" />
  //       <feColorMatrix
  //         in="SourceAlpha"
  //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  //       />
  //       <feOffset dy="7" />
  //       <feGaussianBlur stdDeviation="8" />
  //       <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.39 0" />
  //       <feBlend
  //         in2="BackgroundImageFix"
  //         mode="darken"
  //         result="effect1_dropShadow"
  //       />
  //       <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
  //     </filter>
  //   </defs>
  // </svg>
  <svg
    // width="600"
    // height="622"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 622"
  >
    <g filter="url(#filter0_d)">
      <ellipse
        cx="297.248"
        cy="307.205"
        rx="147.816"
        ry="147.837"
        transform="rotate(15 297.248 307.205)"
        fill="#fff"
      />
    </g>
    <ellipse
      cx="300.02"
      cy="310.091"
      rx="94.714"
      ry="94.727"
      transform="rotate(15 300.02 310.091)"
      fill="#EDEDF0"
    />
    <ellipse
      cx="300.02"
      cy="310.091"
      rx="40.409"
      ry="40.415"
      transform="rotate(15 300.02 310.091)"
      fill="#fff"
    />
    <path
      d="M316.046 453.868c-29.502 3.864-55.061-3.455-59.598-4.764 11.283 41.383 68.797 165.625 120.303 151.582C482.622 560.787 334.303-3.49 218.918 21.817c-53.075 15.536-39.743 115.553-27.126 182.462 12.41-12.466 23.504-21.232 47.293-32.811-3.839-24.488-10.529-75.946-4.931-80.39C297.846 155.18 365.99 456.4 353.582 529.092c-1.2 7.035-37.64-66.685-37.536-75.225z"
      fill="#6A57DC"
    />
    <path
      d="M433.109 365.474c-11.525 27.431-30.724 45.821-34.14 49.082 41.431 11.101 177.73 24.012 191.547-27.555C609.388 275.447 47.23 119.288 10.961 231.71c-13.32 53.674 79.795 92.546 143.949 115.355-4.517-17-6.5-31-4.517-57.383-23.088-9.02-70.909-29.165-71.928-36.241 87.462-22.723 381.992 70.165 438.536 117.506 5.471 4.581-76.567-1.081-83.892-5.473z"
      fill="#6A57DC"
    />
    <path
      d="M181.264 399c-18.682-23.158-25.25-47.946-26.5-52.5-29.425 31.208-105.947 144.883-67.105 181.507 89.255 69.528 493.38-351.295 411.613-436.55C458.338 54.274 380.275 117.342 329.764 163c17.109 4.087 30.215 8.74 52.5 23 18.893-16.047 59.145-47.883 65.857-45.424-21.482 87.775-242.961 303.004-311.457 330.327-6.628 2.644 37.259-67.538 44.6-71.903z"
      fill="#6A57DC"
    />
    <defs>
      <filter
        id="filter0_d"
        x="133.394"
        y="150.333"
        width="327.708"
        height="327.744"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="7" />
        <feGaussianBlur stdDeviation="8" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.39 0" />
        <feBlend
          mode="darken"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

export { Logo };
