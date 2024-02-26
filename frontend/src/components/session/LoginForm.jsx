// LoginForm.js
import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import styles from './LoginForm.module.css'; 
import amazonLogo from '/Users/christopher/AmaSphere/amazonlogo.png'
import AuthFooter from '../Navigation/AuthFooter';

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
        const data = res.json ? await res.json() : await res.text();
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
            {errors.map((error) => <li key={error}>{error.message}</li>)}
          </ul>
          <div className={styles.inputContainer}>
            <label className={styles.label}>
              Email or mobile phone number
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                className={styles.input}
              />
            </label>
          </div>
          <div className={styles.inputContainer}>
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
          </div>
          <button type="submit" className={styles.continueButton}>Continue</button>
          <p className={styles.footerText}>
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
          </p>
        </form>
        </div>
      <div className={styles.newToAmazonContainer}>
        <div className={styles.separator}>
          <hr className={styles.line} />
          <div className={styles.newLineText}>New to Amazon?</div>
          <hr className={styles.line} />
        </div>
        <Link to="/signup" className={styles.createAccountLink}>
          <button className={styles.createAccountButton}>Create your Amazon account</button>
        </Link>
      </div>
      <AuthFooter />
    </div>
  );
}

export default LoginForm;
