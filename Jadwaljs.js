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
        url: 'https://apex.oracle.com/pls/apex/kereta-api/all-data/kereta/jadwal',
        success : function(kereta){
            console.log('success',kereta);
            $.each(kereta.items, function(i,item){
                $kereta.append('<tr> '+
                '<td>'+kereta.items[i]["id"]+'</td>'+
                '<td>'+kereta.items[i]["kereta"]+'</td>'+
                '<td>'+kereta.items[i]["waktu berangkat"]+'</td>'+
                '<td>'+kereta.items[i]["waktu tiba"]+'</td>'+
                '<td>'+kereta.items[i]["stasiun asal"]+'</td>'+
                '<td>'+kereta.items[i]["stasiun tujuan"]+'</td>'+
                '</tr>')
            })
        },
        error: function(){
            alert('error loading data');
        }
    });
});