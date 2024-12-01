// get

// event

// const chiffres = document.querySelectorAll("#compteur h1");
// let index = 0;
// function afficherChiffres() {
//   if (index > 0) {
//     // Cache le chiffre précédent
//     chiffres[index - 1].classList.add("none");
//     chiffres[index - 1].classList.remove("block");
//   }

//   if (index < chiffres.length) {
//     // Affiche le chiffre actuel
//     chiffres[index].classList.add("block");
//     chiffres[index].classList.remove("none");

//     // Passe au chiffre suivant après 300ms
//     setTimeout(() => {
//       index++;
//       afficherChiffres();
//     }, 1000);
//   }
// }
// afficherChiffres();
// functions

export default function explosion() {

  const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();
  
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
  
    const particleCount = 50 * (timeLeft / duration);
  
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
  
  const stars = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["star"],
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
  };
  
  function shootStars() {
    confetti({
      ...stars,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    });
  
    confetti({
      ...stars,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
  };
  
  setTimeout(shootStars, 0);
  setTimeout(shootStars, 200);
  setTimeout(shootStars, 400);
  setTimeout(shootStars, 600);
  setTimeout(shootStars, 800);
  setTimeout(shootStars, 1000);
  setTimeout(shootStars, 1200);
  setTimeout(shootStars, 1400);
  setTimeout(shootStars, 1600);
  setTimeout(shootStars, 1800);
  setTimeout(shootStars, 2000);
  setTimeout(shootStars, 2200);
};