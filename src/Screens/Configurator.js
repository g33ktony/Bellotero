import React, { Component } from 'react'
import { HeaderTitle, Slider } from '../components'
import { connect } from 'react-redux'
import store from '../store'
import { setPageData } from '../thunks'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



const mapStateToProps = state => ({
	pageData: state.pageData
})


class Configurator extends Component {

	state = { monthly: 10, employees: 1 }

	componentDidMount() {
		store.dispatch(
			setPageData('2')
		)
	}

	setSlider = (value, type) => {
		this.setState( state => {
			state[type] = value
			return state
		})
	}

	render() {

		const { monthly, employees } = this.state
		const estimatedCost = monthly * 0.3
		const savings = employees * 1337 + estimatedCost

		const { pageData } = this.props
		return (
			<Container fluid>
				<Row>
					<Col xs={12} lg={4}>
						<HeaderTitle title={pageData && pageData.calculator && pageData.calculator.title} subtitle={pageData && pageData.calculator && pageData.calculator.description} />
					</Col>
					<Col xs={0} lg={2}/>
					<Col sx={12} lg={6}>
						<Col xs={12} fluid>
							<Col style={{ marginTop: 120 }}>
								<Slider title='Monthly ingredient spending' onChange={value => this.setSlider(value, 'monthly')} sliderVal={monthly} min={10} max={100} price value={monthly} />
								<Slider title='Full-time employees that process invoices' step={1} onAfterChange onChange={value => this.setSlider(value, 'employees')} sliderVal={employees} min={1} max={10} value={employees} />
							</Col>
							<Row fluid>
								<Col lg={6} fluid>
									<Col style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 72, color: '#071eb3' }}>
										<span style={{ fontSize: 36 }}>$</span>
										<span>{estimatedCost.toFixed(3)}</span>
									</Col>
									<Col>
										<span style={{ fontWeight: 'bold' }}>Estimated cost food savings</span>
									</Col>
								</Col>
								<Col lg={6} fluid>
									<Col style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 72, color: '#071eb3' }}>
										<span style={{ fontSize: 36 }}>$</span>{savings.toFixed(3)}
									</Col>
									<Col>
										<span style={{ fontWeight: 'bold' }}>Your estimated annual savings</span>
									</Col>
								</Col>
							</Row>
						</Col>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default connect(
	mapStateToProps,
)(Configurator)