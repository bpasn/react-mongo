import {
    Avatar, Box, Link, Button, Container,
    CssBaseline, TextField, Typography, Grid, Alert, CircularProgress,
} from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import { signIn } from '../redux/action/user.action'

const LoginScreen = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { userInfo, loading, error } = useAppSelector(state => state.userSignIn)
    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };
        const email = target.email.value; // typechecks!
        const password = target.password.value; // typechecks!    

        dispatch<any>(signIn({ email, password }))
    }
    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [userInfo, navigate, dispatch])
    return (
        <Container>
            <CssBaseline />
            <Box sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: 'center'
            }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography variant="h5" component='h1' sx={{ color: "secondary.main" }}>
                    Sign in
                </Typography>

                <Box component={"form"} onSubmit={handleSubmit}>
                    {
                        error?.status === false
                        && (
                            <Alert severity="error" sx={{ width: '100%', alignItems: 'center' }}>
                                {error.message}
                            </Alert>
                        )
                    }
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id="email"
                        name="email"
                        label="Email address"
                        variant='outlined'
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        variant='outlined'
                        autoComplete="password"
                        type="password"
                    />

                    <Button
                        type='submit'
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {loading ? <CircularProgress 
                        size={"1.875rem"}
                        sx={{
                            color:"secondary.contrastText"
                        }} />
                            : "Sign In"}
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <NavLink to={'/forgot-password'}>
                                Forgot password?
                                {/* <Link variant="body2">Forgot password?</Link> */}
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to={'/register'}>
                                {/* <Link variant="body2">
                                
                            </Link> */}
                                Don't have an account? Sign Up
                            </NavLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container >
    )
}

export default LoginScreen