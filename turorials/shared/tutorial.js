

// fetch('../shared/header.html')
//   .then(res => res.text())
//   .then(html => {
//     document.getElementById('header').innerHTML = html;
//   });

// fetch('../shared/footer.html')
//   .then(res => res.text())
//   .then(html => {
//     document.getElementById('footer').innerHTML = html;
//   });

// function initLogoProgress() {
//   const bar = document.querySelector('.progress-bar');
//   const label = document.querySelector('.progress-label');

//   if (!bar || !label) return;

//   let progress = 0;

//   bar.style.width = '0%';
//   label.textContent = 'building… 0%';

//   const interval = setInterval(() => {
//     progress += Math.random() * 8;

//     if (progress >= 100) {
//       progress = 100;
//       bar.style.width = '100%';
//       label.textContent = 'build: success';
//       clearInterval(interval);
//     } else {
//       bar.style.width = progress + '%';
//       label.textContent = `building… ${Math.floor(progress)}%`;
//     }
//   }, 120);
// }


fetch('../shared/header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header').innerHTML = html;
    initLogoProgress();
  });

fetch('../shared/footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('footer').innerHTML = html;
  });




