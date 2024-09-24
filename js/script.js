async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const ul = document.createElement("ul"); // Создаем элемент списка
    users.forEach((user) => {
      const li = document.createElement("li"); // Создаем элемент <li>
      li.textContent = user.name; // Устанавливаем текст элемента <li>
      ul.appendChild(li); // Добавляем <li> в <ul>
    });

    document.body.appendChild(ul); // Добавляем <ul> в тело документа
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
}

fetchData();
