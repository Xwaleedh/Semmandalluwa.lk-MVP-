//Welcome Alert

alert("Welcome To Semmandalluwa.lk!");

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 3000); // 3 seconds
});
