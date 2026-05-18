// Burger
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  nav.classList.toggle('open');
  burger.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 50);
});

function renderCard(article) {
  return `
    <article class="article-card">
      <a href="article.html?id=${article.id}" class="article-card__img-wrap">
        <img src="${article.image}" alt="${articleField(article, 'title')}" loading="lazy">
        <span class="article-card__cat">${catName(article.category)}</span>
      </a>
      <div class="article-card__body">
        <div class="article-card__meta">
          <span>${articleField(article, 'date')}</span>
          <span>${article.readTime} ${t('read_time')}</span>
        </div>
        <h3 class="article-card__title">
          <a href="article.html?id=${article.id}">${articleField(article, 'title')}</a>
        </h3>
        <p class="article-card__excerpt">${articleField(article, 'excerpt')}</p>
        <a href="article.html?id=${article.id}" class="article-card__link">${t('read_more')}</a>
      </div>
    </article>
  `;
}

const grid = document.getElementById('articles-grid');
const noResults = document.getElementById('no-results');
const searchInput = document.getElementById('search');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentCat = 'all';
let currentSearch = '';

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('cat')) {
  currentCat = urlParams.get('cat');
  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === currentCat);
  });
}

function render() {
  let filtered = ARTICLES;
  if (currentCat !== 'all') {
    filtered = filtered.filter(a => a.category === currentCat);
  }
  if (currentSearch.trim()) {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(a =>
      articleField(a, 'title').toLowerCase().includes(q) ||
      articleField(a, 'excerpt').toLowerCase().includes(q)
    );
  }
  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
    grid.innerHTML = filtered.map(renderCard).join('');
  }
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = btn.dataset.cat;
    render();
  });
});

searchInput.addEventListener('input', (e) => {
  currentSearch = e.target.value;
  render();
});

applyTranslations();
render();
document.addEventListener('langchange', render);
