import { useEffect, useState } from "react";
import { Login } from "../components/Login";
import { SignUp } from "../components/SignUp";
import { userExists } from "../services/auth";
import { useNavigate } from "react-router-dom";

export function Authentication() {

    const navigate = useNavigate()

    if (userExists(true)) {
        navigate("/dashboard")
    }

    const [existingUser, setExistingUser] = useState(false)
    const [authMessage, setAuthMessage] = useState()

    function toggleAuthMessage() {
        if (existingUser) {
            setAuthMessage("Not a user, sign up!")
        } else {
            setAuthMessage("Already a user, log in!")
        }
    }

    useEffect(() => {
        toggleAuthMessage()
    }, [existingUser])


    return (<>
        {existingUser &&
            <Login />
        }
        {!existingUser &&
            <SignUp />
        }

        <button onClick={() => setExistingUser(!existingUser)}>
            {authMessage}
        </button>
    </>)
}