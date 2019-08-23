$(document).ready(function()
{   
    const alertController = document.querySelector('ion-alert-controller');
    var btnTambah = $('#tambahButton').val()
    var total = 0 ;

    $("#hapus").click(function()
    {
        $("#listpengeluaran").empty();
        document.getElementById("totalPengeluaran").innerHTML = "Total Pengeluaran : Rp 0,00"
        total = 0;
    });

    $("#tambahButton").click(function()
    {
        var list = $("<ion-item>") 
        var tambahNP = $('#NamaPengeluaran').val()
        var tambahJP = $('#JumlahPengeluaran').val()
        var NPbaru = document.createTextNode(tambahNP);
        var JPbaru = document.createTextNode(tambahJP);
        total = total + parseInt(tambahJP);
        list.append(NPbaru, ": Rp. ", JPbaru, ",00");
        if (tambahNP == "" || tambahJP == "") 
        {
            alertController.create({
                header: 'Terjadi Kesalahan',
                message: 'Mohon masukkan nama dan jumlah pengeluaran',
                buttons: ['Tutup']
            }).then(alert => {
                alert.present();
            });
        } 
        else 
        {
            $("#listpengeluaran").append(list);
            document.getElementById("totalPengeluaran").innerHTML = "Total Pengeluaran : Rp. " + total + ",00";
        }
        
    });

});