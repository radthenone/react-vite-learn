import { logout } from './../../../redux/store'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

export const Logout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}