import React from 'react';
import './E_populate.css'

function E_populate(props){
    return(
        <div className="populate-container">
            <h1 className="populate-h1">Congratulations!</h1>
            <div className = 'populate'>
            <div>Congratulations! We are excited for you and can't wait for your wedding.
            The information we have will appear below.  If you have not yet created your event, please 
            click on the create link.  Feel free to edit your event or create your playlist, as well!
            </div>
            <div className="specifics">
                {!!props.groom && <div className="row">
                <div className="nonProp">Groom:</div> <div className={props.textTrue? "what":"what what-hidden"}>{props.groom}</div>
                </div>}
                {!!props.bride && <div className="row">
                <div className="nonProp">Bride: </div><div className={props.textTrue? "what":"what what-hidden"}>{props.bride}</div>
                </div>}
                {!!props.gPhone && <div className="row">
                <div className="nonProp">Groom Phone:</div> <div className={props.textTrue? "what":"what what-hidden"}>{props.gPhone}</div>
                </div>}
                
                {!!props.bPhone && <div className="row">
                <div className="nonProp">Bride Phone:</div> <div className={props.textTrue? "what":"what what-hidden"}>{props.bPhone}</div>
                </div>}
                {!!props.date && <div className="row">
                <div className="nonProp">Date:</div> <div className={props.textTrue? "what":"what what-hidden"}>{props.date}</div>                
                </div>}
                {!!props.time && <div className="row">
                <div className="nonProp">Time:</div> <div className={props.textTrue? "what":"what what-hidden"}>{props.time}</div>                
                </div>}
                {!!props.venue && <div className="row">
                <div className="nonProp">Venue:</div> <div className={props.textTrue? "what":"what what-hidden"}>{props.venue}</div>
                </div>}
                </div>
            </div>
        </div>
    )
}
export default E_populate;