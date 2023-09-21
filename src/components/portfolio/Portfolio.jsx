import React, { useState } from "react";
import "./portfolio.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  return (
    <section id="portfolio">
      <div className="about-container">
        <div className="title">
          <h1>Portfolio</h1>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
      </div>
      <div className="filter-btn">
        <button
          className={filter === "all" || !filter ? "active" : "filter-button"}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "app" ? "active" : "filter-button"}
          onClick={() => setFilter("app")}
        >
          App
        </button>
        <button
          className={filter === "web" ? "active" : "filter-button"}
          onClick={() => setFilter("web")}
        >
          Web
        </button>
        <button
          className={filter === "card" ? "active" : "filter-button"}
          onClick={() => setFilter("card")}
        >
          Card
        </button>
      </div>
      <div className="portfolio-container">
        <div
          className={
            filter === "all" || filter === "web" ? "portfolio-item" : "hide"
          }
        >
          <div className="portfolio-wrap">
            <img
              src="img/portfolio/portfolio-1_files/14.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "web" ? "portfolio-item" : "hide"
          }
        >
          <div className="portfolio-wrap">
            <img
              src="img/portfolio/portfolio-1_files/09.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "app" ? "portfolio-item" : "hide"
          }
        >
          <div className="portfolio-wrap">
            <img
              src="img/portfolio/portfolio-1_files/04.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "app" ? "portfolio-item" : "hide"
          }
        >
          <div className="portfolio-wrap">
            <img
              src="img/portfolio/portfolio-1_files/06.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "web" ? "portfolio-item" : "hide"
          }
        >
          <div className="portfolio-wrap">
            <img
              src="img/portfolio/portfolio-1_files/05.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "web" ? "portfolio-item" : "hide"
          }
        >
          <div className="portfolio-wrap">
            <img
              src="img/portfolio/portfolio-1_files/01.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "app" ? "portfolio-item" : "hide"
          }
        >
          <div className="portfolio-wrap">
            <img
              src="img/portfolio/portfolio-1_files/02.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "card" ? "portfolio-item" : "hide"
          }
        >
          <div className="portfolio-wrap">
            <img
              src="img/portfolio/portfolio-1_files/03.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "card" ? "portfolio-item" : "hide"
          }
        >
          <div className="portfolio-wrap">
            <img
              src="img/portfolio/portfolio-1_files/07.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "app" || filter === "card" ? "portfolio-item" : "hide"
          }
        >
          <div className="portfolio-wrap">
            <img
              src="img/portfolio/portfolio-1_files/08.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "app" || filter === "card" ? "portfolio-item" : "hide"
          }
        >
          <div className="portfolio-wrap">
            <img
              src="img/portfolio/portfolio-1_files/10.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "app" || filter === "web" ? "portfolio-item" : "hide"
          }
        >
          <div className="portfolio-wrap">
            <img
              src="img/portfolio/portfolio-1_files/11.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "app" || filter === "app" ? "portfolio-item" : "hide"
          }
        >
          <div className="portfolio-wrap">
            <img
              src="img/portfolio/portfolio-1_files/12.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
