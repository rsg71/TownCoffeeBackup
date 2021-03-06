import React, {useEffect} from "react";

import { Container, Row, Col } from "react-bootstrap";
import CardGroup from "../../components/CardGroup/CardGroup"
import CoffeeBanner from "../../components/CoffeeBanner/CoffeeBanner"



// const styles = {
//     buttonStyle: {
//         
//         textAlign: "center"
//     }
// }

function Coffee() {



    useEffect(() => {
        document.title = "Coffee | Town Coffee Company"
    }, []);


    return (
        <>
           <CoffeeBanner/>

            <Container>
                <br />

                <Row>
                    <Col>
                      <h5>Home &gt; Coffee</h5>
                    </Col>
                </Row>
                <br />

                <Row>
                    <Col>
                        <CardGroup/>
                            
                       
                    </Col>
                </Row>

                <br />
                <br />
                <br />
                <br />
            </Container>
        </>
    )
}

export default Coffee;