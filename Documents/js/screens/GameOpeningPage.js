/**
 * @author sandeep.b
 */
/**
 author - deviator
 */

function GameOpeningPage(app) {
	this.mApplication = app;
	this.mDivName = "new_intro_Anim";
	this.nStartTime = 1000;
	this.nPadding = 500;
	this.arrAnim = new Array();
	this.arrAnimObject = new Array();
	this.animCounter = 1;
	this.bird_anim_complete = 1;
	this.setUp();

}

GameOpeningPage.prototype.animatePeacock = function() {
	var that = this;
	that.arrAnim[that.animCounter] = document.getElementById("main_P");
	that.mApplication.jsAnimManager.registerPosition("main_P");
	that.arrAnim[that.animCounter].setPosition(1000, 600);
	that.arrAnimObject[that.animCounter] = that.mApplication.jsAnimManager.createAnimObject("main_P");
	that.arrAnimObject[that.animCounter].add({
		property : Prop.position,
		to : new Pos(300, 600),
		duration : 600,
		onComplete : function() {
			console.log(" FINAL ");

		}
	});
};

GameOpeningPage.prototype.setUp = function() {
	var that = this;
	this.mApplication.showScreen(this.mDivName);
	if (document.getElementById(this.mDivName).innerHTML == "") {
		var sContent = "";
		sContent += '<div id= "bird_1" ></div>';
		sContent += '<div id= "bird_2"></div>';
		sContent += '<div id= "bird_3"></div>';
		sContent += '<div id= "bird_4"></div>';
		sContent += '<div id= "main_P"></div>';
		sContent += '<div id= "how_to_play_back_btn_1" class="howPlayBtn">How to Play</div>';
		sContent += '<div id= "how_to_play_play_now_1" class="howPlayBtn">Play now</div>';

		document.getElementById(this.mDivName).innerHTML = sContent;
		document.getElementById('bird_1').appendChild(this.mApplication.imgArray['level_Anim_image1']);
		document.getElementById('bird_2').appendChild(this.mApplication.imgArray['level_Anim_image2']);
		document.getElementById('bird_3').appendChild(this.mApplication.imgArray['level_Anim_image3']);
		document.getElementById('bird_4').appendChild(this.mApplication.imgArray['level_Anim_image4']);
		
		document.getElementById('main_P').appendChild(this.mApplication.imgArray['images_congratsEnd']);

	}

	this.timerObject = setInterval(function() {
		if (that.animCounter != 5) {
			that.arrAnim[that.animCounter] = document.getElementById("bird_" + that.animCounter);
			that.mApplication.jsAnimManager.registerPosition("bird_" + that.animCounter);
			that.arrAnim[that.animCounter].setPosition(-200, 700);
			that.arrAnimObject[that.animCounter] = that.mApplication.jsAnimManager.createAnimObject("bird_" + that.animCounter);

			that.arrAnimObject[that.animCounter].add({
				property : Prop.positionSemicircle(true),
				to : new Pos(900, 700),
				duration : 2000,
				onComplete : function() {
					that.bird_anim_complete++;
					console.log(" that.bird_anim_complete :: " + that.bird_anim_complete);
					if (that.bird_anim_complete == 5) {
						that.animatePeacock();
					}

				}
			});
			that.nStartTime = that.nStartTime + that.nPadding;
			that.animCounter++;
		} else {
			clearInterval(that.timerObject);
		}
		//console.log(" TIER");
	}, 500);

	/*
	var bird1 = document.getElementById("bird_1");
	this.mApplication.jsAnimManager.registerPosition("bird_1");
	bird1.setPosition(-250, 25);
	var anim = this.mApplication.jsAnimManager.createAnimObject("bird_1");

	var bird2 = document.getElementById("bird_2");
	this.mApplication.jsAnimManager.registerPosition("bird_2");
	bird2.setPosition(-250, 500);
	var anim2 = this.mApplication.jsAnimManager.createAnimObject("bird_2");
	anim.add({
	property : Prop.positionSemicircle(true),
	to : new Pos(1000, 500),
	duration : 1500,
	onComplete : function() {
	console.log(that);
	}
	});

	anim2.add({
	property : Prop.positionSemicircle(true),
	to : new Pos(1000, 500),
	duration : 2000,
	onComplete : function() {
	console.log(that);
	}
	});
	*/
	//var sT = getAssetPath("img","img/images/image3.png")
	document.getElementById('how_to_play_back_btn_1').onclick = function() {
		that.mApplication.setGameState(30);
		that.mApplication.nextTransition();
	};

	document.getElementById('how_to_play_play_now_1').onclick = function() {
		that.mApplication.setGameState(52);
		that.mApplication.nextTransition();
	};

}