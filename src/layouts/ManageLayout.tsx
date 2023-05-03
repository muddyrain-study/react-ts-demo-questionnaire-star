import { FC } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import style from './ManageLayout.module.scss'
import { Button, Space, Divider } from 'antd'
import { BarsOutlined, DeleteOutlined, PlusOutlined, StarOutlined } from '@ant-design/icons'
const ManageLayout: FC = () => {
  const navaite = useNavigate()
  const { pathname } = useLocation()
  return (
    <div className={style.container}>
      <div className={style.left}>
        <Space direction="vertical">
          <Button type="primary" size="large" icon={<PlusOutlined />}>
            新建问卷
          </Button>
          <Divider />
          <Button
            type={pathname.startsWith('/manage/list') ? 'default' : 'text'}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => {
              navaite('/manage/list')
            }}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/star') ? 'default' : 'text'}
            size="large"
            icon={<StarOutlined />}
            onClick={() => {
              navaite('/manage/star')
            }}
          >
            星标问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/trash') ? 'default' : 'text'}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => {
              navaite('/manage/trash')
            }}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={style.right}>{<Outlet />}</div>
    </div>
  )
}

export default ManageLayout
