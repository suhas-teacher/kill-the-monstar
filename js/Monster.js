class Monster {
    constructor(x, y) {
        var options = {
            density: 1,
            restitution: 0.8,
            frictionAir: 0
        }
        this.body = Bodies.circle(x, y, 80, options);
        World.add(world, this.body);
    }
}