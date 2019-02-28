import * as React from 'react'
import {Button, Radio} from 'antd'
import {isNumber} from '../../lib/number'
import {DOWNLOAD_SIZES, SCORES} from '../../constants/conf'
import {download, scoreAndReviewPostLink} from '../../service/link'
import {loading} from '../../lib/loading'
import {error, successWithLoaded} from '../../lib/message'
import {Image} from '../../@types/data'
import {lang} from '../../constants/lang'
import Icon from 'antd/lib/icon'

const RadioGroup = Radio.Group
const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
}


interface Props {
  image: Image,
  onSubmitted: (auto: boolean, height?: number, width?: number) => void
}


interface InjectedProps extends Props {
  // changeDownloadSetting: (setting: DownloadSetting) => void
  // downloadSetting: DownloadSetting
}

const CUSTOM = 'CUSTOM'
const AUTO = 'AUTO'

class OptionalDownloadForm extends React.Component<Props> {

  state = {
    type: AUTO,
    height: undefined,
    width: undefined,
    // detectHeight: undefined,
    // detectWidth: undefined,
    href: '',
    loading: false,
  }


  get getProps() {
    return this.props as InjectedProps
  }

  componentDidMount() {
    // const {downloadSetting} = this.getProps
    this.setState({
      ...this.state,
      // ...downloadSetting,
      // detectHeight: window.screen.availHeight,
      // detectWidth: window.screen.availWidth,
    })
  }

  // onChange(e) {
  //   this.setState({type: e.target.value})
  //
  //   const {type, height, width} = this.state
  //   const {onSubmitted, changeDownloadSetting} = this.getProps
  //   let url = ''
  //   // if (auto) {
  //   url = download('2559b11d/18a651e698a54714db81b373edbd6e2b.jpg')
  //   // } else {
  //   //   url = download(image, height, width)
  //   // }
  //   if (type === AUTO) {
  //     // onSubmitted(true)
  //     this.setState({href: url})
  //     changeDownloadSetting({type: AUTO, height: undefined, width: undefined})
  //     return
  //   } else if (type === CUSTOM) {
  //     onSubmitted(false, height, width)
  //     changeDownloadSetting({type: CUSTOM, height, width})
  //     return
  //   } else {
  //     const option = DOWNLOAD_SIZES[type]
  //     if (typeof option !== 'undefined') {
  //       const {height, width} = option.value
  //       onSubmitted(false, height, width)
  //       changeDownloadSetting({type: CUSTOM, height, width})
  //       return
  //     }
  //   }
  // }

  onSubmit() {
    // const {type, height, width} = this.state
    // const {onSubmitted, changeDownloadSetting} = this.getProps
    //
    // if (type === AUTO) {
    //   onSubmitted(true)
    //   changeDownloadSetting({type: AUTO, height: undefined, width: undefined})
    //   return
    // } else if (type === CUSTOM) {
    //   onSubmitted(false, height, width)
    //   changeDownloadSetting({type: CUSTOM, height, width})
    //   return
    // } else {
    //   const option = DOWNLOAD_SIZES[type]
    //   if (typeof option !== 'undefined') {
    //     const {height, width} = option.value
    //     onSubmitted(false, height, width)
    //     changeDownloadSetting({type: CUSTOM, height, width})
    //     return
    //   }
    // }
    // error()
  }


  onHeightChange(e) {
    const value = e.target.value
    this.setState({height: this.numberAdapter(value)})
  }

  onWidthChange(e) {
    const value = e.target.value
    this.setState({width: this.numberAdapter(value)})
  }

  numberAdapter(value) {
    if (value === '') {
      return ''
    } else if (value === '0') {
      return ''
    } else if (isNumber(value)) {
      return parseInt(value)
    } else if (isNaN(parseInt(value))) {
      return ''
    }

    return parseInt(value)
  }

  Downloads() {
    const {image} = this.props
    const {loading} = this.state
    return DOWNLOAD_SIZES.map((option, key) => {

      return (
        <p key={key}>
          <Button
            type="dashed"
            style={{width: '100%'}}
            onClick={this.onClick.bind(this, image, option.value.height, option.value.width)}
            loading={loading}
            disabled={loading}
          >{option.name}</Button>
        </p>
      )
    })
  }

  onClick(image: Image, height?: number, width?: number) {
    const that = this
    const {src, id} = image
    loading(this)

    const url = download(src, id, height, width)
    const filename = 'imgtrip-com-' + src.replace(/\//g, '')

    const request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.responseType = 'blob'
    request.onload = () => {
      if (request.status === 200) {
        const blob = new Blob([request.response], {type: 'image/jpeg'})
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        successWithLoaded(that)
        that.props.onSubmitted(true)
      } else if (request.status === 403) {
        error(`${lang.operator_fail}，下载额度或积分不足`)
      } else {
        error(that)
      }
      that.setState({loading: false})
    }
    request.send()
  }

  render() {
    // const {detectHeight, detectWidth} = this.state

    return (
      <div>
        <p><b>选择下载尺寸</b></p>
        {/*{detectHeight && detectWidth ? <p>当前设备分辨率: {detectWidth}*{detectHeight}</p> : null}*/}
        <ul>
          <li>下载为无水印原图</li>
          <li>选择非原图尺寸,系统会自动缩放后下载</li>
          <li>优先使用无条件下载额度，若额度不足会消耗积分
            <a href={scoreAndReviewPostLink} style={{marginLeft: '0.5em'}}><Icon type="question-circle"/></a>
          </li>
        </ul>
        <div style={{marginBottom: '20px'}}>
          {this.Downloads()}
        </div>
      </div>
    )
  }
}

export default OptionalDownloadForm

// const mapStateToProps = (state: RootState) => {
//   return {
//     downloadSetting: state.image.downloadSetting
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeDownloadSetting: (setting: DownloadSetting) => dispatch(changeDownloadSetting(setting))
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(OptionalDownloadForm)
// {/*<RadioGroup onChange={this.onChange.bind(this)} value={type}>*/}
// {/*<Radio style={radioStyle} value={AUTO}>原图尺寸</Radio>*/}
// {/*{*/}
// {/*DOWNLOAD_SIZES.map((option, key) => {*/}
// {/*return <Radio style={radioStyle} value={key} key={key}>{option.name}</Radio>*/}
// {/*})*/}
// {/*}*/}
// {/*<Radio style={radioStyle} value={CUSTOM}>*/}
// {/*自定义(像素)*/}
// {/*<Input*/}
// {/*style={{width: 80, marginLeft: 8}}*/}
// {/*placeholder={'水平方向'}*/}
// {/*onChange={this.onWidthChange.bind(this)}*/}
// {/*value={width}*/}
// {/*/>*/}
// {/*<Input*/}
// {/*style={{width: 80}}*/}
// {/*placeholder="垂直方向"*/}
// {/*onChange={this.onHeightChange.bind(this)}*/}
// {/*value={height}*/}
// {/*/>*/}
// {/*</Radio>*/}
// {/*</RadioGroup>*/}
// onClick={this.onSubmit.bind(this)}
// <a href={this.state.href}>
// <Button
// type="primary"
// style={{width: '100%'}}
// >开始下载</Button>
// </a>