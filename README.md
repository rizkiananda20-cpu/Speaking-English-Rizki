# Asisten AI Suara untuk Google Docs (100% Gratis)

Aplikasi ini adalah add-on kustom untuk Google Docs yang memungkinkan Anda berbicara dengan AI secara langsung. Suara Anda dan balasan AI akan secara otomatis ditranskripsi dan ditulis ke dalam dokumen Google Docs Anda.

Aplikasi ini dirancang untuk menjadi **100% gratis** menggunakan alat bawaan browser dan API gratis:
- **Speech-to-Text (Pengenalan Suara)**: Menggunakan Web Speech API bawaan Google Chrome.
- **AI Engine (Otak AI)**: Menggunakan Google Gemini API (tier gratis).
- **Text-to-Speech (Suara AI)**: Menggunakan Web Speech Synthesis bawaan Google Chrome.
- **Integrasi Dokumen**: Menggunakan Google Apps Script.

---

## Panduan Instalasi dan Penggunaan

Ikuti langkah-langkah mudah di bawah ini untuk memasang aplikasi ini di Google Docs Anda.

### Langkah 1: Siapkan Google Docs
1. Buka [Google Docs](https://docs.google.com) dan buat dokumen kosong baru (`Blank Document`).
2. Beri nama dokumen tersebut sesuka Anda (misalnya: "Catatan AI").

### Langkah 2: Masukkan Kode Apps Script
1. Di menu atas Google Docs, klik **Extensions** (Ekstensi) > **Apps Script**.
2. Tab baru akan terbuka. Anda akan melihat file bernama `Code.gs`.
3. Hapus semua kode yang ada di dalam `Code.gs`.
4. Salin semua isi dari file `Code.gs` di repositori ini, lalu tempelkan ke editor `Code.gs` di Apps Script Anda.
5. Selanjutnya, buat file baru di Apps Script dengan mengklik ikon **Tambah (+)** di sebelah kiri tulisan "Files", lalu pilih **HTML**.
6. Beri nama file tersebut **Sidebar** (Pastikan persis ejaannya, tanpa `.html` karena ekstensi `.html` otomatis ditambahkan oleh sistem).
7. Hapus kode bawaan di file `Sidebar.html` yang baru dibuat.
8. Salin semua isi dari file `Sidebar.html` di repositori ini, lalu tempelkan ke editor tersebut.
9. Klik tombol **Save** (ikon disket) atau tekan `Ctrl + S`.

### Langkah 3: Dapatkan Gemini API Key (Gratis)
Agar AI bisa menjawab, Anda memerlukan kunci khusus (API Key) dari Google.
1. Buka website [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Login dengan akun Google Anda.
3. Klik tombol **Get API Key** lalu pilih **Create API key**.
4. Salin kode kunci panjang tersebut dan simpan di tempat yang aman (seperti di Notepad). Anda akan membutuhkannya setiap kali menggunakan aplikasi.

### Langkah 4: Jalankan Aplikasi
1. Kembali ke tab Google Docs Anda. **Refresh (Muat ulang)** halaman Google Docs tersebut.
2. Tunggu beberapa detik, Anda akan melihat menu baru di bagian atas bernama **Aplikasi AI** (biasanya di sebelah kanan menu "Help" atau "Bantuan").
3. Klik **Aplikasi AI** > **Buka Asisten AI**.
4. *Catatan: Pertama kali dijalankan, Google mungkin akan meminta izin akses (Authorization Required). Klik "Continue", pilih akun Google Anda, klik "Advanced", lalu klik "Go to Untitled project (unsafe)" dan klik "Allow".*
5. Sidebar "Asisten AI Suara" akan terbuka di sebelah kanan layar.

### Langkah 5: Mulai Berbicara!
1. Di sidebar sebelah kanan, tempelkan (paste) **Gemini API Key** yang sudah Anda dapatkan pada Langkah 3 ke dalam kotak yang disediakan.
2. Klik tombol **Mulai Bicara**. (Browser mungkin meminta izin untuk mengakses mikrofon, izinkan/allow).
3. Mulailah berbicara dalam bahasa Indonesia. Misalnya: *"Tolong buatkan draf email untuk izin sakit hari ini."*
4. Setelah Anda selesai berbicara, aplikasi akan memproses suara Anda, menghubungi AI, dan menuliskan teksnya ke dalam dokumen.
5. AI kemudian akan berbicara membalas Anda, dan teks balasannya juga otomatis tertulis di Google Docs!
