import React from 'react'
import { Card, Container,Grid, TextField , Button,InputLabel,MenuItem,FormControl,Select} from '@mui/material';
import './signup.css'
import '../Login/login.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function SignUp(){

    const navigate = useNavigate()

    const [data,setData] = React.useState({
        isLoggedIn: false,
        username:'',
        email: '',
        role:'',
        password: '',
        confirmpassword: "",
        token: '',
        formType: 'signup'
    })

    console.log(data);

    const { username,email, password,confirmpassword,role,formType } = data

    function handleChange(event){
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name] : value
        }))
    }

    function handleSubmit(event){
        event.preventDefault();
            if(formType === 'signup'){
                    const formData = new FormData();
                    //domain ---------------  balajihouse
                    formData.append("email", email); 
                    formData.append("name", username);
                    formData.append("password", password);
                    formData.append("conf_password", confirmpassword);
                    formData.append("role", role);
              
                    axios.post('http://localhost:4000/signup', formData, {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        withCredentials: true
                    })
                    .then( response => {
                        console.log(response);
                        const { token } = response && response.token
                        setData({
                            'token': token
                        })
                        token && token.length > 10 && navigate("/login");
                    })
                    .catch(error => {
                      console.log(error);
                      if (error.response.status === 400){
                        alert('Please Enter Correct UserName or Password');
                      } else if (error.response.status === 404) {
                        alert('The Requested URL/badpage was not found on this server.')
                      } else if (error.response.status === 500) {
                        alert('Something Went Wrong!')
                      }
                    });
                  }
        // navigate('/login')
    }

    return(
        <>
        <div className='main-div'>
            <Container maxWidth="sm">
                <div  style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',width:'100%'}}>
                    <Card elevation={5} style={{width:'100%'}}>
                        <Grid item container xs={12} >
                            {/* <Grid item xs={6}>
                                <div className='login-background'>
                                </div>
                            </Grid> */}
                            <Grid item xs={12} style={{padding: '20px'}}>
                                <Grid item xs={12} style={{textAlign:'center'}}>
                                    <h2>Sign Up</h2>
                                </Grid>
                                <Grid item xs={12} style={{display:'flex',justifyContent:'center'}}>
                                    <form onSubmit={handleSubmit} >
                                    <div style={{maxWidth: '500px'}}>
                                        <div style={{display:'flex',justifyContent:'center',width:'100% '}}>
                                            <TextField 
                                                fullWidth
                                                type="text"
                                                className='text-input' 
                                                variant='filled' 
                                                label="Username" 
                                                placeholder='Enter UserName' 
                                                name="username" 
                                                value={username}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={role}
                                                    name="role"
                                                    label="Role"
                                                    onChange={handleChange}
                                                >
                                                <MenuItem value="student">Student</MenuItem>
                                                <MenuItem value="faculty">Faculty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
                                            <TextField 
                                                fullWidth
                                                type="email"
                                                className='text-input' 
                                                variant='filled' 
                                                label="email" 
                                                placeholder='Enter Email' 
                                                name="email" 
                                                value={email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
                                            <TextField 
                                                fullWidth
                                                type="password"
                                                className='text-input' 
                                                variant='filled' 
                                                label="Password" 
                                                placeholder='Enter Password' 
                                                name="password" 
                                                value={password}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
                                            <TextField 
                                                fullWidth
                                                type="password"
                                                className='text-input' 
                                                variant='filled' 
                                                label="confirm Password" 
                                                placeholder='Confirm Password' 
                                                name="confirmpassword" 
                                                value={confirmpassword}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
                                            Already Have an Account ?<Link to='/login' style={{marginLeft: "5px"}}> Sign In</Link>
                                        </div>
                                        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
                                            <Button type='submit' variant='contained' className='login-btn'>Sign Up</Button>
                                        </div>
                                    </div>
                                    </form>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </div>
            </Container>
        </div>
        </>
    )
}

export default SignUp;