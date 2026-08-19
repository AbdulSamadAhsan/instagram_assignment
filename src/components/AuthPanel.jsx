import InstagramLogo from "./InstagramLogo";
import LoginForm from "./LoginForm";

function AuthPanel() {
    return (
        <section className="auth-panel">

            <div className="mobile-instagram-logo">
             <InstagramLogo/>
            </div>

            <div className="auth-container">
                <LoginForm />
            </div>
        </section>
    );
}

export default AuthPanel;
