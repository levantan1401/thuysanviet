$('input.input-qty').each(function() {
    var $this = $(this),
    qty = $this.parent().find('.is-form'),
    min = Number($this.attr('min')),
    max = Number($this.attr('max'))

    if (min == 0) {
        var d = 0
    } else d = min
    $(qty).on('click', function() {
        if ($(this).hasClass('minus')) {
            if (d > min) d += -1
        } else if ($(this).hasClass('plus')) {
            var x = Number($this.val()) + 1
            if (x <= max) d += 1
        }
        $this.attr('value', d).val(d)
    })
})

function Delete1(){
    var ele = document.getElementById('shirakura');
    ele.parentNode.removeChild(ele);
    ret
}
function Delete2(){
    var ele = document.getElementById('austfeed');
    ele.parentNode.removeChild(ele);
    ret
}
function Delete3(){
    var ele = document.getElementById('pooch');
    ele.parentNode.removeChild(ele);
    ret
}
function Delete4(){
    var ele = document.getElementById('helios');
    ele.parentNode.removeChild(ele);
    ret
}
  