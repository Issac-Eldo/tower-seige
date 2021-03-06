class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    display(){
        image(this.sling1,200,220)
        image(this.sling2,170,210)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(20);
            stroke(48,22,8)
            
            if(pointA.x>200){
                image(this.sling3,pointA.x,pointA.y,20,50)
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                line(pointA.x,pointA.y, pointB.x, pointB.y) 
            }
            else{
                image(this.sling3,pointA.x,pointA.y,20,50)
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                line(pointA.x,pointA.y, pointB.x, pointB.y)
            }
            pop()
        }
    }
    
}