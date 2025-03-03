import './App.css'
import { Person } from './Person'
import { User, Countries } from './User'
import { UserProvider } from './UserContextProvider'

function App() {

  return (
    <UserProvider>
      <Person name={"Pesho"} age={22} isMarried={false} />
      <User name={"Gosho"} age={20} isMarried={true} country={Countries.Brazil} />
    </UserProvider>
  )
}

export default App
