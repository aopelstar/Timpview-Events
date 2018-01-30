import React from 'react';
import './E_populate.css'

function E_populate(props){
    return(
        <div className="copulate-container">
            <h1 className="populate-h1">Congratulations!</h1>
            <div className = 'populate'>
            <div>Congratulations! We are excited for you and can't wait for your wedding.
            The information we have will appear below.  If you have not yet created your event, please 
            click on the create link.  Feel free to edit your event or create your playlist, as well!
            </div>
            <div className="specifics">
                {!!props.groom && <div className="row">
                Groom: <div className="what">{props.groom}</div>
                </div>}
                {!!props.bride && <div className="row">
                Bride: <div className="what">{props.bride}</div>
                </div>}
                {!!props.gPhone && <div className="row">
                Groom Phone: <div className="what">{props.gPhone}</div>
                </div>}
                
                {!!props.bPhone && <div className="row">
                Bride Phone: <div className="what">{props.bPhone}</div>
                </div>}
                {!!props.date && <div className="row">
                Date: <div className="what">{props.date}
</div>                </div>}
                {!!props.time && <div className="row">
                Time: <div className="what">{props.time}
</div>                </div>}
                {!!props.venue && <div className="row">
                Venue: <div className="what">{props.venue}</div>
                </div>}
                </div>
            </div>
        </div>
    )
}
export default E_populate;