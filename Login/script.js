const home_button = document.getElementById("home_btn");
const goto_camp_btn = document.getElementById("goto_camp_btn");

home_button.addEventListener('click', () => {
    // Переход на другую страницу
    window.location.href = '../index.html'; // Замените на URL вашей страницы
});

goto_camp_btn.addEventListener('click',() => {
    window.location.href = '../Workspace/workspace.html';
});