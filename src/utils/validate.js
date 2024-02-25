

export const checkValiddata=(email,password)=>{
    const isEmailValid=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])/.test(password)

    if (!isEmailValid)
    return "Email ID is not valid"
    if (!isPasswordValid)
    return "Password is not valid"

    return null

}
