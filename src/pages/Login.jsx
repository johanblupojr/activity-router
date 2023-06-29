import "./Login.css";

export default function Login() {
    return (
        <>
            <div className="login">
                <form>
                    <div className="form-field">
                        <input type="email" placeholder="Email / Username" required />
                    </div>

                    <div className="form-field">
                        <input type="password" placeholder="Password" required />
                    </div>

                    <div className="form-field">
                        <button className="btn" type="submit">
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
