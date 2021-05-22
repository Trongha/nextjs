/* eslint-disable sort-keys */
import React from 'react'
import Head from 'next/head'
import Seo from '../Seo'
import { useTitleFormatter } from '../../helpers'

const CanonicalUrlHeaders = () =>
{
  return <h1>tuan</h1>
}

const LayoutHead = (props) => {
  const { title, description, image, keywords } = props
  const faviconUrl = useBaseUrl(favicon)
  const pageTitle = useTitleFormatter(title)
  return (
    <>
      <Head>
        <html lang={htmlLang} />
        {favicon && <link rel="shortcut icon" href={faviconUrl} />}
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
      </Head>
      <Seo {...{ description, keywords, image }} />
      <CanonicalUrlHeaders />
    </>
  )
}

export default LayoutHead
