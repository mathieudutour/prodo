import * as React from "react";
import { Title } from "react-head";
// @ts-ignore
import FaTwitter from "react-icons/lib/fa/twitter";
// @ts-ignore
import FaUserSecret from "react-icons/lib/fa/user-secret";
// @ts-ignore
import googleLogo from "../../assets/images/google-logo.svg";
// @ts-ignore
import kanbanLogo from "../../assets/images/kanban-logo.svg";
// @ts-ignore
import background1920 from "../../assets/images/postits-1920.jpg";
// @ts-ignore
import background1366 from "../../assets/images/postits-1366.jpg";
import "./LandingPage.scss";
import { dispatch, state } from "../../model";

function enterAsGuest() {
  state.userId = "guest";
}

function LandingPage({}) {
  return (
    <div className="landing-page">
      <Title>Sign in | React Kanban</Title>
      <div className="landing-page-background">
        <img
          srcSet={`${background1920} 1920w, ${background1366} 1366w`}
          src={background1920}
          alt="background"
        />
      </div>
      <div className="landing-page-info-wrapper">
        <div className="landing-page-info">
          <div className="landing-page-heading">
            <img
              src={kanbanLogo}
              alt="React Kanban logo"
              className="landing-page-logo"
            />
            &nbsp;
            <h1>React Kanban</h1>
          </div>
          <p className="landing-page-description">
            An open source kanban application inspired by Yogaboll's Trello
            clone. Check out their source code on{" "}
            <a
              href="https://github.com/yogaboll/react-kanban"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <div className="signin-buttons">
            <div>
              <a href="/auth/twitter" className="signin-button twitter-button">
                <FaTwitter className="logo-icon" /> &nbsp;Sign in with Twitter
              </a>
            </div>
            <div>
              <a href="/auth/google" className="signin-button google-button">
                <img
                  className="google-logo"
                  src={googleLogo}
                  alt="google logo"
                />
                &nbsp;Sign in with Google
              </a>
            </div>
            <div className="guest-button-wrapper">
              <button
                onClick={() => dispatch(enterAsGuest)()}
                className="signin-button guest-button"
              >
                <FaUserSecret className="logo-icon" /> &nbsp;Enter as guest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
