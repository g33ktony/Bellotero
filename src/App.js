/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import logo from './logo.svg'
import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function Index() {
  return (
    <div>
      <div></div>
    </div>
  )
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Router>
      <Container>
        <Row style={{ height: 65, marginBottom: 16 }}>
          <Col style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
            <img style={{ height: 26, width: 'auto' }} src='../../bellotero@3x.png'/>
          </Col>
          <Col style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
            <nav>
              <ul style={{ display: 'flex', flexDirection: 'row', marginTop: 16 }}>
                <Link to='/' style={{ color: '#071eb3', fontFamily: 'Roboto', fontWeight: 500, marginRight: 58, listStyleType: 'none' }}>Home</Link>
                <Link to='/solutions' style={{ color: '#071eb3', fontFamily: 'Roboto', fontWeight: 500, marginRight: 58, listStyleType: 'none' }}>Solutions</Link>
                <Link to='/stories' style={{ color: '#071eb3', fontFamily: 'Roboto', fontWeight: 500, marginRight: 58, listStyleType: 'none' }}>Stories</Link>
                <Link to='/partners' style={{ color: '#071eb3', fontFamily: 'Roboto', fontWeight: 500, marginRight: 58, listStyleType: 'none' }}>Partners</Link>
                <Link to='/about' style={{ color: '#071eb3', fontFamily: 'Roboto', fontWeight: 500, marginRight: 58, listStyleType: 'none' }}>About</Link>
                <Link to='/blog' style={{ color: '#071eb3', fontFamily: 'Roboto', fontWeight: 500, listStyleType: 'none' }}>Blog</Link>
              </ul>
            </nav>
          </Col>
        </Row>
        <Row>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
        </Row>
      </Container>
    </Router>
  )
}

export default App;


