/**
 * @author sandeep.b
 */
/**
author - deviator
*/


function GameOpeningPage (app)
{
	this.mApplication = app;
	this.mDivName ="new_intro_Anim";
	this.setUp();
	
}


GameOpeningPage.prototype.setUp = function()
{
	var that = this;
	this.mApplication.showScreen(this.mDivName);
	if(document.getElementById(this.mDivName).innerHTML == "")
	{
		var sContent ="";
	        sContent += '<p>';
            	sContent += '<div id= "how_to_play_back_btn" class="backButton">Back</div>';
                sContent += '<div id= "how_to_play_play_now" class="howPlayBtn">Play now</div>';
				
            sContent += '</p>';
            document.getElementById(this.mDivName).innerHTML = sContent; 		
	}
	
	//var sT = getAssetPath("img","img/images/image3.png")
	document.getElementById('how_to_play_back_btn').onclick= function()
	{
		that.mApplication.setGameState(20);
		that.mApplication.nextTransition();
	};
	
	document.getElementById('how_to_play_play_now').onclick= function()
	{
		that.mApplication.setGameState(50);
		that.mApplication.nextTransition();
	};
	
}