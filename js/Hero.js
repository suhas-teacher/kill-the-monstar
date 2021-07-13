class Hero {
    constructor(x, y, r) {
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Superhero-01.png");
        var options={
            density:2000,
            frictionAir:1
        }
        this.body = Bodies.circle(x, y,r/2,options );
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 400, 120);
        pop();
    }
}