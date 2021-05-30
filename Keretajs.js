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
    var $nama_kereta = $('#nama_kereta');
    var $id_kereta = $('#id_kereta');

    var adtemplate = "<li id=\"{{id_kereta}}\" class=\"krt\">"+
    "{{nama_kereta}} {{id_kereta}}"+
    "</li>";
    
    function addkereta(krt){
        $kereta.append(Mustache.render(adtemplate, krt));
    }

    $.ajax({
        type: 'GET',
        url: 'https://apex.oracle.com/pls/apex/kereta-api/all-data/kereta/',
        success : function(kereta){
            $.each(kereta.items, function(i){
                $kereta.append(addkereta(kereta.items[i]));
            })
        },
        error: function(){
            alert('error loading data');
        }
    }); 

    $('#tambah-kereta').on('click',function(){
        var item = {
            nama_kereta : $nama_kereta.val(),
            id_kereta : $id_kereta.val(),
        };

        $.ajax({
            type: 'POST',
            url: 'https://apex.oracle.com/pls/apex/kereta-api/all-data/kereta/',
            data: item,
            success:function() {
                $kereta.append(addkereta(item));
                $('.hapus').toggle(700);
            },
            error:function(){
                alert('Gagal menambah kereta');
            }
        });

        document.getElementById('nama_kereta').value = '';
        document.getElementById('id_kereta').value = '';
    });
});