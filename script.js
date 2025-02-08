// Function to redirect to the selected page
function redirectToPage(page) {
    switch (page) {
      case 'health':
        window.location.href = 'health.html';
        break;
      case 'home':
        window.location.href = 'homeappliances.html';
        break;
      case 'vehicle':
        window.location.href = 'vehicle.html';
        break;
      default:
        console.error('Invalid option selected');
    }
  }
  
  // Add event listeners to buttons
  document.addEventListener('DOMContentLoaded', function () {
    // Health Button
    const healthBtn = document.getElementById('healthBtn');
    if (healthBtn) {
      healthBtn.addEventListener('click', function () {
        redirectToPage('health');
      });
    }
  
    // Home Appliances Button
    const appliancesBtn = document.getElementById('appliancesBtn');
    if (appliancesBtn) {
      appliancesBtn.addEventListener('click', function () {
        redirectToPage('home');
      });
    }
  
    // Vehicle Button
    const vehicleBtn = document.getElementById('vehicleBtn');
    if (vehicleBtn) {
      vehicleBtn.addEventListener('click', function () {
        redirectToPage('vehicle');
      });
    }
  });