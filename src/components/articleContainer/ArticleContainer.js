import React from 'react'

import './ArticleContainer.scss';

const ArticleContainer = () => {
  return (
    <div className="articleContainer">
        <div className="articleContainer__title"> 
            <span className="red-circle"></span>Most Read
        </div>
        <div className="articleContainer__list">
            <img src="https://via.placeholder.com/260x150" />
            <div className="article">
                <div className="article__number">1</div>
                <div className="article__title">
                    Democrat Pat Ryan wins bellwether special election in New York's Hudson Valley
                </div>
            </div>
            <div className="article">
                <div className="article__number">2</div>
                <div className="article__title">
                    Biden OKs sweeping student loan relief as midterms near
                </div>
            </div>
            <div className="article">
                <div className="article__number">3</div>
                <div className="article__title">
                    Documents recovered at Mar-a-Lago were among governments most classNameified, letter shows
                </div>
            </div>
            <div className="article">
                <div className="article__number">4</div>
                <div className="article__title">
                    Democrats gain momentum: 5 takeaways from the last big primary night of 2022
                </div>
            </div>
            <div className="article">
                <div className="article__number">5</div>
                <div className="article__title">
                    Dems notch major special election win, 2 incumbents fall on big primary night
                </div>
            </div>
        </div>
    </div>
  )
}

export default ArticleContainer