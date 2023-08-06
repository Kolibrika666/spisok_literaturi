"use strict"; // этот код работает в современном режиме
document.querySelector("#submit").onclick = function zurnalnaya_statya() {
    let avtor = prompt('Введите главного автора. Например, Иванов И.И.');
    let avtor2 = prompt('Введите второго автора или не пишите ничего. Например, Иванов И.И.');
    let avtor3 = prompt('Введите третьего автора или не пишите ничего. Например, Иванов И.И.');
    let statya = prompt('Введите название статьи. Например, Образы Италии');
    let zyrnal = prompt('Введите название журнала. Например, Томский вестник');
    let nomer = prompt('Введите номер журнала. Например Т16, №10');
    let god = prompt('Укажите год издания');
    let stranici = prompt('Напишите номера страниц, на которых размещена статья. Например 21 или 22-158');

    // если автор3 = труе, то к переменной автор2 добавить ","//
    //если автор2 и евтор 3 равно фалсе, то вместо них писать автора 1, но нужно последние два символа переместить в начало и добавить пробел//
    //если страницы включают в себя "-", то в страницы прибавить "С." в начало, иначе прибавить "с. в конце"//
    const string = avtor+". "+statya+" / "+avtor+avtor3+" // "+zurnal+". – "+god+". – "+nomer+". – "+stranici+"."; //результат 
    alert(string); // вывод результата

  }

/*Автор. Статья / Авторы // Журнал. – Год. – Номер. – Страницы размещения статьи.*/


<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spisok literaturi gost</title>
    <link rel="stylesheet" href="./style.css" />
    <script src="script.js"></script>
  </head>
  <body>
    <header class="container header">
    <h5  class ="h5">Выберите категорию и заполните нужные поля</h5>
    <h1 class ="h1">Оформите список литературы по ГОСТ!</h1>
    </header>
    <div class="form">
    <h4>Введите главного автора. Например, Иванов И.И</h4>
    <textarea name="comment" cols="100" rows="1"></textarea>
      <h4>Введите второго автора или не пишите ничего. Например, Иванов И.И.</h4>
      <textarea name="comment" cols="100" rows="1"></textarea>
        <h4>Введите третьего автора или не пишите ничего. Например, Иванов И.И.</h4>
        <textarea name="comment" cols="100" rows="1"></textarea>
          <h4>Введите название статьи. Например, Образы Италии</h4>
          <textarea name="comment" cols="100" rows="1"></textarea>
            <h4>Введите название журнала. Например, Томский вестник</h4>
            <textarea name="comment" cols="100" rows="1"></textarea>
              <h4>Введите номер журнала. Например Т16, №10</h4>
              <textarea name="comment" cols="100" rows="1"></textarea>
                <h4>Укажите год издания</h4>
                <textarea name="comment" cols="100" rows="1"></textarea>
                  <h4>Напишите номера страниц, на которых размещена статья. Например 21 или 22-158</h4>
                  <textarea name="comment" cols="100" rows="1"></textarea>
                  <button class="ok"><span>Подтвердить</span></button>
    </div>
    <div class = "git"> 
      <h3>Результат</h3>
      <button class="ok"><span>Свернуть</span></button>
    </div>
    <p class="container">
      <button class="button" onclick="document.location='zurnalnaya_statya'"><span>Журнальная статья</span></button>
      <button class="button two"><span>Электронный ресурс</span></button>
      <button class="button three"><span>Монография</span></button>
    </p>
    <p class="container">
      <button class="button four"><span class="spans">Автореферат</span></button>
      <button class="button five"><span class="spans">Диссертация</span></button>
      <button class="button six"><span class="spans"> Обзор</span></button>
      <button class="button seven"><span class="spans">Патент</span></button>
    </p>
    <p class="container">
      <button class="button four"><span class="spans">Материал конф.</span></button>
      <button class="button five"><span class="spans"> Учебник</span></button>
      <button class="button six"><span class="spans">Учебное пособие</span></button>
      <button class="button seven"><span class="spans">Словарь</span></button>
    </p>
    <footer class="footer">Варкентин Ю.А., 2023 г.</footer>
    
  </body>
</html> 














































*














