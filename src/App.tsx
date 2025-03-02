import './App.css'
import { Person } from './Person'

function App() {

  return (
    <>
      <Person name={"Pesho"} age={22} isMarried={false} />
      <Person name={"Collin"} age={24} isMarried={true} />
      <Person name={"Marie"} age={29} isMarried={false} />
    </>
  )
}

export default App
