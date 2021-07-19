var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["eb0f686e-32a5-4fe9-b1fd-cc48acf38862","9bf95304-0556-4db9-a8cb-5c3de55bcbe8","3dbda261-9648-43dc-b42f-188796e55ccb","7aefc37f-f22b-42f0-808a-83139c6c91b6","ec81c890-6ed4-4cff-8aad-0e215a96f22b"],"propsByKey":{"eb0f686e-32a5-4fe9-b1fd-cc48acf38862":{"name":"SAM","sourceUrl":"assets/api/v1/animation-library/gamelab/zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP/category_people/blue_hoodie_backpack.png","frameSize":{"x":119,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":119,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP/category_people/blue_hoodie_backpack.png"},"9bf95304-0556-4db9-a8cb-5c3de55bcbe8":{"name":"car1","sourceUrl":"assets/api/v1/animation-library/gamelab/3gafkWdeEnlb1buwKOYL.MeGDmRw3vDK/category_vehicles/monstertruck_02.png","frameSize":{"x":394,"y":232},"frameCount":1,"looping":true,"frameDelay":2,"version":"3gafkWdeEnlb1buwKOYL.MeGDmRw3vDK","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":232},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3gafkWdeEnlb1buwKOYL.MeGDmRw3vDK/category_vehicles/monstertruck_02.png"},"3dbda261-9648-43dc-b42f-188796e55ccb":{"name":"car2","sourceUrl":"assets/api/v1/animation-library/gamelab/C_kXaMVnUmpvdhj7FYK7tWJcJy4EBoI6/category_vehicles/monstertruck_01.png","frameSize":{"x":376,"y":232},"frameCount":1,"looping":true,"frameDelay":2,"version":"C_kXaMVnUmpvdhj7FYK7tWJcJy4EBoI6","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":376,"y":232},"rootRelativePath":"assets/api/v1/animation-library/gamelab/C_kXaMVnUmpvdhj7FYK7tWJcJy4EBoI6/category_vehicles/monstertruck_01.png"},"7aefc37f-f22b-42f0-808a-83139c6c91b6":{"name":"car3","sourceUrl":"assets/api/v1/animation-library/gamelab/SSryqA7aTDptZNfcuNaqdYjJewIfLGFM/category_vehicles/monstertruck_03.png","frameSize":{"x":400,"y":268},"frameCount":1,"looping":true,"frameDelay":2,"version":"SSryqA7aTDptZNfcuNaqdYjJewIfLGFM","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":268},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SSryqA7aTDptZNfcuNaqdYjJewIfLGFM/category_vehicles/monstertruck_03.png"},"ec81c890-6ed4-4cff-8aad-0e215a96f22b":{"name":"car4","sourceUrl":"assets/api/v1/animation-library/gamelab/mxourM2rKgo0A3dS0AVuIai51.8VlQ.T/category_vehicles/monstertruck_06.png","frameSize":{"x":400,"y":263},"frameCount":1,"looping":true,"frameDelay":2,"version":"mxourM2rKgo0A3dS0AVuIai51.8VlQ.T","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":263},"rootRelativePath":"assets/api/v1/animation-library/gamelab/mxourM2rKgo0A3dS0AVuIai51.8VlQ.T/category_vehicles/monstertruck_06.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 10;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.scale=0.1;
  sam.setAnimation("SAM");
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car1.velocityY=4;
  car2.velocityY=4;
  car3.velocityY=-4;
  car4.velocityY=-4;
playSound("vibrant_game_harping", true);


   
    
  
  
    
 
//add the velocity to make the car move.

function draw() {
  createEdgeSprites();
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
//Add the condition to make the sam move left and right
//Add the condition to reduce the life of sam if it touches the car.
  
  
 
    car1.bounceOff(boundary2);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary2);
  car1.bounceOff(boundary1);
  car2.bounceOff(boundary1);
  car3.bounceOff(boundary1);
  car4.bounceOff(boundary1);
 if (keyDown(LEFT_ARROW)) {
   sam.x=sam.x-1;
   
  }
  if (keyDown(RIGHT_ARROW)) {
    sam.x=sam.x+1; 
  }
  if (sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)) {
     sam.x=20;
     sam.y=190;
     life=life-1;
    }


  
 
   
 
 
     
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
