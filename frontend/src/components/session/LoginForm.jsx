// LoginForm.js

import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import styles from './LoginForm.module.css'; 
import amazonLogo from '/Users/christopher/AmaSphere/amazonlogo.png'; 

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  return (
    <div className={styles.loginPageContainer}>
      <Link to="/">
        <img src={amazonLogo} alt="Amazon Logo" className={styles.amazonLogo} />
      </Link>
      <div className={styles.loginContainer}>
        <h1 className={styles.formTitle}>Sign In</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <ul className={styles.errorList}>
            {errors.map((error) => <li key={error} className={styles.errorItem}>{error}</li>)}
          </ul>
          <label className={styles.label}>
            Email
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </label>
          <button type="submit" className={styles.button}>Log In</button>
          <p className={styles.footerText}>
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
          </p>
          <p className={styles.footerLogin}>
            Need help? <a href="/help">Visit the help center</a> | 
            Buying for work? <a href="/business">Shop on Amazon Business</a> | 
            New to Amazon? <a href="/signup">Create your Amazon account</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;