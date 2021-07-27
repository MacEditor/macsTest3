// button effect
const btn = document.querySelector('.button');

  btn.addEventListener('click', function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    ripples.classList = 'rip';
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    },405);
  });

// Immediately invoked function expression
// to not pollute the global scope
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const $benefit = document.querySelector('.benefit');

  let deg = 0;
  let zoneSize = 30; // deg

  // Counter clockwise
  const symbolSegments = {
    1: "1시간 무료",
    2: "1시간 무료",
    3: "2시간 무료",
    4: "1시간 무료",
    5: "음료 1종 무료",
    6: "2시간 무료",
    7: "1시간 무료",
    8: "1시간 무료",
    9: "1시간 무료",
    10: "에어팟 프로",
    11: "1시간 무료",
    12: "1시간 무료",
  }

  let $item = document.createElement('img');

  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    $benefit.innerText = symbolSegments[winningSymbolNr];
    $benefit.classList.add('active');
    if(symbolSegments[winningSymbolNr] === "1시간 무료"){
      $item.src = "item1.png";
    }else if(symbolSegments[winningSymbolNr] === "2시간 무료"){
      $item.src = "item2.png";
    }else if(symbolSegments[winningSymbolNr] === "음료 1종 무료"){
      $item.src = "item3.png";
    }else if(symbolSegments[winningSymbolNr] === "에어팟 프로"){
      $item.src = "item4.png";
    }else{
      $benefit.innerText = "오류가 발생했습니다 다시 돌려주세요";
    }
    $benefit.prepend($item);
    $item.style.display = "inline-block";
  }

  startButton.addEventListener('click', () => {
    // Reset benefit
    $benefit.innerText = " ";
    $benefit.classList.remove('active');
    $item.style.display = "none";
    // Disable button during spin
    startButton.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(5000 + Math.random() * 5000);
    // Set the transition on the wheel
    wheel.style.transition = 'all 10s ease-out';
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add('blur');
  });

  wheel.addEventListener('transitionend', () => {
    // Remove blur
    wheel.classList.remove('blur');
    // Enable button when spin is over
    startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    // Calculate and benefit the winning symbol
    handleWin(actualDeg);

    // confetti.stop();
    const startit = () => {
      setTimeout(function () {
        confetti.start();
      }, 1000);
    };

    const stopit = () => {
      setTimeout(function () {
        confetti.stop();
      }, 6000);
    };

    startit();
    stopit();
  });
})();
