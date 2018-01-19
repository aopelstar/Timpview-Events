import React from 'react';
import './E_populate.css'

function E_copulate(props){
    return(
        <div>
            <h1 className="about-h1">Congratulations!</h1>
            <div className = 'songs'>
            <div>Congratulations, {props.name} from {props.company} for scheduling your event on {props.date}
            .  We have your information now and you can be expecting a call from us at {props.phone} sometime in the near future.
            Please take a look below and confirm all of your information.
            </div>
            <div className="specifics">
            <div>
                Company: {props.company}
                </div>
                <div>
                Name: {props.name}
                </div>
                <div>
                Phone: {props.phone}
                </div>
                <div>
                Date: {props.date}
                </div>
                <div>
                Time: {props.time}
                </div>
                <div>
                Venue: {props.venue}
                </div>
                </div>
            </div>
        </div>
    )
}
export default E_copulate;