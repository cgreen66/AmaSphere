import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import styles from './SignupForm.module.css';
import amazonLogo from '/Users/christopher/AmaSphere/amazonlogo.png'
import AuthFooter from '../Navigation/AuthFooter';

function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Navigate to="/" replace={true}/>;

  const handleDemoLogin = (e) => {
    e.preventDefault();
    const demoUser = { credential: 'demo@user.io', password: 'password' };
    console.log("Demo user object:", demoUser);

    dispatch(sessionActions.login(demoUser))
      .catch(async (res) => {
        let data;
        try {
          data = await res.json();
        } catch {
          data = { errors: [await res.text()] }; 
        }
        setErrors(data.errors || [res.statusText]);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ name, email, password }))
      .catch(async (res) => {
        let data;
        try {
          data = await res.json();
        } catch {
          data = { errors: [await res.text()] }; 
        }
        setErrors(data.errors || [res.statusText]);
      });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className={styles.signupPageContainer}>
      <Link to="/"> 
        <img src={amazonLogo} alt="Amazon Logo" className={styles.amazonLogo} />
      </Link>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
        
        <h2 className={styles.formTitle}>Create account</h2>
        <ul className={styles.errorList}>
          
          {errors.map((error) => <li key={error} className={styles.errorItem}>{error}</li>)}
          
        </ul>
        
        <div className={styles.inputContainer}>
          <label className={styles.label}>Your name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First and last name"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Re-enter password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>Continue</button>
        <button type="button" className={styles.button} onClick={handleDemoLogin}>
    Demo Login
  </button>
        <p className={styles.footerText}>
          By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>
        <p className={styles.footerLogin}>
          Already have an account? <a href="/login">Sign in</a> | <
a href="#">Buying for work? Create a free business account</a>
</p>
</form>
</div>
<AuthFooter/>
</div>
);
}

export default SignupForm;