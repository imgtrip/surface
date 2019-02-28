import {List} from 'antd'
import * as React from 'react'
import ReviewItem from './ReviewItem'
import {Review} from '../../@types/data'
import {lang} from '../../constants/lang'

type Props = {
  reviews: Review[]
}

class ReviewsList extends React.Component<Props> {

  render() {
    const {reviews} = this.props
    return (
      <List
        itemLayout="horizontal"
        dataSource={reviews}
        locale={{emptyText: lang.no_content}}
        renderItem={review => <ReviewItem review={review}/>}
      />
    )
  }
}

export default ReviewsList