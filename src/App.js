import Home from "./routes/Home/Home";
import Profile from "./routes/Profile/Profile";
import "./App.css";
import AskQ from "./routes/AskQ/AskQ";
import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login/Login";
import Signup from "./routes/Signup/Signup";import SearchAns from "./routes/SearchAns/SearchAns";


function App() {
	return (
		<div className='app-main'>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />}/>
			</Routes>
		</div>
	);
}

export default App;
