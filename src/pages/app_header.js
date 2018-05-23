import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import './css/app_header.less';

class AppHeader extends Component {
	constructor() {
		super();
		this.pageChange = this.pageChange.bind(this);
		this.state = {
			current_page: 'homepage'
		}
	}

	pageChange = (str) => {
		this.setState({
			current_page: str
		})
		console.log(this.state.current_page);
	}
	render() {
		return (
			<Flexbox flexDirection="row" minWidth="100vw" className="AppHeader simple from-right transition-item">
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<img className="paddingTop-7 padding-7" src="../assets/images/logo.png" alt="not find" />
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem className={"LRmargin-15 white " + (this.state.current_page === 'homepage' ? "active" : "")}
								eventKey={1}
								onClick={() => {
									this.pageChange('homepage');
									browserHistory.push('');
								}}> Home</NavItem>
							<NavDropdown className="noPadding LRmargin-15 white " eventKey={3} title="About" id="basic-nav-dropdown" >
								<MenuItem className={"LRmargin-15 "}
									eventKey={1}
									onClick={() => {
										this.pageChange('about');
										browserHistory.push('/about');
									}}
								>B-Star</MenuItem>
								<MenuItem className={"LRmargin-15 " + (this.state.current_page === 'bhavinpatel' ? "active" : "")}
									eventKey={3.3} onClick={() => {
										this.pageChange('bhavinpatel');
										browserHistory.push('/bhavin_patel');
									}}>Bhavin Patel</MenuItem>
								<MenuItem className={"LRmargin-15 " + (this.state.current_page === 'johanabraham' ? "active" : "")}
									eventKey={3.3} onClick={() => {
										this.pageChange('johnabraham');
										browserHistory.push('/john_abraham');
									}}>John Abraham</MenuItem>
								<MenuItem className={"LRmargin-15 " + (this.state.current_page === 'devdesai' ? "active" : "")}
									eventKey={3.3} onClick={() => {
										this.pageChange('devdesai');
										browserHistory.push('/dev_desai');
									}}>Dev Desai</MenuItem>
								<MenuItem className={"LRmargin-15 " + (this.state.current_page === 'mission' ? "active" : "")}
									eventKey={3.3} onClick={() => {
										this.pageChange('mission');
										browserHistory.push('/mission_and_vision');
									}}>Mission & Vision</MenuItem>
							</NavDropdown>
							<NavItem className={"LRmargin-15 white " + (this.state.current_page === 'packages' ? "active" : "")}
								eventKey={1}
								onClick={() => {
									this.pageChange('packages');
									browserHistory.push('/packages');
								}}>Packages</NavItem>
							<NavItem className={"LRmargin-15 white " + (this.state.current_page === 'Media' ? "active" : "")}
								eventKey={1}
								onClick={() => {
									this.pageChange('Media');
									browserHistory.push('/media');
								}} >Media</NavItem>
							<NavItem
								className={"LRmargin-15 white " + (this.state.current_page === 'contactus' ? " active" : "")}
								eventKey={5}
								onClick={() => {
									this.pageChange('contactus');
									browserHistory.push('/contactUs');
								}}>
								Contact Us
							</NavItem>
							<NavItem
								className={"LRmargin-15 white " + (this.state.current_page === 'ja17' ? " active" : "")}
								eventKey={5}
								onClick={() => {
									this.pageChange('ja17');
									browserHistory.push('/ja17');
								}}>
								JA17
							</NavItem>
							<NavItem
								className={"LRmargin-15 white " + (this.state.current_page === 'cafebar' ? " active" : "")}
								eventKey={5}
								onClick={() => {
									this.pageChange('cafebar');
									browserHistory.push('/cafeBar');
								}}>
								Bstar Cafe
							</NavItem>
						</Nav>
						<Nav className="marginTB-15 " pullRight>
							<a href="https://www.facebook.com/bstargym/" target="_blank"><img className="padding-10" src="../assets/images/facebook.svg" alt="not find" /></a>
							<a href="https://www.instagram.com/explore/locations/352971020/b-star/" target="_blank"><img className="padding-10" src="../assets/images/instagram.svg" alt="not find" /></a>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Flexbox >
		)
	}
}

export default AppHeader;
