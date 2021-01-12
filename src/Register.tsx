
import { Button, Card, TextField } from "@material-ui/core";
import React from "react";

const Register = () => {

    const signUp = () => {
        console.log("BEHIND")
        const requestOptions = {
            crossDomain:true,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'test', email: 'email', password: 'word' })
        };
        fetch('http://127.0.0.1:5000/signup', requestOptions)
            .then(response => response.json());
    
    }

    return (
        <>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', backgroundColor: '#303F9F', height: 'calc(100vh - 58.63px)'}}>
                <Card style={{ }}>
                    <form noValidate autoComplete="off">
                        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: '4rem' }}>
                            <h2 style={{margin: 10}}>Register</h2>
                            <TextField id="standard-basic" label="Username" style={{margin: 10}}/>
                            <TextField id="standard-basic" label="E-Mail" style={{margin: 10}}/>
                            <TextField id="standard-password-input" label="Password" type="password" style={{margin: 10}}/>
                            <Button variant="contained" color="primary" style={{margin: 10}} onClick={() => signUp()}>
                                Sign Up
                                </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </>
    );
}

const styles = {targetDiv: { height: 'calc(100vh - 58px)'}}

export default Register;
