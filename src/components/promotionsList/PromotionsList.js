import React, {useState} from 'react'

import './PromotionsList.scss';

const PromotionsList = () => {


    const [showAll, setShowAll] = useState(false);

  return (
    <div className="promotionsList">
        <div className="promotionsList__header">
            <div className="promotionsList__title">Promotions</div>
            <select className="promotionsList__locations">
            <option>Select A Location</option>
            <option>Seattle</option>
            <option>Miami</option>
            <option>NYC</option>
            </select>
        </div>
    <div className="promotionsList__container">
        <div className="promotionsList__item">
        <div className="promotionsList__brandImg">
            <img src="https://via.placeholder.com/40" />
        </div>
        <div>
            <div className="promotionsList__brand">WynnBET</div>
            <div className="promotionsList__content">
            Exclusive Promo: Bet $50, Get $100 FREE - Guaranteed! (XINSIDERNY)
            </div>
        </div>
        <div className="promotionsList__itemButton">
            Claim $100
        </div>
        </div>
        <div className="promotionsList__item">
        <div>
            <img src="https://via.placeholder.com/40" />
        </div>
        <div>
            <div className="promotionsList__brand">FanDuel</div>
            <div className="promotionsList__content">
            Get a $1,000 No Sweat First Bet!
            </div>
        </div>
        <div className="promotionsList__itemButton">
            Claim $1000
        </div>
        </div>
        <div className="promotionsList__item">
        <div>
            <img src="https://via.placeholder.com/40" />
        </div>
        <div>
            <div className="promotionsList__brand">PointsBet</div>
            <div className="promotionsList__content">
            Get up to $500 in Free Bets!
            </div>
        </div>
        <div className="promotionsList__itemButton">
            Claim $500
        </div>
        </div>
        <div className="promotionsList__item">
            <div>
                <img src="https://via.placeholder.com/40" />
            </div>
            <div>
                <div className="promotionsList__brand">Caesars</div>
                <div className="promotionsList__content">
                Get Up to $1,250 to Bet Any Market!(Code VIMAXSPORTFULL)
                </div>
            </div>
            <div className="promotionsList__itemButton">
                Claim $1250
            </div>
        </div>
        <div className={showAll ? "promotionsList__item" : "promotionsList__item-hidden"} >
            <div>
                <img src="https://via.placeholder.com/40" />
            </div>
            <div>
                <div className="promotionsList__brand">Fifth Hidden</div>
                <div className="promotionsList__content">
                    Get Up to $1,250 to Bet Any Market!(Code VIMAXSPORTFULL)
                </div>
            </div>
            <div className="promotionsList__itemButton">
                Claim $1250
            </div>
        </div>
    </div>   
    <div className="promotionsList__toggle" onClick={() => setShowAll(!showAll)}>
        {!showAll && 'See All'}
        {showAll && 'Hide'}
    </div>
</div>
  )
}

export default PromotionsList