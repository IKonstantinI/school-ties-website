document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];

    // Функция для обновления корзины
    function updateCart() {
        const cartList = document.getElementById('cart-items');
        cartList.innerHTML = '';
        cartItems.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price} руб.`;
            cartList.appendChild(li);
        });
    }

    // Добавление товара в корзину
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            const productItem = event.target.closest('.product-item');
            const productId = productItem.getAttribute('data-product-id');
            const productName = productItem.getAttribute('data-product-name');
            const productPrice = productItem.getAttribute('data-product-price');
            cartItems.push({ id: productId, name: productName, price: productPrice });
            updateCart();
        });
    });

    // Отправка данных заказа на email
    document.getElementById('checkout-form').addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const orderDetails = cartItems.map(item => `${item.name} - ${item.price} руб.`).join(', ');

        const emailBody = `Имя: ${name}\nEmail: ${email}\nЗаказ: ${orderDetails}`;
        window.location.href = `mailto:info@schoolties.ru?subject=Заказ&body=${encodeURIComponent(emailBody)}`;

        alert('Ваш заказ отправлен!');
        cartItems.length = 0; // Очистить корзину после отправки
        updateCart();
    });
});
