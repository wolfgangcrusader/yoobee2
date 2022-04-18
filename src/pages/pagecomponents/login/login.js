import styles from "./login.module.css";
import { useState } from "react";
import axios from "axios";

export default function LoginComponent() {
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [regusername, SetRegUsername] = useState("");
  const [regemail, SetRegEmail] = useState("");
  const [regpassword, SetRegPassword] = useState("");

  const [form, SetForm] = useState(1);

  const LoginFormSet = () => {
    SetForm(1);
  };
  const RegFormSet = () => {
    SetForm(2);
  };

  function NavigateHome() {
    if (
      username === "admin" &&
      email === "admin@mail.com" &&
      password === "admin"
    ) {
      window.location.href = "/";
      axios.post("/loggedin" , {
        token: "loggedin",
        username: username,
        email: email,
      })
    } else if (
      username === regusername ||
      email === regemail ||
      password === regpassword
    ) {
      window.location.href = "/";
    } else {
      alert("incorrect credentials. please try again.");
    }
  };

  

  return (
    <div className={styles.loginwrapper}>
      <div className={styles.leftcolumn}></div>
      <div className={styles.rightcolumn}>
        <h1>Cider Account Portal</h1>
        <div className={styles.form}>
          {form === 1 && (
            <div className={styles.loginform}>
              <div className={styles.formbuttons}>
                <button onClick={LoginFormSet} className={styles.loginlogin}>
                  Login
                </button>
                <button onClick={RegFormSet} className={styles.loginreg}>
                  Register
                </button>
                <div className={styles.formbuffer}></div>
              </div>
              <input
                type="username"
                placeholder="Username"
                onChange={(e) => SetUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => SetEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => SetPassword(e.target.value)}
              />
              <div>
                No Account? <button onClick={RegFormSet}>Create One</button>
              </div>
              <button className={styles.submit} onClick={NavigateHome}>
                Submit
              </button>
            </div>
          )}

          {form === 2 && (
            <div className={styles.registerform}>
              <div className={styles.formbuttons}>
                <button onClick={LoginFormSet} className={styles.reglogin}>
                  Login
                </button>
                <button onClick={RegFormSet} className={styles.regreg}>
                  Register
                </button>
                <div className={styles.formbuffer}></div>
              </div>
              <input
                type="username"
                placeholder="Username"
                onChange={(e) => SetRegUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => SetRegEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => SetRegPassword(e.target.value)}
              />
              <input type="password" placeholder="Confirm Password" />
              <div>
                Already have an Account?{" "}
                <button onClick={LoginFormSet}>Login</button>
              </div>
              <button className={styles.submit}>Submit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
