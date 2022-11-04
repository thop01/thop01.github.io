function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)

  let qrcode = prompt ("Zoek de goede qr code met daarin het getal, tip begin links boven. Als je het antwoord hebt gevonden refresh de pagina.ㅤㅤㅤㅤㅤㅤㅤㅤ(je kunt voor nu op annuleren drukken)");

  if (qrcode == 21){
    window.location.href = "puzzel2.html";
  }
  else{
    alert ("helaas is dit antwoord niet goed")
  }
