import React from "react";
import "./about.css";
import { FaAngleRight } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="title">
          <h1>About</h1>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="content">
          <img src="./img/profile-img.jpg" alt="" />
          <div className="details">
            <h1>UI/UX Designer & Web Developer.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="info">
              <ul>
                <li>
                  <FaAngleRight />
                  <strong>Birthday:</strong>1 may 1182
                </li>
                <li>
                  <FaAngleRight />
                  <strong>Website:</strong> www.example.com
                </li>
                <li>
                  <FaAngleRight />
                  <strong>Phone:</strong>+2519586221355
                </li>
                <li>
                  <FaAngleRight />
                  <strong>city:</strong>Addis Ababa
                </li>
              </ul>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p>
          </div>
        </div>
      </div>

      <section id="skill">
        <div className="about-container">
          <div className="title">
            <h1>Skills</h1>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="skill">
            <div className="skill-list">
              <div className="skill-item">
                <div className="sktill-title">
                  <h4>html</h4>
                  <h4>100%</h4>
                </div>
                <div className="progressbar">
                  <div className="percentage"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="sktill-title">
                  <h4>html</h4>
                  <h4>100%</h4>
                </div>
                <div className="progressbar">
                  <div className="percentage"></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="sktill-title">
                  <h4>html</h4>
                  <h4>100%</h4>
                </div>
                <div className="progressbar">
                  <div className="percentage"></div>
                </div>
              </div>
            </div>

            <div className="skill-list">
              <div className="skill-item">
                <div className="sktill-title">
                  <h4>html</h4>
                  <h4>100%</h4>
                </div>
                <div className="progressbar">
                  <div className="percentage"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="sktill-title">
                  <h4>html</h4>
                  <h4>100%</h4>
                </div>
                <div className="progressbar">
                  <div className="percentage"></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="sktill-title">
                  <h4>html</h4>
                  <h4>100%</h4>
                </div>
                <div className="progressbar">
                  <div className="percentage"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
