import React from 'react'

export default function Header() {
    return (
        <section className="panel b-blue" id="1">
          <article className="panel__wrapper">
            <div className="panel__content">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <div className="home-content">
                      <div className="home-heading">
                        <h1><em>FRONT END</em>DEVELOPER</h1>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="home-box-content">
                            <div className="left-text">
                              <h4>Nathan Le</h4>
                              <p>I'm study and reasearch about front end development. I can use bootstrap framework, CSS, javascript and a little bit PHP to web development.
                                  And I'm also like MVC framework such as: laravel. And my best skill is ReactJS and javascript.
                              </p>
                              <div className="primary-button">
                                <a href="#2">Discover More</a>
                              </div>
                            </div>
                            <div className="right-image">
                              <img src="/assets/img/Nathanheader.png" alt="my picture"/>
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
