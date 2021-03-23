import React from 'react'

export default function About() {
    return (
        <section className="panel b-yellow" id="2">
          <article className="panel__wrapper">
            <div className="panel__content">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <div className="about-content">
                      <div className="heading">
                        <h4>About me</h4>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="about-box-content">
                            <img src="/assets/img/about-image.png" alt=""/>
                          </div>
                        </div>
                        <div className="col-md-7 col-md-offset-5">
                          <div className="about-box-text">
                            <h4>Background graduation</h4>
                            <p>I'm graduated in Nguyen Tat Thanh University. My major in Information Techonology with my background quite good with 
                                8.8 GPA score.I hope i will make you happy in my project.
                            </p>
                            <div className="primary-button">
                              <a href="#3">Discover More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
    )
}
