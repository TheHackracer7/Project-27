class Bob
{
    constructor(x,y,radius)
    {
     var options={
        isStatic:false,
        friction:3,
        restitution:0.0,
        density:1.5
        }
        this.radius=radius;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
      
        World.add(world,this.body);
    }
    display()
    {

        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("black");
        ellipse(0,0,this.radius,this.radius);
        pop();

    }
}