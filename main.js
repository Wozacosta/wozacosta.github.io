

$('#learning1').progress({
  percent: 22
});

$('#learning2').progress({
  percent: 17
});

$('#learning3').progress({
  percent: 24
});

$('#learning4').progress({
  percent: 51
});

$('#learning5').progress({
  percent: 75
});

jQuery(document).ready(function() {
  jQuery("time.timeago").timeago();
});

// COPY EMAIL FUNCTION

(function() {

	'use strict';
  
  // click events
  document.body.addEventListener('click', copy, true);

	// event handler
	function copy(e) {

    // find target element
    var 
      t = e.target,
      c = t.dataset.copytarget,
      inp = (c ? document.querySelector(c) : null);
      
    // is element selectable?
    if (inp && inp.select) {
      
      // select text
      inp.select();

      try {
        // copy text
        document.execCommand('copy');
        inp.blur();
        
        // copied animation
        t.classList.add('copied');
        setTimeout(function() { t.classList.remove('copied'); }, 1500);
      }
      catch (err) {
        alert('please press Ctrl/Cmd+C to copy');
      }
      
    }
    
	}

})();