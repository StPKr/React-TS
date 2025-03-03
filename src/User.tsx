interface Props {
    name: string,
    age: number,
    isMarried: boolean,
    country: Countries,
}

export enum Countries {
    Brazil = "Brazil",
    France = "France",
    India = "India",
    UnitedStates = "United States",
}

export const User = (props: Props) => {
    return (
        <div>
            <ul>
                <li>Name: {props.name}</li>
                <li>Age: {props.age}</li>
                <li>This person {props.isMarried ? "is married" : "is single"}</li>
                <li>Country of Origin: {props.country}</li>
            </ul>
        </div >
    )
}