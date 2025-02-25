import homeBanner from "../../assets/images/home/home-banner.png";
import partner1  from "../../assets/images/home/partner1.png";
import partner2  from "../../assets/images/home/partner2.png";
import partner3  from "../../assets/images/home/partner3.png";
import partner4  from "../../assets/images/home/partner4.png";
import partner5 from "../../assets/images/home/parnter5.png";
import partner6  from "../../assets/images/home/partner6.png";
import homeContactCard from "../../assets/images/home/home-contact-card.png";
import arrowUpRightGreen  from "../../assets/images/home/home-arrow-up-right-green.svg";
import arrowUpRightBlack  from "../../assets/images/home/home-arrow-up-right-black.svg";
import service1  from "../../assets/images/home/home-service1.png";
import service2  from "../../assets/images/home/home-service2.png";
import service3  from "../../assets/images/home/home-service3.png";
import service4  from "../../assets/images/home/home-service4.png";
import service5 from "../../assets/images/home/home-service5.png";
import service6  from "../../assets/images/home/home-service6.png";
import team1  from "../../assets/images/home/home-team1.png";
import team2  from "../../assets/images/home/home-team2.png";
import team3  from "../../assets/images/home/home-team3.png";
import team4  from "../../assets/images/home/home-team4.png";
import team5 from "../../assets/images/home/home-team5.png";
import team6  from "../../assets/images/home/home-team6.png";
import homeContact  from "../../assets/images/home/home-contact.png";
import "./index.css";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import Slider from "../../components/slider";
import Accordion from "../../components/accordion";
import {useState} from "react";



function HomeTitle({title, subtitle}) {
    return (
        <div className="home-title">
            <h2><span>{title}</span></h2>
            <p>{subtitle}</p>
        </div>
    );
}

function HomeBanner(){
    return (
        <div className="container home-banner">
            <div className="home-banner__block">
                <div className="home-banner__text">
                    <h1>Ориентируйся в цифровом мире — достигай успеха.</h1>
                    <p>Наше агентство цифрового маркетинга помогает компаниям расти и добиваться успеха в Интернете с помощью целого ряда услуг, включая SEO, PPC, маркетинг в социальных сетях и создание контента.</p>
                    <Link to="/contact" className='home-button-black'>Запишитесь на консультацию</Link>
                </div>
                <div className="home-banner__image-block">
                    <h1 className='title-mobile'>Ориентируйся в цифровом мире — достигай успеха.</h1>
                    <img src={homeBanner} alt="banner"/>
                </div>
            </div>
            <div className="home-banner__partners">
                <div><img src={partner1} alt="amazon"/></div>
                <div><img src={partner2} alt="dribl"/></div>
                <div><img src={partner3} alt="hubspot"/></div>
                <div><img src={partner4} alt="notion"/></div>
                <div><img src={partner5} alt="netflix"/></div>
                <div><img src={partner6} alt="zoom"/></div>
            </div>
        </div>
    );
}

