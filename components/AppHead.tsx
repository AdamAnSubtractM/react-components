import React from "react";
import Head from "next/head";

interface AppHeadProps {
  title: string;
}

const AppHead: React.FC<AppHeadProps> = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Playfair+Display:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <meta
      name="description"
      content="Reusable Components for your next project."
    />
    <meta
      property="og:image"
      content={`https://og-image.now.sh/${encodeURI(
        title
      )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
    />
    <meta property="og:site_name" content={title} />
    <meta name="og:title" content={title} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:image:alt"
      content="React Components - Reusable Components for your next project."
    />
  </Head>
);

export { AppHead };
