document.addEventListener('DOMContentLoaded', function() {
    const loginWindow = document.getElementById('login-window');
    const registerWindow = document.getElementById('register-window');
    const welcomeWindow = document.getElementById('welcome-window');
    const recipeWindow = document.getElementById('recipe-window');
    const activityWindow = document.getElementById('activity-window');
    
    document.getElementById('register-button').addEventListener('click', function() {
        loginWindow.style.display = 'none';
        registerWindow.style.display = 'block';
    });
    
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        registerWindow.style.display = 'none';
        welcomeWindow.style.display = 'block';
    });
    
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        loginWindow.style.display = 'none';
        welcomeWindow.style.display = 'block';
    });
    
    document.getElementById('additional-info-form').addEventListener('submit', function(e) {
        e.preventDefault();
        welcomeWindow.style.display = 'none';
        recipeWindow.style.display = 'block';
    });
    
    document.getElementById('to-activity-button').addEventListener('click', function() {
        recipeWindow.style.display = 'none';
        activityWindow.style.display = 'block';
    });
    
    document.getElementById('finish-button').addEventListener('click', function() {
        activityWindow.style.display = 'none';
        loginWindow.style.display = 'block';
    });
});
