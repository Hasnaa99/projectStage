import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../Axios/axios';
import { styled } from 'styled-components';
const Container = styled.div`
    background-color: #e8ffe4;
    padding: 20px;
    width: 48%;
    margin: 50px;
    margin-top :110px;
    border-radius: 15px;
`;

const Button = styled.button`
    background-color: #23906b;
    color: white;
    &:hover {
        background-color: #1c644c;
        color: white;
    }
`;

const H1 = styled.h1`
    color: #23906b;
    outline: none;
    font-size: 25px;
    margin-bottom: 20px;
`;
const Span = styled.span`
color:#be1614;
margin:10px;
`
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ errorRequis : '', error: '' });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password ) {
            setErrors({ errorRequis: 'Veuillez remplir tous les champs.' });
            return;
        }



        try {
            const response = await axiosClient.post('/api/login', {
                email: email,
                password: password
            });
            if (response.data.token) {
                const token = response.data.token;

                const userType = response.data.user_type;
                axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                if (userType === 'admin') {
                    navigate('/administrative/dashboard');
                    localStorage.setItem('admin',JSON.stringify(response.data.admin))
                } else if (userType === 'employe') {
                    navigate('/');
                    localStorage.setItem('employe',JSON.stringify(response.data.employe))
                }
            }
        } catch (error) {
            console.log(error)
            if (error.response && error.response.data) {
                const errorData = error.response.data;
                setErrors({
                    error: errorData.error ? errorData.error : ''
                });
            }
        }
    };
    return (
        <Container className='mx-auto'>


            <div className='container'>
                <form onSubmit={handleSubmit} className='w-50 mx-auto' method='POST'>
                    <img src='Images/logo.svg' className=' mx-auto d-block mb-3' />
                    <H1 className='text-center'>Se connecter</H1>
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" onChange={e => setEmail(e.target.value)} />
                        
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Mot de passe</label>
                        <input type="password" className="form-control" id="password" onChange={e => setPassword(e.target.value)} />
                        
                    </div>
                    {errors.error && <Span>{errors.error}</Span>}
                    {errors.errorRequis && <Span>{errors.errorRequis}</Span>}
                   
                    <div className='text-center mt-3'>
                        <Button type="submit" className="btn mb-4">Se connecter</Button>
                    </div>
                </form>
            </div>
        </Container>
    );
}
