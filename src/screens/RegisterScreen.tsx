import React from 'react'
import Container from '@mui/material/Container'
import { Avatar,Link , Box, CssBaseline, Typography, TextField, Grid, Button } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { NavLink } from 'react-router-dom'
import {  } from '@mui/icons-material'
type Props = {}

const RegisterScreen = (props: Props) => {
    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 8
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5" component={'h1'} color="secondary.main">
                    Sign Up
                </Typography>

                <Box component={'form'}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="firstname"
                                label="Firstname"
                                required
                                autoFocus
                                autoComplete='first-name'
                                fullWidth
                                error
                                helperText="Firstname is string and field is require"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="lastname"
                                label="Lastname"
                                required
                                autoComplete='last-name'
                                fullWidth
                                error
                                helperText="Lastname is string and field is require"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="email"
                                type="email"
                                label="Email Address"
                                required
                                autoComplete='email'
                                fullWidth
                                error
                                helperText="Email is string and field is require"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="password"
                                type="pasword"
                                label="Password"
                                required
                                autoComplete='password'
                                fullWidth
                                error
                                helperText="password is string and field is require"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="confirmPassword"
                                type="pasword"
                                label="Confirm Password"
                                required
                                autoComplete='confirmpassword'
                                fullWidth
                                error
                                helperText="Confirm password is string and field is require"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <NavLink to="/login">
                                <Link variant="body2">Already have an account? Sign in</Link>
                            </NavLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default RegisterScreen