
import './style.css'

function HomePage() {

    return (
        <>
            <div className="header">
                <div className="header1">
                    <div className="child1">
                        <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="" className="logo"></img>
                    </div>

                    <div className="child1">
                        <p className="p1">MEN</p>
                    </div>


                    <div className="child1">
                        <p className="p1">WOMEN</p>
                    </div>


                    <div className="child1">
                        <p className="p1">MOBILE COVERS</p>
                    </div>


                </div>

                <div className="header2">
                    <div className="child2">
                        <div className="search">
                            <p className="p2">Search By Products</p>
                        </div>
                    </div>

                    <div className="child2">
                        <p className="p3 extra1" >LOGIN</p>
                    </div>

                    <div className="child2">
                        <img src="data:image/png;base64,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"
                            alt="" className="img1"></img>
                    </div>

                    <div className="child2">
                        <img src="https://img.icons8.com/?size=80&id=AgpNCyq2TYrv&format=png" alt="" className="img2"></img>
                    </div>

                </div>

            </div>


            <hr></hr>

            <div className="nav">
                <div className="child3">DEALS HUB</div>
                <div className="child3">MEN</div>
                <div className="child3">WOMEN</div>
                <div className="child3">WINTERWEAR</div>
                <div className="child3">ACCESSORIES</div>
                <div className="child3">SNEAKERS</div>
                <div className="child3">BWKF X GOOGLE</div>
                <div className="child3">BEWAKOOF AIR</div>
                <div className="child3">HEAVY DUTY</div>
                <div className="child3">CUSTOMIZATION</div>
                <div className="child3">OFFICIAL MEACH</div>
                <div className="child3">PLUS SIZE</div>
            </div>

            <div className="container1">

                <div className="child4">
                    <img src="https://images.bewakoof.com/uploads/grid/app/Cyber-Monday-1x1-HC-Banner-1733024292.jpg" alt=""
                        className="img3"></img>
                </div>

                <div className="child4">
                    <img src="https://images.bewakoof.com/uploads/grid/app/CYBER-1x1-winterwear-commo1-1733024230.jpg" alt=""
                        className="img3"></img>
                </div>

                <div className="child4">
                    <img src="https://images.bewakoof.com/uploads/grid/app/1x1-chill-guy-1732974444.jpg" alt="" className="img3"></img>
                </div>

                <div className="child4">
                    <img src="https://images.bewakoof.com/uploads/grid/app/HC-1x1-pick-any-3-common-1733024158.jpg" alt=""
                        className="img3"></img>
                </div>

                <div className="child4">
                    <img src="https://images.bewakoof.com/uploads/grid/app/HC-1x1-pick-any-2-common-1733024158.jpg" alt=""
                        className="img3"></img>
                </div>

                <div className="child4">
                    <img src="https://images.bewakoof.com/uploads/grid/app/HC-1x1-jogger-common--1--1733024156.jpg" alt=""
                        className="img3"></img>
                </div>

                <div className="child4">
                    <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-1x1-common--1---1--1732885618.jpg" alt=""
                        className="img3"></img>
                </div>


            </div>


            <div className="end">
                <p style={{textAlign: 'center'}}>Sale Ends in:</p>
                <p style={{textAlign: 'center',fontSize: '1.2rem'}}>12: 30: 00</p>
                <pre style={{textAlign: 'center',marginTop: '-2vh', opacity: '0.5'}}>hours  mins  secs</pre>
            </div> 


            <div className="container2">

                <div className="child5">
                    <img src="https://images.bewakoof.com/uploads/grid/app/ShopHer-Desktop-Strip-1732548573.gif" alt=""
                        className="img4"></img>
                </div>

                <div className="child5">
                    <img src="https://images.bewakoof.com/uploads/grid/app/ShopHim-Desktop-Strip-1732548572.gif" alt=""
                        className="img4"></img>
                </div>

            </div>

            
            <div className="hot">
                <p style={{textAlign: 'center', fontSize: '1.5rem'}}>Hots picks on sale</p>
            </div>


            <div className="container3">

                <div className="child6">
                    <img src="https://images.bewakoof.com/uploads/grid/app/Hoodies-and-sweatshirts-banner-men--1--1732597306.jpg"
                        alt="" className="img5"></img>
                </div>

                <div className="child6">
                    <img src="https://images.bewakoof.com/uploads/grid/app/Hoodies-and-sweatshirts-banner-women--1--1732597307.jpg"
                        alt="" className="img5"></img>
                </div>

                <div className="child6">
                    <img src="https://images.bewakoof.com/uploads/grid/app/3x4-Jackets-banner-common--2--1732597329.jpg" alt=""
                        className="img5"></img>
                </div>

                <div className="child6">
                    <img src="https://images.bewakoof.com/uploads/grid/app/3x4-Jackets-banner-Graphic-Printed-OS-Tshirts-Common--1--1732597307.jpg"
                        alt="" className="img5"></img>
                </div>

                <div className="child6">
                    <img src="https://images.bewakoof.com/uploads/grid/app/1x1-Pyjamas-banner-Common--2--1732597330.jpg" alt=""
                        className="img5"></img>
                </div>

            </div>


            <div className="shop">
                <p style={{textAlign: 'center',fontSize: '1.5rem'}}>Shop by Category- Men</p>
            </div>


            <div className="container4">

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/os-1731392916.jpg" alt="" className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/hoodies-1731393002.jpg" alt="" className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/joggers-1731393485.jpg" alt="" class="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/jeans-1731393265.jpg" alt="" className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Classic-Fit-Tshirts-3-1729005515.jpg"
                        alt="" className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/Full-sleeve-T-shirts-1731393001.jpg" alt=""
                        className="img6"></img>
                </div>

            </div>

            <div className="container5">

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/sweatshirts-1731393137.jpg" alt="" className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/cargos-1731393266.jpg" alt="" className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/sweater-1731393137.jpg" alt="" className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/pants-1731393265.jpg" alt="" className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/pyjamas-1731393488.jpg" alt="" className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/jackets-1731393264.jpg" alt="" className="img6"></img>
                </div>

            </div>


            <div className="container6">

                <div className="child8">
                    <img src="https://images.bewakoof.com/uploads/grid/app/shirts-1731393136.jpg" alt="" className="img7"></img>
                </div>

                <div className="child8">
                    <img src="https://images.bewakoof.com/uploads/grid/app/sliders-1731393266.jpg" alt="" className="img7"></img>
                </div>

            </div>

            
            <div className="shop">
                <p style={{textAlign: 'center', fontSize: '1.5rem'}}>Shop by Category- Women</p>
            </div>

            <div className="container7">

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-OversizedT-shirts-Women-1731312295.jpg"
                        alt="" className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Hoodies-Women-1731312297.jpg" alt=""
                        className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Jeans-Women-1731312296.jpg" alt=""
                        className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Cargo-Women-1731312204.jpg" alt=""
                        className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-BoyfriendT-shirts-Women-1731312205.jpg"
                        alt="" className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-FullSleeveT-shirts-Women-1731312204.jpg"
                        alt="" className="img6"></img>
                </div>

            </div>


            <div className="container8">
                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Sweatshirts-Women-1731312430.jpg" alt=""
                        className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-ParachutePants-Women-1731312295.jpg" alt=""
                        className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Joggers-Women-1731312296.jpg" alt=""
                        className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Tops-Women-1731312430.jpg" alt=""
                        className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Pyjamas-1731315513.jpg"
                        alt="" className="img6"></img>
                </div>

                <div className="child7">
                    <img src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Co-ords-1731315514.jpg"
                        alt="" className="img6"></img>
                </div>
            </div>

            <div className="container9">

                <div clasNames="child8">
                    <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Dresses-Women-1731312203.jpg" alt=""
                        className="img7"></img>
                </div>

                <div className="child8">
                    <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Jackets-Women-1731312297.jpg" alt=""
                        className="img7"></img>
                </div>

                <div className="child8">
                    <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Shirts-Women-1731312431.jpg" alt=""
                        className="img7"></img>
                </div>

                <div className="child8">
                    <img src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Desktop--2--1729591414.jpg"
                        alt="" className="img7"></img>
                </div>

            </div>


            <div className="container10">
                <img src="https://images.bewakoof.com/uploads/grid/app/Winterwear2-Thin-banner-Desktop-Cyber-monday-1733022627.jpg"
                    alt="" className="img8"></img>
            </div>

            <div class="shop">
                <p style={{textAlign: 'center', fontSize: '1.5rem'}}>Hoodies & Sweatshirts Starts at Rs 699</p>
            </div>



            <div className="container11">

                <div className="child9">
                    <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-gardenia-sea-things-graphic-printed-oversized-hoodies-654547-1732283913-1.jpg&w=1920&q=75"
                        alt="" className="img9"></img>
                    <span className="p4">Bewakoof Heavy Duty®1.0</span><br></br>
                    <span className="p5">Men's Gardenia Sea things Graphic Prin...</span><br></br>
                    <span className="p6">₹1399</span>
                    <span className="p7"><del>₹2999</del></span>
                    <span className="p8">53% off</span>
                    <span className="heart"><img src="./Wishlist.png" alt="" className="img10"></img></span>
                </div>

                <div className="child9">
                    <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-beige-oversized-sweatshirt-644682-1732791934-1.jpg&w=1920&q=75"
                        alt="" className="img9"></img>
                    <span className="p4">Bewakoof Heavy Duty®1.0</span><br></br>
                    <span className="p5">Men's Beige Oversized Sweatshirt</span><br></br>
                    <span className="p6">₹999</span>
                    <span className="p7"><del>₹2099</del></span>
                    <span className="p8">52% off</span>
                    <span className="heart"><img src="./Wishlist.png" alt="" className="img10"></img></span>
                </div>

                <div className="child9">
                    <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fwomen-s-green-sweatshirt-640991-1732794338-1.jpg&w=1920&q=75"
                        alt="" className="img9"></img>
                    <span className="p4">Bewakoof®</span><br></br>
                    <span className="p5">Women's Green Sweatshirt</span><br></br>
                    <span className="p6">₹799</span>
                    <span className="p7"><del>₹2149</del></span>
                    <span className="p8">62% off</span>
                    <span className="heart"><img src="./Wishlist.png" alt="" className="img10"></img></span>
                </div>

                <div className="child9">
                    <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fwomen-s-black-first-beaglehood-graphic-printed-hoodies-648813-1732794346-1.jpg&w=1920&q=75"
                        alt="" className="img9"></img>
                    <span className="p4">Bewakoof®</span><br></br>
                    <span className="p5">Women's Black First Beaglehood Graphi...</span><br></br>
                    <span className="p6">₹1199</span>
                    <span className="p7"><del>₹3199</del></span>
                    <span className="p8">62% off</span>
                    <span className="heart"><img src="./Wishlist.png" alt="" className="img10"></img></span>
                </div>

                <div className="child9">
                    <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-gardenia-oversized-hoodie-499058-1731939910-1.jpg&w=1920&q=75"
                        alt="" className="img9"></img>
                    <span className="p4">Bewakoof Heavy Duty®1.0</span><br></br>
                    <span className="p5">Men's Gardenia Oversized Hoodies</span><br></br>
                    <span className="p6">₹1299</span>
                    <span className="p7"><del>₹2999</del></span>
                    <span className="p8">56% off</span>
                    <span className="heart"><img src="./Wishlist.png" alt="" className="img10"></img></span>
                </div>

            </div>

            <div className="explore">
                <a href="">Explore All</a>
            </div>

            <div className="jacket">
                <p style={{textAlign: 'center', fontSize: '1.1rem', marginTop: '5vh'}}>JJACKET JACKPOT: UP TO 60% OFF</p>
            </div>


            <div className="container12">

                <div className="child9">
                    <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fwomen-s-green-oversized-gilet-jacket-640989-1732786653-1.jpg&w=1920&q=75"
                        alt="" className="img9"></img>
                    <span className="p4">Bewakoof®</span><br></br>
                    <span className="p5">Women's Green Oversized Gilet Jacket</span><br></br>
                    <span className="p6">₹1499</span>
                    <span className="p7"><del>₹3249</del></span>
                    <span className="p8">53% off</span>
                    <span className="heart"><img src="./Wishlist.png" alt="" className="img10"></img></span>
                </div>

                <div className="child9">
                    <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fwomen-s-pink-oversized-puffer-jacket-640982-1732786688-1.jpg&w=1920&q=75"
                        alt="" className="img9"></img>
                    <span className="p4">Bewakoof®</span><br></br>
                    <span className="p5">Women's Pink Oversized Puffer Jacket</span><br></br>
                    <span className="p6">₹1699</span>
                    <span className="p7"><del>₹4049</del></span>
                    <span className="p8">58% off</span>
                    <span className="heart"><img src="./Wishlist.png" alt="" className="img10"></img></span>
                </div>

                <div className="child9">
                    <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fwomen-s-black-puffer-reversible-jacket-499009-1670255534-1.jpg&w=1920&q=75"
                        alt="" className="img9"></img>
                    <span className="p4">Bewakoof®</span><br></br>
                    <span className="p5">Women's Black & Sage Reversible Super...</span><br></br>
                    <span className="p6">₹1999</span>
                    <span className="p7"><del>₹4499</del></span>
                    <span className="p8">55% off</span>
                    <span className="heart"><img src="./Wishlist.png" alt="" className="img10"></img></span>
                </div>

                <div className="child9">
                    <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-black-windcheater-368587-1656184892-1.jpg&w=1920&q=75"
                        alt="" className="img9"></img>
                    <span className="p4">Bewakoof Air®1.0</span><br></br>
                    <span className="p5">Men's Black Windcheater Jacket</span><br></br>
                    <span className="p6">₹1199</span>
                    <span className="p7"><del>₹2799</del></span>
                    <span className="p8">57% off</span>
                    <span className="heart"><img src="./Wishlist.png" alt="" className="img10"></img></span>
                </div>

                <div className="child9">
                    <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Ft320%2Fmen-s-steel-grey-solid-windcheater-aw-22-491988-1663254962-1.jpg&w=1920&q=75"
                        alt="" className="img9"></img>
                    <span className="p4">Bewakoof®1.0</span><br></br>
                    <span className="p5">Men's Steel Grey Printed Windcheater Jac...</span><br></br>
                    <span className="p6">₹2499</span>
                    <span className="p7"><del>₹2999</del></span>
                    <span className="p8">16% off</span>
                    <span className="heart"><img src="./Wishlist.png" alt="" className="img10"></img></span>
                </div>

            </div>

            <div className="explore">
                <a href="">Explore All</a>
            </div>

            <div className="container13">

                <div className="child10">
                    <img src="https://images.bewakoof.com/uploads/grid/app/OOFsale-Sept-LandingPage-desktop-stealworthy-header--1--1733022461.jpg"
                        alt="" className="img10"></img>
                </div>


                <div className="child11">

                    <div className="child12">
                        <div className="child13">
                            <img src="https://images.bewakoof.com/uploads/grid/app/240x400-msite-Desk---CateggoryBox-common-OS-Tshirts-1732700061.jpg"
                                alt="" className="img11"></img>
                        </div>

                        <div className="child13">
                            <img src="https://images.bewakoof.com/uploads/grid/app/240x400-msite-Desk---CateggoryBox-common-Joggers-1732700033.jpg"
                                alt="" className="img11"></img>
                        </div>

                        <div className="child13">
                            <img src="https://images.bewakoof.com/uploads/grid/app/240x400-msite-Desk---CateggoryBox-common-Min-75--Off-1732700033.jpg"
                                alt="" className="img11"></img>
                        </div>

                        <div className="child13">
                            <img src="https://images.bewakoof.com/uploads/grid/app/240x400-msite-Desk---CateggoryBox-common-Classic-Fit-Tshirts-1732700013.jpg"
                                alt="" className="img11"></img>
                        </div>

                        <div className="child13">
                            <img src="https://images.bewakoof.com/uploads/grid/app/240x400-msite-Desk---CateggoryBox-common-Cargo-Pants-1732700034.jpg"
                                alt="" className="img11"></img>
                        </div>

                        <div className="child13">
                            <img src="https://images.bewakoof.com/uploads/grid/app/240x400-msite-Desk--CateggoryBox-common-OS-Tshirts-1732700060.jpg"
                                alt="" className="img11"></img>
                        </div>


                    </div>

                    <div className="child12">
                        <div className="child13">
                            <img src="https://images.bewakoof.com/uploads/grid/app/240x400-msite-Desk---CateggoryBox-common-Pajamas--1--1732870051.jpg"
                                alt="" className="img11"></img>
                        </div>

                        <div className="child13">
                            <img src="https://images.bewakoof.com/uploads/grid/app/240x400-msite-Desk---CateggoryBox-common-Shirts-1732700035.jpg"
                                alt="" className="img11"></img>
                        </div>

                        <div className="child13">
                            <img src="https://images.bewakoof.com/uploads/grid/app/240x400-msite-Desk--CateggoryBox-common-Classic-Fit-Tshirts-1732700061.jpg"
                                alt="" className="img11"></img>
                        </div>

                        <div className="child13">
                            <img src="https://images.bewakoof.com/uploads/grid/app/240x400-msite-Desk---CateggoryBox-common-OS-Tshirts--1732700013.jpg"
                                alt="" className="img11"></img>
                        </div>

                        <div className="child13">
                            <img src="https://images.bewakoof.com/uploads/grid/app/240x400-msite-Desk---CateggoryBox-common-Winterwear-1732700015.jpg"
                                alt="" className="img11"></img>
                        </div>

                        <div className="child13">
                            <img src="https://images.bewakoof.com/uploads/grid/app/240x400-msite-Desk--CateggoryBox-Tops-1732701033.jpg"
                                alt="" className="img11"></img>
                        </div>

                    </div>
                </div>
            </div>



        </>
    )

}

export default HomePage