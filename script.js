window.addEventListener("load", () => {
    const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    welcomeModal.show();
  });
  
  const letrasBtnsGato = document.querySelectorAll(".letra-btnGato");
  const letrasBtnsCachorro = document.querySelectorAll(".letra-btnCachorro");
  const letrasBtnsZebra = document.querySelectorAll(".letra-btn");
  const feedback = document.getElementById("feedback");
  
  letrasBtnsGato.forEach(button => {
    button.addEventListener("click", () => {
      if (button.textContent === "G") {
        feedback.textContent = "Parabéns! Você acertou!";
        feedback.className = "text-success";
      } else {
        feedback.textContent = "Tente novamente!";
        feedback.className = "text-danger";
      }
    });
  });

  

  
  // letrasBtnsCachorro.forEach(button => {
  //   button.addEventListener("click", () => {
  //     if (button.textContent === "C") {
  //       feedback.textContent = "Parabéns! Você acertou!";
  //       feedback.className = "text-success";
  //     } else {
  //       feedback.textContent = "Tente novamente!";
  //       feedback.className = "text-danger";
  //     }
  //   });
  // });

  // letrasBtnsZebra.forEach(button => {
  //   button.addEventListener("click", () => {
  //     if (button.textContent === "Z") {
  //       feedback.textContent = "Parabéns! Você acertou!";
  //       feedback.className = "text-success";
  //     } else {
  //       feedback.textContent = "Tente novamente!";
  //       feedback.className = "text-danger";
  //     }
  //   });
  // });