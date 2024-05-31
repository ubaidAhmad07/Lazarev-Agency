function navAnimation(){
        var nav = document.querySelector("nav")
    nav.addEventListener("mouseenter",function(){
        let tl = gsap.timeline()

        tl.to("#nav-bottom",{
            height:"24vh"
        })
        tl.to(".navpart1 h5",{
            display : "block"
        })
        tl.to(".navpart1 h5 span",{
            y:0,
            stagger:{
                amount:0.5
            }
        })
    })
    nav.addEventListener("mouseleave",function(){
        let tl = gsap.timeline()
        tl.to(".navpart1 h5 span",{
            y:25,
            stagger:{
                amount:0.2
            }
        })
        
        tl.to(".navpart1 h5",{
            display : "none",
            duration:0.1
        })
        tl.to("#nav-bottom",{
            height:0,
            duration:0.2
        })
    })
}
function page2Animation(){
    var rightElems = document.querySelectorAll(".right-elem")
    rightElems.forEach(function(elems){
        elems.addEventListener("mouseenter",function(){
            gsap.to(elems.childNodes[3],{
                opacity :1,
                scale : 1,
            })
        })
        elems.addEventListener("mouseleave",function(){
            gsap.to(elems.childNodes[3],{
                opacity :0,
                scale : 0,
            })
        })
        elems.addEventListener("mousemove",function(dets){
            gsap.to(elems.childNodes[3],{
                x: dets.x - elems.getBoundingClientRect().x -40,
                y: dets.y -elems.getBoundingClientRect().y - 120
            })
        })    
    })

}
function page3Video (){
    var playBTN = document.querySelector(".items")
    var video = document.querySelector("#page3 video")

    playBTN.addEventListener("click",function(){
        video.play()
        gsap.to("video",{
            opacity : 1,
            transform : " scaleX(1) scaleY(1)",
            borderRadius : 0,

        })
    })
    video.addEventListener("click",function(){
        video.pause()
        gsap.to("video",{
            opacity : 0,
            transform : " scaleX(0.7) scaleY(0)",
            borderRadius : 30,

    })
})

}
page2Animation()
page3Video()
navAnimation()

