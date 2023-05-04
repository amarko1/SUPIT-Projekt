$(document).ready(function() {
    var h1Text = $('h1').text();
    var pText = $('p').text();
    var h1Index = 0;
    var pIndex = 0;
  
    $('h1').text('');
    $('p').text('');
  
    setInterval(function() {
      if (h1Index < h1Text.length) {
        var currentChar = h1Text.charAt(h1Index);
        $('h1').append(currentChar);
        h1Index++;
      } else if (pIndex < pText.length) {
        var currentChar = pText.charAt(pIndex);
        $('p').append(currentChar);
        pIndex++;
      }
    }, 170); // vremenski interval između svakog ispisivanja slova u milisekundama
  });

  
  
  
  