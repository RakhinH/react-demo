const Login = ({id, email, password}) => {


    return ( 
        <>
        <h1 className="text-3xl bg-body-tertiary">Log in</h1>
        <p>{id}</p>
        <p>{email}</p>
        <p>{password}</p>
        </>
     );
}
 
export default Login;