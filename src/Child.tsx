interface ChildInterface {
  changeName: (name: string) => void
  changeAge: (age: number) => number
}

function Child({ changeName, changeAge }: ChildInterface) {
  const setName = () => {
    changeName('lisi')
  }
  const setAge = () => {
    const age = 28
    const age2 = changeAge(age)
    console.log('age==', age2)
  }
  return (
    <>
      <button onClick={setName}>change name</button>
      <button onClick={setAge}>change age</button>
    </>
  )
}

export default Child
