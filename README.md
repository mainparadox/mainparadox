# Привет, я Павел.
### Full-Stack & Mobile App Developer | UI/UX Designer & System Architect

> Специализируюсь на проектировании и разработке сложных клиент-серверных веб-платформ, e-commerce систем и кроссплатформенных мобильных экосистем под ключ (iOS & Android). Закрываю полный цикл создания продукта: от прототипирования дизайн-систем в **Figma** до фронтенда, нативных мобильных модулей, серверных микросервисов, интеграций с CRM, эквайрингом и автоматизации облачной инфраструктуры.

---

### 🛠️ Стек технологий и ключевые компетенции

#### 🎨 Дизайн-системы & UI/UX Архитектура
<p>
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
  <img src="https://img.shields.io/badge/UI%2FUX%20Design-FF61F6?style=for-the-badge&logo=adobexd&logoColor=white" />
  <img src="https://img.shields.io/badge/Design%20Systems-00C7B7?style=for-the-badge&logo=material-design&logoColor=white" />
  <img src="https://img.shields.io/badge/Interactive%20Prototyping-0ACF83?style=for-the-badge&logo=figma&logoColor=white" />
</p>

#### 📱 Мобильная разработка (iOS & Android)
<p>
  <img src="https://img.shields.io/badge/Capacitor_6-119EFF?style=for-the-badge&logo=capacitor&logoColor=white" />
  <img src="https://img.shields.io/badge/Swift_(iOS)-FA7343?style=for-the-badge&logo=swift&logoColor=white" />
  <img src="https://img.shields.io/badge/Kotlin_(Android)-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" />
  <img src="https://img.shields.io/badge/App%20Store%20(iOS)-000000?style=for-the-badge&logo=apple&logoColor=white" />
  <img src="https://img.shields.io/badge/Google%20Play%20(Android)-414141?style=for-the-badge&logo=google-play&logoColor=white" />
  <img src="https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white" />
</p>

#### 💻 Web-разработка & Frontend
<p>
  <img src="https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/JavaScript_(ES6+)-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML5%20%2F%20CSS3-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</p>

#### ⚙️ CMS, Backend & Базы данных
<p>
  <img src="https://img.shields.io/badge/PHP_8+-777BB4?style=for-the-badge&logo=php&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/Joomla_CMS-F44321?style=for-the-badge&logo=joomla&logoColor=white" />
  <img src="https://img.shields.io/badge/Google_Cloud_Functions_v2-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase_Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
</p>

#### ☁️ DevOps, Безопасность & Финтех
<p>
  <img src="https://img.shields.io/badge/Cloudflare_(WAF_%26_DNS)-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" />
  <img src="https://img.shields.io/badge/Terraform_(IaC)-844FBA?style=for-the-badge&logo=terraform&logoColor=white" />
  <img src="https://img.shields.io/badge/Python_Automation-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Adyen_Payments-0ABF53?style=for-the-badge&logo=adyen&logoColor=white" />
  <img src="https://img.shields.io/badge/Altegio_CRM_API-0052CC?style=for-the-badge&logo=airplayvideo&logoColor=white" />
</p>

---

### 🏆 Проекты и архитектурный опыт

#### ❄️ Флагманский проект (Production): Polar Recovery Club
*Генеральная цифровая платформа для премиального велнес-клуба контрастных процедур в Риге (Евросоюз).*

