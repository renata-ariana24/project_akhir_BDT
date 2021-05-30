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
    
    $.ajax({
        type: 'GET',
        url: 'https://apex.oracle.com/pls/apex/kereta-api/all-data/tiket',
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
                '<td>'+kereta.items[i]["status"]+'</td>'+
                '</tr>')
            })
        },
        error: function(){
            alert('error loading data');
        }
    });

    var $ref = $('#tabel2');
    
    $.ajax({
        type: 'GET',
        url: 'https://apex.oracle.com/pls/apex/kereta-api/all-data/tiket/referensi-harga-kelas',
        success : function(ref){
            console.log('success',ref.items);
            $.each(ref.items, function(i,item){
                $ref.append('<tr> '+
                '<td>'+ref.items[i]["kelas"]+'</td>'+
                '<td>'+ref.items[i]["harga"]+'</td>'+
                '</tr>')
            })
        },
        error: function(){
            alert('error loading data');
        }
    });

});