import { useState } from 'react'
import Child from './Child'
function App() {
  const [name, setName] = useState<string>('zhangsan')
  const [age, setAge] = useState<number>(18)
  return (
    <>
      <div>name:{name}</div>
      <div>age: {age}</div>
      <Child
        changeName={(name: string) => setName(name)}
        changeAge={(age: number) => setAge(age)}
      />
    </>
  )
}

export default App
