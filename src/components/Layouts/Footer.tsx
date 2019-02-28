import * as React from 'react'
import {FOOTER_LINKS} from '../../constants/conf'
import Link from 'next/link'
import Analysis from '../Widgets/Analysis'
import Assistant from '../Widgets/Assistant'
import {chunk} from 'lodash'

interface Link {
  name: string
  url: string
}

class FooterComponent extends React.Component {

  state = {
    ad: false,
  }


  links(links: Link[]) {
    return chunk(links, 8).map((links, key) => {
      const cols = links.map((link, k) => {
        return <a href={link.url} target="_blank" style={{color: '#8e8e8e', padding: '0 4px'}} key={k}>{link.name}</a>
      })

      return <div key={key}>{cols}</div>
    })
  }

  /*
  cpc() {
    const that = this
    localForage.getItem(AD.lrs_cpc.id, (err, last: string) => {
      if (err) {
        localStorage.setItem(AD.lrs_cpc.id, '0')
        return
      }

      const timeValid = (new Date().getTime() - parseInt(last)) > 86400000
      const rand = Math.floor(Math.random() * (timeValid ? AD.lrs_cpc.max_valid : AD.lrs_cpc.max_invalid) + (timeValid ? AD.lrs_cpc.min_valid : AD.lrs_cpc.min_invalid))
      that.adSrc = AD.lrs_cpc.url + '/' + rand
      if (timeValid || rand % 3 > 0) {
        that.setState({ad: true})
        setTimeout(function () {
          that.setState({ad: false})
          console.clear()
        }, 8000)
      }
    })
  }
  */

  componentDidMount() {
    // if (isStaging()) {
    //   return
    // }
    // this.cpc()
  }


  render() {
    return (
      <footer style={{
        textAlign: 'center',
        background: 'white',
        fontSize: '14px',
        color: '#8e8e8e',
        width: '100%',
        position: 'fixed',
        bottom: 0,
      }}>
        <div>{this.links(FOOTER_LINKS)}</div>
        <Analysis/>
        <Assistant/>
        {/*{this.state.ad && this.adSrc ? <iframe style={{display: 'none'}} src={this.adSrc} width="0" height="0"/> : null}*/}
      </footer>
    )
  }
}

export default FooterComponent