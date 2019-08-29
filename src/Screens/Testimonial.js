import React, { Component } from 'react'
import { HeaderTitle } from '../components'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'
import store from '../store'
import { setPageData } from '../thunks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const mapStateToProps = state => ({
	pageData: state.pageData
})


class Testimonial extends Component {

	state = { page: 0 }

	componentDidMount() {
		store.dispatch(
			setPageData('1')
		)
	}

	increasePage = (limit) => {
		this.setState( state => {
			if(state.page < limit - 1) {
				state.page = state.page + 1
			}
			return state
		})
	}

	decreasePage = () => {
		this.setState( state => {
			if (state.page > 0) {
				state.page = state.page - 1
			}
			return state
		})
	}

	render() {

		const { pageData } = this.props
		const { page } = this.state
		
		return (
			<Container fluid>
				<Row>
					<HeaderTitle width={400} title={pageData && pageData.slider && pageData.slider.title} />
				</Row>
				<Row style={{ height: '10vh' }}/>
				<Row>
					{
						pageData && pageData.slider && pageData.slider.reviews &&
						<Row fluid>
							<Col xs={12} lg={6}>
								<div style={{ display: 'block', fontSize: 32, fontFamily: 'Roboto', fontWeight: 'bold' }}>{pageData.slider.reviews[page].name}</div>
								<div style={{ fontSize: 14, color: '#a5a5a5' }}>{pageData.slider.reviews[page].position}</div>
							</Col>
							<Col xs={12} lg={6}>
								<div style={{ fontSize: 24, fontFamily: 'Roboto', fontWeight: 'bold' }}>{`"${pageData.slider.reviews[page].comment}"`}</div>
								<Row style={{ height: 20 }}/>
								<Row style={{ height: 56 }}>
									<Col lg={6}/>
									<Col lg={3} fluid style={{ background: '#071eb3', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
										<div style={{ display:'flex', color: 'white', fontStyle: 'italic', fontSize: 32, fontFamily: 'Roboto' }}>{`${page + 1}/${pageData.slider.reviews.length}`}</div>
									</Col>
									<Col lg={3} fluid style={{ background: '#071eb3'}}>
										<Row style={{ justifyContent: 'center', display: 'flex' }} fluid>
											<Col fluid lg={6} style={{ color: 'black', cursor: 'pointer', height: 56, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => this.decreasePage()}>
												{/* <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', background: 'blue' }}> */}
													<FontAwesomeIcon style={{ fontSize: 20, color: 'white' }} icon={faArrowLeft} />
												{/* </div> */}
											</Col>
											<Col fluid lg={6} style={{ color: 'black', cursor: 'pointer', height: 56, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => this.increasePage(pageData.slider.reviews.length)}>
												<FontAwesomeIcon style={{ fontSize: 20, color: 'white' }} icon={faArrowRight} />
											</Col>
										</Row>
									</Col>
								</Row>
							</Col>
						</Row>
					}
				</Row>
			</Container>
			// <div className='flexible' style={{ flexDirection: 'column' }}>
				
			// </div>
		)
	}
}

export default connect(
	mapStateToProps,
)(Testimonial)