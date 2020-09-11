import React from "react";
import "./CSS/About.css";
import about from "../Images/about.svg";

export function About(props) {
    return (
        <div>
            <img id="about" alt="" src={about}></img>
            <div className="texts" id="madeby">
                Developer :
            </div>
            <div className="texts" id="name">
                S Mahesh Raju
            </div>
            <div className="texts" id="email">
                maheshraju2020@gmail.com
            </div>
            <div id="UserLinks">
                <div className="item">
                    <a href="https://github.com/maheshraju2020" target="_blank">
                        Github
                    </a>
                </div>
                <div className="item">
                    <a
                        href="https://in.linkedin.com/in/s-mahesh-raju-126366125"
                        target="_blank"
                    >
                        linkedin
                    </a>
                </div>
                <div className="item">
                    <a
                        href="https://codeforces.com/profile/maheshraju2020"
                        target="_blank"
                    >
                        Codeforces
                    </a>
                </div>
                <div className="item">
                    <a
                        href="https://www.codechef.com/users/maheshraju2020"
                        target="_blank"
                    >
                        Codechef
                    </a>
                </div>
            </div>
        </div>
    );
}
