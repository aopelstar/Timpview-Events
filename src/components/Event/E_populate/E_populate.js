import React from 'react';
import './E_populate.css'

function E_populate(props){
    return(
        <div className="copulate-container">
            <h1 className="populate-h1">Congratulations!</h1>
            <div className = 'populate'>
            <div>Congratulations, {props.groom} and {props.bride} for scheduling your event on {props.date}
            .  We have your information now and you can be expecting a call from us at either {props.bPhone} or {props.gPhone} sometime in the near future.
            Please take a look below and confirm all of your information.
            </div>
            <div className="specifics">
            <div className="row">
                Groom: <div className="what">{props.groom}</div>
                </div>
                <div className="row">
                Bride: <div className="what">{props.bride}</div>
                </div>
                <div className="row">
                Groom Phone: <div className="what">{props.gPhone}</div>
                </div>
                <div className="row">
                Bride Phone: <div className="what">{props.bPhone}</div>
                </div>
                <div className="row">
                Date: <div className="what">{props.date}
</div>                </div>
                <div className="row">
                Time: <div className="what">{props.time}
</div>                </div>
                <div className="row">
                Venue: <div className="what">{props.venue}</div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default E_populate;