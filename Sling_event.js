/*______________________________________________________
------------- CLASS FOR MAKING A SLINSHOT --------------
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


    //To create a slingshot.
        class Slingshot {
            
        //This is used to construct an object.
            constructor(bodyA, pointB){

            //Properties of the Sling.
                var options = {
                    bodyA: bodyA,
                    pointB: pointB,
                    length: 10,
                    stiffness: 0.3,
                }

                this.sling = Matter.Constraint.create(options);

            //This adds the constructed object.
                World.add(world, this.sling);
            }

        
        //This is used to display the constructed object.
            display() {

                //Condition to create BodyA of the sling.
                    if(this.sling.bodyA) {
                        strokeWeight(4);

                        //To create a line between 2 bodies two show the constraint.
                            line (
                                    this.sling.bodyA.position.x, 
                                    this.sling.bodyA.position.y, 
                                    this.sling.pointB.x, 
                                    this.sling.pointB.y
                            );
                    }
            }
        }



/*===================================
---------- CLASS FILE END -----------
====================================*/