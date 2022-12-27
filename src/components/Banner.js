import React from 'react'

import "./Banner.css"

const Banner = () => {
  
  return (
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" className="d-block w-100 carousal-img" alt="..." />
                  {/* <div className="d-block w-100"> 
                  <img className='carousal-img' src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'></img> */}

                  {/* </div> */}
                  {/* <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div> */}
                </div>
                <div className="carousel-item">
                  <img src="https://www.pngitem.com/pimgs/m/9-98563_ecommerce-website-development-ecommerce-website-banner-design-hd.png" className="d-block w-100 carousal-img" alt="..." />
                  
                </div>
                <div className="carousel-item">
                  <img src="https://t4.ftcdn.net/jpg/05/46/13/95/240_F_546139504_fC3Vh5EJtsS4ejBZU6wYSEkry6jlvtXx.jpg" className="d-block w-100 carousal-img" alt="..." />
                 
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          );
}

export default Banner