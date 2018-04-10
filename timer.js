	var stage;
	var timer;
	var timerup = (100);
	var antrianLoad;
	var skor1;
	var x;
	var detik = -1;
	var w = window.screen.width;
	var menit = 120;			

	function init(){
		stage = new createjs.Stage("konten");
		stage.width = w;
		antrianLoad =  new createjs.LoadQueue(false);
		//antrianLoad.installPlugin(createjs.Sound);
		antrianLoad.addEventListener("complete", handleComplete);
		antrianLoad.loadManifest([{id:"", src:""}]);

		if(document.getElementById("BtStart").innerHTML == "Stop")
		{				
			document.getElementById("BtStart").innerHTML = "Start";
		}
		else if(document.getElementById("BtStart").innerHTML == "Start")
		{
			document.getElementById("BtStart").innerHTML = "Stop";				
		}
		stage.removeChild(timer);
	}
	
	function handleComplete(event){
		createjs.Ticker.addEventListener("tick", onTick);
		createjs.Ticker.setInterval(1000);
		
		timer = new createjs.Text("00 : 00", "72px Arial", "FFFFFF");
		timer.x = (800/2)-110;
		timer.y = 20;
		
		stage.addChild(timer);
	}
	
	//ini run mau sampe berapa menit
	function onTick(event){
		if(document.getElementById("BtStart").innerHTML == "Stop")
		{
			x = createjs.Ticker.getTicks();
			x -= 1;
			
			menit += parseInt((detik/59) % 59);
			
			if(detik == 59){
				detik = 0;
			}else{
				detik += 1;
			}
		}
		console.log(x);
		
		menitBaru = "0000000" + menit;
		detikBaru = "00000" + detik;
		
		menitCetak = menitBaru.substr(-3,3);
		detikCetak = detikBaru.substr(-2,2);
		
		if(menit==150 && detik==0){
			timer.text = menitCetak + " : " + detikCetak;
			document.getElementById("BtStart").innerHTML = "Finish"					
		}else if(menit<=150){
			timer.text = menitCetak + " : " + detikCetak;
		}
						
		stage.update();
	}
	
	//load tampilan waktu/timer
	function load(){
		stage = new createjs.Stage("konten");
		stage.width = w;
		antrianLoad =  new createjs.LoadQueue(false);
		antrianLoad.installPlugin(createjs.Sound);
		
		timer = new createjs.Text("00 : 00", "72px Arial", "FFFFFF");
		timer.x = (800/2)-110;
		timer.y = 20;
		
		stage.addChild(timer);
		stage.update();
	}
	
	
	//detect keyboard
	function detectKey(e){
		
		var evt = e || window.event;
		var waktuDetik = parseInt(menitCetak * 60) + parseInt(detikCetak);
		var konversi = parseFloat(600 / parseInt(waktuDetik));
		var skor = parseFloat(konversi - 1);
		
		if(waktuDetik<60)
		{
			skor = 10;
		}
		
		//var skor = parseFloat(((240/x)*19)/10);
		var n = skor.toFixed(2);
		
		//alert(evt.keyCode);
		
		if(evt.keyCode == 49){
			document.getElementById('peserta1').innerHTML = menitCetak+ " : " + detikCetak;
		}else if(evt.keyCode == 50){
			document.getElementById('peserta2').innerHTML = menitCetak+ " : " + detikCetak;
		}else if(evt.keyCode == 51){
			document.getElementById('peserta3').innerHTML = menitCetak+ " : " + detikCetak;
		}else if(evt.keyCode == 52){
			document.getElementById('peserta4').innerHTML = menitCetak+ " : " + detikCetak;
		}else if(evt.keyCode == 53){
			document.getElementById('peserta5').innerHTML = menitCetak+ " : " + detikCetak;
		}else if(evt.keyCode == 54){
			document.getElementById('peserta6').innerHTML = menitCetak+ " : " + detikCetak;
		}else if(evt.keyCode == 55){
			document.getElementById('peserta7').innerHTML = menitCetak+ " : " + detikCetak;
		}else if(evt.keyCode == 56){
			document.getElementById('peserta8').innerHTML = menitCetak+ " : " + detikCetak;
		}else if(evt.keyCode == 57){
			document.getElementById('peserta9').innerHTML = menitCetak+ " : " + detikCetak;
		}else if(evt.keyCode == 48){
			document.getElementById('peserta10').innerHTML = menitCetak+ " : " + detikCetak;
		}
		
		return document.defaultAction;
	}
	
	function button1(){
		var waktuDetik = parseInt(menitCetak * 60) + parseInt(detikCetak);
		var konversi = parseFloat(600 / parseInt(waktuDetik));
		var skor = parseFloat(konversi - 1);
		
		if(waktuDetik<60)
		{
			skor = 10;
		}
		
		//var skor = parseFloat(((240/x)*19)/10);
		var n = skor.toFixed(2);
		
		document.getElementById('peserta1').innerHTML = menitCetak+ " : " + detikCetak;
	}
	function button2(){
		var waktuDetik = parseInt(menitCetak * 60) + parseInt(detikCetak);
		var konversi = parseFloat(600 / parseInt(waktuDetik));
		var skor = parseFloat(konversi - 1);
		
		if(waktuDetik<60)
		{
			skor = 10;
		}
		
		//var skor = parseFloat(((240/x)*19)/10);
		var n = skor.toFixed(2);
		
		document.getElementById('peserta2').innerHTML = menitCetak+ " : " + detikCetak;
	}
	function button3(){
		var waktuDetik = parseInt(menitCetak * 60) + parseInt(detikCetak);
		var konversi = parseFloat(600 / parseInt(waktuDetik));
		var skor = parseFloat(konversi - 1);
		
		if(waktuDetik<60)
		{
			skor = 10;
		}
		
		//var skor = parseFloat(((240/x)*19)/10);
		var n = skor.toFixed(2);
		
		document.getElementById('peserta3').innerHTML = menitCetak+ " : " + detikCetak;
	}
	function button4(){
		var waktuDetik = parseInt(menitCetak * 60) + parseInt(detikCetak);
		var konversi = parseFloat(600 / parseInt(waktuDetik));
		var skor = parseFloat(konversi - 1);
		
		if(waktuDetik<60)
		{
			skor = 10;
		}
		
		//var skor = parseFloat(((240/x)*19)/10);
		var n = skor.toFixed(2);
		
		document.getElementById('peserta4').innerHTML = menitCetak+ " : " + detikCetak;
	}
	function button5(){
		var waktuDetik = parseInt(menitCetak * 60) + parseInt(detikCetak);
		var konversi = parseFloat(600 / parseInt(waktuDetik));
		var skor = parseFloat(konversi - 1);
		
		if(waktuDetik<60)
		{
			skor = 10;
		}
		
		//var skor = parseFloat(((240/x)*19)/10);
		var n = skor.toFixed(2);
		
		document.getElementById('peserta5').innerHTML = menitCetak+ " : " + detikCetak;
	}
	function button6(){
		var waktuDetik = parseInt(menitCetak * 60) + parseInt(detikCetak);
		var konversi = parseFloat(600 / parseInt(waktuDetik));
		var skor = parseFloat(konversi - 1);
		
		if(waktuDetik<60)
		{
			skor = 10;
		}
		
		//var skor = parseFloat(((240/x)*19)/10);
		var n = skor.toFixed(2);
		
		document.getElementById('peserta6').innerHTML = menitCetak+ " : " + detikCetak;
	}
	function button7(){
		var waktuDetik = parseInt(menitCetak * 60) + parseInt(detikCetak);
		var konversi = parseFloat(600 / parseInt(waktuDetik));
		var skor = parseFloat(konversi - 1);
		
		if(waktuDetik<60)
		{
			skor = 10;
		}
		
		//var skor = parseFloat(((240/x)*19)/10);
		var n = skor.toFixed(2);
		
		document.getElementById('peserta7').innerHTML = menitCetak+ " : " + detikCetak;
	}
	function button8(){
		var waktuDetik = parseInt(menitCetak * 60) + parseInt(detikCetak);
		var konversi = parseFloat(600 / parseInt(waktuDetik));
		var skor = parseFloat(konversi - 1);
		
		if(waktuDetik<60)
		{
			skor = 10;
		}
		
		//var skor = parseFloat(((240/x)*19)/10);
		var n = skor.toFixed(2);
		
		document.getElementById('peserta8').innerHTML = menitCetak+ " : " + detikCetak;
	}
	function button9(){
		var waktuDetik = parseInt(menitCetak * 60) + parseInt(detikCetak);
		var konversi = parseFloat(600 / parseInt(waktuDetik));
		var skor = parseFloat(konversi - 1);
		
		if(waktuDetik<60)
		{
			skor = 10;
		}
		
		//var skor = parseFloat(((240/x)*19)/10);
		var n = skor.toFixed(2);
		
		document.getElementById('peserta9').innerHTML = menitCetak+ " : " + detikCetak;
	}
	function button10(){
		var waktuDetik = parseInt(menitCetak * 60) + parseInt(detikCetak);
		var konversi = parseFloat(600 / parseInt(waktuDetik));
		var skor = parseFloat(konversi - 1);
		
		if(waktuDetik<60)
		{
			skor = 10;
		}
		
		//var skor = parseFloat(((240/x)*19)/10);
		var n = skor.toFixed(2);
		
		document.getElementById('peserta10').innerHTML = menitCetak+ " : " + detikCetak;
	}
	