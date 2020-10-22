//To create a Dustbin Image.
class Tree {

    //This is used to construct an object.
        constructor(x, y, width, height) {

            //This is used to specify an object's properties.
                var dustbin_options = {
                    isStatic: true
                }

                this.body = Bodies.rectangle(x, y, width, height, dustbin_options);
                this.width = width;
                this.height = height;
                this.image = loadImage("tree.png");

            //This adds the constructed object.
                World.add(world, this.body);  
        }

    //This is used to display the constructed object.
        display() {

            //Variable for the constructed object's position.
                var position = this.body.position

            //This is used for displaying an object.
                push();
                translate(position.x, position.y);

                //This makes the object be at its center.
                    imageMode(CENTER)
                    image(this.image, 0, -320, 500, 500);  
                pop();
        }
}