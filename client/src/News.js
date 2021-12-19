import './News.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import articles from './images/news/articles-lt.png';
import events from './images/news/events-lt.png';
import news from './images/news/news-lt.png';
import { newsarticles } from './data/newsarticles.js'


function importAll(r) {
  let pdfs = {};
  r.keys().map(r).map(o =>
    pdfs[o.default.substring(14, o.default.indexOf('.')) + o.default.substring(o.default.lastIndexOf('.'))] = o.default
  )
  return pdfs;
}
const newspdfs = importAll(require.context('./news/news', false, /\.(png|jpe?g|svg|pdf)$/))
const articlespdfs = importAll(require.context('./news/articles', false, /\.(png|jpe?g|svg|pdf)$/))



const News = () => {
  console.log('NEWS PDF IMAGES', newspdfs)
  console.log('ARTICLES IMAGES', articlespdfs)
  return (

    <section className="news news-section">
      <div className="news-main">
        <div className="news-header">
          <h2 className="heading-primary-dk" style={{ color: "white" }}>NEWS, ARTICLES &amp; EVENTS</h2>
        </div>
        {/* ============================================================================ */}
        <div className="news-content">
          <Container style={{ marginTop: "7rem" }}>
            <Row md={1} lg={3} className="g-4">

              <Col>
                <Card border="none">
                  <Card.Img className="news-img" variant="top" src={news} />
                  <Card.Body>
                    <Card.Title><h2 class="heading-secondary-dk">News</h2></Card.Title>
                    <Card.Text>
                      <div className="news-li">
                        <ul className="no-bullets">
                          {newsarticles.map(item =>
                            item.Type === "NEWS" && item.Sort < 5 ?
                              <li style={{ marginBottom: "2rem" }}><a href={newspdfs[item.Link]} target="_blank" rel="noreferrer">{item.Title}</a></li>
                              :
                              null
                          )}
                        </ul>
                        <button className="read-more-link" style={{ fontSize: "2rem" }} onClick={'props.onClickMerchBank'}>
                          Read More ...
                        </button>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card border="none">
                  <Card.Img className="news-img" variant="top" src={articles} />
                  <Card.Body>
                    <Card.Title><h2 class="heading-secondary-dk">Articles</h2></Card.Title>
                    <Card.Text>

                      <div className="news-li">
                        <ul className="no-bullets">
                          {newsarticles.map(item =>
                            item.Type === "ARTICLES" && item.Sort < 5 ?
                              <li style={{ marginBottom: "2rem" }}><a href={articlespdfs[item.Link]} target="_blank" rel="noreferrer">{item.Title}</a></li>
                              :
                              null
                          )}
                        </ul>
                        <button className="read-more-link" style={{ fontSize: "2rem" }} onClick={'props.onClickMerchBank'}>
                          Read More ...
                        </button>
                      </div>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card border="none">
                  <Card.Img className="news-img" variant="top" src={events} />
                  <Card.Body>
                    <Card.Title><h2 class="heading-secondary-dk">Events</h2></Card.Title>
                    <Card.Text>

                      <div className="news-li">
                        <ul className="no-bullets">
                          {newsarticles.map(item =>
                            item.Type === "EVENTS" && item.Sort < 5 ?
                              <li style={{ marginBottom: "2rem" }}><a href={item.Link} target="_blank" rel="noreferrer">{item.Title}</a></li>
                              :
                              null
                          )}
                        </ul>

                        <button className="read-more-link" style={{ fontSize: "2rem" }} onClick={'props.onClickMerchBank'}>
                          Read More ...
                        </button>
                      </div>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

            </Row>


          </Container>
        </div>
      </div>
    </section>
  )
}

export default News;