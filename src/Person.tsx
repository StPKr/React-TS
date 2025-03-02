import { useState } from "react"

interface Person {
    name: string,
    age: number,
    isMarried: boolean,
}

export const Person = (props: Person) => {
    const [isShowInfo, setShowInfo] = useState<boolean | null>(false);

    const toggleInfo = () => {
        setShowInfo((prev) => !prev)
    };
    return <div>
        {isShowInfo && (
            <p>
                Name: {props.name}  Age: {props.age} <br></br> This person {props.isMarried ? "is married" : "is single"}
            </p>
        )}
        <button onClick={toggleInfo}>Toggle Info</button>
    </div>
}