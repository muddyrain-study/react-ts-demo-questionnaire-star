import React, { FC, useState } from 'react'

import styles from './QuestionCard.module.scss'
import { Button, Divider, Space, Tag } from 'antd'
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
} from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'

type PropsType = {
  _id: string // 服务端 mongodb ，自动，_id 不重复
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
}

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const navigate = useNavigate()
  const { _id, title, createdAt, answerCount, isPublished, isStar } = props

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to={isPublished ? `/question/stat/${_id}` : '/question/edit/${_id}'}>
            <Space>
              {isStar && <StarOutlined style={{ color: 'red' }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? <Tag color="processing">已发布</Tag> : <Tag color="error">未发布</Tag>}
            <span>答卷: {answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider />
      <div className={styles['button-container']}>
        <div className={styles['left']}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => {
                navigate('/question/edit/' + _id)
              }}
            >
              编辑问卷
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              onClick={() => {
                navigate('/question/stat/' + _id)
              }}
              disabled={!isPublished}
            >
              数据统计
            </Button>
          </Space>
        </div>
        <div className={styles['right']}>
          <Space>
            <Button icon={<StarOutlined />} type="text" size="small">
              {isStar ? '取消标星' : '标星'}
            </Button>
            <Button icon={<CopyOutlined />} type="text" size="small">
              复制
            </Button>
            <Button icon={<DeleteOutlined />} type="text" size="small">
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
