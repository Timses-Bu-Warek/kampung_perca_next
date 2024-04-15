import type { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  description: "Web kampung perca",
  defaultTitle: "Kampung Perca",
  canonical: "https://www.kampungperca.id/",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://www.kampungperca.id/favicon.ico",
    },
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.kampungperca.id/",
    title: "Website Resmi Kampung Perca Sindangsari",
    siteName: "Website Resmi Kampung Perca Sindangsari",
    description: "Ini website kampung perca",
  },
};

export default config;
