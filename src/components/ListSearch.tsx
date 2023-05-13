import { Input } from 'antd'
import React, { ChangeEvent, FC, useState } from 'react'

const ListSearch: FC = () => {
  const [value, setValue] = useState('')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  const handleSearch = (value: string) => {
    console.log(value)
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
