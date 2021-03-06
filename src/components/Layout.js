import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="ja" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${ withPrefix('/') }img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${ withPrefix('/') }img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${ withPrefix('/') }img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${ withPrefix('/') }img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          property="og:image"
          content={`${ withPrefix('/') }img/og-image.jpg`}
        />
        <meta name="google-site-verification" content="SPT_gzXtOTNTkHhIB1DyDl6tRUbLBUrLUnD8gysdOW4" />
        <meta name="twitter:site" content="@rantaro_33" />
        <meta name="twitter:creator" content="@rantaro_33" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
