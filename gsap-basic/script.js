// gsap.to('#main',{
//     x:1600,
//     duration:5,
//     delay:3 // after 3sec start animation
// })

// gsap.from('#main',{
//     x:1600,
//     duration:5,
//     delay:1,
//     rotate:360
// })


// gsap.to('#main',{
//     x:1600,
//     duration:5,
//     delay:2,
//     rotate:360,
//     backgroundColor:'yellow',
//     borderRadius:"100%"
// })


// gsap.from('h1',{
//     y:100,
//     opacity:0,
//     duration:1.5,
//     delay:1,
//     stagger:0.3
// })

gsap.to('#box1',{
    x:1600,
    duration:3,
    delay:1,
    rotate:360,
    // repeat:1 // its mean repeat the animation 1 time
    repeat:-1, // its mean playing the animation infinit
    yoyo:true, // this property work like yoyo...
})