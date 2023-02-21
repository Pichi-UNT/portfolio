const d = document;

export function Footer() {
  const $footer = d.createElement("footer");
  $footer.innerHTML =
    '<div class="footer-item"><i class="fas fa-map-marker-alt"></i><span>Lorem ipsum dolor sit amet.</span></div>' +
    '<div class="footer-item"><i class="fas fa-envelope"></i><span>info@worldpizza.com</span></div>' +
    '<div class="footer-item"><i class="fas fa-phone"></i><span>+22145223335</span></div>' +
    '<div class="footer-item"><i class="fab fa-twitter"></i><span>@worldpizza</span></div>';
  return $footer;
}

/*

<footer>
  <div>

  </div>

</footer> 

*/
