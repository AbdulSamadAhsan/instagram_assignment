import HeroPanel from "../components/HeroPanel";
import AuthPanel from "../components/AuthPanel";
import "./Loginpage.css";
import InstagramLogo from "../components/InstagramLogo";
function LoginPage() {
    return (
        <main className="login-page">
        

            <HeroPanel />
            <AuthPanel />
        </main>
    );
}

export default LoginPage;