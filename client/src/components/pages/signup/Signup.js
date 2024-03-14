import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();


	const handleSubmit = async () => {
		try {
			const response = await axios.post('http://localhost:8000/api/register', {firstname, lastname, email, password} );
			if (response.status === 200) {
			alert('Account successfully created');
			navigate('/login');
			} else {
			  console.error('Unexpected status code:', response.status);
			}
		  } catch (error) {
			console.error('Signup error:', error.response.error);
		  }
		};
	

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="Firstname"
							name="email"
							onChange={(e) => setFirstname(e.target.value)}
							value={firstname}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastname"
							onChange={(e) => setLastname(e.target.value)}
							value={lastname}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password must contain special char, capital letter, and num"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							required
							className={styles.input}
						/>
						<button onClick={handleSubmit} className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;