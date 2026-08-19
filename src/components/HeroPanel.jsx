import InstagramLogo from "./InstagramLogo";
import collage from "../assets/instagram-collage.png";

function HeroPanel() {
    return (
        <section className="hero-panel">
            <div className="hero-logo">
                <InstagramLogo />
            </div>

            <div className="hero-content">
                <h1 className="hero-title">
                    See everyday moments from your
                    <span className="hero-gradient-text">
                        close friends
                    </span>
                    <span className="hero-dot">.</span>
                </h1>

                <div className="hero-image-wrapper">
                    <img
                        src={collage}
                        alt="Friends sharing moments"
                        className="hero-image"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroPanel;