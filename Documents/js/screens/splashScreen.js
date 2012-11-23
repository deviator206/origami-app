/**
author - deviator
*/


function SplashScreen (app)
{
	this.mApplication = app;
	this.mDivName ="splashScreen";
	this.setUp();
	
}


SplashScreen.prototype.setUp = function()
{
	var that = this;
	this.mApplication.showScreen(this.mDivName)
	if(document.getElementById(this.mDivName).innerHTML == "")
	{
			
			var sContent =""
			sContent = '<div class="introScreen" >';
				sContent +=	'<div id ="intro_img_holder">';
				sContent +=	'</div>';
				sContent +=	'<div class="introScreen" style="margin-left: 15px;">';
				sContent +=	'<div  id= "intro_play_now" class="playButton">Play now</div>';
				sContent +=	'</div>';
			sContent +=	'</div>';
			document.getElementById(this.mDivName).innerHTML = sContent;
			
			var sA = "images-intro-screen";
			document.getElementById('intro_img_holder').appendChild(this.mApplication.imgArray[sA])
		
			/*sContent = '<div class="introScreen" style="margin-top: 35px;">';
			sContent +=	'<div class ="introFontSizes">';
				sContent +=	'<h2 style="margin-left:30px; "  class="introMainHeadLineText">Introduction</h2>';
						sContent +=	'<p ><span class="intropara introParaSplStyling">';
							sContent +=	'India is on an important journey to become a High ';
							sContent +=	'Performance Nation and Accenture is proud to be a part ';
							sContent +=	'of it. Our vision for this journey is built on four strong';
							sContent +=	' pillars:';
						sContent +=	'</span></p>';
					sContent +=	'</div>';
					var sT = getAssetPath("img","images/red.png");			
					sContent +=	'<div class="introImgs"><img src="'+sT+'" /><div class="figTitle">Digital Citizen</div></div>';
					sT = getAssetPath("img","images/blue.png");
					sContent +=	'<div class="introImgs"><img src="'+sT+'" /><div class="figTitle" style="margin-top: 32px !important;">Empowered People</div></div>';
					sT = getAssetPath("img","images/yellow.png");
					sContent +=	'<div class="introImgs"><img src="'+sT+'" /><div class="figTitle">Innovation Economy</div></div>';
					sT = getAssetPath("img","images/green.png");
					sContent +=	'<div class="introImgs"><img src="'+sT+'" /><div class="figTitle" style=" margin-left: -20px;">Collaborative Ecosystem</div></div>';
					
				sContent +=	'</div>';
				sContent +=	'<div class="introScreen" style="margin-left: 15px;">';
					sContent +=	'<ul > <span class="bulletIndent ">';
						sContent +=	'<li ><span class= "li_styling">Digital Citizen</span></li>';
						sContent +=	'<li ><span class= "li_styling">Empowered People</span></li>';
						sContent +=	'<li ><span class= "li_styling">Innovation Economy</span></li>';
						sContent +=	'<li ><span class= "li_styling">Collaborative Ecosystem</span></li>';
					sContent +=	'</span></ul>';
					sContent +=	'<p ><span class="intropara introParaSplStyling para_styling_stc">';
						sContent +=	'Each pillar conveys a distinct, strategic imperative and the ';
						sContent +=	'four pillars contribute to the evolution of a High ';
						sContent +=	'Performance Nation - represented by four birds riding on the ';
						sContent +=	'back of the Peacock, the nationalbird of India.</span>';
					sContent +=	'</p>';
	                sContent +=	'<p ><span class="intropara introParaSplStyling para_styling_stc">';
						sContent +=	'India: A Flight of Ideas celebrates this journey Join the ';
						sContent +=	'adventure by answering questions that will help create the ';
						sContent +=	'four origami birds, which descends on the Peacock- creating ';
						sContent +=	'a unified vision of our High Performance Nation </span>';
					sContent +=	'</p>';
	                sContent +=	'<div  id= "intro_play_now" class="playButton">Play now</div>';
				sContent +=	'</div>';
				document.getElementById(this.mDivName).innerHTML = sContent;*/
	
	}
	
	
	
				
	document.getElementById('intro_play_now').onclick= function()
	{
		that.mApplication.nextTransition();
	};
	
}
