import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const UserInfo: FC = () => {
  // 对于已经登录的用户显示 ---
  return (
    <>
      <Link to="/login">登录</Link>
    </>
  )
}
export default UserInfo
