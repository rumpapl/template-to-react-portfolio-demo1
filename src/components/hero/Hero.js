import React from 'react';
import './HeroStyle.css';

import ReactTypingEffect from 'react-typing-effect';



const Hero = () => {
    return (
        <div className="hero" id="home">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-content">
                            <div className="hero-text">
                                <p>I'm</p>
                                <h1>Kate Winslet</h1>

                                <ReactTypingEffect
                                    text={["Web Designer", "Web Developer", "Front End Developer", "Apps Designer","Apps Developer"]}
                                    cursorRenderer={cursor => <h2>{cursor}</h2>}
                                    displayTextRenderer={(text, i) => {
                                        return (
                                            <h2>
                                                {text.split('').map((char, i) => {
                                                    const key = `${i}`;
                                                    return (
                                                        <span
                                                            key={key}
                                                        >{char}</span>
                                                    );
                                                })}
                                            </h2>
                                        );
                                    }}
                                />
                               
                            </div>
                            <div className="hero-btn">
                                <a className="btn" href="">Hire Me</a>
                                <a className="btn" href="">Contact Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 d-none d-md-block">
                        <div className="hero-image">
                            <img src="assets/img/hero.png" alt="Hero Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
