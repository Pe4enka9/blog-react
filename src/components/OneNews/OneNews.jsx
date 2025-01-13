import './oneNews.css';

// eslint-disable-next-line react/prop-types
export default function OneNews({category, dateTime, date, title, body = '', className = '', width = 'auto', height = 'auto'}) {
    return (
        <div className={`news__one-news ${className}`} style={{width: width, height: height}}>
            <div className="one-news__header">
                <div className="header__category">{category}</div>
                <time dateTime={dateTime}>{date}</time>
            </div>

            <div className="one-news__body">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    )
}
