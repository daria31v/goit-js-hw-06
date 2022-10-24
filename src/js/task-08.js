// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.

// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, 
// де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.Для доступу до елементів 
// форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formRef = document.querySelector('.login-form');

function onFormSubmit(event) {
    event.preventDefault();
        
    const elemEmail = event.currentTarget.email.value;
    const elemPassword = event.currentTarget.password.value;

    if (!elemEmail || !elemPassword) {
        alert("Будь ласка заповніть всі поля реєстрації!");
    }  else {
        const formDetails = {
            login: `Login: ${elemEmail}`,
            password: `Password: ${elemPassword}`
        }
        console.table(formDetails);
        event.currentTarget.reset();
    }
}

formRef.addEventListener('submit', onFormSubmit);
