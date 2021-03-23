import React from 'react'

export default function Contact() {
    return (
         <section className="panel b-green" id="4">
          <article className="panel__wrapper">
            <div className="panel__content">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <div className="contact-content">
                      <div className="heading">
                        <h4>Contact me</h4>
                      </div>
                      <div className="row">
                        <div className="col-md-8">
                          <div className="contat-form">
                            <form id="contact" action="" method="post">
                              <fieldset>
                                <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required/>
                              </fieldset>
                              <fieldset>
                                <input name="email" type="email" className="form-control" id="email" placeholder="Email" required/>
                              </fieldset>
                              <fieldset>
                                <textarea name="message" rows="6" className="form-control" id="message" placeholder="Message" required></textarea>
                              </fieldset>
                              <fieldset>
                                <button type="submit" id="form-submit" className="btn">Send Message</button>
                              </fieldset>
                            </form>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="more-info">
                             
                            <p>Let contact me if you happy with my CV.<br/><br/>
                            <em>Lê Trọng Nhân
								<br/>Email:trongnhan8150@gmail.com<br/>SDT:0933498976</em></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="footer">
                      <p>Copyright &copy; Nathan Le or Le Trong Nhan
                      | Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
    )
}
