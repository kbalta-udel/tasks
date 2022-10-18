import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

// const sunset = require("./sunset.jpg");
//import sunset from "sunset.jpg";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>Welcome to my webpage!</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Kristina Balta Hello
                World
            </header>
            <img src={require("./sunset.jpg")} alt="Sunset pic" />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <ol>
                <li>This</li>
                <li>is my</li>
                <li>list!</li>
            </ol>
            <Container>
                <Row>
                    <Col>
                        First Column
                        <div
                            style={{
                                width: 300,
                                height: 150,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Second Column
                        <div
                            style={{
                                width: 300,
                                height: 150,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}
export default App;
