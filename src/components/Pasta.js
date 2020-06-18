
import React from "react";
import {Button,Card,CardDeck,Container,ListGroup,Accordion} from "react-bootstrap";
import pasta1 from "../pictures/pasta1.jpg";
import pasta2 from "../pictures/pasta2.jpg";
import pasta3 from "../pictures/pasta3.jpg";

const Pasta=()=>{
 
	return(
		<Container fluid>
	
				<h2 className="otsikko">Pasta</h2>
				<CardDeck className="card-deck">
					<Card style={{ width: "18rem",float:"left" }}>
						<Card.Img variant="top" src={pasta1} />
						<Card.Body>
							<Card.Title>Pasta formaggio</Card.Title>
							<Accordion defaultActiveKey="0">
								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button} variant="link" eventKey="1">
        Show ingredients
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="1">
										<ListGroup>
											<ListGroup.Item>Cras justo odio</ListGroup.Item>
											<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
											<ListGroup.Item>Morbi leo risus</ListGroup.Item>
											<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
											<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
										</ListGroup>
									</Accordion.Collapse>
								</Card>
							</Accordion>

						</Card.Body>
					</Card>

					<Card style={{ width: "18rem", float:"center" }}>
						<Card.Img variant="top" src={pasta2} />
						<Card.Body>
							<Card.Title>Pasta con pesto</Card.Title>
							<Accordion defaultActiveKey="0">
								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button} variant="link" eventKey="1">
        Show ingredients
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="1">
										<ListGroup>
											<ListGroup.Item>Cras justo odio</ListGroup.Item>
											<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
											<ListGroup.Item>Morbi leo risus</ListGroup.Item>
											<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
											<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
										</ListGroup>
									</Accordion.Collapse>
								</Card>
							</Accordion>

						</Card.Body>
					</Card>
					<Card style={{ width: "18rem", float:"right" }}>
						<Card.Img variant="top" src={pasta3} />
						<Card.Body>
							<Card.Title>Pasta Bolognese</Card.Title>
							<Accordion defaultActiveKey="0">
								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button} variant="link" eventKey="1">
        Show ingredients
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="1">
										<ListGroup>
											<ListGroup.Item>Cras justo odio</ListGroup.Item>
											<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
											<ListGroup.Item>Morbi leo risus</ListGroup.Item>
											<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
											<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
										</ListGroup>
									</Accordion.Collapse>
								</Card>
							</Accordion>

						</Card.Body>
					</Card>
				</CardDeck>
		
		</Container>
	);
};
export default Pasta;