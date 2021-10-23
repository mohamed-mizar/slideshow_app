import React, { useState } from 'react';

function Slides({slides}) {
    
    const [currentState, setCurentState] = useState(0);

    return (
        <div>
            <div id="navigation" className="text-center">
                <button 
                    data-testid="button-restart" 
                    className="small outlined"
                    onClick={() => setCurentState(0)}
                    disabled={currentState === 0} >
                        Restart
                </button>
                <button 
                    data-testid="button-prev" 
                    className="small"
                    onClick={() => setCurentState(currentState - 1)}
                    disabled={currentState === 0}>
                        Prev
                </button>
                <button 
                    data-testid="button-next" 
                    className="small"
                    onClick={() => setCurentState(currentState + 1)}
                    disabled={currentState === slides.length - 1}>
                        Next</button>
            </div>
            <div id="slide" className="card text-center"  >
                <h1 data-testid="title">{slides[currentState].title}</h1>
                <p data-testid="text">{slides[currentState].text}</p>
            </div>
        </div>
    );

}

export default Slides;
