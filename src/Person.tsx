import { useContext, useState } from "react"
import { UserContext } from "./UserContextProvider";

interface Person {
    name: string,
    age: number,
    isMarried: boolean,
}

export const Person = (props: Person) => {
    const [isShowInfo, setShowInfo] = useState<boolean | null>(false);

    const [personBio, setPersonBio] = useState<string | null>(null);

    const toggleInfo = () => {
        setShowInfo((prev) => !prev)
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { //*event needs a predefined react element and it needs the type of element in this case input as type
        setPersonBio(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { //*example for form elements/events
        event.preventDefault();

    }

    // const { users, addUser, updateUser, deleteUser } = useContext(UserContext);

    return <div>
        {isShowInfo && (<>
            <p>
                Name: {props.name}  Age: {props.age} <br></br> This person {props.isMarried ? "is married" : "is single"}
            </p>
            <p>{props.name} Bio: {personBio === null ? "No Bio available" : personBio}</p>
            <input onChange={handleChange} />
        </>
        )}
        <button onClick={toggleInfo}>Toggle Info</button>
    </div>
}