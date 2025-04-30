document.getElementById('bmiForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
  
    if (age <= 0 || weight <= 0 || height <= 0) {
      alert("Please enter positive values for age, weight, and height.");
      return;
    }
  
    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';
    let percentage = 0;
    let color = '';
  
    if (bmi < 18.5) {
      category = 'Underweight';
      percentage = 25;
      color = '#2196f3'; // blue
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
      percentage = 50;
      color = '#4caf50'; // green
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
      percentage = 75;
      color = '#ffc107'; // amber
    } else {
      category = 'Obesity';
      percentage = 100;
      color = '#f44336'; // red
    }
  
    document.getElementById('bmiValue').textContent = bmi;
    document.getElementById('bmiCategory').textContent = category;
    document.getElementById('result').classList.remove('hidden');
  
    const bar = document.getElementById('bmiIndicatorBar');
    bar.style.width = percentage + '%';
    bar.style.backgroundColor = color;
  });
  
  document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementById('bmiValue').textContent = '';
    document.getElementById('bmiCategory').textContent = '';
    document.getElementById('result').classList.add('hidden');
    document.getElementById('bmiIndicatorBar').style.width = '0%';
  });
  