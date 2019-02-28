import * as React from 'react'
import {DEV} from '../../constants/conf'
import {isStaging} from '../../lib/browser'

class Analysis extends React.PureComponent {

  // googleAnalytics() {
    // (function (i, s, o, g, r, a, m) {
    //   i['GoogleAnalyticsObject'] = r
    //   i[r] = i[r] || function () {
    //     (i[r].q = i[r].q || []).push(arguments)
    //   }, i[r].l = 1 * new Date()
    //   a = s.createElement(o),
    //     m = s.getElementsByTagName(o)[0]
    //   a.async = 1
    //   a.src = g
    //   m.parentNode.insertBefore(a, m)
    // })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')
    // ga('create', 'UA-105645571-1', 'auto')
    // ga('send', 'pageview')
  // }

  baiDuTongJi() {
    const _hmt = _hmt || []
    const hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?9e185ccc4b246a5d3b1808b96cfb7732'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
  }

  baiDuPush() {
    const bp = document.createElement('script')
    const curProtocol = window.location.protocol.split(':')[0]
    if (curProtocol === 'https') {
      bp.src = 'https://zz.bdstatic.com/linksubmit/push.js'
    } else {
      bp.src = 'http://push.zhanzhang.baidu.com/push.js'
    }
    const s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(bp, s)
  }

  componentDidMount() {
    if (!DEV && !isStaging()) {
      // this.googleAnalytics()
      this.baiDuTongJi()
      this.baiDuPush()
    }
  }

  render() {
    return null
  }
}

export default Analysis