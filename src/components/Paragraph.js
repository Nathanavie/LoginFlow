import React from 'react';

const Paragraph = props => {
    let wording = props.wording,
        span = props.span

    if(span) {
        let thisSpan = wording.indexOf(span),
            beginning = wording.slice(0, thisSpan),
            ending = wording.slice((thisSpan + span.length), wording.length)
        
        return (
            <p className={props.class}>{beginning}<span>{span}</span>{ending}</p>
        )

    } else {
        return (
            <p className={props.class}>{props.wording}</p>
        )
    }
}

export default Paragraph