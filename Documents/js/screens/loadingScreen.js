/**
 author - deviator
 */

function LoadingScreen(app) {
	this.mApplication = app;
	this.mDivName = "loadingScreen"
	this.mGameSplashLoader = null;
	this.mGameAssetLoader = null;
	this.setUp()

}

LoadingScreen.prototype.setUp = function() {

	this.mApplication.showScreen(this.mDivName)
	document.getElementById('loadingScreen').innerHTML = '<div id="loadingScreen_front" style="width: 117px;height: 252px;"></div>'

	/*var sT = getAssetPath("img", "splash/whiteProgBar.png")
	 for (var i = 0; i < 25; i++) {
	 var divToAppend = document.createElement('div');

	 divToAppend.style.background = "url('" + sT + "')"
	 divToAppend.style.width = "4px";
	 divToAppend.style.height = "16px";
	 divToAppend.style.position = "absolute";
	 divToAppend.style.marginTop = "100px";
	 divToAppend.style.marginLeft = 100 + (i * 7) + "px";
	 divToAppend.style.display = "block";
	 divToAppend.setAttribute("id", "loadBar" + i);
	 document.getElementById(this.mDivName).appendChild(divToAppend);
	 }*/

	this.mGameSplashLoader = new PxLoader();
	this.mGameAssetLoader = new PxLoader();

	console.log(":PX:" + this.mGameAssetLoader);
	this.mGameAssetLoader.addImage(getAssetPath("img", "images/blue.png"));
	this.mApplication.imgArray = {};
	this.mApplication.imgArray['images_congratsEnd'] = this.mGameAssetLoader.addImage(getAssetPath("img", "images/congratsEnd.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "images/f1.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "images/f2.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "images/f3.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "images/f4.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "images/f5.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "images/f6.png"));

	this.mGameAssetLoader.addImage(getAssetPath("img", "images/green.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "images/Q1_image.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "images/red.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "images/yellow.png"));

	this.mApplication.imgArray['images-intro-screen'] = this.mGameAssetLoader.addImage(getAssetPath("img", "images/introduction-screen-element.png"));

	this.mApplication.imgArray['images-level-1-end-screen'] = this.mGameAssetLoader.addImage(getAssetPath("img", "images/Humming-Bird_level-complete.png"));
	this.mApplication.imgArray['images-level-2-end-screen'] = this.mGameAssetLoader.addImage(getAssetPath("img", "images/Eagle_level-complete.png"));
	this.mApplication.imgArray['images-level-4-end-screen'] = this.mGameAssetLoader.addImage(getAssetPath("img", "images/Weaver-Bird_level-complete.png"));
	this.mApplication.imgArray['images-level-3-end-screen'] = this.mGameAssetLoader.addImage(getAssetPath("img", "images/Albatross_level-complete.png"));
	this.mApplication.imgArray['images-winner-end-screen'] = this.mGameAssetLoader.addImage(getAssetPath("img", "images/congratulation-screen.png"));

	this.mApplication.imgArray['images-footer-level-1'] = this.mGameAssetLoader.addImage(getAssetPath("img", "footer_images/level1_footer.png"));
	this.mApplication.imgArray['images-footer-level-1-colored'] = this.mGameAssetLoader.addImage(getAssetPath("img", "footer_images/level1_footer_colored.png"));

	this.mApplication.imgArray['images-footer-level-2'] = this.mGameAssetLoader.addImage(getAssetPath("img", "footer_images/level2_footer.png"));
	this.mApplication.imgArray['images-footer-level-2-colored'] = this.mGameAssetLoader.addImage(getAssetPath("img", "footer_images/level2_footer_colored.png"));

	this.mApplication.imgArray['images-footer-level-3'] = this.mGameAssetLoader.addImage(getAssetPath("img", "footer_images/level3_footer.png"));
	this.mApplication.imgArray['images-footer-level-3-colored'] = this.mGameAssetLoader.addImage(getAssetPath("img", "footer_images/level3_footer_colored.png"));

	this.mApplication.imgArray['images-footer-level-4'] = this.mGameAssetLoader.addImage(getAssetPath("img", "footer_images/level4_footer.png"));
	this.mApplication.imgArray['images-footer-level-4-colored'] = this.mGameAssetLoader.addImage(getAssetPath("img", "footer_images/level4_footer_colored.png"));

	/*this.mApplication.imgArray['level_Anim_image1'] = this.mGameAssetLoader.addImage(getAssetPath("img", "levelend_images/Level_1.png"));
	 this.mApplication.imgArray['level_Anim_image2'] = this.mGameAssetLoader.addImage(getAssetPath("img", "levelend_images/Level_2.png"));
	 this.mApplication.imgArray['level_Anim_image3'] = this.mGameAssetLoader.addImage(getAssetPath("img", "levelend_images/Level_3.png"));
	 this.mApplication.imgArray['level_Anim_image4'] = this.mGameAssetLoader.addImage(getAssetPath("img", "levelend_images/Level_4.png"));
	 */

	this.mApplication.imgArray['anim_image1'] = this.mGameAssetLoader.addImage(getAssetPath("img", "levelend_images/anim_0005_Layer-0.jpg"));
	this.mApplication.imgArray['anim_image2'] = this.mGameAssetLoader.addImage(getAssetPath("img", "levelend_images/anim_0004_Layer-1.jpg"));
	this.mApplication.imgArray['anim_image3'] = this.mGameAssetLoader.addImage(getAssetPath("img", "levelend_images/anim_0003_Layer-2.jpg"));
	this.mApplication.imgArray['anim_image4'] = this.mGameAssetLoader.addImage(getAssetPath("img", "levelend_images/anim_0002_Layer-3.jpg"));
	this.mApplication.imgArray['anim_image5'] = this.mGameAssetLoader.addImage(getAssetPath("img", "levelend_images/anim_0001_Layer-4.jpg"));
	this.mApplication.imgArray['anim_image6'] = this.mGameAssetLoader.addImage(getAssetPath("img", "levelend_images/anim_0000_Layer-5.jpg"));

	this.mGameAssetLoader.addImage(getAssetPath("img", "question_images/Level_1_q_1.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "question_images/Level_1_q_2.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "question_images/Level_1_q_3.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "question_images/Level_1_q_4.png"));

	this.mGameAssetLoader.addImage(getAssetPath("img", "question_images/Level_2_q_1.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "question_images/Level_2_q_2.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "question_images/Level_2_q_3.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "question_images/Level_2_q_4.png"));

	this.mGameAssetLoader.addImage(getAssetPath("img", "question_images/Level_3_q_1.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "question_images/Level_3_q_2.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "question_images/Level_3_q_3.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "question_images/Level_3_q_4.png"));

	this.mGameAssetLoader.addImage(getAssetPath("img", "question_images/Level_4_q_1.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "question_images/Level_4_q_2.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "question_images/Level_4_q_3.png"));
	this.mGameAssetLoader.addImage(getAssetPath("img", "question_images/Level_4_q_4.png"));

	this.mApplication.imgArray['level_1_image1'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_1_image1.png"));
	this.mApplication.imgArray['level_1_image2'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_1_image2.png"));
	this.mApplication.imgArray['level_1_image3'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_1_image3.png"));
	this.mApplication.imgArray['level_1_image4'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_1_image4.png"));
	this.mApplication.imgArray['level_1_image5'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_1_image5.png"));

	this.mApplication.imgArray['level_2_image1'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_2_image1.png"));
	this.mApplication.imgArray['level_2_image2'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_2_image2.png"));
	this.mApplication.imgArray['level_2_image3'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_2_image3.png"));
	this.mApplication.imgArray['level_2_image4'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_2_image4.png"));
	this.mApplication.imgArray['level_2_image5'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_2_image5.png"));

	this.mApplication.imgArray['level_3_image1'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_3_image1.png"));
	this.mApplication.imgArray['level_3_image2'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_3_image2.png"));
	this.mApplication.imgArray['level_3_image3'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_3_image3.png"));
	this.mApplication.imgArray['level_3_image4'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_3_image4.png"));
	this.mApplication.imgArray['level_3_image5'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_3_image5.png"));

	this.mApplication.imgArray['level_4_image1'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_4_image1.png"));
	this.mApplication.imgArray['level_4_image2'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_4_image2.png"));
	this.mApplication.imgArray['level_4_image3'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_4_image3.png"));
	this.mApplication.imgArray['level_4_image4'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_4_image4.png"));
	this.mApplication.imgArray['level_4_image5'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_4_image5.png"));

	this.mApplication.imgArray['level_4_image1'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_4_image1.png"));
	this.mApplication.imgArray['level_4_image2'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_4_image2.png"));
	this.mApplication.imgArray['level_4_image3'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_4_image3.png"));
	this.mApplication.imgArray['level_4_image4'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_4_image4.png"));
	this.mApplication.imgArray['level_4_image5'] = this.mGameAssetLoader.addImage(getAssetPath("img", "sidepanel_images/level_4_image5.png"));

	this.mApplication.imgArray['loader_1'] = this.mGameSplashLoader.addImage(getAssetPath("img", "splash/Loader1.png"));
	this.mApplication.imgArray['loader_2'] = this.mGameSplashLoader.addImage(getAssetPath("img", "splash/Loader2.png"));
	this.mApplication.imgArray['loader_3'] = this.mGameSplashLoader.addImage(getAssetPath("img", "splash/Loader3.png"));
	this.mApplication.imgArray['loader_4'] = this.mGameSplashLoader.addImage(getAssetPath("img", "splash/Loader4.png"));
	this.mApplication.imgArray['loader_5'] = this.mGameSplashLoader.addImage(getAssetPath("img", "splash/Loader5.png"));
	this.mApplication.imgArray['loader_6'] = this.mGameSplashLoader.addImage(getAssetPath("img", "splash/Loader6.png"));
	this.mApplication.imgArray['loader_7'] = this.mGameSplashLoader.addImage(getAssetPath("img", "splash/Loader7.png"));
	this.mApplication.imgArray['loader_8'] = this.mGameSplashLoader.addImage(getAssetPath("img", "splash/Loader8.png"));
	this.mApplication.imgArray['loader_9'] = this.mGameSplashLoader.addImage(getAssetPath("img", "splash/Loader9.png"));

	var thatObject = this;
	this.mGameAssetLoader.addProgressListener(function(e) {
		thatObject.gameAssetLoadingProgress(e);
	});
	this.mGameAssetLoader.addCompletionListener(function() {
		thatObject.gameAssetLoaded();
	});

	this.mGameSplashLoader.addProgressListener(function(e) {
		thatObject.splashAssetLoadingProgress(e);
	});
	this.mGameSplashLoader.addCompletionListener(function() {
		thatObject.splashAssetLoaded();
	});

	this.mGameSplashLoader.start();
}

LoadingScreen.prototype.splashAssetLoaded = function() {
	document.getElementById('appContainer').style.display = "block"
	document.getElementById('loading_script_tags').style.display = "none"
	document.getElementById('loadingScreen_front').appendChild(this.mApplication.imgArray['loader_1']);
	//this.mGameAssetLoader.start();

}

LoadingScreen.prototype.splashAssetLoadingProgress = function(e) {

}

LoadingScreen.prototype.gameAssetLoaded = function() {
	this.mApplication.nextTransition();

}

LoadingScreen.prototype.gameAssetLoadingProgress = function(e) {
	/*var progressHighlighted = 0;
	 var tempNum = parseInt(e.completedCount / e.totalCount * 100) / 4;
	 var topLimit = Math.floor(tempNum);
	 var sT = getAssetPath("img", "splash/yellowProgBar.png")
	 for (var x = progressHighlighted; x < topLimit; x++) {
	 document.getElementById('loadBar' + x).style.background = "url('" + sT + "')";
	 }
	 progressHighlighted = topLimit;
	 setDivText(100, 70, 'Loading ' + (parseInt(e.completedCount / e.totalCount * 100) >> 0) + ' %', "loadingScreen", "black", "24px", "MyriadPro-Bold");
	 document.getElementById('loadingScreentxt').className = "loaderText_css"
	 */
	var percent = (parseInt(e.completedCount / e.totalCount * 100) >> 0);
	if (percent % 10 == 0) {
		if (percent / 10 != 10) {
			var nNum = percent / 10;
			while (document.getElementById('loadingScreen_front').hasChildNodes()) {
				document.getElementById('loadingScreen_front').removeChild(document.getElementById('loadingScreen_front').lastChild);
			}
			document.getElementById('loadingScreen_front').appendChild(this.mApplication.imgArray['loader_' + nNum]);
		}

	}

}

