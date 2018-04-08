

/* SCROLL BAR */ 

::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
::-webkit-scrollbar-track {
    

}
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(150,150,150,0.8);  
}




body {
	background:#eee;
	font-family: Helvetica, sans-serif;
	font-size: 14px;
}

.container {
	margin: auto;
	margin-top: 20px;
  margin-bottom: 40px;
	width: 300px;
	-moz-box-shadow: 3px 3px 45px 10px #555;
	-webkit-box-shadow: 3px 3px 45px 10px #555;
	-o-box-shadow: 3px 3px 45px 10px #555;
	box-shadow: 3px 3px 45px 10px #555;
}

.carousel {
	width: 300px;
	height: 325px;
	position: relative;
	background-image:url(http://audeficheux.com/projects/carousel/src/images/background0.png);
	background-size: cover;
	transition: background-image 0.5s ease;
}

/*Slides*/

.carousel .slides{
	position: absolute;
	top:0px;
	right: 0px;
	bottom:0;
	left:0;
	overflow: hidden;
}

.carousel .slides .items {
	position: relative;
	width: 10000px;
	font-size:0;
	padding-left: 37.5px;
	transition: all ease-out 0.3s;
}

.carousel .slides .item {
	margin: 25px 12.5px;
	width: 200px;
	height: 300px;
	display: inline-block;
	background-repeat: no-repeat;
}
.carousel .slides .item .image {
	height: 200px;
	width: 200px;
	-moz-box-shadow: 6px 9px 20px #111;
	-webkit-box-shadow: 6px 9px 20px #111;
	-o-box-shadow: 6px 9px 20px #111;
	box-shadow: 6px 9px 20px #111;
}


.carousel .slides .item p {
	font-size: 12px;
	color: white;
	width: 200px;
	position: absolute;
	top: 250px;
	text-align: center;
}

.carousel .slides .item .artist {
	font-weight: 300;
	font-size: 16px;
	height: 25px;
}

.carousel .slides .item .track {
	font-weight: 500;
	font-size: 14px;
	top : 275px;
}




/*Siblings*/

.carousel .siblings .sibling{
	position: absolute;
	width: 25px;
	height: 200px;
	top: 25px;
	background: transparent;
	text-align: center;
	line-height:40px;
	text-decoration: none;
}

.carousel .siblings .sibling.prev{
	left:0px;
}
.carousel .siblings .sibling.next{
	right:0px;
}

.carousel .siblings .play{
	position: absolute;
	width: 200px;
	height: 200px;
	top: 25px;
	left: 50px;
	background-image: url(http://audeficheux.com/projects/carousel/src/images/play.png);
	background-repeat: no-repeat;
	background-position: center;
	text-align: center;
	line-height:40px;
	text-decoration: none;
	transition: all 0.8s ease;
}

.carousel .siblings .play.invisible{
	background-image: none;
	transition: all 0.8s ease;
}

.carousel .siblings .play.invisible:hover{
	background-image: url(http://audeficheux.com/projects/carousel/src/images/pause.png);;
}


/*Seek Bar */

.carousel .seek-bar {
	position: absolute;
	top: 315px;
	width: 100%;
	height: 10px;
	background-color: rgba(0,0,0,0.2);
}

.carousel .seek-bar .progress-bar {
	background-color: rgba(30,30,30,0.6);
	width: 100%;
	height: 100%;
	-webkit-transform: scaleX(0);
	   -moz-transform: scaleX(0);
	    -ms-transform: scaleX(0);
	     -o-transform: scaleX(0);
	        transform: scaleX(0);
	-webkit-transform-origin: 0;
	   -moz-transform-origin: 0;
	    -ms-transform-origin: 0;
	     -o-transform-origin: 0;
	        transform-origin: 0;
	-webkit-transition: transform 0.2s;
	   -moz-transition: transform 0.2s;
	    -ms-transition: transform 0.2s;
	     -o-transition: transform 0.2s;
	        transition: transform 0.2s;
}


/* SONG LIST */


.container .choice {
	width: 300px;
	height: 200px;
	background-color: white;
}

.container .choice .tracks {
	height: 170px;
	overflow: scroll;

}


.container .choice .title{
	width: 290px;
	height: 30px;
	border-bottom: 1px solid #ccc;
	padding-left: 10px;
}

.container .choice .title p{
	height: 30px;
	line-height: 30px;
	vertical-align: middle;
	color: #555;
	font-size: 10px;
}


.container .choice .track{
	width: 250px;
	margin: auto;
	height: 50px;
	border-bottom: 1px solid #ccc;
	padding-left: 10px;
	font-weight: 300;
	cursor: pointer;
}

.container .choice .track div{
	display: inline-block;
}

.container .choice .track .number{
	line-height: 50px;
}

.container .choice .track .name{
	height: 30px;
	vertical-align: middle;
	padding-left: 25px;
}

.container .choice .track .name .song{
	margin-top: 4px;
	font-size: 12px;
}

.container .choice .track .speakers{
	height: 20px;
	width: 20px;
	background-image: url(http://audeficheux.com/projects/carousel/src/images/speaker.png);
	background-repeat: no-repeat;
	vertical-align: middle;
	float: right;
	margin-top: 15px;
}

.container .choice .track .speakers.invisible{
	display: none;
}


.credits {
  width:250px;
  text-align: center;
  margin: auto;
  margin-bottom: 10px;
  font-size: 12px;
  color: #555;
}

.credits a {
  text-decoration: none;
  color: black;
}
