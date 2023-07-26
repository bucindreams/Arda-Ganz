//<![CDATA[
//jQuery Widget Chat Box Whatsapp By Arda Ganz
$('#via-whatsapp-agz').click(whatsappchat);

function whatsappchat() {
    /* Pengaturan Whatsapp */
    var judul = 'Hai kak saya ingin bertanya';
    var walink = 'https://web.whatsapp.com/send';
    var phone = '6281370126262'; // No Whatsapp Kalian

    /* Dukungan Smartphone */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var walink = 'whatsapp://send';
    }
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var project = document.getElementById("project").value;
    var message = document.getElementById("message").value;
    var input_viaUrl = location.href; // Mengambil Url saat ini
     
     // Validasi isian form, jika ada yang kosong, berhenti dan berikan pesan kesalahan
     if (name.trim() === '' || email.trim() === '' || project.trim() === '' || message.trim() === '') {
     alert("Harap isi semua field yang diperlukan (Name, Email, Project, Message).");
     return;
     }
     
    /* Final Whatsapp URL */
    var arda_whatsapp = 'https://api.whatsapp.com/send?phone=' + phone + '&text=' + encodeURIComponent(judul +
        '\n\n' +
        '*Nama* : ' + name +
        '\n*Email* : ' + email +
        '\n*Project* : ' + project +
        '\n*Message* : ' + message + 
        '\n\n' +
        '*Source* : ' + input_viaUrl +
        '\n');
    
    /* Buka Jendela Whatsapp */
    window.open(arda_whatsapp, '_blank');
    window.location.href = input_viaUrl; // Segarkan Halaman Setelah Terkirim
}
///]]>