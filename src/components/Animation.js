import React from 'react';
import lottie from 'lottie-web'
import bubbleAnimation from '../assets/loading_anim.json';
import dotsAnimation from '../assets/jumping_dots_anim.json'


const Animation = props => {
    
    let animation = dotsAnimation,
        element = "dotsAnimation"

    if(props.item === "bubble") {
        animation = bubbleAnimation
        element = "loginAnimation"
    }

    React.useEffect( () => {
        lottie.loadAnimation({
            container: document.querySelector(`#${element}`),
            animationData: animation,
            renderer: "svg",
            loop: true,
            autoplay: true
        })
    }, [animation, element])
    switch(props.item){
        case "bubble":
            return (
                <div id="loginAnimation"/>
           )
        case "dots":
           return (
               <p id="dotsP">Logging in<span id="dotsAnimation"></span></p>
          )
        default:
            console.error('No case met')

    }
}

export default Animation