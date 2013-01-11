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
	this.nPadding = 800;
	this.arrAnim = new Array();
	this.arrAnimObject = new Array();
	this.animCounter = 1;
	this.bird_anim_complete = 1;
	this.setUp();

}

GameOpeningPage.prototype.animatePeacock = function() {
	var that = this;
	that.arrAnim[that.animCounter] = document.getElementById("main_P");
	document.getElementById("main_P").style.display = "block";
	that.mApplication.jsAnimManager.registerPosition("main_P");
	that.arrAnim[that.animCounter].setPosition(1000, 350);
	that.arrAnimObject[that.animCounter] = that.mApplication.jsAnimManager.createAnimObject("main_P");
	that.arrAnimObject[that.animCounter].add({
		property : Prop.position,
		to : new Pos(300, 350),
		duration : 2000,
		onComplete : function() {
			console.log(" FINAL ");
			$('#anim_content_text').fadeTo('slow', 1);
			$('#how_to_play_back_btn_1').fadeTo('slow', 1);
			$('#how_to_play_play_now_1').fadeTo('slow', 1);

		}
	});
};

GameOpeningPage.prototype.setUp = function() {
	var that = this;
	this.mApplication.showScreen(this.mDivName);
	document.getElementById(this.mDivName).innerHTML == ""

	var sContent = "";
	sContent += '<div id= "birds_animation" ></div>';
	//sContent += '<div id= "bird_1" class="bird_anim" ></div>';
	//sContent += '<div id= "bird_2" class="bird_anim"></div>';
	//sContent += '<div id= "bird_3" class="bird_anim"></div>';
	//sContent += '<div id= "bird_4" class="bird_anim"></div>';
	sContent += '<div id= "main_P" class="bird_peacock_anim"> '
	sContent += '<div id= "anim_content_text" class="anim_content"><span style="color: #A0B3D3;">INDIA:</span><span  style="  color: orange; font-weight: bold;" >&nbsp;A FLIGHT OF IDEAS</span></div>';
	sContent += '<div id= "how_to_play_back_btn_1" class="anim_how_to_play">How to Play</div>';
	sContent += '<div id= "how_to_play_play_now_1" class="anim_play_now">Play the game</div>';
	sContent += '</div>';

	document.getElementById(this.mDivName).innerHTML = sContent;
	/*	document.getElementById('bird_1').appendChild(this.mApplication.imgArray['level_Anim_image1']);
	 document.getElementById('bird_2').appendChild(this.mApplication.imgArray['level_Anim_image2']);
	 document.getElementById('bird_3').appendChild(this.mApplication.imgArray['level_Anim_image3']);
	 document.getElementById('bird_4').appendChild(this.mApplication.imgArray['level_Anim_image4']);
	 */
	document.getElementById('main_P').appendChild(this.mApplication.imgArray['images_congratsEnd']);

	this.timerObject = setInterval(function() {
		if (that.animCounter < 24) {
			while (document.getElementById('birds_animation').firstChild) {
				document.getElementById('birds_animation').removeChild(document.getElementById('birds_animation').firstChild);
			}
			document.getElementById('birds_animation').appendChild(that.mApplication.imgArray['anim_image' + that.animCounter]);
			that.animCounter++;
		} else {
			while (document.getElementById('birds_animation').firstChild) {
				document.getElementById('birds_animation').removeChild(document.getElementById('birds_animation').firstChild);
			}
			clearInterval(that.timerObject);
			that.animatePeacock();
		}
		//console.log(" TIER : "+that.animCounter);
	}, 100);

	//var sT = getAssetPath("img","img/images/image3.png")
	document.getElementById('how_to_play_back_btn_1').onclick = function() {
		that.mApplication.setGameState(30);
		that.mApplication.nextTransition();
	};

	document.getElementById('how_to_play_play_now_1').onclick = function() {
		that.mApplication.setGameState(52);
		that.mApplication.nextTransition();
	};

};
