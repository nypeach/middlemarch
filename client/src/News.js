import './News.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import articles from './images/news/articles-lt.png';
import events from './images/news/events-lt.png';
import news from './images/news/news-lt.png';
import { newsarticles } from './data/newsarticles.js';
import React, { useState } from 'react';
import NewsModal from './NewsModal';

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

  const [modalShow, setModalShow] = useState(false);
  const [modalType, setModalType] = useState(null);

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
          <Container fluid style={{ margin: "5rem 3rem 3rem 0rem" }}>
            <Row md={1} lg={3} g-0>

              {['NEWS', 'ARTICLES', 'EVENTS'].map((newsType) => (

                <Col>
                  <Card
                    border="none"
                    style={newsType === 'NEWS' ? { marginLeft: "2rem" } : newsType === 'EVENTS' ? { marginRight: "2rem" } : null}
                  >
                    <Card.Body>
                      <Card.Img className="news-img" variant="top" src={newsType === 'NEWS' ? news : newsType === 'ARTICLES' ? articles : events} />
                      <Card.Title>
                        <h2 class="heading-secondary-dk">{newsType === 'NEWS' ? 'News' : newsType === 'ARTICLES' ? 'Articles' : 'Events'}</h2>
                      </Card.Title>
                      <Card.Text>
                        <div className="news-li">
                          <ul className="no-bullets">
                            {newsarticles.map(item =>
                              item.Type === newsType && item.Sort < (newsType === 'NEWS' ? 1.07 : newsType === 'ARTICLES' ? 2.07 : 3.07) ?
                                <li style={{ marginBottom: "2rem" }}>
                                  <div className="news-div" style={{ cursor: "pointer" }} >
                                    <a
                                      href={newsType === 'NEWS' ? newspdfs[item.Link] : newsType === 'ARTICLES' ? articlespdfs[item.Link] : item.Link}
                                      target="_blank" rel="noreferrer"
                                    >
                                      <span class={newsType === 'NEWS' || newsType === 'ARTICLES' ? "news-tooltiptext tt-news" : "news-tooltiptext tt-events"}>{item.Summary}</span>
                                      {item.Title}
                                    </a>
                                  </div>
                                </li>
                                :
                                null
                            )}
                          </ul>
                          <button className="read-more-link" style={{ fontSize: "2rem" }} onClick={() => { setModalShow(true); setModalType(newsType); }}>
                            Read More ...
                          </button>
                          <NewsModal show={modalShow} onHide={() => setModalShow(false)} dialogClassName="modal-90w" modalType={modalType} />
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

              ))}


            </Row>
          </Container>
        </div>
      </div>
    </section>

  )
}

export default News;