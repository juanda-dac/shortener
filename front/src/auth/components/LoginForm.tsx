import { useEffect, useState } from "react";
import { useUserActions } from "../hooks/useUserActions"
import { useAppSelector } from "../../shared/hooks/store";

import CustomContainer from "../../shared/libs/CustomContainer";
import { UserModel } from "../models/UserModel";
import { Link, useNavigate } from "react-router-dom";
import { swalError } from "../../shared/libs/core/alerts";

export default function LoginForm(){

    const { loginUserAction } = useUserActions();
    const { user, error:errorUser, errorMessage, loading } = useAppSelector(({ user }) => user);
    const [userForm, setUserForm] = useState<UserModel>({
        email:"",
        password:""
    });
    const navigate = useNavigate()

    const handleChangeField = (e:any) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserForm({
            ...userForm,
            [name]: value
        })
    }

    const handleLogin = () => {
        if(userForm.email === "" || userForm.password === "") return swalError("You must fill the required fields");
        loginUserAction(userForm);

        setUserForm({
            email:"",
            password:""
        })
    }

    useEffect(()=>{
        if(errorUser) swalError(errorMessage);
    }, [errorUser])

    useEffect(() => {
        if(user?.id !== "") navigate("/");
    }, [user]);

    return (<>
    <CustomContainer>
        <div className="p-2 w-full h-full max-w-[412px] max-h-[442px]">
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                <h2 className="text-center font-bold text-[32px]">Login</h2>
                <div className="w-full">
                    <input onChange={handleChangeField} value={userForm.email} className="w-full p-2 bg-amber-100 rounded-xl text-amber-800 outline-none font-light placeholder:text-amber-800" type="email" name="email" placeholder="Enter your email (*)"/>
                </div>
                <div className="w-full">
                    <input onChange={handleChangeField} value={userForm.password} className="w-full p-2 bg-amber-100 rounded-xl text-amber-800 outline-none font-light placeholder:text-amber-800" type="password" name="password" placeholder="Enter your password (*)" autoComplete="off"/>
                </div>
                <div className="w-full">
                    <button onClick={handleLogin} className="w-full p-2 bg-amber-800 text-amber-100 rounded-xl font-bold outline-none" >Login</button>
                </div>
                <div className="w-full text-center">
                    <Link to="../register" className="text-amber-800 underline">¿No tienes una cuenta?</Link>
                </div>
            </form>
        </div>
    </CustomContainer>
    </>)
}