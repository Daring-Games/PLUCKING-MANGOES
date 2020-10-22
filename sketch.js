/*______________________________________________________
----------- PROJECT C28 (Plucking Mangoes) -------------
== Created by Sameer Karna (Student of WhiteHat Jr.) ==
_____________CREATED ON 3rd OCTOBER 2020________________

- - - - - - - - - Copyright (c) 2020 - - - - - - - - - -

 The permission to view and handle this game is hereby 
               granted to all viewers. 

 The above Copyright also disallows the viewers to copy
   this code. If any copied version is published then 
            the viewer will be charged.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/



  //To recall Matter Elements.
    const Engine = Matter.Engine;
    const World = Matter.World;
    const Bodies = Matter.Bodies;

  //Variables for Matter Elements and for the Game.
    //Variables for Matter Elements.
      var world, engine;

    //Variable for stone.
      var stone, stoneBodyPosition;

    //Variable for player.
      var player;


      var slingshot;

    //Variable for ground.
      var ground;

    //Variable for tree.
      var tree;

    //Variable for Mangoes.
      var mang1;
      var mang2;
      var mang3;
      var mang4;
      var mang5; 
      var mang6; 
      var mang7;
      var mang8;

    //Variable for Mango position.
      var mangoBodyPosition;


  //This function creates Canvas as well as Matter Elements.
    function setup() {

      //Canvas
        var canvas = createCanvas(1200,600);

      //Engine on which the Elements of Matter run
        engine = Engine.create();

      //To create world.
        world = engine.world;

      //To create ground.
        ground = new Ground(600, 590, 1300, 20);

      //To create a tree.
        tree = new Tree(900, 650, 10, 10);

      //To create mangoes.
        mang1 = new Mangoes(900, 200, 20);
        mang2 = new Mangoes(800, 230, 20);
        mang3 = new Mangoes(1000, 220, 20);
        mang4 = new Mangoes(860, 140, 20);
        mang5 = new Mangoes(1085, 280, 20);
        mang6 = new Mangoes(1000, 150, 20);
        mang7 = new Mangoes(900, 280, 20);
        mang8 = new Mangoes(750, 300, 20);

      //To create the stone by which player will pluck the mangoes.
        stone = new Rock(100, 400, 30, PI/5);

      //To create a slingshot for the stone.
        slingshot = new Slingshot(stone.body, { x: 100, y: 400 });

      //To create a renderer to view the Matter bodies.
        var render = Matter.Render.create({ 
          element: document.body,
          engine: engine,
          options: { 
              width: 1200, 
              height: 600, 
              showAngleIndicator: true,
              showVelocity: true,
              wireframes: true
          } 
          }); 

          Matter.Render.run(render);  
    }


  //This functions displays the Matter elements.
    function draw() {

      //Background color.
        background(189, 253, 255);

      //This updates the Matter Engine.
        Engine.update(engine);

      //To display the groound.
        ground.display();

      //To display the tree image.
        tree.display();

      //To display mangoes.
        mang1.display();
        mang2.display();
        mang3.display();
        mang4.display();
        mang5.display();
        mang6.display();
        mang7.display();
        mang8.display();

      //To display the stone.
        stone.display();

      //To display the slingshot.
        slingshot.display();

      //To display collision detection function.
        collision_detection(stone, mang1);
        collision_detection(stone, mang2);
        collision_detection(stone, mang3);
        collision_detection(stone, mang4);
        collision_detection(stone, mang5);
        collision_detection(stone, mang6);
        collision_detection(stone, mang7);
        collision_detection(stone, mang8);      
    }


//Function for Mouse Dragged Event - this function helps us to drag the mouse.
  function mouseDragged() {
      Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
  }


//Funtion for Mouse Released Event - this function helps us to release the mouse.
  function mouseReleased() {
      slingshot.sling.bodyA = null;
  }


//Function to detect collision.
  function collision_detection(lstone, lmango) {

    //To call mango's & ston's position.
    mangoBodyPosition = lmango.body.position;
    stoneBodyPosition = lstone.body.position;

    //Variable for distance and isTouching algorithm.
    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
      if(distance <= lmango.radius + lstone.radius) {
        Matter.Body.setStatic(lmango.body, false);
      }
  }


//Function KeyPressed which helps us to use keyboard keys.
  function keyPressed() {
    if(keyCode == UP_ARROW || 116) {
      Matter.Body.setPosition(stone.body, {x: 200, y: 400})
      Matter.Body.setAngle(stone.body, 0);
      slingshot.sling.bodyA = stone.body;
    }
  }



/*===================================
------------- MAIN END --------------
====================================*/

