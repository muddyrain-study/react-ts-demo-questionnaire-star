import { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'

const Edit: FC = () => {
  const { loading, data } = useLoadQuestionData()

  return (
    <div>
      <p>State Page</p>
      {loading ? <p> loading</p> : <p>{JSON.stringify(data)}</p>}
    </div>
  )
}

export default Edit
