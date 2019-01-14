<h1> Изучение ES6 (2015)</h1>
<ul>
  <li>
    <h3>Установка и настройка необходимых компонентов</h3>
    <ol>
      <li>
          <h4>Создание файла package.json с парметрами по умолч.</h4>
          <pre>npm init -y</pre>
      </li>
      <li>
          <h4>Установка всех необходимых компонентов для работы с Babel</h4>
          <pre>npm i babel-cli babel-core babel-preset-es2015 --save-dev</pre>
          <p><b>Примечание:</b></p>
          <p>babel-cli - позволяет использовать Babel в командной строке</p>
          <p>babel-core - основной модуль Babel</p>
          <p>babel-preset-es2015 - модуль, необходимый для транспиляции ES6</p>
      </li>
     </ol>
    </li>
    <li>
      <h3>Работа с package.json</h3>
      <p>Создание скриптов build и watch, а также их запуск</p>
      <img src="https://user-images.githubusercontent.com/37180024/51126486-4f575400-1834-11e9-85d3-332f4dc0b206.png">
      <img src="https://user-images.githubusercontent.com/37180024/51126576-8fb6d200-1834-11e9-9d3c-1a5f6798b863.png">
      <img src="https://user-images.githubusercontent.com/37180024/51126596-99403a00-1834-11e9-949e-b17e48f1a2fd.png">
    </li>
    <li>
      <h3>Установка локального сервера и его запуск</h3>
      <p><b>Установка:</b></p>
      <pre>npm i http-server -g</pre>
      <p><b>Запуск:</b></p>
      <pre>http-server</pre>
      <p>После этого можно перейти по ссылке, которая написана в командной строке. Либо зайти в браузер и прописать в url следующее:</p>
      <pre>localhost:8080</pre>
      <p>или</p>
      <pre>127.0.0.1:8080</pre>
      <img src="https://user-images.githubusercontent.com/37180024/51127195-01dbe680-1836-11e9-89c2-9d7172987cfb.png">
    </li>
