// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./style/Services.css"

const Services = () => {
  return (
    <>
  
    <div className="header">
        <h1>Boost Personal Productivity</h1>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <button className="btn btn-primary">Start A Project</button>
        <button className="btn btn-secondary">Call us for any inquiry +01 2345 6789 10</button>
    </div>
    <div className="services">
        <h2>We Provide A Lot of Cool Services</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <div className="service-items">
            <div className="service-item">
                <i className="fas fa-bullhorn"></i>
                <h3>Marketing</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts</p>
            </div>
            <div className="service-item">
                <i className="fas fa-search"></i>
                <h3>SEO</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts</p>
            </div>
            <div className="service-item">
                <i className="fas fa-paint-brush"></i>
                <h3>UI/UX Design</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts</p>
            </div>
            <div className="service-item">
                <i className="fas fa-lightbulb"></i>
                <h3>Creative</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts</p>
            </div>
            <div className="service-item">
                <i className="fas fa-chart-line"></i>
                <h3>Optimization</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts</p>
            </div>
            <div className="service-item">
                <i className="fas fa-briefcase"></i>
                <h3>Business Strategy</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts</p>
            </div>
        </div>
    </div>
    <div className="footer">
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-google-plus-g"></i></a>
    </div>
    
    
    </>
  )
}

export default Services