/* {
  box-sizing: border-box; /*мы выключаем растягивание дочернего элемента до ширины родителя*/
  margin: 10px auto 0; /*поля снаружи блоков ставим посередине? сверху 10 пикселей, снизу 0*/
  padding: 0; /*поля внутри блоков*/
  overflow: hidden; /*это если текст вдруг вылезет, чтобы не вылезал*/
}

html,
body {
  font-family:"Verdana"; /*устанавливаем шрифт для всего документа*/
  color: #ffffff; /*устанавливаем цвет шрифта для всего документа*/
  background-color: #BDE1FF; /*устанавливаем цвет фона*/
  text-align:  center; /*устанавливаем выравнивание текста по центру*/
  width: max-content; /*чтобы ширина сайта сохранялась*/
  height: max-content; /*чтобы ширина сайта сохранялась*/
}

.container{ /*это будут контейнеры-блоки, наследуют предыдущий стиль*/
  max-width: 1200px;  /*максимальная ширина контейнера-блока*/
  align-items: start;
}

.header {
    min-width: 799px;
    min-height: 199px;
    background: linear-gradient(269deg, rgba(1, 8, 108, 0.26) 0%, #000668 99.48%);

}

.h1 {
  padding: 10px 0;
  width: 685px;
  height: 92px;
  color: #FFF;
  text-align: center;
  font-family: Verdana;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.h5 {
  padding: 20px 0;
  width: 409px;
  height: 36px;
  color: #DADADA;
  text-align: center;
  font-family: Verdana;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

button {
  outline: none;
  text-decoration: none;
  cursor: pointer;
  padding: 0;
  background-color: #BDE1FF;
  display: flex run-in;

  width: 300px;
  height: 100px;
  border-radius: 70px;
  border: 3px solid #0F1774;

  color: #0F1774;
  text-align: center;
  font-family: Verdana;
  font-size:  24px;
  font-style: normal;
  line-height: 0,5;

  transition: background-color 0.4s, color 0.4s; 

}

.button:hover {
  background-color: #0F1774;
  color: #ffffff;
  display : block;
 }

.button.two {
  border: solid 3px #170F74;
  color: #170F74;
}

.button.two:hover {
  background-color: #170F74;
  color: #ffffff;
 }

.button.three {
  border: solid 3px #2F0F74;
  color: #2F0F74;
}

.button.three:hover {
  background-color: #2F0F74;
  color: #ffffff;
 }

.button.four {
 
  width: 191px;
  height: 90px;
}

.button.five {
  width: 191px;
  height: 90px;
  border: solid 3px #170F74;
  color: #170F74;
}echo

.button.five:hover {
  background-color: #170F74;
  color: #ffffff;
 }

.button.six {
 
  width: 191px;
  height: 90px;
  font-size:  20px;
  border: solid 3px #2F0F74;
  color: #2F0F74;
}

.button.six:hover {
  background-color: #2F0F74;
  color: #ffffff;
 }

.button.seven {
 
  width: 191px;
  height: 90px;
  font-size:  20px;
  border: solid 3px #4E0F74;
  color: #4E0F74;
}

.button.seven:hover {
  background-color: #4E0F74;
  color: #ffffff;
 }

 .form{
  color: #0F1774;
  text-align: left;
  font-family: Verdana;
  font-size:  14px;
  font-style: normal;
  line-height: 0,5;

  /*display: none; Скрыть элемент*/
 }
 textarea{
  border: none;
  color: #0F1774;
  font-family: Verdana;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
 }
 textarea:focus, input:focus{
  outline: none;
  background-color: #f4f4f5
  }
  .rezult{
    display: none;
  }
.footer {
  color: #0F1774;
  color: #000668;
  font-style: normal;
  line-height: normal;
  margin: 100px auto 0; 
  }

.ok{
  
  display: flex;

  width: 150px;
  height: 50px;
  border-radius: 70px;
  border: 2px solid #600f74;

  color: #600f74;
  text-align: center;
  font-family: Verdana;
  font-size:  16px;
  font-style: normal;
  line-height: 0,5;

  transition: background-color 0.4s, color 0.4s;

}
.ok:hover {
  background-color: #600f74;
  color: #ffffff;
 }

 h3{
  
  color: #170F74;
  text-align: center;
  font-family: Verdana;
  font-size:  16px;
  font-style: normal;
 }
/*
