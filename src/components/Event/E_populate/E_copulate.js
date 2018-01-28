import React from 'react';
import './E_populate.css'

function E_copulate(props){
    return(
        <div className="copulate-container">
            <h1 className="copulate-h1">Congratulations!</h1>
            <div className = 'copulate'>
            <div>Congratulations, {props.name} from {props.company} for scheduling your event on {props.date}
            .  We have your information now and you can be expecting a call from us at {props.phone} sometime in the near future.
            Please take a look below and confirm all of your information.
            </div>
            <div className="specifics">
            <div className="row">
                Company: <div className="what">{props.company}</div>
                </div>
                <div className ="row">
                Name: <div className="what">{props.name}</div>
                </div>
                <div className ="row">
                Phone: <div className="what">{props.phone}</div>
                </div>
                <div className ="row">
                Date: <div className="what">{props.date}</div>
                </div>
                <div className ="row">
                Time: <div className="what">{props.time}</div>
                </div>
                <div className ="row">
                Venue: <div className="what">{props.venue}</div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default E_copulate;