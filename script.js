var applePrice = 2.00 , orangePrice = 2.00 , bananaPrice = 2.00 , grapePrice = 2.00 , time = 100 , currentMoney = 100.00;
alert('Welcome to the fruit bazaar! How much profit can you generate in your time here? Click OK to play!');
var timeDisplay = setInterval(function(){
			time--;
			var adjusted = timeAdjust(time);
			$('#time').text(adjusted);
			endCounter();
		}, 1000);
var priceUpdate = setInterval(function(){
	var randomApples = randomNumber(-50,50);
	applePrice += randomApples/100;
	if(applePrice > 9.99){
		applePrice = 9.99;
	}else if (applePrice < .50) {
		applePrice = .50;
	}
	$('#currentApplePrice').text(applePrice.toFixed(2));

	var randomOranges = randomNumber(-50,50);
	orangePrice += randomOranges/100;
	if(orangePrice > 9.99){
		orangePrice = 9.99;
	}else if (orangePrice < .50) {
		orangePrice = .50;
	}
	$('#currentOrangePrice').text(orangePrice.toFixed(2));

	var randomBananas = randomNumber(-50,50);
	bananaPrice += randomBananas/100;
	if(bananaPrice > 9.99){
		bananaPrice = 9.99;
	}else if (bananaPrice < .50) {
		bananaPrice = .50;
	}
	$('#currentBananaPrice').text(bananaPrice.toFixed(2));

	var randomGrapes = randomNumber(-50,50);
	grapePrice += randomGrapes/100;
	if(grapePrice > 9.99){
		grapePrice = 9.99;
	}else if (grapePrice < .50) {
		grapePrice = .50;
	}
	$('#currentGrapePrice').text(grapePrice.toFixed(2));
}, 15000);

$(function(){


	$('#currentApplePrice').text(applePrice.toFixed(2));
	$('#currentOrangePrice').text(orangePrice.toFixed(2));
	$('#currentBananaPrice').text( bananaPrice.toFixed(2));
	$('#currentGrapePrice').text(grapePrice.toFixed(2));
	$('#money').text(currentMoney.toFixed(2));

	$('.buy').on('click', function() {
		var fruitValue=Number($(this).parent().parent().parent().find('.currentInventory').text());
		var change = $(this).parent().parent().parent().find('.currentPrice').text();
		change = change.substring(1, change.length);
		if (currentMoney >= change) {
			currentMoney -= change;
			console.log($(this).parent().parent().parent().find('.currentPrice').text());
			$('#money').text(currentMoney.toFixed(2));
			fruitValue++;
			$(this).parent().parent().parent().find('.currentInventory').text(fruitValue);
		}
	});

	$('.sell').on('click', function() {
		var fruitValue=Number($(this).parent().parent().parent().find('.currentInventory').text());
		// fruitValue--;
		if (fruitValue > 0) {
			fruitValue--;
			$(this).parent().parent().parent().find('.currentInventory').text(fruitValue);
			var change = $(this).parent().parent().parent().find('.currentPrice').text();
			change = change.substring(1, change.length);
			currentMoney += Number(change);
			$('#money').text(currentMoney.toFixed(2));
		} else {
			fruitValue = 0;
			$(this).parent().parent().parent().find('.currentInventory').text(fruitValue);
		}

	});

});

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function timeAdjust(i) {
		var min = parseInt(i/60);
		var sec = i - (min*60);
		if(sec<10){
			sec = "0"+sec;
		}
		return min + ':' + sec;
}
function endCounter(){
	if (time==0){
		clearInterval(timeDisplay);
		clearInterval(priceUpdate);
	}
}
