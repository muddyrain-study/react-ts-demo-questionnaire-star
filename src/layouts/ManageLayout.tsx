import { FC } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import style from './ManageLayout.module.scss'
import { Button, Space, Divider, message } from 'antd'
import { BarsOutlined, DeleteOutlined, PlusOutlined, StarOutlined } from '@ant-design/icons'
import { createQuestionService } from '../services/question'
import { useRequest } from 'ahooks'
const ManageLayout: FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  // async function handleCreateClick() {
  //   setLoading(true)
  //   const data = await createQuestionService()
  //   const { id } = data || {}
  //   if (id) {
  //     navigate(`/question/edit/${id}`)
  //     message.success('创建成功')
  //   }
  //   setLoading(false)
  // }
  const { loading, run: handleCreateClick } = useRequest(createQuestionService, {
    manual: true,
    onSuccess(requestId) {
      navigate(`/question/edit/${requestId.id}`)
      message.success('创建成功')
    },
  })
  return (
    <div className={style.container}>
      <div className={style.left}>
        <Space direction="vertical">
          <Button
            type="primary"
            size="large"
            onClick={handleCreateClick}
            disabled={loading}
            icon={<PlusOutlined />}
          >
            新建问卷
          </Button>
          <Divider />
          <Button
            type={pathname.startsWith('/manage/list') ? 'default' : 'text'}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => {
              navigate('/manage/list')
            }}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/star') ? 'default' : 'text'}
            size="large"
            icon={<StarOutlined />}
            onClick={() => {
              navigate('/manage/star')
            }}
          >
            星标问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/trash') ? 'default' : 'text'}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => {
              navigate('/manage/trash')
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
