import { useState } from 'react'
import Child from './Child'
function App() {
  const [name, setName] = useState<string>('zhangsan')
  const [age, setAge] = useState<number>(18)
  const getAge = (age: number) => {
    setAge(age)
    return age
  }
  return (
    <>
      <div>name:{name}</div>
      <div>age: {age}</div>
      <Child changeName={(name: string) => setName(name)} changeAge={getAge} />
    </>
  )
}

export default App
