import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <section id="resume">
      <div className="about-container">
        <div className="title">
          <h1>Resume</h1>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>

          <div className="row">
            <div className="column">
              <div className="summary">
                <h1>Summary</h1>
                <div className="item">
                  <h3>Mickias Girma</h3>
                  <p>
                    Illustrator and design artist that is eager to work on any
                    artistic project. My portfolio includes Illustration,
                    Drawing, Graphic design layouts and Character design.
                  </p>
                  <ul>
                    <li>Ethiopia Addis Ababa</li>
                    <li>+251 923029041</li>
                    <li>mikcygir@gmail.com</li>
                  </ul>
                </div>
              </div>

              <div className="summary">
                <h1>Education</h1>
                <div className="column">
                  <div className="item">
                    <h3>ArbaMinch University</h3>
                    <h5>2016-2021</h5>
                    <h4>Rochester Institute of Technology, Rochester, NY</h4>
                    <p>
                      Qui deserunt veniam. Et sed aliquam labore tempore sed
                      quisquam iusto autem sit. Ea vero voluptatum qui ut
                      dignissimos deleniti nerada porti sand markend
                    </p>
                  </div>

                  <div className="item">
                    <h3>Google Digital Garage</h3>
                    <h5>2023</h5>
                    <h4>Rochester Institute of Technology, Rochester, NY</h4>
                    <p>
                      Qui deserunt veniam. Et sed aliquam labore tempore sed
                      quisquam iusto autem sit. Ea vero voluptatum qui ut
                      dignissimos deleniti nerada porti sand markend
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="experience">
                <h1>Proffesional Experience</h1>
                <div className="column">
                  <div className="item">
                    <h3>Graphic Designer</h3>
                    <h5>June 2023-present</h5>
                    <h4>Red Cloud | Full Time</h4>
                    <ul>
                      <li>
                        Created visually appealing designs for a variety of
                        digital and print materials, including website graphics,
                        social media assets, infographics, presentations,
                        brochures, and advertisements.
                      </li>
                      <li>
                        Worked closely with the UI/UX team to ensure consistent
                        branding and visual aesthetics across all digital
                        platforms and products.
                      </li>
                      <li>
                        Collaborated with the marketing team to develop creative
                        concepts and design solutions that effectively
                        communicated our brand message and marketing campaigns.
                      </li>
                      <li>
                        Take ownership of Graphics and motion design projects
                        from concept to completion, ensuring timely delivery and
                        adherence to brand guidelines.
                      </li>
                    </ul>
                  </div>

                  <div className="item">
                    <h3>Junior Graphics Design | Illustration</h3>
                    <h5>0ct 2022 - Present</h5>
                    <h4>Kodastropi Marketing solution Addis Ababa | Remote</h4>
                    <ul>
                      <li>
                        Support the implementation of client marketing plan (in
                        accordance with company strategy)
                      </li>
                      <li>
                        Produce graphic content and digital illustrations for
                        various product from Brand development to internal and
                        external communications including product development
                      </li>
                      <li>
                        Support Creative Director to develop weekly or monthly
                        communications on current projects at hand with clear
                        timeline and progress as may be requested by the line
                        manager for management and client representatives.
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Junior Graphics Design | Illustration</h3>
                    <h5>0ct 2022 - Present</h5>
                    <h4>Kodastropi Marketing solution Addis Ababa | Remote</h4>
                    <ul>
                      <li>
                        Support the implementation of client marketing plan (in
                        accordance with company strategy)
                      </li>
                      <li>
                        Produce graphic content and digital illustrations for
                        various product from Brand development to internal and
                        external communications including product development
                      </li>
                      <li>
                        Support Creative Director to develop weekly or monthly
                        communications on current projects at hand with clear
                        timeline and progress as may be requested by the line
                        manager for management and client representatives.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
