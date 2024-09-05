// let SingerNo = document.querySelectorAll(".SingerNo");
// console.log(SingerNo);



// $(SingerNo).click(function(e){
//     console.log(e.target);
//     console.log($(e.target).siblings());
//     $(e.target).siblings().slideToggle(400);

// })

$('.iconnav').click(function(){
    $(".NavBar").animate({
        width: '230px'
    }).show();
    $(".Xmark").show(); 
    $(".link a").show();
    $(".iconnav").animate({
        left: '230px'
    });
});
$(".Xmark").click(function(){
    $(".NavBar").animate({
        width: '0px'
    });
    $(".Xmark").hide(); 
    $(".link a").hide();

    $(".iconnav").animate({
        left: '0px' // Move back to 0 when closing the NavBar
    });
});


//Singer details
$(".singernumbers").click(function(){
    $(this).next().slideToggle(400);

})

const PartyDate = new Date("2024-10-15").getTime();





//CountDown
function CountDown(PartyDate)
{
    var Today = new Date().getTime();
    var DateCount = PartyDate - Today;
    var days = Math.floor(DateCount / (1000 * 60 * 60 * 24));
    var hours = Math.floor((DateCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((DateCount % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((DateCount % (1000 * 60)) / 1000);

    console.log(days,hours,minutes,seconds);
    $('#day').html(`${days}`);
    $('#hour').html(`${hours}`);
    $("#minute").html(`${minutes}`);
    $("#second").html(`${seconds}`);
    setInterval(function () {
        CountDown(PartyDate);
      }, 1000);
}
CountDown(PartyDate);
clearInterval(CountDown);

 let text = document.getElementById("TextArea");
 let Hundred ;
 let RemainngChar = document.getElementById("RemainngChar");
 function countChars() {
    text.addEventListener("input", function(e) {
        // Get the current length of the input
        let currentLength = e.target.value.length;

        if (currentLength <= 100) {
            Hundred = 100 - currentLength;
            RemainngChar.innerHTML = `${Hundred}`;
        } else {
            
            text.value = text.value.substring(0, 100);
        }

        if (Hundred === 0) {
            RemainngChar.innerHTML = `NO`;
        }
    });
}

countChars(); //

$("a[href^='#']").click(function(e){
    let linkHref=$(e.target).attr('href');
    $(linkHref).offset().animate({scrollTop:0},1000);
    console.log(linkHref)
})

