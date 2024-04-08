/* eslint-disable react/jsx-no-undef */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Row, Col } from "react-bootstrap"
import Login from './Login';

function App() {
  return (
    // eslint-disable-next-line jsx-a11y/aria-role
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
