// Burger menu
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  nav.classList.toggle('open');
  burger.classList.toggle('open');
});

function renderCard(article) {
  return `
    <article class="article-card">
      <a href="article.html?id=${article.id}" class="article-card__img-wrap">
        <img src="${article.image}" alt="${article.title}" loading="lazy">
        <span class="article-card__cat">${catName(article.category)}</span>
      </a>
      <div class="article-card__body">
        <div class="article-card__meta">
          <span>${article.date}</span>
          <span>${article.readTime} ${t('read_time')}</span>
        </div>
        <h3 class="article-card__title">
          <a href="article.html?id=${article.id}">${article.title}</a>
        </h3>
        <p class="article-card__excerpt">${article.excerpt}</p>
        <a href="article.html?id=${article.id}" class="article-card__link">${t('read_more')}</a>
      </div>
    </article>
  `;
}

const grid = document.getElementById('articles-grid');

function renderGrid() {
  if (grid) grid.innerHTML = ARTICLES.slice(0, 6).map(renderCard).join('');
}

// Newsletter
function handleSubscribe(e) {
  e.preventDefault();
  document.getElementById('thanks-msg').style.display = 'block';
  e.target.style.display = 'none';
}

window.addEventListener('scroll', () => {
  document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 50);
});

applyTranslations();
renderGrid();
document.addEventListener('langchange', renderGrid);