```mermaid
graph LR
    subgraph Client["📱 Клиентский уровень (iOS / Android / PWA)"]
        React["React 18 + Capacitor 6"]
        Crypto["Offline WebCrypto (AES-GCM-256)"]
    end

    subgraph Cloud["☁️ Облачная инфраструктура (GCP)"]
        BFF["Cloud Functions v2 (BFF)"]
        Shield["429 Rate-Limit Shield"]
        Firestore[("Firebase Firestore")]
    end

    subgraph External["🔌 Внешние сервисы и СКУД"]
        Altegio["Altegio CRM API"]
        Adyen["Adyen Pay by Link"]
        Locks["Voyager BLE Locks"]
    end

    React --> BFF
    Crypto -.->|Автономный ПИН| Locks
    BFF --> Shield --> Altegio
    BFF --> Firestore
    BFF --> Adyen

    style Client fill:#eff6ff,stroke:#2563eb,stroke-width:2px;
    style Cloud fill:#faf5ff,stroke:#8b5cf6,stroke-width:2px;
    style External fill:#f0fdf4,stroke:#16a34a,stroke-width:2px;
```

* **UI/UX Дизайн и Прототипирование:** Полное авторское проектирование дизайн-системы, компонентов и интерактивного прототипа на 13 экранов в **Figma** (раздельные сценарии для гостей и резидентов).
* **Кроссплатформенный Frontend:** Высокопроизводительное SPA/PWA на **React + Capacitor + Vite** с поддержкой Zero-Scroll архитектуры и нативной адаптации под безопасные зоны экранов (Safe Area).
* **Облачный Backend (BFF):** Микросервисная архитектура на **Google Cloud Functions v2** (регион `europe-west1`), Google Secret Manager, распределенные очереди задач Cloud Tasks и кэширование запросов для защиты от квот CRM (429 Shield).
* **СКУД и IoT-безопасность:** Аппаратный криптографический модуль генерации временных ПИН-кодов доступа на базе Web Crypto API (`AES-GCM-256`, криптографическая соль, PBKDF2) с поддержкой автономного офлайн-режима при сбоях сети контроллера.
* **Финансы и бизнес-логика:** Бесшовная интеграция с **Altegio CRM REST API**, эквайринг **Adyen Pay by Link** (Apple Pay / Google Pay), учет абонементов сети, бронирование слотов купелей и автоматическое закрытие визитов.
* **CI/CD и релизы:** Полностью автоматизированный пайплайн в **Codemagic**: сборка релизных бандлов, подписание сертификатами и прямая публикация релизов в **App Store** и **Google Play**, а также собственный движок моментальных OTA-обновлений бандла без прохождения повторной модерации в сторах ($0/мес).

<p>
  <a href="https://polar-recovery-app.web.app" target="_blank">
    <img src="https://img.shields.io/badge/Live%20PWA%20Demo-Firebase%20App-00C7B7?style=flat-square&logo=google&logoColor=white" />
  </a>
  <a href="https://www.figma.com/proto/hgLLA1u1zRyAlIDkH8c1JG/Polar-Recovery-App?node-id=0-1&p=f&t=5V6htnUcySOuIE7m-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=68%3A1091&show-proto-sidebar=1" target="_blank">
    <img src="https://img.shields.io/badge/Figma%20Interactive%20Prototype-13%20Screens-F24E1E?style=flat-square&logo=figma&logoColor=white" />
  </a>
</p>

---

#### ☁️ Open-Source инструмент: [Cloudflare IaC Management Portal](https://github.com/mainparadox/cloudflare-manager-iac)
*Собственная веб-панель администратора для автоматизации защиты, DNS и SSL десятков сайтов в Cloudflare в 1 клик.*

**Какую проблему решает проект:**  
Когда у веб-разработчика на поддержке находится 20–30 клиентских сайтов и зеркал, настраивать безопасность и DNS вручную через панель Cloudflare превращается в рутину и приводит к ошибкам. А бесплатные сертификаты Let's Encrypt постоянно сбоят при продлении каждые 90 дней из-за блокировок WAF.

