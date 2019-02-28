import * as React from 'react'
import {ReviewsOrder, ReviewsRes, ScoreLogOrders, ScoreLogsRes} from '../pb/imgtrip_pb'
import {println} from '../src/service/system'
import {setTokenHash} from '../src/service/token'
import {LIST_PER_PAGE} from '../src/constants/conf'
import {scoreLogs} from '../src/api/user'


class ScoreLogs extends React.Component {

  static async getInitialProps({token, req}) {
    setTokenHash(token)
    const order = req.query.order || ScoreLogOrders.NEW

    let logs = []
    await scoreLogs(0, LIST_PER_PAGE, order)
      .then((res: ScoreLogsRes) => {
        logs = res.toObject().itemsList
      })
      .catch((err) => {
        println(err)
      })

    return {logs, order}
  }


  render() {
    return (
      <div>s</div>
    )
  }
}