 document.getElementById('cardType').addEventListener('change', calculateTotal);
    document.getElementById('quantity').addEventListener('input', calculateTotal);
    document.getElementById('sendButton').addEventListener('click', openWhatsApp);
    
    
    function calculateTotal() {
      const cardType = document.getElementById('cardType').value;
      const quantity = document.getElementById('quantity').value;
      const totalPrice = cardType * quantity;

      document.getElementById('totalPrice').textContent = '₦' + totalPrice;
    }

    function openWhatsApp() {
      const cardType = document.getElementById('cardType').options[document.getElementById('cardType').selectedIndex].text;
      const quantity = document.getElementById('quantity').value;
      const totalPrice = document.getElementById('totalPrice').textContent;
      const message = `I would like to purchase ${quantity} ${cardType} each which is  ${totalPrice} total price for the TIY card(s) I want to purchase.`;

      // Replace the phone number with your own number or a destination number
      var phoneNumber = '+2348142397504'; 
      
      var url = 'sms:' + phoneNumber + '?body=' + message;
      window.location.href = url;
    }
 
 
 
function buyGiftCard(name, amount) {
  const shoppingCart = document.getElementById('shopping-cart');
  const newCard = document.createElement('div');
  newCard.innerHTML = `<h3>${name} Card</h3><p>₦${amount}</p>`;
  shoppingCart.appendChild(newCard);
}


function button() {
    popup.style.display="block";
}

function date() {
                 alert("coming soon!");
             }
             
let amount = parseFloat(localStorage.getItem('amount') || 0);             
                          
             
function mail() {
const line = document.getElementById('line').value;
  const lin = document.getElementById('lin').value;
  const linn = document.getElementById('linn').value;
  const withdrawAmount = parseFloat(document.getElementById('line').value);
  
    if (line == lin == linn) {
    alert('Complain in all line must not be empty and must not be the same');
  } else {
    const message = `My Bank Account Details: \n\n Account number: ${line} \n Account name: ${lin} \n Bank Account: ${linn}`;
    
    
                
      var phoneNumber = '+2348120419277';
      
      var url = 'sms:' + phoneNumber + '?body=' + message;
      window.location.href = url;
                alert('Thank you we,ve receive your Account Details and we will get back to you as soon as possible!!');
             }
}

function get() {
const download = document.getElementById('download').value;
 
  
   
    const message = ` I Want To Download TIY app`;
    
    
                
      var phoneNumber = '+2348142397504';
      
      var url = 'sms:' + phoneNumber + '?body=' + message;
      window.location.href = url;
                alert('Thank you we,ve receive your message and we will get back to you as soon as possible!!');
             }


