# notification-toast-system
Notification Toast System (NT)

**Notification Toast System (NT)** - это легковесная, полностью автономная система всплывающих уведомлений на чистом JavaScript. Демонстрация: [Тестовый режим окон](https://georgkachalkin.github.io/notification-toast-system/)

- **NT_Notice()** - системное всплывающее уведомление

## ✨ Особенности

- 🚀 **Нулевые зависимости** — работает на чистом Vanilla JS
- 🎨 **Независимые стили** — собственные CSS-классы, не конфликтует с Bootstrap
- 📝 **Шаблонизация** — HTML-разметка вынесена в `<template>`
- 🎭 **Плавные анимации** — CSS `@keyframes` для появления и исчезновения
- 📊 **Прогресс-бар** — визуальный таймер автозакрытия на CSS
- 🎯 **Гибкое позиционирование** — 6 вариантов размещения
- 🔗 **Кликабельные уведомления** — поддержка ссылок
- 🌈 **4 типа уведомлений** — success, danger, warning, info
- ⚡ **Легковесность** — менее 3KB минифицированного JS + CSS
- 📱 **Адаптивность** — корректно работает на мобильных устройствах

## 📋 Требования

### Обязательные требования

| Требование | Минимальная версия | Описание |
|------------|-------------------|----------|
| **Браузер** | ES6+ | Chrome 51+, Firefox 54+, Safari 11+, Edge 15+ |
| **CSS3** | Animations | Поддержка `@keyframes` и `transition` |
| **HTML5** | `<template>` | Тег `<template>` для хранения разметки |

### Необязательные (для расширенных возможностей)

| Зависимость | Назначение |
|-------------|-----------|
| **Font Awesome** (или любая иконочная библиотека) | Для отображения иконок в уведомлениях |
| **PHP 7.4+** | Для серверной интеграции через сессии |
| **Twig** | Для шаблонизации вывода уведомлений |

> ⚠️ **Важно:** Система **НЕ требует** jQuery, Bootstrap JS, Popper.js или любых других библиотек.

## 📦 Установка

### Шаг 1: Добавьте HTML-шаблон

Вставьте этот код в ваш `layout` (до закрывающего тега `</body>`):

```html
<!-- Notification Toast System Template -->
<template id="notify-template">
    <div class="notify-item" data-notify="container">
        <div class="notify-content">
            <div class="notify-body">
                <i class="notify-icon" data-notify="icon"></i>
                <div class="notify-text">
                    <strong class="notify-title" data-notify="title"></strong>
                    <span class="notify-message" data-notify="message"></span>
                </div>
            </div>
            <button type="button" class="notify-close" data-notify="dismiss" aria-label="Close"><span>&times;</span></button>
        </div>
        <div class="notify-progress" data-notify="progressbar">
            <div class="notify-progress-bar"></div>
        </div>
    </div>
</template>
```

### Шаг 2: Подключите CSS

Скопируйте CSS из файла notify.css в ваш основной файл стилей или подключите отдельно:

```html
<link rel="stylesheet" href="/notification-toast-system/nt-notify.css">
```

### Шаг 3: Подключите JavaScript

```html
<script src="/notification-toast-system/nt-notify.js"></script>
```

### Шаг 4: Инициализация

**Никакой инициализации не требуется!**
Система автоматически находит шаблон **#notify-template** в DOM и начинает работать сразу после вызова функции `NT_Notice()`.

## 🎬 Демо

Интерактивная демонстрация доступна в файле [`index.html`](https://georgkachalkin.github.io/notification-toast-system/) — просто откройте его в браузере.

### Зависимости демо-страницы

Демонстрационная страница (`index.html`) использует дополнительные библиотеки **только для наглядности**:

| Библиотека | Версия | Назначение | Обязательна для библиотеки? |
|------------|--------|-----------|------------------------------|
| **Font Awesome** | 6.4.0 | Иконки в примерах | ❌ Нет |

> 💡 **Примечание:** Для использования Notification Toast System в вашем проекте достаточно только файлов `nt-notify.js` и `nt-notify.css`. Font Awesome нужен только если вы хотите использовать их иконки в своих уведомлениях или кнопках.

## 🚀 Быстрый старт


🧱 **API Reference**

🔹 **NT_Notice(opts)** — Главная функция системы. Принимает объект с параметрами.

**ПАРАМЕТРЫ opts:**

| Параметр | Тип | По умолчанию | Описание |
| ----------- | ----------- | ----------- | ----------- |
| type			| string	| 'info'	| Тип уведомления: success, danger, warning, info |
| title			| string	| ''		| Заголовок уведомления (жирный текст) |
| message		| string	| ''		| Текст сообщения (поддерживает HTML) |
| icon			| string	| ''		| CSS-класс иконки (например, fas fa-check) |
| url			| string	| ''		| Ссылка для клика по уведомлению |
| from			| string	| 'top'		| Вертикальное положение: top, bottom
| align			| string	| 'right'	| Горизонтальное положение: left, right, center |
| offset		| number	| 20		| Отступ от края экрана (в пикселях) |
| spacing		| number	| 10		| Расстояние между уведомлениями (в пикселях) |
| delay			| number	| 5000		| Время автозакрытия в мс. `0` = не закрывать |
| z_index		| number	| 9999		| CSS z-index контейнера |
| allow_dismiss	| boolean	| true		| Показывать кнопку закрытия |
| newest_on_top	| boolean	| true		| Новые уведомления сверху стопки |
| progress		| boolean	| false		| Показывать прогресс-бар автозакрытия |
| animate_enter	| string	| 'notify-fade-in-down'	| CSS-класс анимации появления |
| animate_exit	| string	| 'notify-fade-out-up'	| CSS-класс анимации исчезновения |
| element		| string	| 'body'	| CSS-селектор контейнера для вставки |

- Полный пример со всеми параметрами

```html
NT_Notice({
    type: 'success',
    title: 'Готово!',
    message: 'Настройки успешно сохранены.',
    icon: 'fas fa-check-circle',
    from: 'top',
    align: 'right',
    delay: 5000,
    progress: true,
    allow_dismiss: true,
    newest_on_top: true,
    offset: 20,
    spacing: 10,
    z_index: 9999,
    animate_enter: 'notify-fade-in-down',
    animate_exit: 'notify-fade-out-up'
});
```


**ПРИМЕРЫ:**

- Уведомление об успехе
```
NT_Notice({
    type: 'success',
    title: 'Отлично!',
    message: 'Ваш профиль обновлён.',
    icon: 'fas fa-check-circle'
});
```

- Уведомление об ошибке
```
NT_Notice({
    type: 'danger',
    title: 'Ошибка!',
    message: 'Не удалось сохранить данные.',
    icon: 'fas fa-times-circle',
    delay: 0 // Не закрывать автоматически
});
```

- Предупреждение
```
NT_Notice({
    type: 'warning',
    title: 'Внимание!',
    message: 'Ваша сессия скоро истечёт.',
    icon: 'fas fa-exclamation-triangle'
});
```

- Информация
```
NT_Notice({
    type: 'info',
    title: 'Подсказка',
    message: 'Нажмите Ctrl+S для быстрого сохранения.',
    icon: 'fas fa-info-circle'
});
```

- Позиционирование
```
// Верхний левый угол
NT_Notice({ message: 'Top Left', from: 'top', align: 'left' });

// Верхний центр
NT_Notice({ message: 'Top Center', from: 'top', align: 'center' });

// Нижний правый угол
NT_Notice({ message: 'Bottom Right', from: 'bottom', align: 'right' });

// Нижний центр
NT_Notice({ message: 'Bottom Center', from: 'bottom', align: 'center' });
```

- Уведомление с прогресс-баром
```
NT_Notice({
    type: 'info',
    title: 'Загрузка',
    message: 'Подождите, идёт обработка...',
    icon: 'fas fa-spinner fa-spin',
    progress: true,
    delay: 6000
});
```

- Кликабельное уведомление
```
NT_Notice({
    type: 'info',
    title: 'Обновление доступно',
    message: 'Нажмите для просмотра изменений',
    icon: 'fas fa-external-link-alt',
    url: 'https://github.com/GeorgKachalkin/notification-toast-system'
});
```

- Уведомление без кнопки закрытия
```
NT_Notice({
    type: 'warning',
    message: 'Это уведомление закроется автоматически через 3 секунды.',
    allow_dismiss: false,
    delay: 3000
});
```

## 🔗 Интеграция с другими функциями

- Функция-обёртка (хелпер)
```
/**
 * Показать уведомление об успехе
 */
function success(message, title = 'Готово!') {
    NT_Notice({
        type: 'success',
        title: title,
        message: message,
        icon: 'fas fa-check-circle'
    });
}

/**
 * Показать уведомление об ошибке
 */
function error(message, title = 'Ошибка!') {
    NT_Notice({
        type: 'danger',
        title: title,
        message: message,
        icon: 'fas fa-times-circle',
        delay: 0
    });
}

/**
 * Показать уведомление-предупреждение
 */
function warning(message, title = 'Внимание!') {
    NT_Notice({
        type: 'warning',
        title: title,
        message: message,
        icon: 'fas fa-exclamation-triangle'
    });
}

// Использование:
success('Настройки сохранены');
error('Не удалось подключиться к БД');
warning('Пароль скоро истечёт');
```

- Класс-обёртка для проекта
```
/**
 * Класс для работы с уведомлениями в проекте
 */
class AppNotify {
    static success(message, title = 'Готово!') {
        NT_Notice({
            type: 'success',
            title,
            message,
            icon: 'fas fa-check-circle'
        });
    }
    
    static error(message, title = 'Ошибка!') {
        NT_Notice({
            type: 'danger',
            title,
            message,
            icon: 'fas fa-times-circle',
            delay: 0
        });
    }
    
    static warning(message, title = 'Внимание!') {
        NT_Notice({
            type: 'warning',
            title,
            message,
            icon: 'fas fa-exclamation-triangle'
        });
    }
    
    static info(message, title = 'Информация') {
        NT_Notice({
            type: 'info',
            title,
            message,
            icon: 'fas fa-info-circle'
        });
    }
    
    static loading(message = 'Загрузка...') {
        return NT_Notice({
            type: 'info',
            message,
            icon: 'fas fa-spinner fa-spin',
            delay: 0,
            allow_dismiss: false
        });
    }
}

// Использование:
AppNotify.success('Операция выполнена');
AppNotify.error('Что-то пошло не так');
AppNotify.warning('Проверьте данные');
AppNotify.info('Новая версия доступна');
```

### 🙏 Благодарности
- [Font Awesome](https://fontawesome.com/) — за отличные иконки, используемые в демонстрации
Проект разработан при поддержке AI-ассистента [Qwen](https://qwen.ai).
Логика архитектуры, рефакторинг кода и документация создавались совместно.