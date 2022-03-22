import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { showErrMsg, showSuccessMsg } from "./notification/Notification";
import { useNavigate } from "react-router-dom";

import "../Login/Llogin.css";
const initialState = {
	name: "",
	email: "",
	password: "",
	conf_password: "",
	role: "",
	err: "",
	success: "",
};

function Register() {
    const navigate = useNavigate();
	const [user, setUser] = useState(initialState);

	const { name, email, password, conf_password, role, err, success } = user;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value, err: "", success: "" });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("http://localhost:4000/signup", {
				name,
				email,
				password,
				conf_password,
				role,
			});
			setUser({ ...user, err: "", success: res.data.message });

			// setTimeout(() => {
			//     this.router.navigate(['/login']);
			// }, 5000);
			setTimeout(() => {
				navigate("/login");
			}, 2000);
		} catch (err) {
			err.response.data.message &&
				setUser({ ...user, err: err.response.data.message, success: "" });
			console.log(err);
			if (err.response.status === 400) {
				alert("Please Enter Correct UserName or Password");
			} else if (err.response.status === 404) {
				alert("The Requested URL/badpage was not found on this server.");
			} else if (err.response.status === 500) {
				alert("Something Went Wrong!");
			}
		}
	};

	return (
		<div className="login_page">
			<h2>Register</h2>
			{err && showErrMsg(err)}
			{success && showSuccessMsg(success)}

			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						placeholder="Enter your name"
						id="name"
						value={name}
						name="name"
						onChange={handleChangeInput}
					/>
				</div>

				<div>
					<label htmlFor="email">Email Address</label>
					<input
						type="text"
						placeholder="Enter email address"
						id="email"
						value={email}
						name="email"
						onChange={handleChangeInput}
					/>
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						placeholder="Enter password"
						id="password"
						value={password}
						name="password"
						onChange={handleChangeInput}
					/>
				</div>

				<div>
					<label htmlFor="conf_password">Confirm Password</label>
					<input
						type="password"
						placeholder="Confirm password"
						id="conf_password"
						value={conf_password}
						name="conf_password"
						onChange={handleChangeInput}
					/>
				</div>

				<div>
					<label htmlFor="role">Role</label>
					<input
						type="text"
						placeholder="role"
						id="role"
						value={role}
						name="role"
						onChange={handleChangeInput}
					/>
				</div>

				<div className="row">
					<button type="submit">Register</button>
				</div>
			</form>

			<p>
				Already an account? <Link to="/login">Login</Link>
			</p>
		</div>
	);
}

export default Register;
