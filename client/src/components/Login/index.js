import React, { useState } from "react";
import { Button, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom';

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="Login">
        <Router>
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
                <FormLabel>Email</FormLabel>
                <FormControl
                autoFocus
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
                <FormLabel>Password</FormLabel>
                <FormControl
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                />
            </FormGroup>
            <Button block bssize="large" disabled={!validateForm()} type="submit">
                Login
            </Button>
            <p>Don't have an account? Sign up.</p>
            <Button href="/Signup"block bsSize="large" disabled={!validateForm()} type="submit">
                Signup
            </Button>
            </form>
        </div>
        </Router>
        </div>
    );
}