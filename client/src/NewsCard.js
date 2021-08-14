import { Card } from 'react-bootstrap';
import './News.css';

const NewsCard = (props) => {
  return (


  <div className="col">
      <Card style={{ width: '45rem', padding: '12px', border: '0', cursor: "pointer"}} >
        <Card.Img style={{width: '40rem', height: '30rem'}} variant="top" src={props.image} className="news-card-image" />
        <Card.Body>
          <Card.Title className="news-card-title">{props.title}</Card.Title>
          <Card.Text className="news-card-text">{props.text} &nbsp; ...
            <div className="text-info icon-move-right">Read More &nbsp;
                <i className="fas fa-arrow-right text-sm" ariaHidden="true"></i>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default NewsCard;