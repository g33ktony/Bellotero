/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import { Configurator, Testimonial } from './Screens'
import { setNavData } from './thunks'

const mapStateToProps = state => ({
  navData: state.navData
})

function defaultComponent(){
  return (
    <div></div>
  )
}

class App extends Component {

  componentDidMount() {
    this.props.dispatch(
      setNavData()        
    )
  }

  render() {
    const { navData } = this.props
    return (
      <Router>
        <Container>
          <Row fluid  style={{ height: '8vh' }}>
            <Col xs={12} lg={3} style={{ height: '8vh', display: 'flex', alignItems: 'center' }} fluid>
              <Row fluid>
                <img style={{ height: 26, width: 'auto' }} src='../../bellotero@3x.png' />
              </Row>
            </Col>
            <Col xs={0} lg={4}/>
            <Col xs={0} lg={5} fluid style={{ display: 'flex', alignItems: 'center' }}>
              {
                navData && navData.menu.items.length > 0 && navData.menu.items.map((route, i) => {
                  let url = route.route
                  if (route.route === '#') {
                    url = '/'
                  }
                  return (
                    <NavLink key={i} className='linkStyle' to={url}>{route.text}</NavLink>
                  )
                })
              }
            </Col>
          </Row>
          <Row style={{ height: '92vh' }}>
            <Route path="/" exact component={defaultComponent} />
            <Route path="/page-1" component={Testimonial} />
            <Route path="/page-2" component={Configurator} />
          </Row>
        </Container>
      </Router>
    )
  }
}

export default connect(
  mapStateToProps,
)(App)



