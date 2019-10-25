import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import config from './firebaseAuth';

const firebaseApp = firebase.initializeApp(config);

class Login extends Component {

        userChanged(e) {
           //this.setState({ inputUser: e.target.value });
           console.log("user changed");
        } 
        passwordChanged(e) {
           // this.setState({ inputPass: e.target.value });
           console.log("password changed")
         } 


    nextPath(path) {
        console.log("nextpath");
        /*
        const { history } = this.props;
        if(this.state.password==this.state.inputPass && this.state.inputUser==this.state.nombre){ 
            history.push('/home');
        }else{
            alert("Contraseña erronea");
        }*/
      }                

    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
          } = this.props;

        return (
            <Card title="Bienvenido" style={{ width: 300 }}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {
                            user 
                            ? <p>Hello, {user.displayName}</p>
                            : <p>Please sign in.</p>
                        }
                        {
                            user
                            ? <Button onClick={signOut}>Sign out</Button>
                            : <Button onClick={signInWithGoogle}>Sign in with Google</Button>
                        }
                    </Form.Item>
                    <Form.Item>
                        <Input
                        onChange={this.userChanged}
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                        onChange={this.passwordChanged}
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>Remember me</Checkbox>
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => this.nextPath('/the/path') }>
                        Log in
                    </Button>

                    Or <a href="">register now!</a>
                    </Form.Item>
            </Form>
          </Card>

        )
    }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withRouter(withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(Login));
