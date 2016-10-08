$(function(){
    var imgbox=$(".img-box")
    var lt=$(".lt")
    var gt=$(".gt")
    var index=0
$(".img11").click(function () {
    $(".long-img").addClass("long-img1")
    $(".img-show").addClass("img-show1")
$(".img1").addClass("imgs")
    $(".img2").addClass("imgs")
    $(".img3").addClass("imgs")
})
    $(".img21").click(function () {
        $(".long-img").addClass("long-img1")
        $(".img-show").addClass("img-show1")
        $(".img1").addClass("imgs")
        $(".img2").addClass("imgs")
        $(".img3").addClass("imgs")
    })
    $(".img31").click(function () {
        $(".long-img").addClass("long-img1")
        $(".img-show").addClass("img-show1")
        $(".img1").addClass("imgs")
        $(".img2").addClass("imgs")
        $(".img3").addClass("imgs")
    })
    $(".close").click(function(){
        $(".long-img").removeClass("long-img1")
        $(".img-show").removeClass("img-show1")
        $(".img1").removeClass("imgs")
        $(".img2").removeClass("imgs")
        $(".img3").removeClass("imgs")
        left=0
        index=0
        imgbox.css({"left":0})
        $(".img-show").find("img").attr("src","./images/5.jpg")
    })
    var w=imgbox.width()
    var left=0
    gt.click(function () {
        index++
        if (index==imgbox.find("img").length){
            index=0
            imgbox.css({"left":0})
        }
        left=index*(-300)
            imgbox.css({"left":left})
       var src1=imgbox.find("img").eq(index).attr("src")
        $(".img-show").find("img").attr("src",src1)
        console.log(index)

        console.log(left)
    })
    lt.click(function () {
        index--
        if (index<0){
            index=imgbox.find("img").length-1
            left=-w+300
            imgbox.css({"left":left})
        }
        else {
            left+=300
        imgbox.css({"left":left})}
        var src1=imgbox.find("img").eq(index).attr("src")
        $(".img-show").find("img").attr("src",src1)
        console.log(index)
        console.log(left)
    })
    imgbox.on("click","img",function () {
       var  src=$(this).attr("src")
        $(".img-show").find("img").attr("src",src)
        index=imgbox.find("img").index($(this))
        left=index*(-300)
        imgbox.css({"left":left})
    })

})