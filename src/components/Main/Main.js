import ReactBootstrap from 'react-bootstrap';

import SearchContainer from '../Search/SearchBoxContainer';
import ActionBlock from '../Action/ActionBlock';
import Recents from '../List/Recents';

var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

const Main = () => (
    <div>
        <Row>
            <Col md={6} mdOffset={3}>
                <SearchContainer/>
            </Col>
        </Row>
        <Row>
            <Col md={6} mdOffset={3}>
                <ActionBlock/>
            </Col>
        </Row>
        <Row>
            <Col md={6} mdOffset={3}>
                <Recents/>
            </Col>
        </Row>
    </div>
);

export default Main;