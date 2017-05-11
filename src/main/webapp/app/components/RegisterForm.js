var React = require('react')

function RegisterForm(props){
  return (
    <div id="logincss" className="container">
        <div id="sub1" className="top animated fadeInDown">
            <h1 id="titlelogin"><a href="index.html" id="logo"> Traview</a></h1>
        </div>
        <div id="sub2" className="login-box animated fadeInUp">
            <div id="sub2-1" className="box-header">
                <h2 id="titlelogin2" >Register</h2>
            </div>
            <form action="" method="">
                <label htmlFor="username">Username</label>
                <br/>
                <input type="text" id="username" name="username" />
                <br/>
                <label htmlFor="password">Password</label>
                <br/>
                <input type="password" id="password" name="password" />
                <br/>
                <button >Submit</button>
            </form>

        </div>
    </div>
  )
}

module.exports = RegisterForm
