// Starting price
var price = 1000;
document.getElementById('price').innerHTML = price;

function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
   current = start,
   range = end - start,
   increment = end > start ? 1 : -1,
   step = Math.abs(Math.floor(duration / range)),
   timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
     clearInterval(timer);
    }
   }, step);
 }

var options = document.getElementById('pricing').querySelectorAll('input');
for ( var i = 0; i < options.length; i++ ) {
   options[i].onclick = handleOption;
}

function handleOption() {
   var itemPrice = Number(this.value);

   if (this.checked) {
      price += itemPrice;
   }

   else {
      price -=itemPrice;
   }

   showSelections();
   document.getElementById('price').innerHTML = price;
}

function showSelections() {
   var list = [];
   var checkedOnes = document.getElementById('pricing').querySelectorAll('input:checked');

   for ( var i = 0; i < checkedOnes.length; i++ ) {
      var itemname = checkedOnes[i].getAttribute('data-itemname');
      list.push(itemname);
   }

   document.getElementById('selections').innerHTML = list.join(', ');
}

showSelections();
