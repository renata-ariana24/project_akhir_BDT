$(function(){
    $(document).ready(function(){
        $('#burger').on('click',function(){
            $('#all').toggle(700);
        });
        $('#close').on('click',function(){
            $('#all').hide(700);
        });
    });

    var $kereta = $('#tabel');
    var $notiket = $('#notiket');
    var $nik = $('#nik');
    var $nama = $('#nama');
    var $usia = $('#usia');
    var $telp = $('#telp');

    $.ajax({
        type: 'GET',
        url: 'https://apex.oracle.com/pls/apex/kereta-api/all-data/tiket-kosong',
        success : function(kereta){
            console.log('success',kereta.items);
            $.each(kereta.items, function(i,item){
                $kereta.append('<tr> '+
                '<td>'+kereta.items[i]["nomor kursi"]+'</td>'+
                '<td>'+kereta.items[i]["kereta"]+'</td>'+
                '<td>'+kereta.items[i]["asal"]+'</td>'+
                '<td>'+kereta.items[i]["tujuan"]+'</td>'+
                '<td>'+kereta.items[i]["tanggal berangkat"]+'</td>'+
                '<td>'+kereta.items[i]["kelas gerbong"]+'</td>'+
                '<td>'+kereta.items[i]["harga"]+'</td>'+
                '</tr>')
            })
        },
        error: function(){
            alert('error loading data');
        }
    });

    $('#pesan').on('click',function(){
        var item = {
            NIK : $nik.val(),
            NAMA : $nama.val(),
            USIA : $usia.val(),
            NO_TELP : $telp.val()
        };

        $.ajax({
            type: 'POST',
            url: 'https://apex.oracle.com/pls/apex/kereta-api/all-data/pesan-tiket/'+$notiket.val(),
            data: item,
            success:function(kereta_baru) {
                console.log('success',kereta_baru);
            },
            error:function(){
                alert('Pesanan Gagal');
            }
        });

        document.getElementById('nik').value = '';
        document.getElementById('nama').value = '';
        document.getElementById('usia').value = '';
        document.getElementById('telp').value = '';

    });

    $('#cari').on('click',function(){
        $('#pencarian').slideToggle(700);
    });

    var $tanggal = $('#tgll');
    var $penumpang=$('#penumpang');

    $('#tgl').on('click',function(){
        $.ajax({
            type: 'GET',
            url: 'https://apex.oracle.com/pls/apex/kereta-api/all-data/penumpang/'+$tanggal.val(),
            success : function(penumpang){
                console.log('success',penumpang.items);
                $.each(penumpang.items, function(i,item){
                    $penumpang.append('<tr> '+
                    '<td>'+penumpang.items[i]["no. kursi"]+'</td>'+
                    '<td>'+penumpang.items[i].nama+'</td>'+
                    '<td>'+penumpang.items[i].kelas_gerbong+'</td>'+
                    '<td>'+penumpang.items[i]["nama kereta"]+'</td>'+
                    '</tr>')
                });
            },
            error:function(){
                alert('Gagal Memuat Data');
            }
        });   
        document.getElementById('penumpang').value ='';
    });

});