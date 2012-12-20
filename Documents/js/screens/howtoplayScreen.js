/**
author - deviator
*/


function HowToPlayScreen (app)
{
	this.mApplication = app;
	this.mDivName ="howtoplayScreen";
	this.setUp();
	
}


HowToPlayScreen.prototype.setUp = function()
{
	var that = this;
	this.mApplication.showScreen(this.mDivName);
	if(document.getElementById(this.mDivName).innerHTML == "")
	{
		var sContent ="";
		/*
		sContent = '<div style="width: 850px; height: 585px;">';
		sContent += '<div id="gamaa_how_to_play" style="width: 850px; height: 585px;"></div>';
		sContent += '<div id= "how_to_play_back_btn" class="backButton">Back</div>';
                sContent += '<div id= "how_to_play_play_now" class="playButton howPlayBtn">Play now</div>';
				sContent += '</div>';
				 document.getElementById(this.mDivName).innerHTML = sContent; 
			
		 
			var sA = "images-intro-screen";
			console.log(""+this.mApplication.imgArray[sA])
			document.getElementById('gamaa_how_to_play').appendChild(this.mApplication.imgArray[sA])		*/
			
		sContent += '<h2 style="margin-left: 23px; margin-top: 29px;font-size: 32px !Important;font-weight: bold !Important;margin-bottom: 12px;">How to play</h2>';    
			sContent += '<ol class="hwpList">';
                sContent += '<li>The game is based on origami*. There are four origami birds for you to create. Each bird represents a pillar of what we believe are the imperatives for India to continue on the path of being a high performance nation.</li>';
                sContent += '<li>At each level, you will need to answer  four simple questions to create the bird. </li>';
                sContent += '<li>With every correct answer, the paper automatically folds and you are one step closer to creating the origami bird for that pillar.</li>';
                sContent += '<li>Once you complete the four questions correctly, the respective origami bird is formed and you then proceed to creating the bird in next level.</li>';
                sContent += '<li>Complete all four levels to create four beautiful birds which will then form the peacock. </li>';
            sContent += '</ol>';
            
            sContent += '<p class="howToPlayPara" style=" margin-left: 24px!Important; margin-top: 19px!Important; ">';
			
            	sContent += 'Besides playing the game you can also learn the traditional art of origami and make special shapes <br> for your family and friends.';
                
            sContent += '</p>';  
            sContent += '<p class="howToPlayPara " style=" margin-left: 24px!Important; ">';
				sContent += 'Let\'s get started!';
			sContent += '</p> '; 
            sContent += '<p class="howToPlayPara" style="  margin-left: 24px!Important; font-size: 14px;  ">';
				sContent += '*Japanese art of folding a flat sheet of paper and transforming it into a finished shape.';
			sContent += '</p> ';
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
