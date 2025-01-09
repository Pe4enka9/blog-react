import './header.css';
import phone from '../../icons/phone.svg';

export default function Header() {
    return (
        <header>
            <div className="header-container">
                <nav>
                    <a href="/">Главная</a>
                    <a href="#">О нас</a>
                    <a href="#">Контакты</a>
                    <a href="#">Поиск</a>
                </nav>

                <div className="header-container__phone">
                    <img src={phone} alt="Телефон"/>
                    <a href="tel:+798788787">+7 (987) 887-87</a>
                </div>
            </div>
        </header>
    )
}
