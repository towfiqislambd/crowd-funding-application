import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from 'sweetalert2'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const { singInUser, signinWithGoogle } = useContext(AuthContext)
    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setErrorMessage('');
        singInUser(email, password)
            .then(() => {
                e.target.reset()
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Logged In successfully"
                });
                navigate(location?.state && location.state)
            })
            .catch(error => {
                const errorMsg = error.message;
                setErrorMessage(errorMsg)
            })

    }
    const handleGoogleSignIn = () => {
        signinWithGoogle()
            .then(() => {
                navigate(location?.state && location.state)
            })
    }
    return (
        <div className="container mx-auto px-5">
            <div className="bg-purple-100 mx-auto shadow-lg border-purple-200 border rounded-lg max-w-[25rem] my-8">
                <form onSubmit={handleSignIn} className="px-8 pt-5 mb-4 ">
                    <div className="space-y-4">
                        <h3 className="text-2xl  font-semibold text-gray-700 text-center">Log In</h3>
                        <input type="email" name="email" placeholder="Email" className="input w-full input-bordered border-purple-200 rounded" required />
                        <input type='password' name="password" placeholder="Password" className="input w-full input-bordered border-purple-200 rounded" required />
                        <input type="submit" value='Log In' className="btn bg-purple-600 hover:bg-purple-600 w-full text-white" />
                    </div>
                    <p className="text-gray-700 text-center pt-3 pb-4">Dont have any account? <Link to="/signup" className="link link-hover text-purple-600 font-semibold">Register</Link></p>
                    <div className="divider divide-slate-700 -mt-2 text-gray-700 font-medium">or</div>
                    <Link onClick={handleGoogleSignIn} className="items-center text-center gap-1 sm:gap-2 flex -mt-2 border border-purple-300 text-sm sm:text-[16px] rounded-full py-[8px] mx-auto font-medium  bg-purple-200 justify-center w-3/5"><FcGoogle className="text-xl sm:text-2xl" /> Signin With Google</Link>
                </form>
                {
                    errorMessage && <h3 className="text-center px-7 pb-4 text-error -mt-1">{errorMessage}</h3>
                }
            </div>

        </div>
    )
}

export default Login;