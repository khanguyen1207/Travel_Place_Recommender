var React = require('react')

function LoginForm(props){
  return (
    <div id="logincss" className="container">
        <div id="sub1" className="top animated fadeInDown">
            <h1 id="titlelogin"><a href="index.html" id="logo"> Traview</a></h1>
        </div>
        <div id="sub2" className="login-box animated fadeInUp">
            <div id="sub2-1" className="box-header">
                <h2 id="titlelogin2" >Log In</h2>
            </div>
            <form>
                <label htmlFor="username">Username</label>
                <br/>
                <input onChange={props.onChangeUsername} type="text" id="username" name="username" />
                <br/>
                <label htmlFor="password">Password</label>
                <br/>
                <input onChange={props.onChangePassword} type="password" id="password" name="password" />
                <br/>
                <button onClick={props.handleLogin} >Sign In</button>
                <button onClick={props.toRegister} >Register</button>
            </form>

        </div>
    </div>
  )
}

module.exports = LoginForm
