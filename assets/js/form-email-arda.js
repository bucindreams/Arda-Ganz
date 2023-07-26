$('#via-email-agz').click(mailchat);
  
  function mailchat() {
    /* Pengaturan Email */
    var maillink = 'mailto:',
        email = 'ardaganzofc@gmail.com', // Alamat Email Anda
        mailsubject = '&subject=Konfirmasi Pembelian ', // Subjek Email (Hanya Muncul Di Smartphone)
        maillink1 = '',
        jarak = '',
        maillink2 = '&body=Halo saya ingin membeli template anda dengan keterangan berikut: '; // Pesan Pembuka
      
    /* Dukungan Smartphone */ 
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { 
        maillink = 'mailto:';
        jarak = '<br>';
        tebal = '<b>';
        penutupTebal = '</b>';
        maillink1 = '?cc=&bcc=';
    }  
 
    /* Formulir Input Panggilan */ 
    var name2 = document.getElementById("name").value;
    var email2 = document.getElementById("email").value;
    var project2 = document.getElementById("project").value;
    var message2 = document.getElementById("message").value;
    var input_viaUrl2 = location.href; // Mengambil Url saat ini
    
    // Validasi isian form, jika ada yang kosong, berhenti dan berikan pesan kesalahan
     if (name2.trim() === '' || email2.trim() === '' || project2.trim() === '' || message2.trim() === '') {
     alert("Harap isi semua field yang diperlukan (Name, Email, Project, Message).");
     return;
     }
    
    /* URL Final Email */ 
    var mail_subject = encodeURIComponent(mailsubject + project2);
    var mail_body = encodeURIComponent(maillink2 + jarak + jarak +
        
        tebal + 'Nama : ' + penutupTebal + name2 + jarak +
        tebal + 'Email : ' + penutupTebal + email2 + jarak +
        tebal + 'Project : ' + penutupTebal + project2 + jarak +
        tebal + 'Message : ' + penutupTebal + message2 + jarak +
        jarak +
        tebal + 'Source : ' + penutupTebal + input_viaUrl2);

    /* Buka Jendela Email  */ 
    var mail_link = maillink + email + maillink1 + mail_subject + mail_body;
    window.open(mail_link, '_blank');
}