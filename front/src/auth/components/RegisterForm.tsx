import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserActions } from "../hooks/useUserActions";
import CustomContainer from "../../shared/libs/CustomContainer";
import { useAppSelector } from "../../shared/hooks/store";
import { UserModel } from "../models/UserModel";
import { swalError, swalSuccess } from "../../shared/libs/core/alerts";
import { AuthService } from "../services/AuthService";

export default function RegisterForm(){

    // const { error:errorUser, errorMessage, loading } = useAppSelector(({ user }) => user);
    const [userForm, setUserForm] = useState<UserModel>({});
    const authService = new AuthService();
    const { user } = useAppSelector(({ user }) => user )
    
    const navigate = useNavigate()

    const handleChange = (e:any) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserForm({
            ...userForm,
            [name]:value,
        })

    }

    useEffect(() => {
        if(user?.id !== "") navigate("/");
    }, [user]);

    const handleRegisterUser = async () => {
        const { email, username, password } = userForm;
        if(!email || !username || !password) {
            setUserForm({
                email:"",
                username:"",
                password:""
            })
            return swalError("All fields are requireds");
        }

        try {
            const response = await authService.registerUser(userForm);
            swalSuccess("User registered");
            navigate("../login");
        } catch (error:any) {
            setUserForm({
                email:"",
                username:"",
                password:""
            })
            swalError(error.response.data.message)
        }
        
    }


    return (<>
    <CustomContainer>
        <div className="p-2 w-full h-full max-w-[412px] max-h-[442px]">
            <form className="flex flex-col gap-2" onSubmit={(e)=> e.preventDefault()}>
                <h2 className="text-center font-bold text-[32px]">Register</h2>
                <div className="w-full">
                    <input onChange={handleChange} value={userForm.username} className="w-full p-2 bg-amber-100 rounded-xl text-amber-800 outline-none font-light placeholder:text-amber-800" type="text" name="username" placeholder="Enter your Username"/>
                </div>
                <div className="w-full">
                    <input onChange={handleChange} value={userForm.email} className="w-full p-2 bg-amber-100 rounded-xl text-amber-800 outline-none font-light placeholder:text-amber-800" type="email" name="email" placeholder="Enter your email"/>
                </div>
                <div className="w-full">
                    <input onChange={handleChange} value={userForm.password} className="w-full p-2 bg-amber-100 rounded-xl text-amber-800 outline-none font-light placeholder:text-amber-800" type="password" name="password" placeholder="Enter your password" autoComplete="off"/>
                </div>
                <div className="w-full">
                    <button onClick={handleRegisterUser} className="w-full p-2 bg-amber-800 text-amber-100 rounded-xl font-bold" >Register</button>
                </div>
                <div className="w-full text-center">
                    <Link to="../login" className="text-amber-800 underline">¿Ya tienes una cuenta?</Link>
                </div>
            </form>
        </div>
    </CustomContainer>
    </>)
}