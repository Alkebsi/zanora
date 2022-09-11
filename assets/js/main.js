/*

********************************************************

Note: Please, before changing anything in this file,
it's recommended to check the documentation.
Moreover, Only Change What You Know or Save The
Original File Somewhere In Your PC/Laptop.

》~ Project: Zanora | HTML Personal Portfolio 
》~ Version: v1.0.0
》~ Author: MKebsi - https://alkebsi.github.io/

********************************************************

*/
/*############### Variables ################*/

// Dashes
let dash = 
document.getElementsByClassName("dash");
let dashCon = 
document.getElementById("dashes");
let rPanel =
document.getElementById("right-panel");
let dashesBool = false;

//setting the height of the timelines
let Timeline =
document.getElementById("ex-timeline");
let TimelineMgr =
document.getElementById("cv-main-work-ex");

//setting the points for the timeline work experience & skills
let pointMgr =
document.getElementsByClassName("points-mgr");
let tElement =
document.getElementsByClassName("timeline-element"); //Setting the skill bars


/*############### Functions ################*/

//The Start() Function is called once the page is loaded
function Start()
{
	Timeline.style.height = 
	TimelineMgr.clientHeight + "px";
	//managing the points of the work experience section
	for(let i = 0; i < tElement.length; i++)
		{
			pointMgr[i].style.height = tElement[i].clientHeight + 20 + "px";
		}
}

//calling the AOS library 
AOS.init();
AOS.refresh();

function RPMgr()
{
	if(!dashesBool)
		{
			dashesBool = true;
			dash[0].style.animation = "dashesLoading1 1s ease infinite";
			dash[1].style.animation = "dashesLoading2 1s ease infinite";
			dash[2].style.animation = "dashesLoading1 1s ease infinite";
			dash[0].style.top = "50px";
			dash[2].style.top = "-50px";
			for(let i = 0; i < 3; i++)
				{
					dash[i].style.transform = "rotate(360deg)";
				}
			dashCon.style.transform = "rotate(450deg)";
			rPanel.style.transform = "translate(0, 0)";
			
			//for mobile view
			if (window.innerWidth < 918)
				{
					dashCon.style.transform = "scale(0.6) rotate(450deg)";
				}
		}
	else
		{
			dashesBool = false;
			dash[0].style.animation = "none";
			dash[1].style.animation = "none";
			dash[2].style.animation = "none";
			dash[0].style.top = "0";
			dash[2].style.top = "0";
			for(let i = 0; i < 3; i++)
				{
					dash[i].style.transform = "rotate(0)";
				}
			dashCon.style.transform = "rotate(0)";
			rPanel.style.transform = "translate(110%, 0)";
			
			//for mobile view
			if (window.innerWidth < 918)
				{
					dashCon.style.transform = "scale(0.6) rotate(0)";
				}
		}
}

//setting the skill bars
let sklBar1 = Gauge(document.getElementById("skl-bar1"),{
	max: 100, 
	dialStartAngle: -90, 
	dialEndAngle: -90.001,
	value: 89
});
let sklBar2 = Gauge(document.getElementById("skl-bar2"),{
	max: 100, 
	dialStartAngle: -90, 
	dialEndAngle: -90.001,
	value: 98
});
let sklBar3 = Gauge(document.getElementById("skl-bar3"),{
	max: 100, 
	dialStartAngle: -90, 
	dialEndAngle: -90.001,
	value: 65
});
let sklBar4 = Gauge(document.getElementById("skl-bar4"),{
	max: 100, 
	dialStartAngle: -90, 
	dialEndAngle: -90.001,
	value: 50
});

//Mobile Skill Bars
let mSklBar1 = Gauge(document.getElementById("mobile-skl-bar1"),{
	max: 100, 
	dialStartAngle: -90, 
	dialEndAngle: -90.001,
	value: 89
});
let mSklBar2 = Gauge(document.getElementById("mobile-skl-bar2"),{
	max: 100, 
	dialStartAngle: -90, 
	dialEndAngle: -90.001,
	value: 98
});
let mSklBar3 = Gauge(document.getElementById("mobile-skl-bar3"),{
	max: 100, 
	dialStartAngle: -90, 
	dialEndAngle: -90.001,
	value: 65
});
let mSklBar4 = Gauge(document.getElementById("mobile-skl-bar4"),{
	max: 100, 
	dialStartAngle: -90, 
	dialEndAngle: -90.001,
	value: 50
});