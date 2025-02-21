import React from 'react';
import './index.css';
import services1 from "../../assets/images/service/services1.png";
import services2 from "../../assets/images/service/services2.png";
import services3 from "../../assets/images/service/services3.png";
import services4 from "../../assets/images/service/services4.png";
import services5 from "../../assets/images/service/services5.png";
import services6 from "../../assets/images/service/services6.png";
import rightuplimeblack from "../../assets/images/service/rightuplimeblack.png";
import rightupblackwhite from "../../assets/images/service/rightupblackwhite.png";
import heroImage from "../../assets/images/service/hero.png"; 
import seoIcon from "../../assets/images/logo-white.png"; 

const HeroSection = () => {
  return (
    <div className='container-page'>
    <div className="hero-section">
      <div className="hero-image-container">
        <img src={heroImage} alt="Цифровой маркетинг" className="hero-image" />
      <div className="hero-content">
        <h1>Профессиональные услуги цифрового маркетинга</h1>
        <p className="hero-description">
          Раскройте весь потенциал вашего бизнеса с помощью индивидуальных стратегий, разработанных для роста и достижения результатов.
        </p>
        </div>
        </div>
      </div>
    </div>
  );
};

const SeoSection = () => {
  return (
    <div className="seo-section">
      <div className="container-page">
        <div className="seo-image">
          <img src={seoIcon} alt="Процесс SEO" />
        </div>

        <span className="seo-title">Поисковая оптимизация</span>

        <div className="seo-content">
          <p>
            SEO — это процесс улучшения видимости вашего сайта в поисковых системах, таких как Google. 
            Оптимизируя контент и структуру сайта, мы помогаем вашему бизнесу занимать более высокие позиции в поиске, 
            привлекая больше органического трафика и потенциальных клиентов.          
          </p>
          <button className="seo-button">Улучшить мой рейтинг</button>
        </div>
      </div>
    </div>
  );
};

