import React from 'react';

const Paragraph = props => {
    let wording = props.wording,
        span = props.span

    if(span) {
        let thisSpan = wording.indexOf(span),
            beginning = wording.slice(0, thisSpan),
            ending = wording.slice((thisSpan + span.length), wording.length)
        
        return (
            <p>{beginning}<span>{span}</span>{ending}</p>
        )

    } else {
        return (
            <p>{props.wording}</p>
        )
    }
}

export default Paragraph