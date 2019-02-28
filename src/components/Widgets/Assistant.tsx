import * as React from 'react'
import {bindFingerprint, setTokenCookie} from '../../service/cookie'
import {connect} from 'react-redux'
import {RootState} from '../../redux'

interface Props {
}

interface InjectedProps extends Props {
  token: string
}

class Assistant extends React.PureComponent<Props> {

  get getProps() {
    return this.props as InjectedProps
  }

  componentDidMount() {
    setTokenCookie(this.getProps.token)
    bindFingerprint()
  }

  render() {
    return <i/>
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    token: state.system.token
  }
}
const mapDispatchToProps = () => {
  return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Assistant)
