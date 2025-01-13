import './news.css';
import OneNews from "../OneNews/OneNews.jsx";
import OneNewsType2 from "../OneNews/OneNewsType2.jsx";
import OneNewsType3 from "../OneNews/OneNewsType3.jsx";
import news1 from '../../images/news1.jpg';
import news2 from '../../images/news2.jpg';

export default function News() {
    return (
        <section className="news">
            <OneNews className={'block1'} category={'Категория 1'} dateTime={'2020-12-13'} date={'13 дек 2020'}
                     title={'Управление ИТ-активами – скучная рутина или творческая задача?'}
                     body={'Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще.'}/>

            <OneNews className={'block2'} category={'Категория 1'} dateTime={'2020-12-13'} date={'13 дек 2020'}
                     title={'Управление ИТ-активами – скучная рутина или творческая задача?'}
                     body={'Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще.'}/>

            <OneNewsType2 className={'block3'} category={'Категория 1'} dateTime={'2020-12-13'} date={'13 дек 2020'}
                          title={'ITAM&SAMDay – самая настоящая удача!'}/>

            <OneNewsType3 className={'block4'} category={'Очень длинная категория 2'} dateTime={'2020-12-13'} date={'13 дек 2020'}
                          title={'Управление ИТ-активами – скучная рутина или творческая задача?'} background={news1}/>

            <OneNews className={'block5'} category={'Категория 1'} dateTime={'2020-12-13'} date={'13 дек 2020'}
                     title={'Управление ИТ-активами – скучная рутина или творческая задача слово слово и еще длинное слово после чего ...'}/>

            <OneNews className={'block6'} category={'Категория 1'} dateTime={'2020-12-13'} date={'13 дек 2020'}
                     title={'ITAM&SAMDay – самая настоящая удача!'}/>

            <OneNews className={'block7'} category={'Категория 1'} dateTime={'2020-12-13'} date={'13 дек 2020'}
                     title={'Управление ИТ-активами – скучная рутина или творческая задача?'}
                     body={'Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще.'}/>

            <OneNewsType2 className={'block8'} category={'Очень длинная категория 2'} dateTime={'2020-12-13'} date={'13 дек 2020'}
                          title={'ITAM&SAMDay – самая настоящая удача!'}/>

            <OneNewsType3 className={'block9'} category={'Категория 1'} dateTime={'2020-12-13'} date={'13 дек 2020'}
                          title={'Управление ИТ-активами – скучная рутина или творческая задача?'} background={news2}/>

            <OneNews className={'block10'} category={'Категория 1'} dateTime={'2020-12-13'} date={'13 дек 2020'}
                     title={'Управление ИТ-активами – скучная рутина или творческая задача слово слово и еще длинное слово после чего ...'}/>

            <OneNews className={'block11'} category={'Категория 1'} dateTime={'2020-12-13'} date={'13 дек 2020'}
                     title={'ITAM&SAMDay – самая настоящая удача!'}/>
        </section>
    )
}
