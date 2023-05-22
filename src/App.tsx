import './App.css'
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Logout} from "./features/users/components/Logout";

function App() {
    const user = useSelector((state: any) => state.user.value)
    if (user.email !== "") {
        return (
            <>
                <p>Hello {user.username}</p>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/posts">Posts</NavLink>
                        </li>
                        <li>
                            <NavLink to="/posts/create">Create Post</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                    </ul>
                </nav>
                <Logout />
                <Outlet />
            </>
        )
    } else {
        return (
            <>
                <p>Hello {user.username}</p>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </>
        );

    }

}

export default App;