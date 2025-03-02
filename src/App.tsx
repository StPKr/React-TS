import './App.css'
import { Person } from './Person'

function App() {
  const fetchUser = () => ({ name: "Pesho", age: 22, isMarried: null });
  const userFetched = fetchUser();

  return (
    <>
      <Person name={"Pesho"} age={22} isMarried={false} />
      <Person name={"Collin"} age={24} isMarried={true} />
      <Person name={"Marie"} age={29} isMarried={false} />
      <Person name={userFetched.name} age={userFetched.age} isMarried={userFetched.isMarried} />
    </>
  )
}

export default App
