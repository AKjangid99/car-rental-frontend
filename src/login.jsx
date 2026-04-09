import "./login.css";

function Form(){
    return (
        <div className="logPage">
            <h1>Login</h1>
            <form className="log">
                <label htmlFor="email">Email Adress</label>
                <input id="email" placeholder="Enter your email" type="email" className="in"></input>
                <br></br>
                  <label htmlFor="pass">Password</label>
                <input id="pass" placeholder="Enter your password" type="password"className="in"></input>
                <br></br>
                <div className="checkbox-container">
                        <input type="checkbox" id="remember" />
                       <label htmlFor="remember">Remember Me</label>
                </div>

                 <button>Login</button>
                 <br></br>
                 <br></br>
                 <p>Don't have account? <a href="#">Sign Up</a></p>
            </form>
        </div>
    );
}
export default Form;