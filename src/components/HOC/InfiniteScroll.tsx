import * as React from 'react'
import {isPaddingBottom} from '../../lib/browser'

interface Props {
  loadMore: (nextPage: number) => Promise<any>,
  initData: any[],
  children: (data: any[], loading: boolean) => React.ReactNode
  perPage: number
  initPage?: number
}

const initState = {
  data: [],
  current: 0,
  loading: false,
}

type State = Readonly<typeof initState>

class InfiniteScroll extends React.Component<Props, State> {

  state = initState
  hasNextPage: boolean = true

  constructor(props) {
    super(props)
    this.state.data = this.props.initData || []
    this.state.current = this.props.initPage || 1
  }

  async loadMore() {
    const {current, data} = this.state
    this.setState({loading: true})
    const result = await this.props.loadMore(current + 1)
    if (typeof result === 'undefined') {
      // empty ,such as login required
    } else if (result.error) {
      // error
    } else {
      this.hasNextPage = result.data.length === this.props.perPage
      this.setState({data: [...data, ...result.data], current: current + 1})
    }

    this.setState({loading: false})
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initData) {
      this.setState({data: nextProps.initData})
    }
  }

  handleScroll = (): void => {
    if (!this.hasNextPage || this.state.loading || !isPaddingBottom()) {
      return
    }
    this.loadMore().then(() => {
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this), false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this), false)
  }

  render() {
    const {data, loading} = this.state
    return <React.Fragment>{this.props.children(data, loading)}</React.Fragment>
  }
}

export default InfiniteScroll

