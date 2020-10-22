/*______________________________________________________
--------------- CLASS FOR MAKING A ROCK ----------------
== Created by Sameer Karna (Student of WhiteHat Jr.) ==
______________CREATED ON 3rd OCTOBER 2020_______________

- - - - - - - - - Copyright (c) 2020 - - - - - - - - - -

 The permission to view and handle this game is hereby 
               granted to all viewers. 

 The above Copyright also disallows the viewers to copy
   this code. If any copied version is published then 
            the viewer will be charged.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - -

~~~~~ The below CLASS file is a part of 'sketch.js' file ~~~~~
~~~~ 'sketch.js' file comes under PLUCKING MANGOES project ~~~~
~~~    The viewer is restricted from copying any content   ~~~
*/  


    //To create a Rock.
        class Rock {

            //This is used to construct an object.
                constructor(x, y, radius) {

                    //Properties of the Rock.
                        var rock_options = {
                            restitution: 0.1,
                            friction: 1,
                            isStatic: false
                        }

                    
                        this.body = Bodies.circle(x, y, radius, rock_options);
                        this.radius = radius
                        this.image = loadImage("rock.png");

                    //This adds the constructed object.
                        World.add(world, this.body);
                }


            //This is used to display the constructed object.
                display() {

                    //For the Matter body's position.
                        var position = this.body.position;

                    //For the Matter Body's angle.
                        var angle = this.body.angle;

                    //To display position, angle & image.
                        push();
                        translate(position.x, position.y);
                        rotate(angle);
                        imageMode(CENTER);
                        image(this.image, 0, 0, this.radius * 2, this.radius * 2);
                        pop();
                }
        }



/*===================================
---------- CLASS FILE END -----------
====================================*/