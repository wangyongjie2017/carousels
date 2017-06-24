// $(document).ready(function (){
//     alert('123')
// })
$(function(){
    $.fn.CarouseFigure = function(options){
        var defaults = {
            event:'click',
            speed:10,
            dot:false
        }
        var active = false;
        var rightClick = 0;
        var leftClick = 0;
        var iOptions = $.extend(defaults,options)
        var $this = $(this)
        var $size = $('.item').length;
        var initNumber = 1;
        function light(index){
            $('.dot').css({
                background:'#fff',
                transform:'scale(0.4)'
            })

            $('.dot').eq(index-1).css({
                background:'red',
                border:'1px solid #000',
                transform:'scale(0.8)'
            })
        }
        // light(initNumber)/*位置写在下面 */
        function createDose(number){
            // console.log(number)
            $this.append("<div class='dots'></div>")
            $('.dots').css({
                position:'absolute',
                bottom:'0',
                left:'50%',
                transform:'translateX(-50%)',
                // width:'100px',
                // height:'30px',
                // border:'1px solid red'
            })
            for(var i=0; i<number; i++){
                $('.dots').append("<div class='dot'></div>")
                $('.dot').css({
                    display:'inline-block',
                    width:'20px',
                    height:'20px',
                    borderRadius:'50%',
                    border:'1px solid red',
                    transform:'scale(0.6)',
                    background:'white'
                })
            }
        }
        createDose($size)
        light(initNumber)
        $this.on(iOptions.event,function(e){
            var $target = $(e.target)
            //检测有无类class相对于的名字
            if($target.hasClass('pre')){
                if( active || rightClick === leftClick ){
                    return
                }
                active = true
                $('.items').animate({
                    left:'+=300px'
                },iOptions.speed,function(){
                    active = false
                })
                leftClick++
                // console.log('zuo' + leftClick)
                initNumber--
                light(initNumber)
            }else if($target.hasClass('back')){
                if( active || rightClick-leftClick >= 4 ){
                    return
                }
                active = true
                $('.items').animate({
                    left:'-=300px'
                },iOptions.speed,function(){
                    active = false
                })
                rightClick++
                // console.log('you' + rightClick)
                initNumber++
                light(initNumber)
            }
        })
    }
    //怎么使用
    $('#app').CarouseFigure({
        event:'click'
    })
})

























