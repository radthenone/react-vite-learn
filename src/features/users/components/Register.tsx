import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userCreate } from '../data/users';
import { useNavigate } from 'react-router-dom';
import { FormEvent, useRef } from 'react';
import sha256 from 'crypto-js/sha256';

type UserDataType = {
    username: string;
    email: string;
    age: number,
    password: string,
    confirmPassword: string
};

export const Register = () => {
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const queryClient = useQueryClient();
    const mutateRegister = useMutation(userCreate, {
        onSuccess: (data: UserDataType) => {
            queryClient.setQueryData(['user'], data);
            navigate(`/`);
        }
    });
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const userData = {
            username: usernameRef.current?.value || "",
            email: emailRef.current?.value || "",
            age: parseInt(ageRef.current?.value || "0"),
            password: sha256(passwordRef.current?.value || "").toString(),
            confirmPassword: sha256(confirmPasswordRef.current?.value || "").toString(),
        }
        console.log(userData)
        await mutateRegister.mutateAsync(userData)
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px"}}>
            <h2>Register Panel</h2>
            <input type="text" ref={usernameRef} placeholder="Username" required />
            <input type="email" ref={emailRef} placeholder="Email" required />
            <input type="number" ref={ageRef} placeholder="Age" required />
            <input type="password" ref={passwordRef} placeholder="Password" required />
            <input type="password" ref={confirmPasswordRef} placeholder="Confirm Password" required />
            <button type={"submit"}>Register</button>
        </form>
    )
}