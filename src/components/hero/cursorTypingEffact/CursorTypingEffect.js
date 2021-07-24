import React from 'react';
import ReactTypingEffect from 'react-typing-effect';


const CursorTypingEffect = () => {
    return (
        <ReactTypingEffect
        text={["Web Designer", "Web Developer", "Front End Developer", "Apps Designer","Apps Developer"]}
        speed={100}
        eraseSpeed={100}
        typingDelay={2000}
        eraseDelay={3000}
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

    )
}

export default CursorTypingEffect
