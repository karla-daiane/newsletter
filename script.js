const formNews = document.getElementById('form-news');
const newsAssinar = document.querySelector('.news-assinar');
const newsAssinado = document.querySelector('.news-assinado');

formNews.addEventListener('submit', function(event) {
    event.preventDefault();
    newsAssinar.style.display = 'none';
    newsAssinado.style.display = 'block';
});
