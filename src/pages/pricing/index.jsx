import React, { useState } from "react";
import "./index.css";

const pricingPlans = [
  {
    name: "Базовый тариф",
    price: "₽50.000",
    features: [
      "Оптимизация веб-сайта",
      "Настройка социальных сетей (1 платформа)",
      "Ежемесячный отчет о ходе работ",
      "Поддержка по электронной почте",
      "Базовый анализ конкурентов",
      "Первоначальный аудит SEO",
    ],
  },
  {
    name: "Про тариф",
    price: "₽100.000",
    popular: true,
    features: [
      "Все из базового тарифа",
      "Настройка соцсетей (до 3 платформ)",
      "Управление рекламными кампаниями PPC",
      "Поддержка по телефону и email",
      "Улучшение SEO на страницах",
      "Рекомендации по контенту каждый месяц",
    ],
  },
  {
    name: "Элитный тариф",
    price: "₽200.000",
    features: [
      "Все из профессионального тарифа",
      "Разработка и дизайн веб-сайта",
      "Комплексная SEO-стратегия",
      "Настройка соцсетей (до 5 платформ)",
      "Контент-маркетинг и внедрение стратегии",
      "Глубокая аналитика и отчётность",
    ],
  },
];

const faqItems = [
  {
    question: "Есть ли дополнительные сборы или платежи?",
    answer:
      "Наши тарифные планы охватывают полный комплекс услуг для продвижения вашего бизнеса в цифровой среде. Мы предлагаем профессиональное SEO-продвижение для повышения видимости вашего сайта в поисковых системах, настройку и ведение рекламных кампаний для привлечения целевой аудитории, а также комплексное управление социальными сетями, включая создание контента, публикации, аналитику и взаимодействие с подписчиками.",
  },
  {
    question: "Можно ли изменить или отменить тариф в любое время?",
    answer:
      "Да, вы можете отменить или поменять тариф в любой момент без штрафов.",
  },
  {
    question: "Есть ли бесплатная консультация?",
    answer:
      "Да, мы предлагаем бесплатную консультацию для подбора наилучшего тарифа под ваш бизнес.",
  },
  {
    question: "Как происходит выставление счетов?",
    answer:
      "Мы предлагаем гибкие варианты оплаты: помесячные счета и автоматические платежи.",
  },
  {
    question: "Гарантированы ли результаты?",
    answer:
      "Хотя мы не можем гарантировать определённые позиции, мы применяем лучшие практики для роста вашего бизнеса.",
  },
  {
    question: "Вы работаете по контракту или на ретейнерной основе?",
    answer:
      "Мы предлагаем как контрактное сотрудничество, так и ретейнерные планы, в зависимости от ваших потребностей.",
  },
];

const PricingCard = ({ plan }) => (
  <div className={`card ${plan.popular ? "popular" : ""}`}>
    {plan.popular && <span className="popular-badge">Популярно</span>}
    <h3>{plan.name}</h3>
    <p>
      <span>{plan.price}</span> /месяц
    </p>
    <div className="buttons">
      <a href="#">Начать</a>
      <a href="#">Оставить заявку</a>
    </div>
    <hr className="line" />
    <ul className="list">
      {plan.features.map((feature, index) => (
        <li key={index} className="list-item">
          <svg
            className="arrow-icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const FAQItem = ({ faq, isOpen, onClick }) => (
  <div className={`faq-item ${isOpen ? "open" : ""}`} onClick={onClick}>
    <div className="faq-question">
      {faq.question} <div className="open_btn">{isOpen ? "−" : "+"}</div>
    </div>
    {isOpen && (
      <>
        <div className="faq-answer">{faq.answer}</div>
      </>
    )}
  </div>
);

function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="container-page pricing">
      <div className="container plans">
        <h1 className="title">Цены</h1>
        <p className="description">
          Повысьте свою узнаваемость в интернете: конкурентоспособные цены для
          исключительных результатов
        </p>

        <div className="price_cards">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>

      <div className="container faq">
        <h2 className="faq-heading">
          <span>Часто задаваемые</span>
          <span>вопросы</span>
        </h2>
        <div className="faq-section">
          {faqItems.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openFaq === index}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
