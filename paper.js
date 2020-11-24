class Paper {
    constructor(){
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        };

        this.body = Bodies.ellipse(56,46,55,55);
        this.width = 50;
        this.height = 50;
        World.add(world.this.body);
    };

    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.Y = mouseY;

        var angle = this.body.angle;

        push();

        translate(pos.x, pos.y);
        rotate(angle);
        fill("pink");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    };
};