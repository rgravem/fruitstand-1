console.log('sourced');

// var inventory = [];
// var fruit = {
//   name: '',
//   price: 0,
// };
var orangeInv = 0;
var redGrapeInv = 0;
var pearInv = 0;
var whiteGrapeInv = 0;

var orangeBought = 0;
var redGrapeBought = 0;
var pearBought = 0;
var whiteGrapeBought = 0;

var userMoney = 100;
onload=function(){
  $('#sweetCash').html(userMoney);
  $('#orangePrice').html(orange.price);
  $('#pearPrice').text(pear.price);
  $('#whiteGrapePrice').text(whiteGrape.price);
  $('#redGrapePrice').text(redGrape.price);
};
function randomNum(min, max) {
  return Number((Math.random(max - min) + min).toFixed(2));
}
var orange = {
  name: 'orange',
  price: randomNum(0.50, 9.99),
};

var redGrape = {
  name: 'redGrape',
  price: randomNum(0.50, 9.99),
};

var pear = {
  name: 'pear',
  price: randomNum(0.50, 9.99),
};

var whiteGrape = {
  name: 'whiteGrape',
  price: randomNum(0.50, 9.99),
};

var arrayOfPrices = [orange, redGrape, pear, whiteGrape];

var tallyReturn = function(){
  var finalOrange = (orange.price) * orangeInv;
  var finalRedGrape = (redGrape.price) * redGrapeInv;
  var finalPear = (pear.price) * pearInv;
  var finalWhiteGrape = (whiteGrape.price) * whiteGrapeInv;

  userMoney += finalOrange + finalRedGrape + finalPear + finalWhiteGrape;

  orangeInv = 0;
  redGrapeInv = 0;
  pearInv = 0;
  whiteGrapeInv = 0;

  alert('You finished $' + userMoney + '!');

};

$(document).ready(function (){
  var timesRun = 0;
  var interval = setInterval(function(){

  for (var i = 0; i < arrayOfPrices.length; i++) {
      if(arrayOfPrices[i].price >= 9.49) {
        arrayOfPrices[i].price -= Number(randomNum(0.01, 0.50).toFixed(2));
console.log(randomNum());
      } else if(arrayOfPrices[i].price <= 1) {
        arrayOfPrices[i].price += Number(randomNum(0.01, 0.50).toFixed(2));
      } else {
        arrayOfPrices[i].price += Number(randomNum(-0.5, 0.50).toFixed(2));
        console.log(randomNum(-0.5, 0.50));
      }
      timesRun++;
      console.log(timesRun);
if(timesRun == 80){
clearInterval(interval);
}
    }

    $('#orangePrice').text(orange.price.toFixed(2));
    $('#pearPrice').text(pear.price.toFixed(2));
    $('#whiteGrapePrice').text(whiteGrape.price.toFixed(2));
    $('#redGrapePrice').text(redGrape.price.toFixed(2));
    console.log(arrayOfPrices);
  }, 15000);
  console.log(orange);

  setTimeout(tallyReturn, 300000);

  $('.orange').on('click', function(){
    console.log('clicked button');
    if (userMoney - orange.price <= 0) {
      alert('You are broke YO');
    }else{
    userMoney -= orange.price;
    orangeInv ++;
    orangeBought += orange.price;
    $("#avgOrange").html((orangeBought/orangeInv).toFixed(2));
    $("#orangeCount").html(orangeInv);
    $('#sweetCash').html(userMoney.toFixed(2));
    console.log('user money:', userMoney);
    }
  });
  $('.redGrape').on('click', function(){
    console.log('clicked button');
    if (userMoney - redGrape.price <= 0) {
      alert('You are broke YO');
    }else{
    userMoney -= redGrape.price;

    redGrapeInv ++;
    redGrapeBought += redGrape.price;
    $("#avgRedGrape").html((redGrapeBought/redGrapeInv).toFixed(2));
    $("#redGrapeCount").html(redGrapeInv);
    $('#sweetCash').html(userMoney.toFixed(2));
    console.log(redGrapeInv + " , " + redGrapeBought);
  }
  });
  $('.pear').on('click', function(){
    console.log('clicked button');
    if (userMoney - pear.price <= 0) {
      alert('You are broke YO');
    }else{
    userMoney -= pear.price;

    pearInv ++;
    pearBought += pear.price;
    $("#avgPear").html((pearBought/pearInv).toFixed(2));
    $("#pearCount").html(pearInv);
    $('#sweetCash').html(userMoney.toFixed(2));
    console.log(pearInv + " , " + pearBought);
  }
  });
  $('.whiteGrape').on('click', function(){
    console.log('clicked button');
    if (userMoney - whiteGrape.price <= 0) {
      alert('You are broke YO');
    }else{
    userMoney -= whiteGrape.price;

    whiteGrapeInv ++;
    whiteGrapeBought += whiteGrape.price;
    $("#avgWhiteGrape").html((whiteGrapeBought/whiteGrapeInv).toFixed(2));
    $("#whiteGrapeCount").html(whiteGrapeInv);
    $('#sweetCash').html(userMoney.toFixed(2));
    console.log(whiteGrapeInv + " , " + whiteGrapeBought);
  }
  });
  $('#orangeSell').on('click', function(){
    if (orangeInv == 0) {
      alert('Hey stupid thats not an orange in your basket');
    }else{
      orangeInv --;
      userMoney += orange.price;
      $("#orangeCount").html(orangeInv);
      $('#sweetCash').html(userMoney.toFixed(2));
    }
  });
  $('#pearSell').on('click', function(){
    if (pearInv == 0) {
      alert('Hey stupid thats not a pear in your basket');
    }else{
      pearInv --;
      userMoney += pear.price;
      $("#pearCount").html(pearInv);
      $('#sweetCash').html(userMoney.toFixed(2));
    }
  });
  $('#redGrapeSell').on('click', function(){
    if (redGrapeInv == 0) {
      alert('Hey stupid thats not an redGrape in your basket');
    }else{
      redGrapeInv --;
      userMoney += redGrape.price;
      $("#redGrapeCount").html(redGrapeInv);
      $('#sweetCash').html(userMoney.toFixed(2));
    }
  });
  $('#whiteGrapeSell').on('click', function(){
    if (whiteGrapeInv == 0) {
      alert('Hey stupid thats not a whiteGrape in your basket');
    }else{
      whiteGrapeInv --;
      userMoney += whiteGrape.price;
      $("#whiteGrapeCount").html(whiteGrapeInv);
      $('#sweetCash').html(userMoney.toFixed(2));
    }
  });
});

// var loopOfPrices = function(){
//   console.log('in loop price');
//   for (var i = 0; i < arrayOfPrices.length; i++) {
//     if(arrayOfPrices[i].name === $('.buyButton').data('name'))
//       fruit.price = arrayOfPrices[i].price;
//       return fruit.price;
//   }
// };
