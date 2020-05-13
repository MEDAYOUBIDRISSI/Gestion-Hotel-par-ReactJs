import React from 'react'

export default function Restau_index() {
    return (
        <div class="section padding-top-bottom z-bigger">	
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 align-self-center">
                        <div class="subtitle with-line text-center mb-4">main dishes</div>
                        <h3 class="text-center padding-bottom-small">Our menu</h3>
                    </div>
                    <div class="section clearfix"></div>
                    <div class="col-md-6" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
                        <div class="restaurant-box">
                            <img src="img/food1.jpg" alt=""/>
                            <h6><span>imported salmon steak</span></h6>
                            <p><span>salmon / veggies / oil</span></p>
                            <h5><span>$32</span></h5>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4 mt-md-0" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.4s">
                        <div class="restaurant-box">
                            <img src="img/food2.jpg" alt=""/>
                            <h6><span>tuna roast source</span></h6>
                            <p><span>tuna / potatoes / rice</span></p>
                            <h5><span>$47</span></h5>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
                        <div class="restaurant-box">
                            <img src="img/food3.jpg" alt=""/>
                            <h6><span>salted fried chicken</span></h6>
                            <p><span>chicken / olive oil / salt</span></p>
                            <h5><span>$26</span></h5>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.4s">
                        <div class="restaurant-box">
                            <img src="img/food4.jpg" alt=""/>
                            <h6><span>crab with curry sources</span></h6>
                            <p><span>crab / potatoes / rice</span></p>
                            <h5><span>$64</span></h5>
                        </div>
                    </div>
                </div>
            </div>	
        </div>
    )
}
