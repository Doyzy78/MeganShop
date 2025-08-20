const TELEGRAM_BOT_TOKEN = "7604632938:AAHCm-BWQcqLoTvboHnGO8rSFA3dzsjMAyM";
const TELEGRAM_CHAT_ID = "6719980679";

document.getElementById('checkoutBtn').addEventListener('click', () => {
  const telegramName = document.getElementById('telegramName').value || "t.me/example";
  if(cart.length === 0){
    alert("No Item In Your Cart");
    return;
  }

  let orderText = "💥 New Order from MAEGAN Shop:\n\n";
  cart.forEach(item => {
    orderText += `- ${item.name} ($${item.price})\n`;
  });
  orderText += `Client: ${telegramName}`;

  // Send to Telegram
  fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: orderText
    })
  })
  .then(res => res.json())
  .then(data => {
    // Show toast instead of updating the page
    showToast("Successful sent,Wait Untill Reply");
    cart = [];
    renderCart();
  })
  .catch(err => {
    showToast("❌ Failed to send order");
  });
});

// Simple toast function
function showToast(message) {
  const toast = document.createElement('div');
  toast.innerText = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '30px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.background = '#00ffff';
  toast.style.color = '#000';
  toast.style.padding = '12px 20px';
  toast.style.borderRadius = '12px';
  toast.style.boxShadow = '0 0 15px #7fff7f';
  toast.style.fontWeight = 'bold';
  toast.style.zIndex = '9999';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.5s ease';

  document.body.appendChild(toast);

  setTimeout(() => { toast.style.opacity = '1'; }, 100);
  setTimeout(() => { toast.style.opacity = '0'; }, 3000);
  setTimeout(() => { document.body.removeChild(toast); }, 3500);
}
