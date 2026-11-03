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

<a href="https://mainparadox.github.io/mainparadox/portfolio/polar-recovery-club/" target="_blank">
❄️ Флагманский проект (Production): Polar Recovery Club
</a><br>
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
