import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio11.jpg'
import IMG2 from '../../assets/portfolio31.png'
import IMG3 from '../../assets/portfolio21.png'
import IMG4 from '../../assets/portfolio41.png'
import IMG5 from '../../assets/portfolio51.jpg'
import IMG6 from '../../assets/portfolio61.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="IMG1_P" />
          </div>
          <h3>E-Commerce Website Using React-Js</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/sovanghorai/E-Commerce-website-using-React-Js" className='btn' target='_blank'>Github</a>
          <a href="https://e-commerce-sovan.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="IMG1_P" />
          </div>
          <h3>News-Website using React-Js</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/sovanghorai/News-App" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/sovanghorai/News-App" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="IMG1_P" />
          </div>
          <h3>Weather-Forecast-Website</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/sovanghorai/Weather-Forecast-Website" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/sovanghorai/Weather-Forecast-Website" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="IMG1_P" />
          </div>
          <h3>Amazon_clone Website</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/sovanghorai/Amazon_clone" className='btn' target='_blank'>Github</a>
          <a href="https://amazon-ap.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="IMG1_P" />
          </div>
          <h3>Search-Image-Website</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/sovanghorai/Search-Image-app" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/sovanghorai/Search-Image-app" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="IMG1_P" />
          </div>
          <h3>Todo-List-Website </h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/sovanghorai/Todo-List-App" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/sovanghorai/Todo-List-App" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio
