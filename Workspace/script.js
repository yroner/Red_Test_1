document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".camp_btn");
    const title = document.querySelector(".How_ttl");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Получаем номер кампании из data-id (если он у кнопки)
            const campaignNumber = this.getAttribute("data-id") || this.querySelector(".camp_name").getAttribute("data-id");

            // Меняем текст в заголовке
            title.textContent = `How can we help CAMPAIGN_${campaignNumber} today?`;

            // Делаем кнопку активной
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
