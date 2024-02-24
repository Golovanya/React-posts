function About() {
    return ( 
        <div className="about">
            <h1 >React posts</h1>
            <p>
                Приложение предоставляет следующий функционал: 
             </p>
             <ul>
                <li>Загрузка постов из JSON placeholder с использованием Axios</li>
                <li>Возможность фильтрации постов по заголовку и по тексту поста</li>
                <li>Пагинация</li>
                <li>Возможность добавлять новый пост через модальное окно</li>
                <li>Анимация при добавлении и удалении поста</li>
                <li>Роутинг с использованием React-router</li>
             </ul>
        </div>
     );
}

export default About;