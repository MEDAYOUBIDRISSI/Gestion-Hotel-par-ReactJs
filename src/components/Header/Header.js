import React from 'react'

export default function Header() {
    return (
      <div>
            <div class="loader">
		<div class="loader__figure"></div>
	</div>

	<svg class="hidden">
		<svg id="icon-nav" viewBox="0 0 152 63">
			<title>navarrow</title>
			<path d="M115.737 29L92.77 6.283c-.932-.92-1.21-2.84-.617-4.281.594-1.443 1.837-1.862 2.765-.953l28.429 28.116c.574.57.925 1.557.925 2.619 0 1.06-.351 2.046-.925 2.616l-28.43 28.114c-.336.327-.707.486-1.074.486-.659 0-1.307-.509-1.69-1.437-.593-1.442-.315-3.362.617-4.284L115.299 35H3.442C2.032 35 .89 33.656.89 32c0-1.658 1.143-3 2.552-3H115.737z"/>
		</svg>
	</svg>
    
	<nav id="menu-wrap" class="menu-back cbp-af-header">
		<div class="menu-top background-black">
			<div class="container">
				<div class="row">
					<div class="col-6 px-0 px-md-3 pl-1 py-3">
						<span class="call-top">call us:</span> <a href="#" class="call-top">(381) 60 422 4256</a>
					</div>
					<div class="col-6 px-0 px-md-3 py-3 text-right">
						<a href="#" class="social-top">fb</a>
						<a href="#" class="social-top">tw</a>
						<div class="lang-wrap">
							eng
							<ul>
								<li><a href="#">ger</a></li>
								<li><a href="#">rus</a></li>
								<li><a href="#">ser</a></li>
							</ul>
						</div>
					</div>
				</div>	
			</div>		
		</div>
		<div class="menu">
			<a href="index.html" >
				<div class="logo">
					<img src="img/logo.png" alt=""/>
				</div>
			</a>
			<ul>
				<li>
					<a href="#" >home</a>
					<ul>
						<li><a href="index.html">Flip Slider</a></li>
						<li><a href="index-1.html">Video Background</a></li>
						<li><a href="index-2.html">Moving Image</a></li>
					</ul>
				</li>
				<li>
					<a href="#" >rooms</a>
					<ul>
						<li><a href="rooms.html">Our Rooms</a></li>
						<li><a href="rooms-gallery.html">Room Gallery</a></li>
						<li><a href="rooms-video.html">Room Video</a></li>
					</ul>
				</li>
				<li>
					<a href="#" >pages</a>
					<ul>
						<li><a href="explore.html">Explore</a></li>
						<li><a href="search.html">Search</a></li>
						<li><a href="tandc.html">Terms &amp; Conditions</a></li>
						<li><a href="services.html">Services</a></li>
						<li><a href="restaurant.html">Restaurant</a></li>
						<li><a href="testimonials.html">Testimonials</a></li>
						<li><a href="gallery.html">Gallery</a></li>
					</ul>
				</li>
				<li>
					<a href="about.html">about us</a>
				</li>
				<li>
					<a href="blog.html">news</a>
				</li>
				<li>
					<a class="curent-page" href="contact.html">contact</a>
				</li>
				<li>
					<a href="search.html"><span>book now</span></a>
				</li>
			</ul>
		</div>
	</nav>
		

	<div class="section big-55-height over-hide z-bigger">
	
		<div class="parallax parallax-top" style={{backgroundImage: `url(img/move-img.jpg)`}}></div>
		<div class="dark-over-pages"></div>
	
		<div class="hero-center-section pages">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-12 parallax-fade-top">
						<div class="hero-text">Get in Touch</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="section padding-top-bottom-smaller background-dark-2 over-hide">		
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center">	
					<h5 class="color-grey">A new dimension of luxury.</h5>
					<p class="color-white mt-3 mb-3"><em>our presentation, 0:48 min</em></p>
					<a href="https://vimeo.com/54851233" class="video-button" data-fancybox><i class="fa fa-play"></i></a>
				</div>
			</div>
		</div>	
	</div>
	
	<div class="section padding-top z-bigger">
		<div class="container">
			<div class="row justify-content-center padding-bottom-smaller">
				<div class="col-md-8">
					<div class="subtitle with-line text-center mb-4">get in touch</div>
					<h3 class="text-center padding-bottom-small">drop us a line</h3>
				</div>
				<div class="section clearfix"></div>
				<div class="col-md-4 ajax-form">
					<input name="name" type="text" placeholder="Your Name: *" autocomplete="off"/>
				</div>
				<div class="col-md-4 mt-4 mt-md-0 ajax-form">
					<input name="email" type="text"  placeholder="E-Mail: *" autocomplete="off"/>
				</div>
				<div class="section clearfix"></div>
				<div class="col-md-8 mt-4 ajax-form">
					<textarea name="message" placeholder="Tell Us Everything"></textarea>
				</div>
				<div class="section clearfix"></div>
				<div class="col-md-8 mt-3 ajax-checkbox">
					<ul class="list">
						<li class="list__item">
							<label class="label--checkbox">
								<input type="checkbox" class="checkbox"/>
								collect my details through this form
							</label>
						</li>
					</ul>
				</div>
				<div class="section clearfix"></div>
				<div class="col-md-8 mt-3 ajax-form text-center">
					<button class="send_message" id="send" data-lang="en"><span>submit</span></button>
				</div>
				<div class="section clearfix"></div>
				<div class="col-md-8 padding-top-bottom">
					<div class="sep-line"></div>
				</div>
				<div class="section clearfix"></div>
				<div class="col-md-6 col-lg-4">
					<div class="address">
						<div class="address-in text-left">
							<p class="color-black">Address:</p>
						</div>
						<div class="address-in text-right">
							<p>Avenue Str. 328</p>
						</div>
					</div>
					<div class="address">
						<div class="address-in text-left">
							<p class="color-black">City:</p>
						</div>
						<div class="address-in text-right">
							<p>Thessaloniki</p>
						</div>
					</div>
					<div class="address">
						<div class="address-in text-left">
							<p class="color-black">Check-In:</p>
						</div>
						<div class="address-in text-right">
							<p>14:00 pm</p>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="address">
						<div class="address-in text-left">
							<p class="color-black">Phone:</p>
						</div>
						<div class="address-in text-right">
							<p>+21 60 374 7537</p>
						</div>
					</div>
					<div class="address">
						<div class="address-in text-left">
							<p class="color-black">Email:</p>
						</div>
						<div class="address-in text-right">
							<p>info@hotel.com</p>
						</div>
					</div>
					<div class="address">
						<div class="address-in text-left">
							<p class="color-black">Check-Out:</p>
						</div>
						<div class="address-in text-right">
							<p>11:00 am</p>
						</div>
					</div>
				</div>
				<div class="section clearfix"></div>
				<div class="col-md-8 text-center mt-5" data-scroll-reveal="enter bottom move 50px over 0.7s after 0.2s">
					<p class="mb-0"><em>available at: 8am - 10pm</em></p>
					<h2 class="text-opacity">+21 60 374 7537</h2>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-8">
					<div class="subscribe-home">
						<input type="text" placeholder="your email here"/>
						<button data-lang="en">subscribe</button>
					</div>
				</div>
			</div>
		</div>	
	</div>
	
	<div class="section">
		<div id="owl-sep-2" class="owl-carousel owl-theme">								 
			<div class="item">	
				<a href="img/gallery/1.jpg" data-fancybox="gallery">							 
					<div class="img-wrap gallery-small">
						<img src="img/gallery/1-s.jpg" alt=""/>
					</div>
				</a>
			</div>								 
			<div class="item">	
				<a href="img/gallery/2.jpg" data-fancybox="gallery">							 
					<div class="img-wrap gallery-small">
						<img src="img/gallery/2-s.jpg" alt=""/>
					</div>
				</a>
			</div>								 
			<div class="item">	
				<a href="img/gallery/3.jpg" data-fancybox="gallery">							 
					<div class="img-wrap gallery-small">
						<img src="img/gallery/3-s.jpg" alt=""/>
					</div>
				</a>
			</div>								 
			<div class="item">	
				<a href="img/gallery/4.jpg" data-fancybox="gallery">							 
					<div class="img-wrap gallery-small">
						<img src="img/gallery/4-s.jpg" alt=""/>
					</div>
				</a>
			</div>								 
			<div class="item">	
				<a href="img/gallery/5.jpg" data-fancybox="gallery">							 
					<div class="img-wrap gallery-small">
						<img src="img/gallery/5-s.jpg" alt=""/>
					</div>
				</a>
			</div>								 
			<div class="item">	
				<a href="img/gallery/6.jpg" data-fancybox="gallery">							 
					<div class="img-wrap gallery-small">
						<img src="img/gallery/6-s.jpg" alt=""/>
					</div>
				</a>
			</div>								 
			<div class="item">	
				<a href="img/gallery/7.jpg" data-fancybox="gallery">							 
					<div class="img-wrap gallery-small">
						<img src="img/gallery/7-s.jpg" alt=""/>
					</div>
				</a>
			</div>								 
			<div class="item">	
				<a href="img/gallery/8.jpg" data-fancybox="gallery">							 
					<div class="img-wrap gallery-small">
						<img src="img/gallery/8-s.jpg" alt=""/>
					</div>
				</a>
			</div>								 
			<div class="item">	
				<a href="img/gallery/9.jpg" data-fancybox="gallery">							 
					<div class="img-wrap gallery-small">
						<img src="img/gallery/9-s.jpg" alt=""/>
					</div>
				</a>
			</div>								 
			<div class="item">	
				<a href="img/gallery/10.jpg" data-fancybox="gallery">							 
					<div class="img-wrap gallery-small">
						<img src="img/gallery/10-s.jpg" alt=""/>
					</div>
				</a>
			</div>							 
			<div class="item">	
				<a href="img/gallery/1.jpg" data-fancybox="gallery">							 
					<div class="img-wrap gallery-small">
						<img src="img/gallery/1-s.jpg" alt=""/>
					</div>
				</a>
			</div>								 
			<div class="item">	
				<a href="img/gallery/2.jpg" data-fancybox="gallery">							 
					<div class="img-wrap gallery-small">
						<img src="img/gallery/2-s.jpg" alt=""/>
					</div>
				</a>
			</div>								 
			<div class="item">	
				<a href="img/gallery/3.jpg" data-fancybox="gallery">							 
					<div class="img-wrap gallery-small">
						<img src="img/gallery/3-s.jpg" alt=""/>
					</div>
				</a>
			</div>								 
			<div class="item">	
				<a href="img/gallery/4.jpg" data-fancybox="gallery">							 
					<div class="img-wrap gallery-small">
						<img src="img/gallery/4-s.jpg" alt=""/>
					</div>
				</a>
			</div>								 
			<div class="item">	
				<a href="img/gallery/5.jpg" data-fancybox="gallery">							 
					<div class="img-wrap gallery-small">
						<img src="img/gallery/5-s.jpg" alt=""/>
					</div>
				</a>
			</div>										 
		</div>
	</div>
	
	<div class="section padding-top-bottom-small background-black over-hide footer">
		<div class="container">
			<div class="row">
				<div class="col-md-3 text-center text-md-left">
					<img src="img/logo.png" alt=""/>
					<p class="color-grey mt-4">Avenue Street 3284<br/>Thessaloniki</p>
				</div>
				<div class="col-md-4 text-center text-md-left">
					<h6 class="color-white mb-3">information</h6>
					<a href="tandc.html">terms &amp; conditions</a>
					<a href="services.html">services</a>
					<a href="restaurant.html">restaurant</a>
					<a href="testimonials.html">testimonials</a>
					<a href="gallery.html">gallery &amp; images</a>
				</div>
				<div class="col-md-5 mt-4 mt-md-0 text-center text-md-left logos-footer">
					<h6 class="color-white mb-3">about us</h6>
					<p class="color-grey mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
					<img src="img/logos/1.png" alt=""/>
					<img src="img/logos/2.png" alt=""/>
					<img src="img/logos/3.png" alt=""/>
				</div>
			</div>	
		</div>	
	</div>
	
	<div class="section py-4 background-dark over-hide footer-bottom">
		<div class="container">
			<div class="row">
				<div class="col-md-6 text-center text-md-left mb-2 mb-md-0">
					<p>2019 © Thalia. All rights reserved.</p>
				</div>
				<div class="col-md-6 text-center text-md-right">
					<a href="#" class="social-footer-bottom">facebook</a>
					<a href="#" class="social-footer-bottom">twitter</a>
					<a href="#" class="social-footer-bottom">instagram</a>
				</div>
			</div>	
		</div>		
	</div>
	
	
	<div class="scroll-to-top"></div>
	
      </div>
	
    )
}
