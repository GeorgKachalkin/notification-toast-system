/**
 * Notification Toast System (NT)
 * @description Легковесная система всплывающих уведомлений на чистом JavaScript
 * @version 1.0.0
 * @date 2026-06-19
 * @license MIT
 * @copyright 2026 GeorgKachalkin
 * @author GeorgKachalkin + Qwen Assistant
 * @see https://github.com/GeorgKachalkin/notification-toast-system
 * 
 * @param {Object} opts - Параметры уведомления
 * @param {string} [opts.type='info'] - Тип: success, danger, warning, info
 * @param {string} [opts.title=''] - Заголовок уведомления
 * @param {string} [opts.message=''] - Текст сообщения (поддерживает HTML)
 * @param {string} [opts.icon=''] - CSS-класс иконки
 * @param {string} [opts.url=''] - Ссылка для клика
 * @param {string} [opts.from='top'] - Позиция: top, bottom
 * @param {string} [opts.align='right'] - Выравнивание: left, right, center
 * @param {number} [opts.delay=5000] - Время автозакрытия (мс, 0 = не закрывать)
 * @param {boolean} [opts.sprogress=false] - Показывать прогресс-бар
 * @param {boolean} [opts.allow_dismiss=true] - Кнопка закрытия
 * 
 * @example
 * NT_Notice({
 *   type: 'success',
 *   title: 'Готово!',
 *   message: 'Настройки сохранены',
 *   icon: 'fas fa-check'
 * });
 */
function NT_Notice(opts = {}) {
    const settings = {
        icon: opts.icon || "",
        title: opts.title || "",
        message: opts.message || "",
        url: opts.url || "",
        element: opts.element || "body",
        type: opts.type || "info",
        from: opts.from || "top",
        align: opts.align || "right",
        allow_dismiss: opts.allow_dismiss !== false,
        newest_on_top: opts.newest_on_top !== false,
        progress: !!opts.progress,
        offset: opts.offset || 20,
        spacing: opts.spacing || 10,
        z_index: opts.z_index || 1033,
        delay: opts.delay || 5000,
        animate_enter: opts.animate_enter || "notify-fade-in-down",
        animate_exit: opts.animate_exit || "notify-fade-out-up"
    };

    // Получаем шаблон из DOM
    const template = document.getElementById('notify-template');
    if (!template) {
        console.error('Notify template not found!');
        return;
    }

    // Клонируем содержимое шаблона
    const clone = template.content.cloneNode(true);
    const notifyEl = clone.querySelector('[data-notify="container"]');

    // Добавляем класс типа
    notifyEl.classList.add(`notify-${settings.type}`);
    
    // Иконка
    const iconEl = notifyEl.querySelector('[data-notify="icon"]');
    if (settings.icon && iconEl) {
        iconEl.className = `notify-icon ${settings.icon}`;
    } else if (iconEl) {
        iconEl.remove();
    }

    // Заголовок
    const titleEl = notifyEl.querySelector('[data-notify="title"]');
    if (settings.title && titleEl) {
        titleEl.textContent = settings.title;
    } else if (titleEl) {
        titleEl.remove();
    }

    // Сообщение
    const messageEl = notifyEl.querySelector('[data-notify="message"]');
    if (messageEl) {
        messageEl.innerHTML = settings.message;
    }

    // Прогресс-бар
    const progressContainer = notifyEl.querySelector('[data-notify="progressbar"]');
    if (settings.progress && progressContainer) {
        const bar = progressContainer.querySelector('.notify-progress-bar');
        if (bar) {
            bar.style.transitionDuration = settings.delay + 'ms';
        }
    } else if (progressContainer) {
        progressContainer.remove();
    }

    // Кнопка закрытия
    const dismissBtn = notifyEl.querySelector('[data-notify="dismiss"]');
    if (!settings.allow_dismiss && dismissBtn) {
        dismissBtn.remove();
    }

    // Ссылка
    if (settings.url) {
        notifyEl.setAttribute('data-notify-url', settings.url);
        notifyEl.style.cursor = 'pointer';
    }

    // Получаем или создаем контейнер для нужного угла
    const containerId = `notify-${settings.from}-${settings.align}`;
    let container = document.getElementById(containerId);
    
    if (!container) {
        container = document.createElement('div');
        container.id = containerId;
        container.className = 'notify-container';
        container.style.zIndex = settings.z_index;
        container.style.gap = settings.spacing + 'px';
        
        if (settings.from === 'top') container.style.top = `${settings.offset}px`;
        else container.style.bottom = `${settings.offset}px`;
        
        if (settings.align === 'right') container.style.right = `${settings.offset}px`;
        else if (settings.align === 'left') container.style.left = `${settings.offset}px`;
        else {
            container.style.left = '50%';
            container.style.transform = 'translateX(-50%)';
        }
        
        document.querySelector(settings.element).appendChild(container);
    }

    // Вставляем уведомление
    if (settings.newest_on_top) {
        container.prepend(notifyEl);
    } else {
        container.append(notifyEl);
    }

    // Запускаем анимацию появления
    notifyEl.classList.add(settings.animate_enter);
    
    // Запускаем прогресс-бар
    if (settings.progress) {
        const bar = notifyEl.querySelector('.notify-progress-bar');
        if (bar) {
            requestAnimationFrame(() => { bar.style.width = '0%'; });
        }
    }

    // Логика закрытия
    const dismissNotify = () => {
        notifyEl.classList.remove(settings.animate_enter);
        notifyEl.classList.add(settings.animate_exit);
        
        notifyEl.addEventListener('animationend', () => {
            notifyEl.remove();
            if (container.children.length === 0) container.remove();
        }, { once: true });
    };

    // Обработчик кнопки закрытия
    if (dismissBtn) {
        dismissBtn.addEventListener('click', dismissNotify);
    }

    // Обработчик клика по ссылке
    if (settings.url) {
        notifyEl.addEventListener('click', (opts) => {
            if (opts.target.closest('[data-notify="dismiss"]')) return;
            window.open(settings.url, '_blank');
        });
    }

    // Автоматическое закрытие
    if (settings.delay > 0) {
        setTimeout(dismissNotify, settings.delay);
    }
}