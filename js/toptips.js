/*
 * toptips
 * By Truimo
*/
//顶部提示
function toptips(text, color, time){
    if (!time) {
        time = 2000
    } else if (time == 'always') {
        time = 9999999999999;
    }
  if(!text){
     $('.toptips').css({'background': '#fa5151'}).text('Error:toptips() 发生错误').fadeIn("200")
  }else{
  if(!color){
      $('.toptips').css({'background': '#06ae56'}).text(text).fadeIn("200")
    } else if(color == 'danger'){
      $('.toptips').css({'background': '#fa5151'}).text(text).fadeIn("200")
    }else if(color == 'warn'){
      $('.toptips').css({'background': '#ffc300'}).text(text).fadeIn("200")
    }else if(color == 'info'){
      $('.toptips').css({'background': '#00947e'}).text(text).fadeIn("200")
    }else if(color == 'success'){
      $('.toptips').css({'background': '#06ae56'}).text(text).fadeIn("200")
    }else{
      $('.toptips').css({'background': '#fa5151'}).text('Error:toptips() 发生错误').fadeIn("200")
    }
  }
  $('body').css({ 'pointer-events': 'none' })
  close(time)
}
// 关闭顶部提示
function close(time) {
    setTimeout(function () {
        $('body').removeAttr('style', '')
        $('.toptips').fadeOut("200")
    }, time)
}
