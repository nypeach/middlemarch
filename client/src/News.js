import './News.css';
import NewsCard from './NewsCard';
import { news } from './data/news.js';


function importAll(r) {
  let photos = {};
  r.keys().map(r).map(o =>
    photos[o.default.substring(14, o.default.indexOf('.')) + o.default.substring(o.default.lastIndexOf('.'))] = o.default
  )
  return photos;
}

const images = importAll(require.context('./images/news/', false, /\.(png|jpe?g|svg)$/))

const News = () => {
  // console.log(images)
  return (

    <section className="news news-section">
      <div className="news-main">
        <div className="news-header">
          <h2 className="heading-primary-dk" style={{ color: "white" }}>NEWS, ARTICLES &amp; EVENTS</h2>
        </div>
        {/* ============================================================================ */}
        <div className="news-card-div">

          <div className="row gx-5 gy-5 row-cols-auto justify-content-center">

            {/* TRANSACTION CARD START */}
            {news.sort(function (a, b) {
              return new Date(b.postDate) - new Date(a.postDate);
            }).map(post =>
              <div>
                <NewsCard
                  image={images[post.cardPhoto]}
                  title={post.cardTitle}
                  text={post.cardText}
                />
              </div>
            )}



          </div>
        </div>
      </div>
    </section>
  )
}

export default News;