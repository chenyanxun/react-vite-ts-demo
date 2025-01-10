interface ChildInterface {
  changeName: (name: string) => void
  changeAge: (age: number) => void
}
function Child({ changeName, changeAge }: ChildInterface) {
  const setName = () => {
    changeName('lisi')
  }
  const setAge = () => {
    changeAge(28)
  }
  return (
    <>
      <button onClick={setName}>change name</button>
      <button onClick={setAge}>change age</button>
    </>
  )
}

export default Child
