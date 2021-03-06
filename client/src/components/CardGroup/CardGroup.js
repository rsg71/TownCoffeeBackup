import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";
import "./CardGroup.css"


const styles = {
    color: {
        backgroundColor: "#1E3932",
        borderColor: "#1E3932" 
    }
}

function CardGroup () {
    return(
        <> 
        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src="/imgs/prod_IXeeUDzn45Abgf.jpg" />
                                <Card.Body>
                                    <Card.Title>12 oz. Whole Bean Original Blend</Card.Title>
                                    <Card.Text>
                                        Whole bean blend sourced sustainably in Mexico
                                    </Card.Text>
                                    <Button className="groupCoffeeButtons" href="/products-12oz-whole-bean">Shop Now</Button>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"><strong>$12.99</strong></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="/imgs/prod_IXeeUDzn45Abgf.jpg" />
                                <Card.Body>
                                    <Card.Title>16 oz. Whole Bean Original Blend</Card.Title>
                                    <Card.Text>
                                    Whole bean blend sourced sustainably in Mexico
                                    </Card.Text>
                                    <Button className="groupCoffeeButtons"  variant="success">Shop Now</Button>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"><strong>$12.99</strong></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="/imgs/prod_IXeeUDzn45Abgf.jpg" />
                                <Card.Body>
                                    <Card.Title>12 oz. Whole Bean Dark Blend</Card.Title>
                                    <Card.Text>
                                    Whole bean blend sourced sustainably in Mexico
                                    </Card.Text>
                                    <Button className="groupCoffeeButtons" style={styles.color}>Shop Now</Button>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"><strong>$14.99</strong></small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                        </>
    )
}



export default CardGroup;