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

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('id')) || 1;
const article = ARTICLES.find(a => a.id === id) || ARTICLES[0];

document.title = article.title + ' — SportZone';

const container = document.getElementById('article-content');
const relatedGrid = document.getElementById('related-grid');

function renderArticle() {
  container.innerHTML = `
    <div class="article-hero" style="background-image: url('${article.image}')">
      <div class="article-hero__overlay"></div>
      <div class="container article-hero__content">
        <a href="articles.html?cat=${article.category}" class="article-tag">${catName(article.category)}</a>
        <h1>${article.title}</h1>
        <div class="article-meta">
          <span>${article.date}</span>
          <span>${article.readTime} ${t('read_time')}</span>
        </div>
      </div>
    </div>
    <div class="container article-body">
      <div class="article-text">
        ${article.content}
      </div>
      <div class="article-share">
        <span>${t('share_label')}</span>
        <button onclick="shareArticle()">${t('share_btn')}</button>
      </div>
      <a href="articles.html" class="btn btn--outline" style="margin-top:2rem;display:inline-block;">${t('back_articles')}</a>
    </div>
  `;
}

function renderRelated() {
  const related = ARTICLES.filter(a => a.category === article.category && a.id !== article.id).slice(0, 3);
  if (related.length > 0) {
    relatedGrid.innerHTML = related.map(renderCard).join('');
  } else {
    document.querySelector('.related-section').style.display = 'none';
  }
}

function shareArticle() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert(t('share_copied'));
  });
}

applyTranslations();
renderArticle();
renderRelated();
document.addEventListener('langchange', () => {
  renderArticle();
  renderRelated();
});
