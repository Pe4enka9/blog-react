import './oneNewsType2.css';

// eslint-disable-next-line react/prop-types
export default function OneNewsType2({category, dateTime, date, title, className = '', width = 'auto', height = 'auto'}) {
    return (
        <div className={`news__one-news-type2 ${className}`} style={{width: width, height: height}}>
            <div className="one-news-type2__header">
                <div className="header__category">{category}</div>
                <h2>{title}</h2>
            </div>

            <time dateTime={dateTime}>{date}</time>
        </div>
    )
}
