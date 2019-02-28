import * as React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {seo} from '../src/service/seo'
import {
  APP_HOME,
  BAIDU_SITE_VERIFICATION,
  GOOGLE_SITE_VERIFICATION, PRODUCTION_API_HOST, SITE_ICO, SITE_IMAGE,
} from '../src/constants/conf'

interface Props {
  __NEXT_DATA__: any
}

export default class extends Document<Props> {
  public static async getInitialProps(...args) {
    const documentProps = await Document.getInitialProps(...args)
    const {renderPage} = args[0]
    const page = renderPage()

    return {...documentProps, ...page}
  }

  props: Props

  public render() {

    return (
      <html lang="zh-CN">
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
        <meta name="renderer" content="webkit"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge"/>

        <meta property="api_host" content={process.env.API_HOST || PRODUCTION_API_HOST}/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content={seo.name}/>
        <meta property="og:title" content={seo.title}/>
        <meta property="og:url" content={APP_HOME}/>
        <meta property="og:description" content={seo.description}/>
        <meta property="og:image" content={SITE_IMAGE}/>

        <meta name="format-detection" content="telephone=no, address=no, email=no"/>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="format-detection" content="date=no"/>
        <meta name="format-detection" content="address=no"/>

        <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION}/>
        <meta name="baidu-site-verification" content={BAIDU_SITE_VERIFICATION}/>

        <link href={SITE_ICO} rel="shortcut icon" type="image/x-icon"/>
        <link rel="stylesheet" href="//s0.imgtrip.com/f/antd-3.11.6.min.css"/>
        <meta name="360_ssp_verify" content="d1c4cfc91a82a7e2865b392febbfdbcd"/>


        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-105645571-1"/>
        <script dangerouslySetInnerHTML={{
          __html: `
         window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-105645571-1');
        `,
        }}/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </html>
    )
  }
}
