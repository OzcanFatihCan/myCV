function showContent(section) {
  const contents = document.querySelectorAll('.content');
  const tabs = document.querySelectorAll('.sidebar nav ul li');

  contents.forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById(section).classList.add('active');

  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelector(`.sidebar nav ul li[onclick="showContent('${section}')"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  showContent('about');
});
