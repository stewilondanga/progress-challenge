var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

const array = Array.from(document.querySelectorAll("details"));

array.forEach(el => {
  el.addEventListener("click", () => {
    array.forEach(detail => {
      if (el !== detail) {
        detail.removeAttribute("open");
      }
    });
  });
});
 
