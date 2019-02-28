import * as React from 'react'
import {User} from '../../@types/data'

interface Props {
  user: User
}

class UserCard extends React.Component<Props> {

  render() {
    const {user} = this.props

    return (
      <div>
        <h1 style={{
          textAlign: 'center',
          fontSize: '80px',
          padding: '20px 50px 50px',
          textRendering: 'optimizeLegibility',
          letterSpacing: '0.1em',
          color: '#fff',
          backgroundColor: '#f1f1f1',
          textShadow: '1px 2px 1px #737272, 2px 4px 1px #767474, 3px 6px 1px #787777, 4px 8px 1px #7b7a7a, 5px 10px 1px #7f7d7d, 6px 12px 1px #828181, 7px 14px 1px #868585, 8px 16px 1px #8b8a89, 9px 18px 1px #8f8e8d, 10px 20px 1px #949392, 11px 22px 1px #999897, 12px 24px 1px #9e9c9c, 13px 26px 5px #a3a1a1, 14px 28px 5px #a8a6a6, 15px 30px 5px #adabab, 16px 32px 5px #b2b1b0, 17px 34px 5px #b7b6b5, 18px 36px 5px #bcbbba, 19px 38px 5px #c1bfbf, 20px 40px 5px #c6c4c4, 21px 42px 10px #cbc9c8, 22px 44px 10px #cfcdcd, 23px 46px 10px #d4d2d1, 24px 48px 10px #d8d6d5, 25px 50px 10px #dbdad9, 26px 52px 10px #dfdddc, 27px 54px 10px #e2e0df, 28px 56px 10px #e4e3e2',
          overflow: 'hidden',
          margin:0,
        }}>{user.name}</h1>
      </div>
    )
  }
}


export default UserCard