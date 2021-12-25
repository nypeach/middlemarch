import Modal from 'react-bootstrap/Modal';
import './NewsModal.css';
import { newsarticles } from './data/newsarticles.js';
import articles from './images/news/articles-lt.png';
import events from './images/news/events-lt.png';
import news from './images/news/news-lt.png';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function importAll(r) {
  let pdfs = {};
  r.keys().map(r).map(o =>
    pdfs[o.default.substring(14, o.default.indexOf('.')) + o.default.substring(o.default.lastIndexOf('.'))] = o.default
  )
  return pdfs;
}

const newspdfs = importAll(require.context('./news/news', false, /\.(png|jpe?g|svg|pdf)$/))
const articlespdfs = importAll(require.context('./news/articles', false, /\.(png|jpe?g|svg|pdf)$/))


const NewsModal = (props) => {
  const modalImage = props.modalType === 'NEWS' ? news : props.modalType === 'ARTICLES' ? articles : events;
  const [summary, setSummary] = useState('');



  console.log('THING', props.thing)
  return (
    <Modal
      scrollable={false}
      {...props}
      // size="sm"
      aria-labelledby="NewsModal"
    // DialogClassName="modal-90w"
    >
      <i className="far fa-times-circle fa-3x news-modal-close" onClick={props.onHide}></i>
      <Modal.Header>
        <Modal.Title>
             <div class="news-container">
              <div style={{ alignSelf: "center" }}><img className="news-modal-image" alt={props.modalType} src={modalImage} /></div>
              <div className="news-modal-header">{props.modalType}</div>
            <div className="news-summary"><em>{summary}</em></div>
            </div>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="news-modal-li">

          <ul className="no-bullets">
            <div className="news-modal-text">
              {newsarticles.map(item =>
                item.Type === props.modalType ?
                  <li
                  style={{ marginBottom: "2rem" }}
                  onMouseEnter={() => setSummary(item.Summary)}
                  onMouseLeave={() => setSummary('')}
                  >
                    <div style={{ cursor: "pointer" }} >
                      <a
                        href={props.modalType === 'NEWS' ? newspdfs[item.Link] :
                        props.modalType === 'ARTICLES' ? articlespdfs[item.Link] : item.Link}
                        target="_blank" rel="noreferrer"
                      >
                        {item.Title}
                      </a>
                    </div>
                  </li>
                  :
                  null
              )}
            </div>
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default NewsModal;