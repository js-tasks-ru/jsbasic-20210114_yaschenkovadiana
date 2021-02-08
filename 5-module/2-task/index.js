function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');

  button.onclick = function() {
    let style = text.style.display;
      if (style === "") {
        text.style.display = 'none'; 
       }
       else if (style === 'none') {
        text.style.display = ""; 
      }
}; 
}
