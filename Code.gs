(Skrip backend untuk Google Apps Script)

/**
 * Fungsi ini berjalan secara otomatis ketika Google Docs dibuka.
 * Ini akan membuat menu kustom di bagian atas (Toolbar).
 */
function onOpen() {
  DocumentApp.getUi()
      .createMenu('Aplikasi AI')
      .addItem('Buka Asisten AI', 'showSidebar')
      .addToUi();
}

/**
 * Fungsi ini membuka Sidebar di sebelah kanan Google Docs.
 * Sidebar ini akan memuat file HTML 'Sidebar.html'.
 */
function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Sidebar')
      .setTitle('Asisten AI Suara')
      .setWidth(300);
  DocumentApp.getUi().showSidebar(html);
}

/**
 * Fungsi ini menerima teks dari Sidebar (dari pengguna dan AI)
 * dan memasukkannya ke dalam Google Docs yang sedang aktif.
 * 
 * @param {string} role - 'User' atau 'AI'
 * @param {string} text - Teks yang akan dimasukkan ke dalam dokumen
 */
function appendTextToDoc(role, text) {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  
  // Format teks: "Role: Text" (Misal: "User: Halo" atau "AI: Hai, ada yang bisa dibantu?")
  var formattedText = role + ": " + text;
  
  // Menambahkan teks sebagai paragraf baru di bagian bawah dokumen
  body.appendParagraph(formattedText);
}
