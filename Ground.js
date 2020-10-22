/*______________________________________________________
-------------- CLASS FOR MAKING A GROUND ---------------
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


    //To create a Ground.
        class Ground {

            //This is used to construct an object.
                constructor(x, y, width, height) {

                    //This is used to specify an object's properties.
                        var ground_option = {
                            isStatic: true,
                        }

                        this.body = Bodies.rectangle(x, y, width, height, ground_option);
                        this.width = width;
                        this.height = height;
                        this.image = loadImage("ground (2).png");

                    //This adds the constructed object.
                        World.add(world, this.body);
                }


            //This is used to display the constructed object.
                display() {

                    //Variable for the constructed object's position.
                        var position = this.body.position;

                        push();
                        translate(position.x, position.y);
                        rect(0, 0, this.width, this.height);
                        imageMode(CENTER)
                        image(this.image, 0, -60, 1200, 300);            
                        pop();
                }

        }



/*===================================
---------- CLASS FILE END -----------
====================================*/