import { GoChevronLeft } from "react-icons/go";
import { JUMBOTRON_IMAGE } from "../Constants/ListAssets";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { emailAtom, emailStorageAtom, tokenAtom } from "../jotai/atoms";
import { useState } from "react";
import { signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import { auth } from "../utils/firebase";
import { toast, ToastContainer } from "react-toastify";
import DefaultLayouts from "../components/Layouts/DefaultLayouts";

const Login = () => {
    const navigate = useNavigate()
    const [, setToken] = useAtom(tokenAtom)
    const [, setEmailStorage] = useAtom(emailStorageAtom)
    const [email, setEmail] = useAtom(emailAtom)
    const [password, setPassword] = useState(null)
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const login = await signInWithEmailAndPassword(auth, email, password)
            if (login) {
                const firebaseToken = await getIdToken(login.user)
                setToken(firebaseToken)
                setEmailStorage(login.user.email)
                navigate("/browse")
            }
        } catch (error) {
            toast(error.message)
        }
    }
    return (
        <DefaultLayouts>
            <ToastContainer position="top-center" theme="dark" autoClose={2000} />
            <img
                src={JUMBOTRON_IMAGE}
                alt="jumbroton-img"
                className="image-full h-[100vh] object-cover opacity-70 w-full"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black/80 px-8 py-16 rounded-xl max-w-xl w-full">
                <form className="flex flex-col gap-4  ">
                    <div className="text-white text-xl font-semibold mb-2 flex items-center gap-2">
                        <GoChevronLeft
                            size={28}
                            className="text-slate-200 hover:text-white cursor-pointer"
                            onClick={() => navigate("/")}
                        />
                        <h3>Sign In</h3>
                    </div>
                    <div className="relative">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            placeholder="Email"
                            className='w-full p-4 bg-black/50 rounded-md border border-white/50 peer placeholder-transparent ' />
                        <label
                            className='absolute top-0 left-0 pl-4 peer-placeholder-shown:top-3.5 peer-focus:-top-[6px] transition-all text-lg -z-10'>
                            Email
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder="Password"
                            className='w-full p-4 bg-black/50 rounded-md border border-white/50 peer placeholder-transparent ' />
                        <label
                            className='absolute top-0 left-0 pl-4 peer-placeholder-shown:top-3.5 peer-focus:-top-[6px] transition-all text-lg -z-10'>
                            Password
                        </label>
                    </div>
                    <div className="flex flex-col gap-4">
                        <button
                            className="bg-red-600 py-3 w-full text-white font-bold rounded-md"
                            onClick={handleLogin}
                        >Sign In</button>
                        <p>New To Here?
                            <span
                                className="text-blue-500 ml-2 underline cursor-pointer"
                                onClick={() => navigate("/register")}
                            >
                                Sign Up Here
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </DefaultLayouts>
    )
}

export default Login