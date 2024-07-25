export function SignUp() {

    function checkPassword(){
        return true
    }

    return (<>
        <form>
            <span>
                <label htmlFor="firstName" >
                    Please fill in your first name:
                </label>
                <input id="firstName" type="text" />
            </span>

            <span>
                <label htmlFor="lastName" >
                    Please fill in your last name:
                </label>
                <input id="last name" type="text" />
            </span>
            <span>
                <label htmlFor="businessName" >
                    Please fill in your business name:
                </label>
                <input id="businessName" />
            </span>
            <span>
                <label htmlFor="email" >
                    Please fill in your email:
                </label>
                <input id="email" type="text" />
            </span>

            <span>
                <label htmlFor="password" >
                    Please fill in your password:
                </label>
                <input id="password" type="password" />
            </span>

            <span>
                <label htmlFor="confirmPassword" >
                    Please fill in your password again:
                </label>
                <input id="confirmPassword" type="password" onChange={checkPassword} />
            </span>

            <button>
                Log in
            </button>
        </form>
    </>)
} 