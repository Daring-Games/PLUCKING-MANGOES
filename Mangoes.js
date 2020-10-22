/*______________________________________________________
-------------- CLASS FOR MAKING A MANGO ----------------
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


//To create a Mango.
    class Mangoes {

        //This is used to construct an object.
            constructor(x, y, radius, angle) {

                //Properties for Mango
                    var mango_options = {
                        friction: 1,
                        isStatic: true,
                    }

                this.body = Bodies.circle(x, y, radius, mango_options);
                this.radius = radius;
                this.image = loadImage("mango.png");
                this.angle = angle;

                //This adds the constructed object.
                    World.add(world, this.body)
            }


        //This is used to display the constructed object.
            display() {

                //Variable for the constructed object's position.
                    var position = this.body.position;

                //Variable for constructed object's angle.
                    var angle = this.body.angle;

                //This is used for displaying an object.
                    push();
                    translate(position.x, position.y);
                    rotate(angle);
                    
                    //This makes the object be at its center.
                        imageMode(CENTER)
                        image(this.image, 0, 0, this.radius * 2.4, this.radius * 2.4);                    
                    pop();
            }
    }



/*===================================
---------- CLASS FILE END -----------
====================================*/