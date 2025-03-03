interface Props {
    name: string,
    age: number,
    isMarried: boolean,
}

export const User = (props: Props) => {
    return (
        <div>
            <ul>
                <li>Name: {props.name}</li>
                <li>Age: {props.age}</li>
                <li>This person {props.isMarried ? "is married" : "is single"}</li>
            </ul>
        </div >
    )
}