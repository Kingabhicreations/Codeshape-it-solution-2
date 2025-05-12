const aboutForm = document.getElementById('aboutForm');
    const aboutText = document.getElementById('aboutText');
    const saveMessage = document.getElementById('saveMessage');

    aboutForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Simulate save operation (e.g., AJAX to server)
      saveMessage.textContent = "Changes saved successfully!";
      setTimeout(() => {
        saveMessage.textContent = "";
      }, 3000);
    });
 