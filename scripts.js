<script src="https://cdn.jsdelivr.net/npm/qrcode@1.4.4/qrcode.min.js"></script>



  const walletAddressInput = document.querySelector('#wallet-address');

  const amountInput = document.querySelector('#amount');

  const qrCodeImg = document.querySelector('.qr-code');



  const generateQRCode = () => {

    const walletAddress = walletAddressInput.value;

    const amount = amountInput.value;

    const data = `bitcoin:${walletAddress}?amount=${amount}`;

    new QRCode(qrCodeImg, data);

  }



  walletAddressInput.addEventListener('input', generateQRCode);

  amountInput.addEventListener('input', generateQRCode);

