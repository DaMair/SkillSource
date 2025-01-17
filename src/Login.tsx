import { Button, Card, TextField } from "@material-ui/core";
import React from "react";

const Login = () => {

    return (
        <>
             <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', backgroundColor: '#303F9F', height: 'calc(100vh - 58.63px)'}}>
                <Card style={{ }}>
                    
                        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: '4rem' }}>
                            <h2 style={{margin: 10}}>Login</h2>
                            <TextField id="standard-basic" label="Username" style={{margin: 10}}/>
                            <TextField id="standard-password-input" label="Password" type="password" style={{margin: 10}}/>
                            <Button variant="contained" color="primary" style={{margin: 10}}>
                                Login
                            </Button>
                        </div>
                    
                </Card>
            </div>
        </>
    );
}

export default Login;
