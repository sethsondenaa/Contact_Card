$().ready(function(){

    $('form').submit(function(){
        var name = $('input[name=firstname]').val()+" "+$('input[name=lastname]').val();
        var des = $('textarea').val();
        $('#addressBook').append('<div class="contacts"><h4>'+name+'</h4><h5>Click for Description!</h5><p>'+des+'</p></div>');
        return false;
    })

    $('#addressBook').on('click', '.contacts', function(){
        $('h4, h5', this).slideToggle();
        $('p', this).slideToggle();
    })



})
