import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

function LoginForm() {
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form);
    };

    const isDisabled =
        form.username.trim() === "" ||
        form.password.trim() === "";

    return (
        <div className="login-form-wrapper">
            <h2 className="login-heading">
                Log into Instagram
            </h2>

            <form
                className="login-form"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Mobile number, username or email"
                    className="login-input"
                />

                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="login-input"
                />

                <button
                    type="submit"
                    className="login-button"
                    disabled={isDisabled}
                >
                    Log in
                </button>
            </form>

            <Link
                to="/forgot-password"
                className="forgot-password"
            >
                Forgot password?
            </Link>

            <div className="login-actions">
                <button
                    type="button"
                    className="facebook-button"
                >
                    <FaFacebook className="facebook-icon" />
                    Log in with Facebook
                </button>

                <Link
                    to="/register"
                    className="create-account-button"
                >
                    Create new account
                </Link>
            </div>

            <div className="meta-logo">
                <span className="meta-symbol">∞</span>
                <span>Meta</span>
            </div>
        </div>
    );
}

export default LoginForm;