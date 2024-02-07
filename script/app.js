function setProgress(percent, element) {
    const circleFill = element.querySelector('.progress-circle__fill');
    const radius = circleFill.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - percent / 100 * circumference;
    circleFill.style.strokeDasharray = `${percent}, 100`;
    circleFill.style.strokeDashoffset = offset;
  }
  
  const htmlProgress = document.querySelector('.progress-circle:nth-of-type(1)');
  const cssProgress = document.querySelector('.progress-circle:nth-of-type(2)');
  const jsProgress = document.querySelector('.progress-circle:nth-of-type(3)');
  
  setProgress(90, htmlProgress); // Remplacez 90 par le pourcentage de progression pour HTML
  setProgress(75, cssProgress); // Remplacez 75 par le pourcentage de progression pour CSS
  setProgress(50, jsProgress); // Remplacez 50 par le pourcentage de progression pour JavaScript
  