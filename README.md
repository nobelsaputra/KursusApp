# KursusApp

Kursus App adalah aplikasi manajemen kursus online yang memungkinkan pengguna untuk membuat, mengelola, dan mengikuti kursus secara efisien.

## Fitur Utama

- Registrasi dan otentikasi pengguna (instruktur dan siswa).
- Pembuatan dan pengelolaan kursus oleh instruktur.
- Pendaftaran siswa pada kursus yang tersedia.
- Manajemen materi pelajaran dan informasi kursus.
- Validasi data untuk memastikan integritas dan keamanan aplikasi.

## Teknologi

Aplikasi ini dibangun menggunakan teknologi berikut:

- **Node.js**: Platform runtime untuk server.
- **Express.js**: Framework web untuk Node.js.
- **Prisma**: ORM (Object-Relational Mapping) untuk mengelola basis data.
- **Neon DB**: Basis data untuk menyimpan informasi kursus, pengguna, dan lainnya.
- **JWT (JSON Web Token)**: Untuk otentikasi dan otorisasi pengguna.

## Instalasi

1. **Clone Repositori**
    
    ```bash
    
    git clone https://github.com/nobelsaputra/KursusApp
    cd KursusApp
    
    ```
    
2. **Instal Dependensi**
    
    ```bash
    
    npm install
    npm express
    npm install prisma --save-dev
    npx prisma init
    npx prisma generate
    npx prisma migrate dev --name init
    npm install @prisma/client
    npm install dotenv
    npm install jsonwebtoken
    npm install express dotenv @prisma/client bcryptjs
    
    ```
    
3. **Setup Environment**
Buat file `.env` dan konfigurasikan variabel lingkungan yang diperlukan.

4. **Menjalankan Aplikasi**
    
    ```bash
    
    node app.js
    ```
    

Aplikasi akan berjalan di `http://localhost:3000`.

## Endpoint API

### Auth Routes

- **POST /api/auth/register**: Registrasi pengguna baru.
- **POST /api/auth/login**: Otentikasi dan mendapatkan token akses JWT.

### Course Routes

- **POST /api/courses/create**: Membuat kursus baru.
- **POST /api/courses/enroll**: Mendaftar pada kursus tertentu.
- **GET /api/courses/**: Mendapatkan informasi kursus berdasarkan ID.

## LINK : [https://kursus-app.vercel.app/](https://kursus-app.vercel.app/)
