class Chain{
    constructor(bodyA, ptb){
        var options = {
            bodyA: bodyA,
            pointB: ptb,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.ptb = ptb;
    }

    display(){
        if(this.chain.bodyA!= null){
        var pointA = this.chain.bodyA.position;
        var pointB = this.ptb;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}
    }
    fly(){
        this.chain.bodyA = null;
    }
}


