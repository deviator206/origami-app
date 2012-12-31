/**
author - deviator
*/


function LevelEndScreen (app)
{
	this.mApplication = app;
	this.mDivName ="levelEndScreen";
	
	this.setUp();
	
}

LevelEndScreen.prototype.sidePanel = function ()
{
	var sHTMLContent ="";
	var sA;
	
	this.mApplication.showSelectedScreen('sidePanel');
	var arrPercent = new Array(0,0,25,50,75,100);
			sHTMLContent += '<div  id ="sidePanelImages_Stc" class="perc">You have completed<br>';
			sHTMLContent += '<span> 100%</span><br><br>';
			sHTMLContent += '</div>';
			document.getElementById('sidePanel').innerHTML =sHTMLContent;
			for(var i=1;i<5;i++)
			{
				//console.log
				if(i < this.mApplication.nLevelCounter)
				{
					//sA = getAssetPath("img","sidepanel_images/level_"+i+"_image5.png");
					sA = "level_"+i+"_image5";
			
				}
				else if(i ==  this.mApplication.nLevelCounter)
				{
					//sA = getAssetPath("img","sidepanel_images/level_"+i+"_image5.png");
					sA = "level_"+i+"_image5";
					
				}
				else
				{
					//sA = getAssetPath("img","sidepanel_images/level_"+i+"_image1.png");
					sA = "level_"+i+"_image1";
				}
						//console.log(sA+ ":: "+this.mApplication.imgArray[sA])
				document.getElementById('sidePanelImages_Stc').appendChild(this.mApplication.imgArray[sA]);
				var brTag1= document.createElement("br");
				var brTag2 = document.createElement("br");
				document.getElementById('sidePanelImages_Stc').appendChild(brTag1);
				document.getElementById('sidePanelImages_Stc').appendChild(brTag2);
				
				//sHTMLContent += '<img src="'+sA+'" /><br>';	
			}
			//sHTMLContent += '</div>';
			
	//document.getElementById('sidePanel').innerHTML =sHTMLContent;
	document.getElementById('sidePanel').className = 'rgtMenu'
}



