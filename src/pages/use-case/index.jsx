import React from "react";
import "./index.css";
import useCasesBanner from "../../assets/images/use-case/use-cases-banner.png";
import iconRead from "../../assets/images/use-case/iconRead.png";
import useCaseContactCard from "../../assets/images/use-case/use-case-contact-card.png";
import Slider from "../../components/slider";

function UseCase() {

    const testimonials = [
        {
            text: "\"Мы работаем с Позитивус уже год и за это время заметили значительный рост трафика на сайте и числа лидов благодаря их усилиям. Команда профессиональна, оперативно реагирует и действительно заботится об успехе нашего бизнеса. Мы настоятельно рекомендуем Позитивус всем компаниям, стремящимся расширить свое онлайн-присутствие.\"",
            name: "Джон Смит",
            subtitle: "Директор по маркетингу в XYZ Corp",
        },
        {
            text: "\"Мы выбрали Позитивус для работы с SEO и PPC-кампаниями и были приятно удивлены их результатами. Они обладают глубокими знаниями, оперативно реагируют и искренне заботятся об успехе нашего бизнеса. Мы настоятельно рекомендуем Positivus всем компаниям, которые хотят развивать свое онлайн-присутствие.\"",
            name: "Джейн Доу",
            subtitle: "Генеральный директор ABC",
        },
        {
            text: "\"Я недавно начал работать с Positivus и был приятно удивлён их профессионализмом и экспертизой. Они помогли мне повысить онлайн-видимость и привлечь больше лидов для моего бизнеса. Настоятельно рекомендую Positivus всем, кто хочет улучшить свою стратегию онлайн-маркетинга.\"",
            name: "Алиса Джонсон",
            subtitle: "Владелец 123",
        },
        {
            text: "\"Я работаю с Позитивус уже год и очень впечатлён их профессионализмом и экспертизой. Они помогли мне повысить онлайн-видимость и привлечь больше лидов для моего бизнеса. Настоятельно рекомендую Позитивус всем, кто хочет улучшить свою стратегию онлайн-маркетинга.\"",
            name: "Гупта Патель",
            subtitle: "Контент-мейкер",
        },
        {
            text: "\"Позитивус значительно улучшил наше онлайн-присутствие. Они обладают глубокими знаниями, оперативно реагируют и действительно заботятся об успехе нашего бизнеса. Благодаря их усилиям мы заметили значительный рост трафика на сайте и числа лидов. Настоятельно рекомендую Позитивус всем компаниям, стремящимся развивать своё онлайн-присутствие.\"",
            name: "Сара Джонсон",
            subtitle: "Фрилансер",
        },
    ];

    return (
        <div className="container-page use-case">
            <div className="container use-case-banner">
                <div className="use-case-banner__image">
                    <h1 className='use-case-banner__title-mobile'>Проверенные истории успеха</h1>
                    <img src={useCasesBanner} alt='use-case banner'/>
                </div>
                <div className="use-case-banner__text">
                    <h1>Проверенные истории успеха</h1>
                    <p>Посмотрите, как наши инновационные стратегии цифрового маркетинга изменили бизнес. Будь то SEO,
                        PPC, социальные сети или веб-дизайн, эти варианты использования подчеркивают ощутимое влияние
                        нашей работы. Изучите успехи и представьте, чего мы можем достичь вместе.</p>
                </div>
            </div>
            <div className="container success-story">
                <div className="success-story__content">
                    <h2 className="success-story__tag">История <span className='use-case-no-mobile'>успешного кейса</span></h2>
                    <h3 className="success-story__title">Масштабирование успеха для ведущего e-commerce бренда</h3>
                    <p className="success-story__description">
                        Благодаря комплексной стратегии SEO и PPC мы помогли этому интернет-бренду повысить видимость,
                        увеличить трафик и рост продаж.
                    </p>
                </div>
                <div className="success-story__stats">
                    <div className="stat-box">
                        <h3>200%</h3>
                        <p>рост органического трафика</p>
                    </div>
                    <div className="stat-box">
                        <h3>150%</h3>
                        <p>увеличение онлайн-продаж</p>
                    </div>
                    <div className="stat-box">
                        <h3>75%</h3>
                        <p>снижение стоимости за клик (CPC)</p>
                    </div>
                    <div className="stat-box">
                        <h3>300%</h3>
                        <p>улучшение коэффициента конверсии</p>
                    </div>
                </div>
                <a href="#" className="success-story__link">
                    <img src={iconRead} alt="read icon"/>
                    Читать
                </a>
            </div>
            <div className='container use-case-cards-stories'>
                <div className="use-case-title use-case-title-cards">
                    <h2><span>Все истории успеха</span></h2>
                    <p>Изучите реальные примеры нашего доказанного успеха в цифровом маркетинге с помощью наших тематических
                        исследований</p>
                </div>
                <div className="use-case-cards">
                    <div className="use-case-card">
                        <h3 className="use-case-title">Интернет-магазин модной одежды</h3>
                        <p className="use-case-description">Мы внедрили индивидуальную SEO-стратегию, которая повысила органический рейтинг в поисковых системах, что привело к увеличению трафика на сайте на 150% и росту онлайн-продаж на 50% в течение шести месяцев.</p>
                        <a href="#" className="use-case-link">
                            <img src={iconRead} alt="read icon"/>
                            Узнать больше
                        </a>
                    </div>
                    <div className="use-case-card">
                        <h3 className="use-case-title">Сеть ресторанов</h3>
                        <p className="use-case-description">Оптимизируя локальное SEO и улучшая профили в Google My Business, мы увеличили видимость, что привело к росту онлайн-бронирований и посещаемости на 300%.</p>
                        <a href="#" className="use-case-link">
                            <img src={iconRead} alt="read icon"/>
                            Узнать больше
                        </a>
                    </div>
                    <div className="use-case-card">
                        <h3 className="use-case-title">Медицинский центр</h3>
                        <p className="use-case-description">Благодаря оптимизации контента и стратегии таргетинга по ключевым словам мы помогли медицинскому центру занять первое место в поисковой выдаче по важным услугам, что привело к увеличению числа запросов и записей пациентов на 180%.</p>
                        <a href="#" className="use-case-link">
                            <img src={iconRead} alt="read icon"/>
                            Узнать больше
                        </a>
                    </div>
                    <div className="use-case-card">
                        <h3 className="use-case-title">Интернет-магазин модной одежды</h3>
                        <p className="use-case-description">Мы внедрили индивидуальную SEO-стратегию, которая повысила органический рейтинг в поисковых системах, что привело к увеличению трафика на сайте на 150% и росту онлайн-продаж на 50% в течение шести месяцев.</p>
                        <a href="#" className="use-case-link">
                            <img src={iconRead} alt="read icon"/>
                            Узнать больше
                        </a>
                    </div>
                    <div className="use-case-card">
                        <h3 className="use-case-title">Сеть ресторанов</h3>
                        <p className="use-case-description">Оптимизируя локальное SEO и улучшая профили в Google My Business, мы увеличили видимость, что привело к росту онлайн-бронирований и посещаемости на 300%.</p>
                        <a href="#" className="use-case-link">
                            <img src={iconRead} alt="read icon"/>
                            Узнать больше
                        </a>
                    </div>
                    <div className="use-case-card">
                        <h3 className="use-case-title">Медицинский центр</h3>
                        <p className="use-case-description">Благодаря оптимизации контента и стратегии таргетинга по ключевым словам мы помогли медицинскому центру занять первое место в поисковой выдаче по важным услугам, что привело к увеличению числа запросов и записей пациентов на 180%.</p>
                        <a href="#" className="use-case-link">
                            <img src={iconRead} alt="read icon"/>
                            Узнать больше
                        </a>
                    </div>
                </div>
            </div>




            <div className='container use-case-slider'>
                <div className="use-case-title">
                    <h2><span>Отзывы</span></h2>
                    <p>Услышать мнение наших довольных клиентов: прочитайте наши отзывы, чтобы узнать больше о наших услугах цифрового маркетинга</p>
                </div>
                <div className='use-case-slider__block'>
                    <Slider slides={testimonials} />
                </div>
            </div>


            <div className="container use-case-contact-card">
                <div className="use-case-contact-card__item">
                    <h3>Давай создадим новую успешную историю</h3>
                    <p>Свяжитесь с нами сегодня, чтобы узнать больше о том, как наши услуги цифрового маркетинга могут помочь вашему бизнесу расти и добиваться успеха в Интернете.</p>
                    <a href="./contact" className='use-case-button-black use-case-button-black-green'>Запросите бесплатное предложение</a>
                </div>
                <div className="use-case-contact-card__image-block">
                    <img src={useCaseContactCard} alt="Contact us"/>
                </div>
            </div>

        </div>

    );
}

export default UseCase;