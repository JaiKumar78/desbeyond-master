import React from "react";
import './home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <img src="../src/assets/images/logo2.png" alt="title" className="logo"/>
                <div className="head">
                    <h1>DESBEYOND.</h1>
                    <p>Open a world of words in your hands. Transform the lifeless pages into unique living narratives.</p>
                </div>
            </div>

            <div className="content">
                <div className="works">
                    <img src="../src/assets/images/home-1.png" alt="works"/>
                    <div>
                       <h4>Book Design</h4> 
                       <p>Get lost in the compelling world of endless possibilities.</p>
                    </div>
                </div>
                

                <div className="works">
                    <img src="../src/assets/images/home-2.png" alt="works"/>
                    <div>
                       <h4>Magazine Cover Design</h4> 
                       <p>Unleash your imagination and explore the unknown realms.</p>
                    </div>
                </div>

                <div className="works">
                    <img src="../src/assets/images/home-3.png" alt="works"/>
                    <div>
                       <h4>Logo Designs</h4> 
                       <p>Embark on an adventurous journey through a maze of tales.</p>
                    </div>
                </div>

                <div className="works">
                    <img src="../src/assets/images/home-4.png" alt="works"/>
                    <div>
                       <h4>Brochure Designs</h4> 
                       <p>Navigate through the intricate lanes of fascinating stories.</p>
                    </div>
                </div>

                <div className="works">
                    <img src="../src/assets/images/home-5.png" alt="works"/>
                    <div>
                       <h4>E-Books</h4> 
                       <p>Elevate your reading experience with our premium selection.</p>
                    </div>
                </div>

                <div className="works">
                    <img src="../src/assets/images/home-6.png" alt="works"/>
                    <div>
                       <h4>Illustrations</h4> 
                       <p>Experience the richness of every variant, every detail.</p>
                    </div>
                </div>
            </div>

            <div className="moreinfo">
                <p>Ready for a unique bookish journey? Venture beyond the ordinary with us.</p>
                <div>
                    <span className="span1">Begin Now</span>
                    <span className="span2">Learn more</span>
                </div>
            </div>

            <div className="cardstab">
                <div className="card1 cards">
                    <div><img src="../src/assets/images/cont-2.png" alt="logo" 
                    className="cardimg"/></div>
                    <div className="cardinfo">
                        <p className="cardinfo1">Customize Every Chapter, Paint Your Own Literary World</p>
                        <p className="mininfo">Break the conformities and craft your own narrative canvas. It's weaving stories, but with a twist!</p>
                    </div>
                </div>

                <div className="card2 cards">
                    <div className="cardinfo">
                        <p className="cardinfo2">Unleash The Genius, Become The Author You Admire</p>
                        <p className="mininfo">This isn't about moving with the flow. It's about creating the flow. Release the author within you.</p>
                    </div>
                    <div><img src="../src/assets/images/cont-3.png" alt="logo" 
                    className="cardimg"/></div>
                </div>
            </div>

            <div className="remainder">
                <h2>Stay Updated</h2>
                <p>Don't miss out on any tale. Sign-up for our newsletter and keep the adventure alive.</p>
            </div>
            <hr />
            <div className="footercol-4">
                <h4>We also provide services in</h4>
                <div className="lang">
                    <div className="top-lang">
                        <img src="https://via.placeholder.com/150" alt="" />
                        <img src="https://via.placeholder.com/150" alt="" />
                        <img src="https://via.placeholder.com/150" alt="" />
                    </div>
                    <div className="bot-lang">
                        <img src="https://via.placeholder.com/150" alt="" />
                        <img src="https://via.placeholder.com/150" alt="" />
                        <img src="https://via.placeholder.com/150" alt="" />
                    </div>
                </div>
                <p>Tamil, Malayalam, Kanada, Hindi, Telugu, Marati,
                    English, French, German, Spanish,..</p>
            </div>
        </div>
    )
}

export default Home