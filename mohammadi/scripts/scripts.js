const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');

// باز کردن منوی کشویی
openMenu.addEventListener('click', () => {
    sidebar.style.width = '250px';
});

// بستن منوی کشویی
closeMenu.addEventListener('click', () => {
    sidebar.style.width = '0';
});

document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split("/").pop(); // گرفتن نام فایل
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach((item) => {
        const link = item.querySelector("a");
        if (link) {
            const href = link.getAttribute("href");
            if (href === currentPath || (currentPath === "" && href === "index.html")) {
                item.classList.add("active"); // افزودن کلاس فعال
            }
        }
    });
});

