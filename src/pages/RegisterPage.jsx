import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

function RegisterPage() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        contact: "",
        password: "",
        month: "",
        day: "",
        year: "",
        fullName: "",
        username: "",
    });

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const days = useMemo(() => {
        return Array.from({ length: 31 }, (_, i) => i + 1);
    }, []);

    const years = useMemo(() => {
        const currentYear = new Date().getFullYear();

        return Array.from(
            { length: 100 },
            (_, i) => currentYear - i
        );
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form);
    };

    return (
        <main className="register-page">

            {/* LEFT TOP AREA */}
     
       
            {/* FORM */}
            <section className="register-container">

                <h1 className="register-title">
                    Get started on Instagram with a Meta Account
                </h1>

                <p className="register-subtitle">
                    A Meta Account lets you access multiple Meta technologies,
                    like Instagram, easily and securely.
                </p>

                <form
                    className="register-form"
                    onSubmit={handleSubmit}
                >

                    {/* MOBILE / EMAIL */}
                    <div className="form-group">

                        <label htmlFor="contact">
                            Mobile number or email
                        </label>

                        <input
                            id="contact"
                            type="text"
                            name="contact"
                            value={form.contact}
                            onChange={handleChange}
                            placeholder="Mobile number or email"
                        />

                        <p className="form-help">
                            You may receive notifications from us.{" "}
                            <a href="#">
                                Learn why we ask for your contact information
                            </a>
                        </p>

                    </div>

                    {/* PASSWORD */}
                    <div className="form-group">

                        <label htmlFor="password">
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Password"
                        />

                    </div>

                    {/* BIRTHDAY */}
                    <div className="form-group">

                        <label className="birthday-label">
                            Birthday

                            <span className="question-icon">
                                ?
                            </span>
                        </label>

                        <div className="birthday-grid">

                            <select
                                name="month"
                                value={form.month}
                                onChange={handleChange}
                            >
                                <option value="">
                                    Month
                                </option>

                                {months.map((month) => (
                                    <option
                                        key={month}
                                        value={month}
                                    >
                                        {month}
                                    </option>
                                ))}
                            </select>

                            <select
                                name="day"
                                value={form.day}
                                onChange={handleChange}
                            >
                                <option value="">
                                    Day
                                </option>

                                {days.map((day) => (
                                    <option
                                        key={day}
                                        value={day}
                                    >
                                        {day}
                                    </option>
                                ))}
                            </select>

                            <select
                                name="year"
                                value={form.year}
                                onChange={handleChange}
                            >
                                <option value="">
                                    Year
                                </option>

                                {years.map((year) => (
                                    <option
                                        key={year}
                                        value={year}
                                    >
                                        {year}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>

                    {/* NAME */}
                    <div className="form-group">

                        <label htmlFor="fullName">
                            Name
                        </label>

                        <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            placeholder="Full name"
                        />

                    </div>

                    {/* USERNAME */}
                    <div className="form-group">

                        <label htmlFor="username">
                            Username
                        </label>

                        <input
                            id="username"
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            placeholder="Username"
                        />

                    </div>

                    {/* LEGAL */}
                    <div className="register-legal">

                        <p>
                            People who use our service may have uploaded your
                            contact information to Instagram.{" "}
                            <a href="#">
                                Learn more.
                            </a>
                        </p>

                        <p>
                            By tapping Submit, you agree to create an account
                            and to Instagram's{" "}
                            <a href="#">
                                Terms
                            </a>
                            ,{" "}
                            <a href="#">
                                Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a href="#">
                                Cookies Policy
                            </a>
                            .
                        </p>

                        <p>
                            The{" "}
                            <a href="#">
                                Privacy Policy
                            </a>{" "}
                            describes the ways we can use the information we
                            collect when you create an account. For example,
                            we use this information to provide, personalize
                            and improve our products, including ads.
                        </p>

                    </div>

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        className="register-submit"
                    >
                        Submit
                    </button>

                </form>
            </section>
        </main>
    );
}

export default RegisterPage;