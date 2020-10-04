import React from 'react';

class Contact extends React.Component{
    componentDidMount(){
        const scrpit2 = document.createElement("script");
        scrpit2.id = "cursorprv2";
        scrpit2.src = 'assets/js/cursorPreview.js';
        scrpit2.async = true;
        document.body.appendChild(scrpit2);

        const scrpit3 = document.createElement("script");
        scrpit3.id = "page2";
        scrpit3.src = 'assets/js/pageloadinggsap.js';
        scrpit3.async = true;
        document.body.appendChild(scrpit3);
    }
    componentWillUnmount(){
        document.body.removeChild(document.querySelector("#cursorprv2"));
        document.body.removeChild(document.querySelector("#page2"));
    }
    render(){
        return(
            <div>
            <div className="whitespace"></div>

            <div className="container">
                <div className="hero-content">
                        <br/><br/>

                        <div className="row">
                            <div className="col-lg-8">

                                    <h3 className="wow fadeInUp" data-wow-delay="1s">Say hello <span role="img" aria-labelledby="">👋</span></h3><br/>
                                    <p className="wow fadeInUp" data-wow-delay="1.2s">Follow my social media or leave a message for me now !!</p>

                            </div>
                        </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                        <div className="col-lg-8">
                            <form name="contact-form" id="contact-form" netlify>

                            <ul>

                            <li className="wow fadeInUp" data-wow-delay="1.4s">
                                    <label htmlFor="contact-name">Name :</label>
                                    <div className="textarea">
                                        <input type="text" name="contact-name" id="contact-name"/>
                                    </div>
                            </li>

                            <li className="wow fadeInUp" data-wow-delay="1.6s">
                                    <label htmlFor="contact-email">Email :</label>
                                    <div className="textarea">
                                        <input type="email" name="contact-email" id="contact-email"/>
                                    </div>
                            </li>

                            <li className="wow fadeInUp" data-wow-delay="1.6s">
                                    <label htmlFor="contact-project">Messagee :</label>
                                    <div className="textarea">
                                        <textarea type="email" name="contact-project" id="contact-project" rows="6">
                                        </textarea>
                                    </div>
                            </li>

                            </ul>

                            <button type="submit" name="contact-submit" id="contact-submit" className="send wow fadeInUp">Send Message</button>

                            </form>
                        </div>
                </div>
            </div>


            <div className="whitespace"></div>
        </div>
        )
    }
}
export default Contact