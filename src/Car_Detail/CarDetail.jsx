import React from "react";

export const  CarDetail = () => {
    return(<>
    <div id="main" class="alt">

    <section id="one">
        <div class="inner">
            <header class="major">
                <h1>Lorem ipsum dolor sit amet</h1>
            </header>

            <div class="row">
                <div class="col-md-6">
                    <img src="../src/assets/images/product-1-720x480.jpg" class="img-responsive" alt=""/>
                </div>

                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-4 col-xs-6"><img src="../src/assets/images/product-1-720x480.jpg" class="img-responsive" alt=""/></div>
                        <div class="col-md-4 col-xs-6"><img src="../src/assets/images/product-2-720x480.jpg" class="img-responsive" alt=""/></div>
                        <div class="col-md-4 col-xs-6"><img src="../src/assets/images/product-3-720x480.jpg" class="img-responsive" alt=""/></div>

                        <div class="col-md-4 col-xs-6"><img src="../src/assets/images/product-4-720x480.jpg" class="img-responsive" alt=""/></div>
                        <div class="col-md-4 col-xs-6"><img src="../src/assets/images/product-5-720x480.jpg" class="img-responsive" alt=""/></div>
                        <div class="col-md-4 col-xs-6"><img src="../src/assets/images/product-6-720x480.jpg" class="img-responsive" alt=""/></div>
                    </div>

                    <br/>

                    <h2><del>$11 999</del> $11 779</h2>
                </div>
            </div>

            <br/>

            <form action="#">
                <div class="fields">
                    <div class="field quarter">
                        <label>Type</label>
                         
                        <input type="text" readonly value="Used vehicle"/>
                    </div>

                    <div class="field quarter">
                        <label>Make</label>
                         
                        <input type="text" readonly value="Lorem ipsum dolor sit"/>
                    </div>

                    <div class="field quarter">
                        <label>Model</label>
                         
                        <input type="text" readonly value="Lorem ipsum dolor sit"/>
                    </div>

                    <div class="field quarter">
                        <label>First registration</label>
                         
                        <input type="text" readonly value="05/2010"/>
                    </div>

                    <div class="field quarter">
                        <label>Mileage</label>
                         
                        <input type="text" readonly value="5000 km"/>
                    </div>

                    <div class="field quarter">
                        <label>Fuel</label>
                         
                        <input type="text" readonly value="Diesel"/>
                    </div>

                    <div class="field quarter">
                        <label>Engine size</label>
                         
                        <input type="text" readonly value="1800 cc"/>
                    </div>

                    <div class="field quarter">
                        <label>Power</label>
                         
                        <input type="text" readonly value="85 hp"/>
                    </div>

                    <div class="field quarter">
                        <label>Gearbox</label>
                         
                        <input type="text" readonly value="Manual"/>
                    </div>

                    <div class="field quarter">
                        <label>Number of seats</label>
                         
                        <input type="text" readonly value="4"/>
                    </div>

                    <div class="field quarter">
                        <label>Doors</label>
                         
                        <input type="text" readonly value="2/3"/>
                    </div>

                    <div class="field quarter">
                        <label>Color</label>
                         
                        <input type="text" readonly value="black"/>
                    </div>
                </div>
            </form>
        </div>
    </section>

    <section id="contact">
        <div class="inner">
            <section>
                <header class="major">
                    <h2>Vehicle Description</h2>
                </header>

                <p>- Colour coded bumpers<br/>- Tinted glass<br/>- Immobiliser<br/>- Central locking - remote<br/>- Passenger airbag<br/>- Electric windows<br/>- Rear head rests<br/>- Radio<br/>- CD player<br/>- Ideal first car<br/>- Warranty<br/>- High level brake light<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>

            <section class="split">
                <section>
                    <div class="contact-method">
                        <span class="icon alt fa-user"></span>
                        <h3>Name</h3>
                        <span>John Smith</span>
                    </div>
                </section>

                <section>
                    <div class="contact-method">
                        <span class="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">contact@company.com</a>
                    </div>
                </section>
                <section>
                    <div class="contact-method">
                        <span class="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>+1 333 4040 5566</span>
                    </div>
                </section>

                <section>
                    <div class="contact-method">
                        <span class="icon alt fa-phone"></span>
                        <h3>Mobile Phone</h3>
                        <span>+1 333 5550 3366</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
</div>
    </>
    );
};