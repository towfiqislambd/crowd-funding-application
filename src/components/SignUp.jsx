import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from 'sweetalert2'
import Lottie from "lottie-react";
import registrationAnimation from "../assets/register.json";

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { singUpUser, updateUserProfile, setUser } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        const regexPassword = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!regexPassword.test(password)) {
            return setErrorMessage("Password must be at least 6 characters long, Include one uppercase and one lowercase letter")
        }
        setErrorMessage('');
        singUpUser(email, password)
            .then(() => {
                updateUserProfile(name, photo)
                    .then(() => {
                        setUser(result => {
                            return { ...result, displayName: name, photoURL: photo }
                        })
                    })
                e.target.reset()
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                })
                Toast.fire({
                    icon: "success",
                    title: "Registration successful"
                })
            })
            .catch(error => {
                const errorMsg = error.message;
                setErrorMessage(errorMsg)
            })

    }
    return (
        <div className="container mx-auto px-5  mb-16 mt-28 grid grid-cols-1 lg:grid-cols-2 gap-10">
             <div className="order-0 md:order-1">
                <Lottie animationData={registrationAnimation} className="w-full lg:w-3/5" loop={true} />
            </div>
            <div className="bg-purple-100 mx-auto shadow-lg border-purple-200 border rounded-lg max-w-[26rem]">
                <form onSubmit={handleRegister} className="px-8 p-5 pb-3 ">
                    <div className="space-y-4">
                        <h3 className="text-2xl  font-semibold text-gray-700 text-center">Registration</h3>
                        <input type="text" name="name" placeholder="Your Name" className="input w-full input-bordered border-purple-200 rounded" required />
                        <input type="email" name="email" placeholder="Email Address" className="input w-full input-bordered border-purple-200 rounded" required />
                        <input type="text" name="photo" placeholder="Photo URL" className="input w-full input-bordered border-purple-200 rounded" required />
                        <input type='password' name="password" placeholder="Password" className="input w-full input-bordered border-purple-200 rounded" required />
                        <input type="submit" value='Register' className="btn bg-purple-600 hover:bg-purple-600 w-full text-white" />
                    </div>
                    <p className="text-gray-700 text-center pt-3 pb-3">Already have an account? <Link to="/login" className="link link-hover text-purple-600 font-semibold">Login</Link></p>
                </form>
                {
                    errorMessage && <h3 className="text-center px-7 pb-4 text-error -mt-4">{errorMessage}</h3>
                }
            </div>
        </div>
    )
}

export default SignUp;

