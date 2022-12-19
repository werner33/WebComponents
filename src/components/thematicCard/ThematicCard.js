import React from 'react';

import { useNavigate } from "react-router-dom";

import './ThematicCard.scss';

const ThematicCard = ({url = '/'}) => {

    let navigate = useNavigate();

    const handleCallToAction = () => {
        navigate(url);
    }

    return (
        <div className="thematicCard">
            <img 
                className="thematicCard__image" 
                src="https://n.nordstrommedia.com/id/1eded89e-7279-4606-8944-93e354595e87.jpeg?h=365&w=402" 
                onClick={handleCallToAction}
            />
            <div className="thematicCard__title">
                Don't Lose Track of Time
            </div>
            <div className="thematicCard__text">
                We make it easy with our free and exceptional digital stopwatch. You'll be having so much fun watching the seconds tick by.
            </div>
            <span 
                className="thematicCard__callToAction"
                onClick={handleCallToAction}
            >
                Start Tracking Time
            </span>
        </div>
    )
}

export default ThematicCard;