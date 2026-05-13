import React from 'react';
import './App.css';

// --- MA'LUMOTLAR (DATA) ---
const categories = [
  { id: 1, name: 'Новинки', active: true },
  { id: 2, name: 'Комбо', active: false },
  { id: 3, name: 'Лаваш', active: false },
  { id: 4, name: 'Бургеры', active: false },
  { id: 5, name: 'Хот-дог', active: false },
  { id: 6, name: 'Сендвич', active: false },
  { id: 7, name: 'Донар', active: false },
  { id: 8, name: 'Салаты', active: false },
  { id: 9, name: 'Соус', active: false },
  { id: 10, name: 'Мафины', active: false },
  { id: 11, name: 'Кофе', active: false },
  { id: 12, name: 'Гарниры', active: false },
  { id: 13, name: 'Напитки', active: false },
];

const products = [
  {
    id: 1,
    title: 'PIRAMIDA COMBO',
    currentPrice: '48 000',
    oldPrice: '59 000',
    isNew: true,
    image: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F03%2F1775216357483874087.webp&w=640&q=75',
  },
  {
    id: 2,
    title: 'DONARCHI',
    currentPrice: '45 000',
    oldPrice: '59 000',
    isNew: true,
    image: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F03%2F1775216347561680440.webp&w=640&q=75',
  },
  {
    id: 3,
    title: 'DONAR TOVUQLI',
    currentPrice: '32 000',
    oldPrice: null,
    isNew: true,
    image: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F03%2F1775215745600158904.webp&w=640&q=75',
  },
  {
    id: 4,
    title: 'BIG DONAR (tovuqli)',
    currentPrice: '42 000',
    oldPrice: null,
    isNew: true,
    image: 'https://feedup.uz/_next/image?url=https%3A%2F%2Fcdn.zoomda.uz%2Fproducts%2F2026%2F04%2F28%2F1777380621804305382.webp&w=640&q=75    ',
  },
];

// --- COMPONENTLAR ---

const Header = () => (
  <header className="header">
    <div className="logo">
      <span className="logo-feed">feed</span>
      <span className="logo-up">up</span>
    </div>

    <nav className="nav-menu">
      <a href="#about">О нас</a>
      <a href="#menu">Меню</a>
      <a href="#promo">Акции</a>
      <a href="#jobs">Вакансии</a>
      <a href="#branches">Филиалы</a>
      <a href="#contact">Контакты</a>
    </nav>

    <div className="header-right">
      <button className="order-type-btn">Тип заказа</button>
      <div className="phone-info">
        <div className="phone-number">+998 71 200 22 11</div>
        <div className="phone-time">Ежедневно с 09:00 до 02:45</div>
      </div>
      <div className="header-icons">
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-cart-shopping"></i>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-globe"></i>
        <i className="fa-regular fa-user"></i>
        <i className="fa-regular fa-moon"></i>
      </div>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-banner">
      <button className="slider-arrow left-arrow">
        <i className="fa-solid fa-chevron-left"></i>
      </button>



      <button className="slider-arrow right-arrow">
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="slider-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  </section>
);

const CategoriesNav = () => (
  <section className="categories-nav">
    <button className="scroll-arrow">
      <i className="fa-solid fa-chevron-left"></i>
    </button>
    <ul className="categories-list">
      {categories.map((cat) => (
        <li key={cat.id}>
          <a href={`#${cat.name}`} className={cat.active ? 'active' : ''}>
            {cat.name}
          </a>
        </li>
      ))}
    </ul>
    <button className="scroll-arrow">
      <i className="fa-solid fa-chevron-right"></i>
    </button>
  </section>
);

const ProductCard = ({ product }) => (
  <div className="product-card">
    {product.isNew && <div className="badge-new">Новинка</div>}
    <button className="favorite-btn">
      <i className="fa-regular fa-heart"></i>
    </button>
    <div className="product-image">
      <img src={product.image} alt={product.title} />
    </div>
    <h3 className="product-title">{product.title}</h3>
    <div className="product-footer">
      <div className="price-container">
        <div className="current-price">{product.currentPrice}</div>
        {product.oldPrice && <div className="old-price">{product.oldPrice}</div>}
      </div>
      <button className="add-btn">Добавить</button>
    </div>
  </div>
);

// --- ASOSIY APP ---
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <CategoriesNav />

      <main className="products-section">
        <div className="section-header">
          <div className="line"></div>
          <h2>Новинки</h2>
          <div className="line"></div>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="section-header" style={{ marginTop: '40px' }}>
          <div className="line"></div>
          <h2>Комбо</h2>
          <div className="line"></div>
        </div>
      </main>
    </div>
  );
}

export default App;