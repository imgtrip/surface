import * as React from 'react'
import {List, Icon} from 'antd'
import ImageCard from '../Cards/ImageCard'
import Button from 'antd/lib/button/button'
import {lang} from '../../constants/lang'
import {Image, Review} from '../../@types/data'
import {showUser} from '../../service/link'
import {updateReviewOpinion} from '../../api/review'
import {ReviewOpinions} from '../../../pb/imgtrip_pb'
import {RootState} from '../../redux'
import {connect} from 'react-redux'
import {filter} from 'lodash'

interface Props {
  review: Review
}

interface InjectedProps extends Props {
  images: Image[]
}

class ReviewItem extends React.Component<Props> {

  state = {
    opinion: ReviewOpinions.UNKNOWN,
  }

  constructor(props) {
    super(props)
    this.state.opinion = props.review.opinion
  }

  get getProps() {
    return this.props as InjectedProps
  }

  get isAgree() {
    return this.state.opinion === ReviewOpinions.AGREE
  }

  get isDisagree() {
    return this.state.opinion === ReviewOpinions.DISAGREE
  }

  onAgreeClick() {
    this.request(this.props.review.id, ReviewOpinions.AGREE)
  }

  onDisagreeClick() {
    this.request(this.props.review.id, ReviewOpinions.DISAGREE)
  }

  request(id: number, opinion: ReviewOpinions) {
    const that = this
    const opinionAdapted = opinion === this.state.opinion ? ReviewOpinions.UNKNOWN : opinion
    updateReviewOpinion(id, opinionAdapted)
      .then(() => {
        that.setState({opinion: opinionAdapted})
      })
      .catch(() => {
      })
  }


  image(id: number) {
    const len = this.getProps.images.length
    for (let i = 0; i < len; i++) {
      const current = this.getProps.images[i]
      if (current && current.id === id) {
        return current
      }
    }

    return null
  }

  render() {
    const {review} = this.props
    const {reviewCategory, user, closed, agreeCount, disagreeCount} = review
    const image = this.image(review.image.id)
    return (
      <List.Item style={{width: '100%'}} className={'review-item'}>
        <div className="item-left">{image ? <ImageCard image={image}/> : null}</div>
        <div className="item-right">
          <div className={'review-item-operation-container'}>
            <div className="op-row">
              <span className={'gutter'}><Icon type="user"/></span>
              发起者 <a href={showUser(user.id)}>{user.name}</a>
            </div>
            <div className="op-row">
              <span className={'gutter'}><Icon type="flag"/></span>
              事项 {reviewCategory.name}
            </div>
            <div className="op-row">
              <span className={'gutter'}> <Icon type="edit"/></span>
              内容 <b>{review.content}</b>
            </div>

            <div className="op-row">
              <span className={'gutter'}> <Icon type="clock-circle-o"/></span>
              结束时间 {review.endAt}
            </div>
            {closed ? <div className="op-row">
              <span className={'gutter'}> <Icon type="stop"/></span>
              已结束 <b>{agreeCount}</b>票同意 <b>{disagreeCount}</b>票反对
            </div> : null}

            <div className="op-row op-buttons">
              <Button.Group>
                <Button
                  disabled={closed}
                  type={this.isAgree ? 'primary' : 'default'}
                  onClick={this.onAgreeClick.bind(this)}>
                  <Icon type={this.isAgree ? 'check-circle' : 'check'}/>
                  {lang.review.agree}
                </Button>
                <Button
                  disabled={closed}
                  type={this.isDisagree ? 'danger' : 'default'}
                  style={this.isDisagree ? {
                    color: '#fff',
                    backgroundColor: '#ff4d4f',
                    borderColor: '#ff4d4f',
                  } : {}}
                  onClick={this.onDisagreeClick.bind(this)}>
                  {lang.review.disagree}
                  <Icon type={this.isDisagree ? 'close-circle' : 'close'}/>
                </Button>
              </Button.Group>
            </div>
          </div>
        </div>
        <style jsx global>{`
        .review-item .gutter{
         margin-right:0.5em;
        }
        .review-item .op-row{
          margin-bottom:0.5em;
        }
        .review-item .ant-row{
            margin: auto;
        }
        .review-item .review-item-operation-container{
          border:1px solid #e8e8e8;
          padding:1em;
        }
        .review-item .op-buttons{
          text-align:center;
        }
        .review-item .item-left{
          width:40%;
          margin-left:5%
        }
        .review-item .item-right{
          width:40%;
         margin-left:10%
        }
        `}</style>
      </List.Item>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    images: state.images.data,
  }
}


export default connect(mapStateToProps)(ReviewItem)