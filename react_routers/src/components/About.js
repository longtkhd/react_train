import React, { Component } from 'react';
import tablesetting from './../imgs/tablesetting.jpg';
import tablesetting2 from './../imgs/tablesetting2.jpg'
class About extends Component {

    render() {
        return (
            <div className="content mx-auto">
                <div className="content1 row">
                    <div className="imgs col-6  d-none d-sm-inline ">
                        <img className="round" src={tablesetting} alt="" width={600} height={750} />
                    </div>
                    <div className="text  imgs col-12 col-sm-6 ">
                        <h1>About Catering</h1> <br />
                        <h5>Trandition since 1889</h5>
                        <p>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing
                          elit consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor
                          in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use<span className="season">Season</span> ingredients </p>
                        <p className="color_text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                          mollit anim id est laborum
                          consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut
                          enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="content1 row">
                    <div className="text imgs  col-12 col-sm-6">
                        <h1>Our Menu</h1> <br />
                        <h4>Bread Basket</h4>
                        <p className="color_text font">Assortment of fresh baked fruit breads and muffins 5.50</p>
                        <br />
                        <h4>Honey Almond Granola with Fruits</h4>
                        <p className="color_text font">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
                        <br />
                        <h4>Belgian Waffle</h4>
                        <p className="color_text font">anilla flavored batter with malted flour 7.50</p>
                        <br />
                        <h4>Scrambled eggs</h4>
                        <p className="color_text font">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
                        <br />
                        <h4>Blueberry Pancakes</h4>
                        <p className="color_text font">With syrup, butter and lots of berries 8.50</p>
                    </div>
                    <div className="imgs col-12 col-sm-6">
                        <img className="round" src={tablesetting2} alt="" width={600} height={750} />
                    </div>
                </div>
                <div className="content2 ">
                </div></div>

        );
    }
}

export default About;