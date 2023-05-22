import { useSelector } from "react-redux";

export const User = () => {
    const user = useSelector((state: any) => state.user.value)
    console.log(user)
    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {user.username}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}