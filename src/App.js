/* eslint-disable react/jsx-no-undef */
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Row, Col } from "react-bootstrap"

function App() {
  return (
    <div className="Container app-container" role="parent">
      <Row>
        <Col>
          <h1>Reactでテストチュートリアル</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Login data-testid="child" />
        </Col>
      </Row>
    </div>
  );
}

export default App;
