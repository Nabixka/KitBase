<div align="center">

# ⚔️ KitBase

**Koleksi lengkap karakter dari berbagai game beserta kits-nya.**

[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

</div>

---

## 📖 Tentang KitBase

**KitBase** adalah platform web yang menjadi pusat referensi karakter dari berbagai game populer. Setiap karakter dilengkapi dengan informasi kit lengkap — skill, ability, statistik, dan strategi penggunaan — sehingga pemain bisa dengan mudah mencari, membandingkan, dan mempelajari karakter favorit mereka.

### Fitur Utama

- 🎮 **Direktori Karakter** — Jelajahi karakter dari berbagai game dalam satu tempat
- 🧰 **Detail Kit** — Lihat skill, ability, dan statistik setiap karakter secara lengkap
- 🔍 **Pencarian & Filter** — Cari karakter berdasarkan game, tipe, atau nama
- 📊 **Perbandingan** — Bandingkan kit antar karakter dengan mudah

---

## 🛠️ Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | [NestJS](https://nestjs.com/) |
| Language | TypeScript |
| Runtime | Node.js |
| Package Manager | npm / yarn |

---

## 🚀 Menjalankan Project

### Prasyarat

Pastikan sudah terinstall:

- **Node.js** `>= 18.x` → [Download](https://nodejs.org/)
- **npm** `>= 9.x` (sudah termasuk bersama Node.js)
- **NestJS CLI** (opsional, untuk development)

```bash
npm install -g @nestjs/cli
```

---

### 1. Clone Repository

```bash
git clone https://github.com/Nabixka/KitBase.git
cd kitbase
```

### 2. Install Dependencies

```bash
cd backend npm install
```

### 3. Konfigurasi Environment

Salin file `.env.example` dan sesuaikan isinya:

```bash
cp .env.example .env
```

Isi variabel yang diperlukan di file `.env`:

```env
DB_NAME = "kitbase"
DB_USER = "postgres"
DB_PASS = "YOUR_PASS"
DB_HOST = "localhost"
```

### 4. Jalankan Aplikasi

**Mode Development** (dengan hot-reload):
```bash
npm run start:dev
```

**Mode Production:**
```bash
npm run build
npm run start:prod
```

**Mode Biasa:**
```bash
npm run start
```

Aplikasi akan berjalan di: **`http://localhost:3000`**

---


## 📁 Struktur Project Backend

```
backend/
├── src/
│   ├── database/
│   ├── element_game/       
│   ├── game/            
│   ├── kits_type_game/    
│   ├── Mapping/ 
│   ├── Pipes/     
│   ├── rarity_game/              
│   ├── app.module.ts
│   └── main.ts
├── test/
├── .env.example
├── nest-cli.json
├── package.json
└── tsconfig.json
```

---

<div align="center">

Dibuat dengan ❤️ oleh tim KitBase

</div>