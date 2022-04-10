import Head from "next/head";

export const SEO = ({
  title = "젠틀매니악",
  description = "About Gentle Maniac",
  author = "Gentle Maniac",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:creator" content={author} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://gentle-maniac-home.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F%EB%A1%9C%EA%B3%A0.35f13132.png&w=1920&q=75"
      />
      <meta
        property="og:url"
        content="https://gentle-maniac-home.vercel.app/"
      />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content="https://gentle-maniac-home.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F%EB%A1%9C%EA%B3%A0.35f13132.png&w=1920&q=75"
      />
    </Head>
  );
};
