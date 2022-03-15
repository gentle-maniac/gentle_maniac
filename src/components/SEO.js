import Head from "next/head";

export const SEO = ({
  title = "젠틀매니악",
  description = "startup product landing page",
  author = "Gentle Maniac",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:creator" content={author} />
    </Head>
  );
};
