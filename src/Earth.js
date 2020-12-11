import React, { useRef, useLayoutEffect } from 'react'
import './Earth.css'

const Earth = () => {

    const aliceSprite = useRef(null);

    useLayoutEffect(() => {

        var spriteFrames = [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-100%)' }   
          ];
    
        var alice = aliceSprite.current.animate(
            spriteFrames, {
              easing: 'steps(7, end)',
              direction: "reverse",
              duration: 500,
              playbackRate: 1,
              iterations: Infinity
            });


            setInterval( function() {
                if (alice.playbackRate > .4) {
                  alice.playbackRate -= .1;
                } 
            }, 3000);

            const moveFast = () => {
                alice.playbackRate += 0.1;
              }
          
              window.addEventListener("click", moveFast);


    })

    return (
        <div className="earth">
            <div className="alice">
                <img className="alicesprite" ref={aliceSprite}  srcSet="https://raw.githubusercontent.com/usaamatahir/red-queen-race-with-web-animation/master/src/Images/alice.png" alt="Alice" />
            </div>
        </div>
    )
}

export default Earth;