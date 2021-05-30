$(function(){
    $(document).ready(function(){
        $('#burger').on('click',function(){
            $('#all').toggle(700);
        });
        $('#close').on('click',function(){
            $('#all').hide(700);
        });
    });

    $(document).ready(function(){
        $('#edit').on('click',function(){
            $('#editData').slideToggle(700);
            $('.hapus').toggle(700);
            $(this).html('Simpan');
            return;
        });
    });

    var $kereta = $('#list');

    var adtemplate = "<li id=\"{{id_kereta}}\" class=\"krt\">"+
    "{{no_gerbong}} {{kelas_gerbong}}"+
    "</li>";
    
    function addkereta(krt){
        $kereta.append(Mustache.render(adtemplate, krt));
    }

    $.ajax({
        type: 'GET',
        url: 'https://apex.oracle.com/pls/apex/kereta-api/all-data/gerbong',
        success : function(kereta){
            $.each(kereta.items, function(i){
                $kereta.append(addkereta(kereta.items[i]));
            })
        },
        error: function(){
            alert('error loading data');
        }
    }); 

    var $no = $('#nomor');
    var $kl = $('#kelas');

    $('#tambah').on('click',function(){
        
        var item = {
            no_gerbong : $no.val(),
            kelas_gerbong: $kl.val()
        };

        $.ajax({
            type: 'POST',
            url: 'https://apex.oracle.com/pls/apex/kereta-api/all-data/gerbong/',
            data: item,
            success:function(baru) {
                $gerbong.append(addGerbong(item))
            },
            error:function(){
                alert('Gagal menambah gerbong');
            }
        });

        document.getElementById('nomor').value = '';
        document.getElementById('kelas').value = '';
    });
});