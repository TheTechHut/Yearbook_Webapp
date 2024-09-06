import { useState} from "react"; 
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import '../styles/Form.css';
// import LoadingIndicator from "./LoadingIndicator";


function Form({route, method}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [Loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === 'login' ? 'Login' : 'Register';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await api.post(route, {username, password});
            if (method === 'login') {
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
                navigate('/');
            } else{
                navigate('/login');
            }
        } catch (error) {
            alert(error);
        } finally {
        setLoading(false);
        }
    }

    return (
    <form onSubmit={handleSubmit} className="form-container">
        <h1>{name}</h1>
        <input className="form-input" type="text" placeholder="Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="form-input" type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="form-button" type="submit">{name}</button>
        {/* {Loading && <LoadingIndicator />} */}
    </form>
    ) 
}

export default Form;