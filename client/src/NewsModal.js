import Modal from 'react-bootstrap/Modal';
import './NewsModal.css';
import { newsarticles } from './data/newsarticles.js';
import articles from './images/news/articles-lt.png';
import events from './images/news/events-lt.png';
import news from './images/news/news-lt.png';
import React, { useState } from 'react';

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
             <div className="news-container">
              <div style={{ alignSelf: "center" }}><img className="news-modal-image" alt={props.modalType} src={modalImage} /></div>
              <div className="news-modal-header">{props.modalType}</div>
            <div className="news-summary"><em>{summary}</em></div>
            </div>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="news-modal-li">
          <ul className="no-bullets">
            <div className="news-modal-text" style={{marginTop: "12rem"}}>
            {newsarticles.map(item =>
              item.Type === props.modalType  ?
                <li key={item.Sort} style={{ marginBottom: "4rem" }}>

                  <div className="news-div" style={{ cursor: "pointer" }} >
                    <a
                      href={props.modalType === 'NEWS' ? newspdfs[item.Link] : props.modalType === 'ARTICLES' ? articlespdfs[item.Link] : item.Link}
                      target="_blank" rel="noreferrer"
                    >
                      {/* <span className={props.modalType === 'NEWS' || props.modalType === 'ARTICLES' ? "news-tooltiptext tt-news" : "news-tooltiptext tt-events"}>{item.Summary}</span> */}
                      <span className="news-tooltiptext tt-modal" style={{width: "25vw"}}>{item.Summary}</span>
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