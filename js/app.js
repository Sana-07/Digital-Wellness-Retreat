// Chart Data
const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [{
      label: 'Sessions',
      data: [10, 20, 15, 25, 30],
      backgroundColor: 'rgba(0, 123, 255, 0.2)',
      borderColor: 'rgba(0, 123, 255, 1)',
      borderWidth: 1
  }]
};

// Chart Options
const chartOptions = {
  scales: {
      y: {
          beginAtZero: true
      }
  }
};

// Initialize Chart
document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('activitiesChart');
  if (ctx) {
      const chart = new Chart(ctx.getContext('2d'), {
          type: 'bar',
          data: chartData,
          options: chartOptions
      });
  } else {
      console.error('Canvas element for chart not found.');
  }
});

// Product Carousel Movement
document.addEventListener('DOMContentLoaded', () => {
  let span = document.querySelectorAll('header p span');
  let product = document.querySelectorAll('.product');
  let l = 0;
  let movePer = 25.34;
  let maxMove = 203;

  // Mobile view adjustment
  let mobView = window.matchMedia("(max-width: 768px)");
  if (mobView.matches) {
      movePer = 50.36;
      maxMove = 504;
  }

  let rightMover = () => {
      l = l + movePer;
      if (l > maxMove) l = maxMove;
      product.forEach(i => {
          i.style.transform = `translateX(-${l}%)`;
      });
  };

  let leftMover = () => {
      l = l - movePer;
      if (l < 0) l = 0;
      product.forEach(i => {
          i.style.transform = `translateX(-${l}%)`;
      });
  };

  if (span[1]) span[1].onclick = () => { rightMover(); };
  if (span[0]) span[0].onclick = () => { leftMover(); };

  // Testimonial Slider
  if ($(".testimonial__slider").length) {
      $(".testimonial__slider").owlCarousel({
          loop: true,
          margin: 0,
          items: 1,
          dots: true,
          smartSpeed: 1200,
          autoHeight: false,
          autoplay: false
      });
  } else {
      console.error('Testimonial slider element not found.');
  }

  // Counter Animation
  function animateCounter(element) {
      const target = +element.getAttribute('data-number');
      let count = +element.innerText;
      const increment = target / 200;

      function updateCounter() {
          count += increment;
          if (count < target) {
              element.innerText = Math.ceil(count);
              requestAnimationFrame(updateCounter);
          } else {
              element.innerText = target;
          }
      }
      requestAnimationFrame(updateCounter);
  }

  function initCounters() {
      const counters = document.querySelectorAll('.number');
      counters.forEach(counter => {
          animateCounter(counter);
      });
  }

  // Intersection Observer to detect when the section is in view
  let options = {
      threshold: 0.5
  };

  const section = document.querySelector('#section-counter');
  if (section) {
      const sectionObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  initCounters();
                  observer.disconnect();
              }
          });
      }, options);

      sectionObserver.observe(section);
  } else {
      console.error('Section for counters not found.');
  }
});
