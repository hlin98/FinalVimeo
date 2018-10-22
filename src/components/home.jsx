import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Grid, Row, Col, Image, Button, Carousel} from 'react-bootstrap';
import './home.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPlayCircle);

export default class Home extends Component {
	constructor(){
  super();
  this.state = { showText: false };
}

	render() {
		return (
			<div>
			<Grid>
				<Carousel className="carousel">
					<Carousel.Item>
						<div> <Image
							src="assets/animal.jpg" className="blur"/></div>
						<Row className="carousel-row">
							<Col md={4} className="videoImage">
									<Image
										src="assets/animal.jpg" className="videoImage"/>
							</Col>
							<Col md={8} className="descrip-whole">
								<h2 className="descrip"> AniMal </h2>
								<p className="descrip"> Bacon ipsum dolor amet picanha porchetta tenderloin t-bone
									landjaeger swine, pig shoulder pancetta cow. Kielbasa drumstick
									alcatra, prosciutto pastrami pork capicola ham short loin meatloaf
									meatball.</p>
									<Col md={3} className="buy-btn">
										<Button bsStyle="primary "> <FontAwesomeIcon icon="play-circle"/> Buy Now</Button>
									</Col>
									<Col md={3} className="trailer-btn">
										<Button>Watch Trailer</Button>
									</Col>
							</Col>
						</Row>
					</Carousel.Item>

					<Carousel.Item>
						<div> <Image
							src="assets/madeline.png" className="blur"/></div>
						<Row className="carousel-row">
							<Col md={4}className="videoImage">
									<Image
										src="assets/madeline.png" className="videoImage"/>
							</Col>
							<Col md={8} className="descrip-whole">
								<h2 className="descrip"> Madeline </h2>
								<p className="descrip"> Bacon ipsum dolor amet picanha porchetta tenderloin t-bone
									landjaeger swine, pig shoulder pancetta cow. Kielbasa drumstick
									alcatra, prosciutto pastrami pork capicola ham short loin meatloaf
									meatball.</p>
								<Col md={3} className="buy-btn">
											<Button bsStyle="primary "> <FontAwesomeIcon icon="play-circle"/> Buy Now</Button>
									</Col>
									<Col md={3} className="trailer-btn">
											<Button>Watch Trailer</Button>
									</Col>
							</Col>
						</Row>
					</Carousel.Item>
					<Carousel.Item>
						<div> <Image
							src="assets/night.jpg" className="blur"/></div>
					<Row className="carousel-row">
						<Col md={4}className="videoImage">
								<Image
									src="assets/night.jpg" className="videoImage"/>
						</Col>
						<Col md={8} className="descrip-whole">
							<h2 className="descrip"> A Gentle Night </h2>
							<p className="descrip"> Turducken burgdoggen shank tenderloin filet mignon
								andouille buffalo ham sausage. Pastrami pig andouille beef jowl landjaeger. </p>
							<Col md={3} className="buy-btn">
										<Button bsStyle="primary "> <FontAwesomeIcon icon="play-circle"/> Buy Now</Button>
								</Col>
								<Col md={3} className="trailer-btn">
										<Button>Watch Trailer</Button>
								</Col>
						</Col>
					</Row>
				</Carousel.Item>
				</Carousel>

				<Row className="posts">
					<Col md={6} mdPush={6} className="post">
						<h2 className="post1"> Monsoon III</h2>
						<p className="post1"> Kielbasa drumstick
							alcatra, prosciutto pastrami pork capicola ham short loin meatloaf
							meatball. Salami boudin ham hock pig ribeye.Shoulder swine andouille pork chop
							frankfurter. </p>

					</Col>
					<Col md={6} mdPull={6} className="sidebar-section">
							<Image
								src="assets/image3.jpg"/>
					</Col>
					</Row>
				</Grid>

				<Grid className="gray">
					<Row className="posts">
						<Col md={6}  className="pushleft">
							<h2> Beams </h2>
							<p className="post2"> Pastrami short loin pork chop, andouille
								kevin turducken beef. Ribeye beef ribs prosciutto burgdoggen.
								Flank buffalo pancetta, pastrami brisket boudin tenderloin sirloin
								bacon pork chop t-bone kevin. Shoulder swine andouille pork chop
								frankfurter. Prosciutto shank corned beef fatback chicken pork sausage.
								Pork chop porchetta pork flank hamburger leberkas salami, picanha
								t-bone turkey shank pancetta. Kielbasa prosciutto swine pancetta pork
								sirloin chuck andouille fatback pig boudin spare ribs frankfurter.</p>
						</Col>
						<Col md={6} className="sidebar-section2">
								<Image
									src="assets/image2.jpg"/>
						</Col>
						</Row>
					</Grid>

					<Grid className="gradient">
						<Row className="posts">
							<Col md={6} mdPush={6}>
								<h2> Move 2 </h2>
								<p className="post3"> Beef ribs cupim biltong kielbasa fatback alcatra
									filet mignon beef ribeye. Bacon doner fatback burgdoggen ribeye venison,
									 short loin filet mignon pork chop beef boudin corned beef. Frankfurter
									 filet mignon shank boudin pastrami tenderloin. Prosciutto kielbasa burgdoggen,
									  kevin cupim pig pork loin hamburger short loin shoulder ribeye tri-tip doner
										 pork belly. Turducken burgdoggen shank tenderloin filet mignon
										 andouille buffalo ham sausage.</p>
							</Col>
							<Col md={6} mdPull={6} className="sidebar-section3">
									<Image
										src="assets/image1.jpg"/>
							</Col>
							</Row>
						</Grid>
			</div>
			)
	}
}
