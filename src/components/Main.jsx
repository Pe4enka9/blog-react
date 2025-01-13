import Header from "./Header/Header.jsx";
import News from "./News/News.jsx";

export default function Main() {
    document.title = 'Главная';

    return (
        <>
            <Header/>
            <div className="banner"></div>
            <News/>
        </>
    )
}
