const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  // console.log(links.classList.contains('random'));
  // console.log(links.classList.contains('links'));
  // if (links.classList.contains('show-links')) {
  //   links.classList.remove('show-links');
  // } else {
  //   links.classList.add('show-links');
  // }
  links.classList.toggle('show-links');
});

     // Get the img object using its Id 
      img = document.getElementById("image"); 
      // Function to increase image size 
      function enlargeImg() { 
        // Set image size to 1.5 times original 
        img.style.transform = "scale(1.5)"; 
        // Animation effect  
        img.style.transition = "transform 0.25s ease"; 
      } 
      // Function to reset image size 
      function resetImg() { 
        // Set image size to original 
        img.style.transform = "scale(1)"; 
        img.style.transition = "transform 0.25s ease"; 
      } 
    </scr



