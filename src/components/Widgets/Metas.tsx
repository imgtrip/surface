import * as React from 'react'
import Head from 'next/head'

interface Props {
  metas: any
}

export default class Metas extends React.PureComponent<Props> {

  render() {
    const {title, description, keywords} = this.props.metas

    return (
      <Head>
        {title ? <title>{title}</title> : null}
        {description ? <meta name="description" content={description}/> : null}
        {keywords ? <meta name="keywords" content={keywords}/> : null}
      </Head>
    )
  }

}