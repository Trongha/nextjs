import React from 'react'
import Head from 'next/head'

import { useTitleFormatter } from '../../helpers'

const Seo = ({ title, description, keywords, image }) => {
  const pageTitle = useTitleFormatter(title)
  const pageImage = image
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />

        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}

        {keywords && (
          <meta
            name="keywords"
            content={Array.isArray(keywords) ? keywords.join(',') : keywords}
          />
        )}

        {pageImage && <meta property="og:image" content={pageImage} />}
        {pageImage && <meta property="twitter:image" content={pageImage} />}
      </Head>
    </>
  )
}

export default Seo
