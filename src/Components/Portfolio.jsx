import React from "react";
import "./portfolio.css";
import IMG1 from "../Assets/FatSecret_pic.png";
import IMG2 from "../Assets/Pear_pic.png";
import IMG3 from "../Assets/Pear_pic.png";
import IMG4 from "../Assets/Pear_pic.png";
import IMG5 from "../Assets/Pear_pic.png";

const Portfolio = () => {
  return (
    <div id="projects">

      <section id="portfolio">
        

        <div className="container portfolio__container">
          <article className="project-card portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt="" />
            </div>
            <h7 className="project-title" >
            Reliance Digital
            </h7>
            <h5 className="project-description">
              Reliance Digital is an online fully responsive store for electronic
              products. Customers can buy everyday household items after Login or
              Signup.There is many category and products variety.
            </h5>
            <h7 className="project-tech-stack" color="red">
            TechStack:- React | HTML | CSS | ChakraUI 
            </h7>
            <div className="portfolio__item-cta">
              <a
              
                rel="noreferrer"
                href="https://github.com/PoojaBijwal/luxuriant-square-3578"
                className="project-github-link btn"
                target="_blank"
              >
                Source
              </a>
              <a
                rel="noreferrer"
                href="https://comforting-concha-d43513.netlify.app/"
                className="project-deployed-link btn btn-primary"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </article>

          <article className="project-card portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG2} alt="" />
            </div>
            <h7 className="project-title" >
            Big-basket
            </h7>
            <h5 className="project-description">
              An E-commerce website where user can buy any food product after
              Login or Signup and see different pages & products.There are lots of
              products variety. This was group project of 5
              members
            </h5>
            <h7 className="project-tech-stack" color="red">
            TechStack:- Javascript | HTML | CSS
            </h7>
            <div className="portfolio__item-cta">
              <a
                rel="noreferrer"
                href="https://github.com/AnjuTewatia/abrupt-cough-2319"
                className="project-github-link btn"
                target="_blank"
              >
                Source
              </a>
              <a
                rel="noreferrer"
                href="https://fascinating-syrniki-299085.netlify.app/"
                className="project-deployed-link btn btn-primary"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </article>

          <article className="project-card portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG3} alt="" />
            </div>
            <h7 className="project-title" >
            Amazon
            </h7>
            <h5 className="project-description">
              An E-commerce responsive website where user can singup
              & login,and see many pages & products which are
              categorised and finally can checkout and signout.
            </h5>
            <h7 className="project-tech-stack" color="red">
            TechStack:- React | HTML&CSS | Redux | ChakraUI 
            </h7>
            <div className="portfolio__item-cta">
              <a rel="noreferrer"
                href="https://github.com/ramNgithub/amazon.in-Clone"
                className="project-github-link btn"
                target="_blank"
              >
                Source
              </a>
              <a rel="noreferrer"
                href="https://steady-swan-05d49a.netlify.app/"
                className="project-deployed-link btn btn-primary"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </article>

          <article className="project-card portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG4} alt="" />
            </div>
            <h7 className="project-title" >
            Asos
            </h7>
            <h5 className="project-description">
              It is a online website for the shopping of clothes and it's
              delivered best product to the customer.
            </h5>
            <h7 className="project-tech-stack" color="red">
            TechStack:- React | HTML&CSS | ChakraUI 
            </h7>
            <div className="portfolio__item-cta">
              <a rel="noreferrer"
                href="https://github.com/atheist31/hissing-pin-2916"
                className="project-github-link btn"
                target="_blank"
              >
                Source
              </a>
              <a rel="noreferrer"
                href="https://illustrious-beignet-98879d.netlify.app/"
                className="project-deployed-link btn btn-primary"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </article>

          <article className="project-card portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG5} alt="" />
            </div>
            <h7 className="project-title" >
            India-Today
            </h7>
            <h5 className="project-description">
              This is a online news website where you can read and watch news
              allover world.Through the mobile App also.
            </h5>
            <h7 className="project-tech-stack" color="red">
            TechStack:- HTML | CSS 
            </h7>
            <div className="portfolio__item-cta">
              <a rel="noreferrer"
                href="https://github.com/atheist31/jolly-rat-6057"
                className="project-github-link btn"
                target="_blank"
              >
                Source
              </a>
              <a rel="noreferrer"
                href="https://timely-madeleine-ae4695.netlify.app/"
                className="project-deployed-link btn btn-primary"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
