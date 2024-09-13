import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title, description, url }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta name="robots" content="index,follow" />
  </Helmet>
);

export default Seo;
