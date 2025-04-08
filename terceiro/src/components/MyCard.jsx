import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MyCard = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.img} style={{width: "150px", margin: "0 auto"}}/>
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button variant={props.tipButton}>{props.button}</Button>
      </Card.Body>
    </Card>
  )
}

export default MyCard