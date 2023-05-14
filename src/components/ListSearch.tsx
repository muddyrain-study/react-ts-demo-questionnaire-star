import { Input } from 'antd'
import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { LIST_SEARCH_PARAM_KEY } from '../constant'

const ListSearch: FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const currentValue = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    setValue(currentValue)
  }, [searchParams])
  const [value, setValue] = useState('')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  const handleSearch = (value: string) => {
    navigate({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    })
  }
  return (
    <Input.Search
      value={value}
      //   size="large"
      allowClear
      onChange={handleChange}
      placeholder="输入关键字"
      onSearch={handleSearch}
      style={{ width: '200px' }}
    ></Input.Search>
  )
}
export default ListSearch
