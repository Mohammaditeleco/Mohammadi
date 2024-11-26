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

function openPopup(productName, price) {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('popup-title').innerText = productName;
    document.getElementById('popup-price').innerText = `قیمت: ${price}`;
    document.getElementById('error-message').innerText = ''; // پاک کردن پیام خطا
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function submitForm() {
    const pinCode = document.getElementById('pin-code').value.trim();
    const userId = document.getElementById('user-id').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!pinCode || !userId) {
        errorMessage.innerText = 'لطفاً تمامی فیلدها را پر کنید!';
        return;
    }

    closePopup(); // بستن پاپ‌آپ فرم
    document.getElementById('success-popup').style.display = 'flex'; // نمایش پیام موفقیت
}

function closeSuccessPopup() {
    document.getElementById('success-popup').style.display = 'none';
}
