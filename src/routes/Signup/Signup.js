import { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { BACKEND_URL } from "../../config.example";
import { useNavigate } from "react-router-dom";
const Signup = () => {
	const [password, setPassword] = useState();
	const [username, setUsername] = useState();
	const navigator = useNavigate();

	const createAccount = async()=>{
		try{
			const body = {
				username:username,
				password:password,
			};
			const resp = await axios.post(BACKEND_URL+"/signup",body);
			if (resp.status != 200){
				console.log("Error loggin in ");
			}
			console.log(resp);
			navigator("/");
		}catch(e){
			console.log("oopsies");
		}
				
	};

	return (
		<div className="LoginCard">
			<div>
				<p>Enter username</p>
				<input onChange={(e)=>setUsername(e.target.value)}/>
			</div>
			<div>
				<p>Enter password</p>
				<input onChange={(e)=>setPassword(e.target.value)}/>
			</div>
			<button onClick={()=>createAccount()}>Submit</button>
		</div>
	);
};

export default Signup;