LevelEndScreen.prototype.setUp = function()
{
	var that = this;
	this.mApplication.showScreen(this.mDivName)
	this.mApplication.showSelectedScreen('sidePanel');
	var sContentHTML = "";
	var sButtonName = "Next Level"
	if(this.mApplication.nLevelCounter == 4)
	sButtonName ="Next"
	
	sContentHTML += '<div >';	
				sContentHTML += '<div id="end_level_img_holder" style="width:730px; height:349px;margin-top: 50px;margin-left: 20px;"></div><br/>';	
					sContentHTML += '<div  id="start_next_level" class="nextButton">'+sButtonName+'</div>';
						sContentHTML += '<div class="nxtLink endMain_level'+this.mApplication.nLevelCounter+ '">	';
						sContentHTML += '<br/><br/><br/>';
						sContentHTML += '<a href="javascript:showOverlay();" id ="linkToHB" class="endMain_level'+this.mApplication.nLevelCounter+ '" ><span class="endMain_level'+this.mApplication.nLevelCounter+ '"  style=" margin-left: -19px !Important; "><u>Master the ' +config['level_'+this.mApplication.nLevelCounter+'_End'].topic+ ' origami here! </u></span></a>';
						sContentHTML += '</div></div>';
			
			document.getElementById(this.mDivName).innerHTML =sContentHTML;
			
			var sA = "images-level-"+this.mApplication.nLevelCounter+"-end-screen";
			document.getElementById('end_level_img_holder').appendChild(this.mApplication.imgArray[sA])
	/*
	sContentHTML = '<div id="peacockContainer1" class="levelEndImg" style="ba"></div>';
	sContentHTML += '<div stye="position:absolute;"> <p class="congEndTxt2 endCongrats_level' +this.mApplication.nLevelCounter+ '">Congratulations!</p>';		
            sContentHTML += '<p class="successTxt endNormal">';
            sContentHTML += '	You have successfully completed';
            sContentHTML += '</p>';
            sContentHTML += '<p class="successTxt">';
            	sContentHTML += '<b>Level ' +this.mApplication.nLevelCounter+ ':</b><span class="endMain_level' +this.mApplication.nLevelCounter+ '">' +config['level_'+this.mApplication.nLevelCounter+'_End'].topic+ '</span>';
            sContentHTML += '</p>';
            sContentHTML += '<p class="levlComplTxt endMain_level'+this.mApplication.nLevelCounter+ '">';
            	sContentHTML += ''+ config['level_'+this.mApplication.nLevelCounter+'_End'].content
            sContentHTML += '</p>';
            sContentHTML += '<div  id="start_next_level" class="nextButton">Next Level</div>';
            sContentHTML += '<div class="nxtLink endMain_level'+this.mApplication.nLevelCounter+ '">	';
            	sContentHTML += '<br/ ><br/><br/ ><br/>';
            	sContentHTML += '<a href="javascript:showOverlay();" id ="linkToHB" ><span class="endMain_level'+this.mApplication.nLevelCounter+ '">Master the Humming Bird origami here! </span></a>';
            sContentHTML += '</div>';
            sContentHTML += '</div>';
            	
         document.getElementById(this.mDivName).innerHTML =sContentHTML;
         var sT = getAssetPath("img","levelend_images/Level_"+this.mApplication.nLevelCounter+".png");
		 
         document.getElementById('peacockContainer1').style.backgroundImage = 'url('+sT+ ')'
		 */
    
	//if(this.mApplication.nLevelCounter == 4)
	//document.getElementById('start_next_level').style.display ='none';
	
    document.getElementById('start_next_level').onclick= function()
	{
		
		if(sButtonName == "Next Level")
		{
			that.mApplication.setGameState(120);		
			that.mApplication.nextTransition();
		}
		else
		{
			that.mApplication.setGameState(130);		
			that.mApplication.nextTransition();
		}
	};
	
	this.sidePanel();
	
	
	
	document.getElementById('linkToHB').onclick= function()
	{
		
		//document.getElementById('overlayScreen').style.display = "block";
		//var sT = getAssetPath("img","images/close-image.png");	
		//document.getElementById('origamiholder').style.backgroundImage = 'url('+sT+ ')'
		//that.mApplication.setGameState(120);		
		//that.mApplication.nextTransition();
	};
	
	//document.getElementById('origamiImageCloseButton').onclick = function()
	//{
		//document.getElementById('overlayScreen').style.display = "none"
	//}
}




function closeOverlay()
	{
		document.getElementById('overlayScreen').style.display ="none";
		document.getElementById('opaqueScreen').style.display ="none";
		document.getElementById('download_link').style.display ="none";
	}
	function showOverlay()
	{
		//console.log("SHOW "+document.getElementById('opaqueScreen').innerHTML)
		//if(document.getElementById('opaqueScreen').innerHTML == '-1')
		{
			var sT = getAssetPath("img","images/close-image.jpg");
			var sContent = '<img src="'+sT+'" height="100%" />'
			//console.log(" sContent :: "+ sContent);
			document.getElementById('opaqueScreen').innerHTML = sContent;
		}
		
		
		document.getElementById('opaqueScreen_bg').style.display ="block";
		document.getElementById('overlayScreen').style.display ="block";
		document.getElementById('opaqueScreen').style.display ="block";
		document.getElementById('download_link').style.display ="block";
		document.getElementById('download_link').innerHTML ="<u>Download the Image</u>"
		
		document.getElementById('download_link').onclick = function()
		{
			window.open(getAssetPath("img","images/close-image.png"),"_blank ")
		}
		
		//overlayScreen
		//clickOverlayClose
		document.getElementById('opaqueScreen_bg').onclick = function()
		{
			closeOverlay();
		}
		
		document.getElementById('opaqueScreen').onclick = function()
		{
			closeOverlay();
		}
		
	}