**Ключевые возможности:**
* **🔒 Пожизненный SSL на 15 лет:** Генерирует приватные ключи RSA-2048 и автоматически заказывает официальные сертификаты Cloudflare Origin CA на 15 лет (до 2041 года).
* **🛡️ Готовая WAF-защита для CMS:** В 1 клик разворачивает 5-уровневый комплекс фаервола под уязвимости движков (**Joomla, WordPress, PrestaShop**): отсекает ботов, блокирует дампы баз (`.sql`, `.zip`) и закрывает капчей вход в админку.
* **↪️ Моментальные 301-зеркала:** Перенаправление трафика на уровне серверов Cloudflare (Edge) без нагрузки на хостинг.
* **💾 Экономия диска (IaC + Terraform):** Связка Python, Jinja2 и HashiCorp Terraform v5.x. За счет умного кэширования плагинов конфигурация 25 сайтов весит менее 3 МБ (экономия 99.98% места).
* **🚑 Самоисцеление стейта:** Автоматический перехват скрытых ошибок Cloudflare API (конфликты контейнеров 20217, сбои кириллицы .бел/.рф 1010, удаленные ключи 1014).

<p>
  <a href="https://github.com/mainparadox/cloudflare-manager-iac">
    <img src="https://img.shields.io/github/stars/mainparadox/cloudflare-manager-iac?style=social" alt="GitHub Stars" />
  </a>
  <a href="https://github.com/mainparadox/cloudflare-manager-iac/fork">
    <img src="https://img.shields.io/github/forks/mainparadox/cloudflare-manager-iac?style=social" alt="GitHub Forks" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Streamlit_GUI-FF4B4B?style=flat-square&logo=streamlit&logoColor=white" />
  <img src="https://img.shields.io/badge/Terraform_v5-844FBA?style=flat-square&logo=terraform&logoColor=white" />
</p>

> ⭐️ **Понравился инструмент? [Поставьте звёздочку проекту на GitHub](https://github.com/mainparadox/cloudflare-manager-iac) — это мотивирует развивать его дальше!**

---

> 🔒 **О коммерческом портфолио (2018 — настоящее время):**  
> Значительная часть реализованных проектов (корпоративные порталы, e-commerce платформы на Joomla/PHP/MySQL, микросервисы автоматизации) находится под действием соглашений о неразглашении (**NDA**) в закрытых корпоративных репозиториях. Детали архитектурных решений и примеры кода предоставляются по запросу.

---

### 💻 Консольная выжимка профиля

<details>
  <summary><b>▶ Нажмите, чтобы выполнить <code>curl -s https://api.mainparadox.dev/v1/profile</code></b></summary>
  <br />

```json
{
  "engineer": "Pavel MX (mainparadox)",
  "specialization": "Full-Stack, Mobile (iOS/Android) & Cloud Architecture",
  "experience_focus": [
    "Capacitor 6 / Swift / Kotlin native bridges",
    "GCP Cloud Functions v2 BFF & WebCrypto",
    "PHP 8+ / MySQL / Joomla enterprise customization",
    "Cloudflare Edge Workers & Terraform IaC"
  ],
  "availability": "Открыт к сложным архитектурным задачам и разработке экосистем под ключ",
  "telegram": "@pavelmmx"
}
```
</details>

---

### 📊 Инженерная активность

<p align="center">
  <a href="https://github.com/mainparadox">
    <img src="https://github-stats-private-tau.vercel.app/api?username=mainparadox&show_icons=true&bg_color=ffffff&border_color=e2e8f0&title_color=0f172a&text_color=475569&icon_color=2563eb&border_radius=16&count_private=true&include_all_commits=true&hide=prs,issues&hide_rank=true" width="49%" />
  </a>
  <a href="https://github.com/mainparadox">
    <img src="https://github-stats-private-tau.vercel.app/api/top-langs/?username=mainparadox&layout=compact&bg_color=ffffff&border_color=e2e8f0&title_color=0f172a&text_color=475569&border_radius=16&count_private=true&hide=Shell,Batchfile,Jinja" width="49%" />
  </a>
</p>

---

### 📫 Связаться со мной

<p>
  <a href="https://t.me/pavelmmx">
    <img src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" />
  </a>
  <a href="mailto:main.paradox@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
</p>