const SeoProcessSection = () => {
  const processSteps = [
    {
      step: "01",
      title: "Аудит и анализ сайта",
      description: "Мы начинаем с полного аудита, чтобы выявить слабые места, включая технические ошибки, качество контента и возможности для ключевых слов.",
    },
    {
      step: "02",
      title: "Исследование и стратегия ключевых слов",
      description: "Мы анализируем самые релевантные и эффективные ключевые слова для вашего бизнеса, чтобы привлекать целевой трафик.",
    },
    {
      step: "03",
      title: "Оптимизация на странице",
      description: "Мы улучшаем структуру сайта, мета-теги и контент, чтобы сделать его удобным для поисковых систем и пользователей.",
    },
    {
      step: "04",
      title: "Создание и оптимизация контента",
      description: "Качественный контент — ключ к успеху. Мы создаем или дорабатываем материалы, которые привлекают аудиторию и соответствуют алгоритмам поисковых систем.",
    },
    {
      step: "05",
      title: "Линкбилдинг",
      description: "Мы разрабатываем стратегию по получению качественных внешних ссылок, что повышает авторитет сайта и его позиции в поиске.",
    },
    {
      step: "06",
      title: "Мониторинг и отчетность",
      description: "Мы постоянно отслеживаем результаты, анализируем позиции и предоставляем детальные отчеты, корректируя стратегию для максимальной эффективности.",
    },
  ];

  return (
    <div className="seo-process-section">
        <section className="section-header">
          <h3 className="title">Как мы работаем: процесс SEO</h3>
          <p className="description">
            Наш пошаговый процесс SEO помогает вашему сайту занимать высокие позиции, привлекать больше трафика и достигать стабильных результатов.
          </p>
        </section>
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div className="process-step-wrapper" key={index}>
              <div className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h2 className="step-title">{step.title}</h2>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

const UseCasesSection = () => {
  const useCases = [
    {
      title: "Магазин модной одежды",
      description: "Мы внедрили индивидуальную стратегию SEO, что привело к росту органического трафика на 150% и увеличению онлайн-продаж на 50% за шесть месяцев.",
      link: "#",
    },
    {
      title: "Сеть ресторанов",
      description: "Оптимизируя локальное SEO и Google My Business, мы увеличили видимость и добились роста онлайн-бронирований и посещаемости на 300%.",
      link: "#",
    },
    {
      title: "Медицинская клиника",
      description: "Благодаря оптимизации контента и работе с ключевыми словами, мы помогли клинике попасть в топ поисковой выдачи, увеличив количество запросов и записей на прием на 180%.",
      link: "#",
    },
  ];

  return (
    <div className="use-cases-section">
      <section className="section-header">
        <h3 className="title">Кейсы</h3>
        <p className="description">
          Узнайте, как наши решения в digital-маркетинге помогают бизнесу расти в разных сферах.
        </p>
      </section>

      <div className="use-cases-container">
        {useCases.map((caseItem, index) => (
          <div className="use-case-card" key={index}>
            <h4 className="use-case-title">{caseItem.title}</h4>
            <p className="use-case-description">{caseItem.description}</p>
            <a href={caseItem.link} className="use-case-link">Подробнее</a>
            {index < useCases.length - 1 && <div className="divider" />}
          </div>
        ))}
      </div>
    </div>
  );
};

const CTASection = () => {
  return (
    <div className="cta-section">
      <div className="cta-content">
        <h3 className="cta-title">Готовы улучшить свои позиции в поиске?</h3>
        <div className="cta-divider"></div>
        <p className="cta-description">
          Наши проверенные стратегии SEO помогут вашему бизнесу добиться устойчивого успеха в поисковых системах. Давайте вместе увеличим вашу видимость в интернете!
        </p>
        <button className="cta-button">Начать SEO-продвижение</button>
      </div>
      <div className="cta-image">
        <img src={heroImage} alt="Рост SEO" />
      </div>
    </div>
  );
};

const Service = () => {
  const services = {
    "seo": { title: "Поисковая оптимизация (SEO)", img: services1, icon: rightuplimeblack, bg: "rgb(239, 239, 239)" },
  "ppc": { title: "Реклама с оплатой за клик (PPC)", img: services2, icon: rightuplimeblack, bg: "rgb(239, 239, 239)" },
  "smm": { title: "Маркетинг в социальных сетях (SMM)", img: services3, icon: rightuplimeblack, bg: "rgb(239, 239, 239)" },
  "em": { title: "Email-маркетинг", img: services4, icon: rightuplimeblack, bg: "rgb(239, 239, 239)" },
  "cc": { title: "Создание контента", img: services5, icon: rightuplimeblack, bg: "rgb(239, 239, 239)" },
  "aat": { title: "Аналитика и отслеживание", img: services6, icon: rightuplimeblack, bg: "rgb(239, 239, 239)" },

  };

  return (
    <div className="container" id="services">
      <HeroSection />
      <SeoSection />
      <SeoProcessSection />
      <UseCasesSection />
        <section className="section-header">
          <h1 className="title">Услуги</h1>
          <p className="description">
            В нашем агентстве цифрового маркетинга мы предлагаем широкий спектр услуг, чтобы помочь бизнесу расти и добиваться успеха в интернете.
          </p>
        </section>
        <div className="service-list">
          {Object.keys(services).map((item, index) => (
            <div className="service-item-wrapper" key={index}>
              <section className="service-item" style={{ backgroundColor: services[item].bg }}>
                <div className="service-item-content">
                  <h1 className="service-title">{services[item].title}</h1>
                  <nav className="service-info">
                    <img src={services[item].icon} alt="" className="service-icon" />
                    <p className="learn-more">Узнать больше</p>
                  </nav>
                </div>
                <img src={services[item].img} alt="" className="service-image" />
              </section>
            </div>
          ))}
        </div>
        <CTASection />
    </div>
  );
};


export default Service;