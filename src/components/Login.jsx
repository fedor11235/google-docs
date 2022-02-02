import './../assets/Form.css';

const LoginPage = () => {
    return (
        <div>
            <h1>log in</h1>
            <form>
                <label htmlFor="login"></label>
                <input type="text" id="login" />

                <label htmlFor="password"></label>
                <input type="password" id="password" />

                <input type="submit" />
            </form>
        </div>
    )
}

export default LoginPage;