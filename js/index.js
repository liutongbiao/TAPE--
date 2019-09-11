
// 轮播图
lunbotu();
function lunbotu(){
    index=4;
    timer1=null;
    timer2=null;
    $('#boxindex .lunbo .lunbotubox').on('swipeRight', function () {
          clearInterval(timer1);
           index++;   
           index=index>4?index=0:index;         
           ban(index);
           clearTimeout(timer2);
           timer2=setTimeout(auto,2000);

    })
    $('#boxindex .lunbo .lunbotubox').on('swipeLeft', function () {
        clearInterval(timer1);
          index--;   
          index=index<0?index=4:index;
        ban(index);
        clearTimeout(timer2);
        timer2=setTimeout(auto,2000);
    })
  function auto(){
      timer1=setInterval(function(){
          index--;    
          index=index<0?index=4:index;
        ban(index);
    },2000)
  }
  auto();
    



// console.log( banfive());
 
function ban(index){
    
    $('#boxindex .lunbo .yuandian dl dd').eq(index).addClass('active').siblings().removeClass('active');
    if(index===0){
        $('#boxindex .lunbo .lunbotubox ul li').eq(0).animate(banone(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(1).animate(bantwo(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(2).animate(banthree(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(3).animate(banforu(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(4).animate(banfive(),300);
       
    }
    if(index===1){
        $('#boxindex .lunbo .lunbotubox ul li').eq(4).animate(banone(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(0).animate(bantwo(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(1).animate(banthree(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(2).animate(banforu(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(3).animate(banfive(),300); 
    }
    if(index===2){
        $('#boxindex .lunbo .lunbotubox ul li').eq(3).animate(banone(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(4).animate(bantwo(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(0).animate(banthree(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(1).animate(banforu(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(2).animate(banfive(),300); 
    }
    if(index===3){
        $('#boxindex .lunbo .lunbotubox ul li').eq(2).animate(banone(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(3).animate(bantwo(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(4).animate(banthree(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(0).animate(banforu(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(1).animate(banfive(),300); 
    }
    if(index===4){
        $('#boxindex .lunbo .lunbotubox ul li').eq(1).animate(banone(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(2).animate(bantwo(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(3).animate(banthree(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(4).animate(banforu(),300); 
        $('#boxindex .lunbo .lunbotubox ul li').eq(0).animate(banfive(),300); 
    }
}

    function banone() {
        return {
            opacity: 1,
            left: '30%',
            zIndex: 3,
            transform:'scale(1)'
        }
    }

    function bantwo() {
        return {
            opacity: 0.8,
            left: '52%',
            zIndex: 2,
            transform:'scale(0.8)'
        }
    }

    function banthree() {
        return {
            opacity: 0.6,
            left: '68%',
            zIndex: 1,
            transform:'scale(0.6)'
        }
    }

    function banforu() {
        return {
            opacity: 0.6,
            left: '-8%',
            zIndex: 1,
            transform:'scale(0.6)'
        }
    }

    function banfive() {
        return {
            opacity: 0.8,
            left: '8%',
            zIndex: 2,
            transform:'scale(0.8)'
        }
    }
}
   