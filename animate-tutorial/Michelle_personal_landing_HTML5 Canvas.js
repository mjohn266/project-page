(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Michelle_personal_landing_HTML5 Canvas_atlas_1", frames: [[0,0,1125,1494]]},
		{name:"Michelle_personal_landing_HTML5 Canvas_atlas_2", frames: [[1467,1010,176,48],[1467,1060,168,48],[1605,125,168,48],[1504,0,165,123],[0,0,1502,851],[749,1010,716,52],[749,1118,772,16],[749,1064,716,52],[1583,962,137,16],[749,853,854,107],[749,962,832,46],[0,853,747,420]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_11 = function() {
	this.initialize(ss["Michelle_personal_landing_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Michelle_personal_landing_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Michelle_personal_landing_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Michelle_personal_landing_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Michelle_personal_landing_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Michelle_personal_landing_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Michelle_personal_landing_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Michelle_personal_landing_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Michelle_personal_landing_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Michelle_personal_landing_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Michelle_personal_landing_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.GrungeTexture = function() {
	this.initialize(ss["Michelle_personal_landing_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.IMG_0252BFBCC3E31 = function() {
	this.initialize(ss["Michelle_personal_landing_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.IMG_0252BFBCC3E31();
	this.instance.setTransform(0,0,0.1849,0.1345);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006666").s().p("AlsFsQiXiWAAjWQAAjVCXiXQCXiWDVgBQDWABCWCWQCXCXAADVQAADWiXCWQiWCXjWABQjVgBiXiXg");
	this.shape.setTransform(104.6,152.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,208,204.1), null);


(lib.StarButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		playSound("selectionwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Star
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006666").s().p("AhfBhIkZhGIEHh6IgUkhIDEDVIEMhtIiND9IC7DeIkdg4IiYD2g");
	this.shape.setTransform(-187.275,121.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006666").s().p("AhZCbIkWBPICmjsIiijwIEVBVICxjlIAFEiIEQBjIkSBeIgKEig");
	this.shape_1.setTransform(-183.825,103.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#051426").s().p("AhZCbIkWBPICmjsIiijwIEVBVICxjlIAFEiIEQBjIkSBeIgKEig");
	this.shape_2.setTransform(-188.825,111.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AqdFrIAArVIU7AAIAALVg");
	this.shape_3.setTransform(-145,122.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.6,64.6,147.6,95.4);


(lib.Scene_1_Slash = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Slash
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(308.05,132.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(318,189,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s().p("AAAgYIAAAxg");
	this.shape.setTransform(0,2.5);
	this.shape._off = true;

	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(308.05,132.4,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_5();
	this.instance_3.setTransform(317.9,189,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0008ED","#FFFFFF"],[0,1],-197.1,0.1,196.7,0.1).s().p("AmBAmIkbgCIAAACQAAgBggAAIg1AAIAAgBQAAgBg4AAIAAgCQhxgBg5ACIAAgCQhUgBgdACIAAgCQAAACgcAAIhxABQj+AAAAgCIhHgBIhHAAIAWgEQAMgCgigBQhigDh1gGQh9gJA6gBQAcgCDGgGQAXAAAsgEQAugEAAgDQA4AAAAgBQAAgChNAAIh4gCQgngDBDgEIA4gGQBHgFBHAAQG4gEEmAEIBxADQD7AEHKACQHLABDQACIBAAAICqABQCMAIDHgBQAAABA4ACIDSABIgMAAQgPABAdABQAcABgOABIjFAAIAAABIDiAAQA7ABAZACQAYABgYABQg3ABksAAQAQAAAAACIlvAAIAAABIA5AAIAAADIkQABQifACAjADIA5AAIAAADIFvADIAAACIgrABIAyABIAxACQAzACCQABIEBAAQAdAAAAADQBxgCDGADQjJACnegBQmyAAj0ACQgcAAgOACIgqABIhVAAQAUABgNABIgjABQkJACi9AAQi/AAh1gCg");
	this.shape_1.setTransform(510.9834,193);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},59).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.shape_1}]},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60).to({_off:false},0).wait(10).to({_off:true},1).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Quote = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Quote
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(296.95,133.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(98));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Name_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Name_
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(297.05,69.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(98));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Grunge_Texture = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Grunge_Texture
	this.instance = new lib.GrungeTexture();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(98));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Gradient = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0008ED","#FFFFFF"],[0,1],-629.5,0,629.6,0).s().p("Eg6WAN6IAA7zMB0tAAAIAAbzg");
	this.shape.setTransform(371.525,331.05);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(47).to({_off:false},0).wait(51));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_edge_decorators_ai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// edge_decorators_ai
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-1.95,-2.65,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.5,-211,749,422);


(lib.PhotoAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.IMG_0252BFBCC3E31();
	this.instance.setTransform(0,0,0.1849,0.1345);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006666").s().p("AlsFsQiXiWAAjWQAAjVCXiXQCXiWDVgBQDWABCWCWQCXCXAADVQAADWiXCWQiWCXjWABQjVgBiXiXg");
	this.shape.setTransform(104.6,152.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006666").s().p("AlrFsQiXiWgBjWQABjVCXiXQCWiWDVgBQDWABCXCWQCXCXAADVQAADWiXCWQiXCXjWABQjVgBiWiXg");
	this.shape_1.setTransform(109.6,152.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006666").s().p("AlsFtQiXiYAAjVQAAjUCXiXQCXiYDVABQDWgBCWCYQCXCXAADUQAADViXCYQiWCWjWAAQjVAAiXiWg");
	this.shape_2.setTransform(104.6,158.55);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(104,97,1,1,0,0,0,104,102);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006666").s().p("AlrFsQiXiWgBjWQABjVCXiXQCWiWDVgBQDWABCXCWQCWCXABDVQgBDWiWCWQiXCXjWABQjVgBiWiXg");
	this.shape_3.setTransform(111.6,152.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{x:0,y:0}}]}).to({state:[{t:this.shape_1},{t:this.instance,p:{x:5,y:0}}]},2).to({state:[{t:this.shape_2},{t:this.instance,p:{x:0,y:6}}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_3},{t:this.instance,p:{x:7,y:0}}]},1).to({state:[{t:this.shape},{t:this.instance,p:{x:0,y:0}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5,215,215.1);


(lib.LinkBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.LinkedIn_btn.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://www.linkedin.com', '_blank');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.twitter_btn.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://www.twitter.com', '_blank');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.Facebook_btn.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('http://www.facebook.com', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Text
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(463,66.15,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(279,57.7,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_9();
	this.instance_2.setTransform(68.05,57.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Buttons
	this.LinkedIn_btn = new lib.StarButton();
	this.LinkedIn_btn.name = "LinkedIn_btn";
	this.LinkedIn_btn.setTransform(242.35,-78.4);
	new cjs.ButtonHelper(this.LinkedIn_btn, 0, 1, 2, false, new lib.StarButton(), 3);

	this.twitter_btn = new lib.StarButton();
	this.twitter_btn.name = "twitter_btn";
	this.twitter_btn.setTransform(442.3,-78.4);
	new cjs.ButtonHelper(this.twitter_btn, 0, 1, 2, false, new lib.StarButton(), 3);

	this.Facebook_btn = new lib.StarButton();
	this.Facebook_btn.name = "Facebook_btn";
	this.Facebook_btn.setTransform(624.9,-78.4);
	new cjs.ButtonHelper(this.Facebook_btn, 0, 1, 2, false, new lib.StarButton(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000099").ss(2,1,1).p("EgsGgHBMBYNAAAQBQAAAABQIAALjQAABQhQAAMhYNAAAQhQAAAAhQIAArjQAAhQBQAAg");
	this.shape.setTransform(290.3295,44.9943,1.0001,1.0005);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,153,0.357)").s().p("EgsGAHCQhQAAAAhQIAArjQAAhQBQAAMBYNAAAQBQAAAABQIAALjQAABQhQAAg");
	this.shape_1.setTransform(290.3295,44.9943,1.0001,1.0005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.Facebook_btn},{t:this.twitter_btn},{t:this.LinkedIn_btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LinkBar, new cjs.Rectangle(-1,-13.8,582.7,104.8), null);


(lib.Start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(72.9,0,0.5,0.5);

	this.instance_1 = new lib.StarButton();
	this.instance_1.setTransform(225.05,-62.7,0.9999,0.9999,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.StarButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,0,156.1,97.2);


(lib.Scene_1_Start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Start
	this.start_btn = new lib.Start();
	this.start_btn.name = "start_btn";
	this.start_btn.setTransform(408,274.45,1,1,0,0,0,152.5,16);
	new cjs.ButtonHelper(this.start_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.start_btn).to({alpha:0},11).wait(87));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Photo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Photo
	this.instance = new lib.IMG_0252BFBCC3E31();
	this.instance.setTransform(31,21,0.1849,0.1345);

	this.instance_1 = new lib.PhotoAnimation("synched",0);
	this.instance_1.setTransform(135,123,1,1,0,0,0,104,102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},47).to({state:[{t:this.instance_1}]},24).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_LInkBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// LInkBar
	this.instance = new lib.LinkBar();
	this.instance.setTransform(1035.3,363.65,1,1,0,0,0,290.3,45);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).wait(1).to({regY:38.6,x:1035.25,y:357.25},0).wait(2).to({x:1035.2},0).wait(1).to({x:1035.15},0).wait(1).to({x:1035.05},0).wait(1).to({x:1035},0).wait(1).to({x:1034.85},0).wait(1).to({x:1034.75},0).wait(1).to({x:1034.6},0).wait(1).to({x:1034.45},0).wait(1).to({x:1034.3},0).wait(1).to({x:1034.1},0).wait(1).to({x:1034},0).wait(3).to({x:1034.15},0).wait(1).to({x:1034.25},0).wait(2).to({x:1034.15},0).wait(1).to({x:1034},0).wait(11).to({regY:45,x:477.8,y:359.15},0).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.RECOVER_personal_landing_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,11,97];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.start_btn = this.Start.start_btn;
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.start_btn.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.play();
		});
	}
	this.frame_11 = function() {
		this.start_btn = undefined;this.start_btn = this.Start.start_btn;
	}
	this.frame_97 = function() {
		this.___loopingOver___ = true;
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(86).call(this.frame_97).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(373.55,210,0.6991,0.6991,-13.7487);
	this.___camera___instance.depth = 0;
	this.___camera___instance._off = true;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(13).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:373.5},11).wait(74));

	// Start_obj_
	this.Start = new lib.Scene_1_Start();
	this.Start.name = "Start";
	this.Start.setTransform(367.7,275.7,1,1,0,0,0,367.7,275.7);
	this.Start.depth = 0;
	this.Start.isAttachedToCamera = 0
	this.Start.isAttachedToMask = 0
	this.Start.layerDepth = 0
	this.Start.layerIndex = 0
	this.Start.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Start).wait(98));

	// LInkBar_obj_
	this.LInkBar = new lib.Scene_1_LInkBar();
	this.LInkBar.name = "LInkBar";
	this.LInkBar.depth = 0;
	this.LInkBar.isAttachedToCamera = 0
	this.LInkBar.isAttachedToMask = 0
	this.LInkBar.layerDepth = 0
	this.LInkBar.layerIndex = 1
	this.LInkBar.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.LInkBar).wait(39).to({regX:756.6,regY:355,x:756.6,y:355},0).wait(30).to({regX:0,regY:0,x:0,y:0},0).wait(29));

	// Quote_obj_
	this.Quote = new lib.Scene_1_Quote();
	this.Quote.name = "Quote";
	this.Quote.setTransform(504.9,144.7,1,1,0,0,0,504.9,144.7);
	this.Quote.depth = 0;
	this.Quote.isAttachedToCamera = 1
	this.Quote.isAttachedToMask = 0
	this.Quote.layerDepth = 0
	this.Quote.layerIndex = 2
	this.Quote.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Quote).wait(98));

	// Name__obj_
	this.Name_ = new lib.Scene_1_Name_();
	this.Name_.name = "Name_";
	this.Name_.setTransform(510.6,96,1,1,0,0,0,510.6,96);
	this.Name_.depth = 0;
	this.Name_.isAttachedToCamera = 1
	this.Name_.isAttachedToMask = 0
	this.Name_.layerDepth = 0
	this.Name_.layerIndex = 3
	this.Name_.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Name_).wait(98));

	// Slash_obj_
	this.Slash = new lib.Scene_1_Slash();
	this.Slash.name = "Slash";
	this.Slash.depth = 0;
	this.Slash.isAttachedToCamera = 0
	this.Slash.isAttachedToMask = 0
	this.Slash.layerDepth = 0
	this.Slash.layerIndex = 4
	this.Slash.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Slash).wait(98));

	// Mask_Photo (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_47 = new cjs.Graphics().p("AgwAxQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	var mask_graphics_48 = new cjs.Graphics().p("AgwAxQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	var mask_graphics_49 = new cjs.Graphics().p("AgwAxQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	var mask_graphics_50 = new cjs.Graphics().p("AgwAxQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	var mask_graphics_51 = new cjs.Graphics().p("AgwAxQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	var mask_graphics_52 = new cjs.Graphics().p("AgwAxQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	var mask_graphics_53 = new cjs.Graphics().p("AgwAxQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	var mask_graphics_54 = new cjs.Graphics().p("AgwAxQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	var mask_graphics_55 = new cjs.Graphics().p("AgwAxQgVgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	var mask_graphics_56 = new cjs.Graphics().p("AkTECQhyhrAAiXQAAiXByhrQByhrChAAQChAABzBrQByBrAACXQAACXhyBrQhzBsihgBQihABhyhsg");
	var mask_graphics_57 = new cjs.Graphics().p("AlDE8QiGiDAAi5QAAi4CGiEQCGiCC9AAQC9AACHCCQCGCEAAC4QAAC5iGCDQiHCDi9AAQi9AAiGiDg");
	var mask_graphics_58 = new cjs.Graphics().p("AlzF1QiaibAAjaQAAjaCaibQCZiaDaAAQDaAACZCaQCbCbAADaQAADaibCbQiZCbjaAAQjaAAiZibg");
	var mask_graphics_59 = new cjs.Graphics().p("AmkGuQitiyAAj8QAAj8CtiyQCuizD2ABQD2gBCuCzQCuCyAAD8QAAD8iuCyQiuC0j2gBQj2ABiui0g");
	var mask_graphics_60 = new cjs.Graphics().p("AnTHoQjCjKAAkeQAAkdDCjLQDBjKESAAQESAADCDKQDCDLAAEdQAAEejCDKQjCDLkSAAQkSAAjBjLg");
	var mask_graphics_61 = new cjs.Graphics().p("AoDIiQjWjiAAlAQAAk/DWjiQDVjiEuAAQEvAADVDiQDWDiAAE/QAAFAjWDiQjVDikvAAQkuAAjVjig");
	var mask_graphics_62 = new cjs.Graphics().p("Ao0JbQjpj6AAlhQAAlhDpj6QDqj5FKAAQFLAADpD5QDqD6AAFhQAAFhjqD6QjpD7lLgBQlKABjqj7g");
	var mask_graphics_63 = new cjs.Graphics().p("ApkKVQj9kSAAmDQAAmCD9kSQD+kSFmAAQFnAAD9ESQD+ESAAGCQAAGDj+ESQj9ESlnAAQlmAAj+kSg");
	var mask_graphics_64 = new cjs.Graphics().p("AqULOQkRkpAAmlQAAmkERkqQESkpGCAAQGDAAESEpQEREqAAGkQAAGlkREpQkSEqmDAAQmCAAkSkqg");
	var mask_graphics_65 = new cjs.Graphics().p("ArEMIQkllBAAnHQAAnFEllCQEllCGfAAQGfAAEmFCQElFCAAHFQAAHHklFBQkmFCmfgBQmfABkllCg");
	var mask_graphics_66 = new cjs.Graphics().p("Ar0NBQk5lZAAnoQAAnoE5lZQE5lZG7AAQG7AAE6FZQE5FZAAHoQAAHok5FZQk6Fam7AAQm7AAk5lag");
	var mask_graphics_67 = new cjs.Graphics().p("AskN7QlNlxAAoKQAAoJFNlyQFNlwHXAAQHYAAFNFwQFNFyAAIJQAAIKlNFxQlNFxnYAAQnXAAlNlxg");
	var mask_graphics_68 = new cjs.Graphics().p("AtUO0QlimIAAosQAAorFimJQFhmJHzAAQH0AAFhGJQFhGJAAIrQAAIslhGIQlhGKn0gBQnzABlhmKg");
	var mask_graphics_69 = new cjs.Graphics().p("AuEPuQl2mhABpNQgBpNF2mhQF1mgIPAAQIQAAF2GgQF0GhABJNQgBJNl0GhQl2GhoQAAQoPAAl1mhg");
	var mask_graphics_70 = new cjs.Graphics().p("Au0QnQmJm3gBpwQABpvGJm4QGJm4IrAAQItAAGJG4QGJG4AAJvQAAJwmJG3QmJG5otAAQorAAmJm5g");
	var mask_graphics_71 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_72 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_73 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_74 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_75 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_76 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_77 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_78 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_79 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_80 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_81 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_82 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_83 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_84 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_85 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_86 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_87 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_88 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_89 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_90 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_91 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_92 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_93 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_94 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_95 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_96 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");
	var mask_graphics_97 = new cjs.Graphics().p("AvkRhQmdnQAAqRQAAqQGdnRQGdnPJHAAQJJAAGcHPQGeHRgBKQQABKRmeHQQmcHRpJgBQpHABmdnRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_graphics_47,x:265.05,y:43.05}).wait(1).to({graphics:mask_graphics_48,x:265.05,y:43.05}).wait(1).to({graphics:mask_graphics_49,x:265.05,y:43.05}).wait(1).to({graphics:mask_graphics_50,x:265.05,y:43.05}).wait(1).to({graphics:mask_graphics_51,x:265.05,y:43.05}).wait(1).to({graphics:mask_graphics_52,x:265.05,y:43.05}).wait(1).to({graphics:mask_graphics_53,x:265.05,y:43.05}).wait(1).to({graphics:mask_graphics_54,x:265.05,y:43.05}).wait(1).to({graphics:mask_graphics_55,x:265.05,y:43.05}).wait(1).to({graphics:mask_graphics_56,x:129.1,y:122.5}).wait(1).to({graphics:mask_graphics_57,x:129.1,y:122.5}).wait(1).to({graphics:mask_graphics_58,x:129.1,y:122.5}).wait(1).to({graphics:mask_graphics_59,x:129.1,y:122.5}).wait(1).to({graphics:mask_graphics_60,x:129.075,y:122.475}).wait(1).to({graphics:mask_graphics_61,x:129.075,y:122.475}).wait(1).to({graphics:mask_graphics_62,x:129.075,y:122.5}).wait(1).to({graphics:mask_graphics_63,x:129.075,y:122.475}).wait(1).to({graphics:mask_graphics_64,x:129.075,y:122.475}).wait(1).to({graphics:mask_graphics_65,x:129.075,y:122.45}).wait(1).to({graphics:mask_graphics_66,x:129.075,y:122.475}).wait(1).to({graphics:mask_graphics_67,x:129.075,y:122.475}).wait(1).to({graphics:mask_graphics_68,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_69,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_70,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_71,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_72,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_73,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_74,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_75,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_76,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_77,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_78,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_79,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_80,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_81,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_82,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_83,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_84,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_85,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_86,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_87,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_88,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_89,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_90,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_91,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_92,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_93,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_94,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_95,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_96,x:129.05,y:122.45}).wait(1).to({graphics:mask_graphics_97,x:129.05,y:122.45}).wait(1));

	// Photo_obj_
	this.Photo = new lib.Scene_1_Photo();
	this.Photo.name = "Photo";
	this.Photo.depth = 0;
	this.Photo.isAttachedToCamera = 0
	this.Photo.isAttachedToMask = 0
	this.Photo.layerDepth = 0
	this.Photo.layerIndex = 5
	this.Photo.maskLayerName = 0

	var maskedShapeInstanceList = [this.Photo];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Photo).wait(98));

	// Gradient_obj_
	this.Gradient = new lib.Scene_1_Gradient();
	this.Gradient.name = "Gradient";
	this.Gradient.depth = 0;
	this.Gradient.isAttachedToCamera = 0
	this.Gradient.isAttachedToMask = 0
	this.Gradient.layerDepth = 0
	this.Gradient.layerIndex = 6
	this.Gradient.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Gradient).wait(98));

	// Grunge_Texture_obj_
	this.Grunge_Texture = new lib.Scene_1_Grunge_Texture();
	this.Grunge_Texture.name = "Grunge_Texture";
	this.Grunge_Texture.setTransform(373.5,210,1,1,0,0,0,373.5,210);
	this.Grunge_Texture.depth = 0;
	this.Grunge_Texture.isAttachedToCamera = 0
	this.Grunge_Texture.isAttachedToMask = 0
	this.Grunge_Texture.layerDepth = 0
	this.Grunge_Texture.layerIndex = 7
	this.Grunge_Texture.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Grunge_Texture).wait(98));

	// edge_decorators_ai_obj_
	this.edge_decorators_ai = new lib.Scene_1_edge_decorators_ai();
	this.edge_decorators_ai.name = "edge_decorators_ai";
	this.edge_decorators_ai.depth = 0;
	this.edge_decorators_ai.isAttachedToCamera = 0
	this.edge_decorators_ai.isAttachedToMask = 0
	this.edge_decorators_ai.layerDepth = 0
	this.edge_decorators_ai.layerIndex = 8
	this.edge_decorators_ai.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.edge_decorators_ai).wait(98));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(371.6,203.7,955.1,222.60000000000002);
// library properties:
lib.properties = {
	id: '1B19E45F5DDF4EFAABF1CE2B8464A327',
	width: 747,
	height: 420,
	fps: 30,
	color: "#003333",
	opacity: 1.00,
	manifest: [
		{src:"images/Michelle_personal_landing_HTML5 Canvas_atlas_1.png", id:"Michelle_personal_landing_HTML5 Canvas_atlas_1"},
		{src:"images/Michelle_personal_landing_HTML5 Canvas_atlas_2.png", id:"Michelle_personal_landing_HTML5 Canvas_atlas_2"},
		{src:"sounds/selectionwav.mp3", id:"selectionwav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1B19E45F5DDF4EFAABF1CE2B8464A327'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;