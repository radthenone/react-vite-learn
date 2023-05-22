import { FormEvent, useState } from "react";
import { useNavigate} from "react-router-dom";
import { useDispatch} from "react-redux";
import sha256 from 'crypto-js/sha256';
import { login } from './../../../redux/store'
import { getUserByEmail } from "../data/users";

export const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = async (event: FormEvent) => {
        event.preventDefault()
        try {
            const user = await getUserByEmail({ email });
            if (user.email === email) {
                const hashedPassword = sha256(password).toString();
                if (user.password === hashedPassword) {
                    dispatch(login({
                        username: user.username,
                        age:user.age,
                        email,
                        password: hashedPassword
                    }));
                    navigate('/');
                } else {
                    setError("Invalid password");
                    console.log("Invalid password");
                }
            } else {
                setError("User not found");
                console.log("User not found");
            }
        } catch (error) {
            setError(`${(error as Error).message}`);
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "10px"}}>
            <h2>Login panel</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {error && <p>{error}</p>}
            <button type={"submit"}>Login</button>
        </form>
    )
}
