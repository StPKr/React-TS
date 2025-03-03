import './App.css'
import { Person } from './Person'
import { User } from './User'
import { UserProvider } from './UserContextProvider'

function App() {

  return (
    <UserProvider>
      <Person name={"Pesho"} age={22} isMarried={false} />
      <User name={"Gosho"} age={20} isMarried={true} />
    </UserProvider>
  )
}

export default App