function HomeServices(){
    const services = [
        { title: "SEO оптимизация", image: service1, theme: "light" },
        { title: "Контекстная реклама", image: service2, theme: "green" },
        { title: "Маркетинг в социальных сетях", image: service3, theme: "dark" },
        { title: "Email маркетинг", image: service4, theme: "light" },
        { title: "Создание контента", image: service5, theme: "green" },
        { title: "Аналитика и отслеживание", image: service6, theme: "dark" }
    ];
    return (
        <div className="container mb-100 home-services">
            <HomeTitle
                title='Услуги'
                subtitle='В нашем агентстве цифрового маркетинга мы предлагаем широкий спектр услуг, помогающих бизнесу расти и добиваться успеха в Интернете. Эти услуги включают:'
            />
            <div className="home-services__block">
                {services.map((service, index) => (
                    <div key={index} className={`home-services__item ${service.theme}`}>
                        <h3><span>{service.title}</span></h3>
                        <div className="home-services__image-block">
                            <img src={service.image} alt="service image" />
                        </div>
                        <Link to="/services">
                            <div className='home-services__link-img'>
                                <img src={service.theme === "dark" ? arrowUpRightBlack : arrowUpRightGreen} alt="learn" />
                            </div>
                            <span>Узнать больше</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

function HomeContactCard(){
    return(
        <div className="container home-contact-card">
            <div className="home-contact-card__item">
                <h3>Воплотим планы в реальность</h3>
                <p>Свяжитесь с нами сегодня, чтобы узнать больше о том, как наши услуги цифрового маркетинга могут помочь вашему бизнесу расти и добиваться успеха в Интернете.</p>
                <a href="./contact" className='home-button-black home-button-black-green'>Запросите бесплатное предложение</a>
            </div>
            <div className="home-contact-card__image-block">
                <img src={homeContactCard} alt="Contact us"/>
            </div>
        </div>
    );
}

function HomeCases(){
    return (
        <div className="container home-cases">
            <HomeTitle title='Примеры работ' subtitle='Ознакомьтесь с реальными примерами успешного цифрового маркетинга в наших кейсах' />
            <div className="home-cases__block">
                <div>
                    <p>Для местного ресторана мы запустили таргетированную PPC-кампанию, которая привела к увеличению трафика на сайте на 50% и росту продаж на 25%</p>
                    <Link to="/use-cases"><span>Узнать больше</span><img src={arrowUpRightGreen} alt="learn"/></Link>
                </div>
                <div>
                    <p>Для B2B компании-разработчика ПО мы разработали SEO-стратегию, которая вывела ключевые запросы на первую страницу и увеличила органический трафик на 200%</p>
                    <Link to="/use-cases"><span>Узнать больше</span><img src={arrowUpRightGreen} alt="learn"/></Link>
                </div>
                <div>
                    <p>Для национальной розничной сети мы разработали маркетинговую кампанию в социальных сетях, которая увеличила число подписчиков на 25% и повысила онлайн-продажи на 20%</p>
                    <Link to="/use-cases"><span>Узнать больше</span><img src={arrowUpRightGreen} alt="learn"/></Link>
                </div>
            </div>
        </div>
    );
}

function HomeProcess(){
    const steps = [
        {
            index: "01",
            title: "Консультация",
            content: "Во время первоначальной консультации мы обсудим ваши бизнес-цели и задачи, целевую аудиторию и текущие маркетинговые усилия. Это позволит нам понять ваши потребности и адаптировать наши услуги для наилучшего соответствия вашим требованиям."
        },
        {
            index: "02",
            title: "Исследования и разработка стратегии",
            content: "После консультации мы проведем тщательные исследования для определения вашей целевой аудитории, конкурентов и отраслевых трендов. Это поможет нам разработать комплексную стратегию для достижения ваших бизнес-целей."
        },
        {
            index: "03",
            title: "Реализация",
            content: "После завершения исследований мы приступим к реализации стратегии. Это может включать в себя оптимизацию вашего сайта, создание контента и запуск маркетинговых кампаний. Наша команда будет работать усердно, чтобы все задачи были выполнены вовремя и в рамках бюджета."
        },
        {
            index: "04",
            title: "Мониторинг и оптимизация",
            content: "После первоначальной реализации мы будем постоянно мониторить и оптимизировать ваши маркетинговые усилия, чтобы обеспечить максимальные результаты. Это может включать в себя корректировку рекламных кампаний, улучшение контента и анализ данных для выявления областей для улучшения."
        },
        {
            index: "05",
            title: "Отчётность и коммуникация",
            content: "На протяжении всего процесса мы будем предоставлять регулярные отчёты о результатах ваших маркетинговых кампаний. Это позволит вам отслеживать прогресс, измерять успех и принимать обоснованные решения относительно будущих стратегий."
        },
        {
            index: "06",
            title: "Постоянное улучшение",
            content: "Основываясь на данных и выводах, полученных из отчётов, мы предложим рекомендации для дальнейшего улучшения. Это может включать в себя уточнение существующих стратегий, исследование новых возможностей или корректировку тактик для лучшего соответствия вашим бизнес-целям."
        }
    ];

    return (
        <div className="container home-process">
            <HomeTitle title='Наш рабочий процесс' subtitle='Пошаговое руководство по достижению Ваших бизнес-целей.' />
            <div className="home-process__block">
                <Accordion blocks={steps} />
            </div>
        </div>
    );
}

function HomeTeam(){
    const teamMembers = [
        { name: "Джон Смит", role: "Генеральный директор и основатель", image: team1, description: "Более 10 лет опыта в цифровом маркетинге. Экспертиза в SEO, PPC и стратегии контента" },
        { name: "Джейн Доу", role: "Директор по операциям", image: team2, description: "Более 7 лет опыта в управлении проектами и лидерстве в команде. Отличные организационные и коммуникативные навыки" },
        { name: "Майкл Браун", role: "Старший специалист по SEO", image: team3, description: "Более 5 лет опыта в SEO и создании контента. Опыт в исследовании ключевых слов и оптимизации на странице" },
        { name: "Эмили Джонсон", role: "Менеджер по PPC", image: team4, description: "Более 3 лет опыта в платной рекламе в поисковых системах. Опыт в управлении кампаниями и анализе результатов" },
        { name: "Брайан Уильямс", role: "Специалист по социальным сетям", image: team5, description: "Более 4 лет опыта в маркетинге в социальных сетях. Опыт в создании и планировании контента, анализе метрик и построении вовлеченности" },
        { name: "Сара Ким", role: "Создатель контента", image: team6, description: "Более 2 лет опыта в написании и редактировании. Опыт в создании привлекательного, SEO-оптимизированного контента для различных отраслей" }
    ];

    return (
        <div className="container home-team">
            <HomeTitle title='Команда' subtitle='Познакомьтесь с квалифицированной и опытной командой, стоящей за нашими успешными стратегиями цифрового маркетинга' />
            <div className="home-team__block">
                {teamMembers.map((member, index) => (
                    <div key={index} className="home-team__item">
                        <div className="home-team__header">
                            <div className="home-team__img">
                                <img src={member.image} alt="member team" />
                            </div>
                            <div className="home-team__text">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                                <a href="" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </div>
                        </div>
                        <div className="home-team__content">
                            {member.description}
                        </div>
                    </div>
                ))}
            </div>
            <div className='home-team__block-link'>
                <Link to='/about' className='home-button-black home-button-black-green'>Посмотреть всю команду</Link>
            </div>
        </div>
    );
}

function HomeTestimonials(){
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
        <div className="container home-testimonials">
            <HomeTitle title='Отзывы' subtitle='Услышьте отзывы наших довольных клиентов: Ознакомьтесь с нашими отзывами, чтобы узнать больше о наших услугах цифрового маркетинга' />
            <div className="home-testimonials__block">
                <Slider slides={testimonials} />
            </div>
        </div>
    );
}

function HomeContact(){
    const [selected, setSelected] = useState("say-hi");

    return (
        <div className="container home-contact">
            <HomeTitle title='Связаться с нами' subtitle='Свяжитесь с нами: Давайте обсудим Ваши потребности в цифровом маркетинге' />
            <div className="home-contact__block">
                <form className="home-contact__form">
                    <div className="radio-group">
                        <label className={`radio-button ${selected === "say-hi" ? "selected" : ""}`}>
                            <input
                                type="radio"
                                name="contact"
                                value="say-hi"
                                checked={selected === "say-hi"}
                                onChange={() => setSelected("say-hi")}/>
                            <span className="custom-radio"></span>
                            Напишите нам
                        </label>
                        <label className={`radio-button ${selected === "get-quote" ? "selected" : ""}`}>
                            <input
                                type="radio"
                                name="contact"
                                value="get-quote"
                                checked={selected === "get-quote"}
                                onChange={() => setSelected("get-quote")}
                            />
                            <span className="custom-radio"></span>
                            Рассчитать стоимость
                        </label>
                    </div>
                    <div className='field-block'>
                        <label htmlFor="name">Имя*</label>
                        <input id='name' type="text" name='name' placeholder='Имя'/>
                    </div>
                    <div className='field-block'>
                        <label htmlFor="email">Электронная почта*</label>
                        <input id='email' type="email" name='email' placeholder='Email'/>
                    </div>
                    <div className='field-block mb-40'>
                        <label htmlFor="message">Сообщение*</label>
                        <textarea id='message' name='message' placeholder='Сообщение'/>
                    </div>
                    <button type='submit' className='home-button-black home-button-black-green form-submit'>Отправить</button>
                </form>
                <div className="home-contact__img">
                    <img src={homeContact} alt="home contact"/>
                </div>
            </div>
        </div>
    );
}


function Home() {
    return (
        <div className="container-page home">
            <HomeBanner/>
            <HomeServices/>
            <HomeContactCard/>
            <HomeCases/>
            <HomeProcess/>
            <HomeTeam/>
            <HomeTestimonials/>
            <HomeContact/>
        </div>
    );
}

export default Home;