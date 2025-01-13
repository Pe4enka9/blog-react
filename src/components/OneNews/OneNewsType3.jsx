import './oneNewsType3.css';

// eslint-disable-next-line react/prop-types
export default function OneNewsType3({category, dateTime, date, title, className = '', width = 'auto', height = 'auto', background = '#000'}) {
    return (
        <div className={`news__one-news-type3 ${className}`} style={{width: width, height: height, background: `url(${background}) no-repeat center / cover`}}>
            <div className="one-news-type3__header">
                <div className="header__category">{category}</div>
                <h2>{title}</h2>
            </div>

            <time dateTime={dateTime}>{date}</time>
        </div>
    )
}
