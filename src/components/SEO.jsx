// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = ({
  title,
  description,
  keywords,
  image,
  type = "website",
  publishedTime,
  author,
}) => {
  const location = useLocation();
  const siteUrl = "https://nurulyaqin.sch.id";
  const currentUrl = `${siteUrl}${location.pathname}`;

  // Default values
  const defaultTitle = "PONDOK PESANTREN NURUL YAQIN - Pendidikan Islam Modern";
  const defaultDescription =
    "Mencetak generasi Islam high class dan limited edition dengan kesadaran ilahiah di Bondowoso";
  const defaultKeywords =
    "pesantren, pondok pesantren, pendidikan islam, bondowoso, tahfidz, kitab kuning, santri, islamic boarding school";
  const defaultImage = `${siteUrl}/og-image.jpg`;
  const siteName = "Pondok Pesantren Nurul Yaqin";

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: image || defaultImage,
    url: currentUrl,
    type,
    siteName,
    author: author || "Pondok Pesantren Nurul Yaqin",
    publishedTime: publishedTime || new Date().toISOString(),
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author} />

      {/* Open Graph Tags (Facebook, LinkedIn) */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:site" content="@nurulyaqin" />
      <meta name="twitter:creator" content="@nurulyaqin" />

      {/* Article Specific (jika type: article) */}
      {type === "article" && (
        <>
          <meta property="article:published_time" content={seo.publishedTime} />
          <meta property="article:author" content={seo.author} />
          <meta property="article:section" content="Pendidikan" />
          <meta property="article:tag" content={seo.keywords} />
        </>
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Pondok Pesantren Nurul Yaqin",
          url: siteUrl,
          logo: `${siteUrl}/logo.png`,
          image: seo.image,
          description: seo.description,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Panjaitan Gg. Merak No. 36 RT 06 RW 02",
            addressLocality: "Tamansari",
            addressRegion: "Bondowoso",
            addressCountry: "ID",
            postalCode: "68215",
          },
          telephone: "+62-331-234-5678",
          email: "info@nurulyaqin.sch.id",
          founder: "Dr. Holid Batsal, S.H, M.Pd.I",
          foundingDate: "2018-02-17",
          sameAs: [
            "https://facebook.com/nurulyaqinpesantren",
            "https://instagram.com/nurulyaqinpesantren",
            "https://youtube.com/@nurulyaqinpesantren",
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
