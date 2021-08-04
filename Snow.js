class Snow{
    constructor(x,y){
        var options={
        restitution:0.5,
        friction:0.001,
        density:1.2
        }
        this.r=20;
        this.body=Bodies.circle(x,y,this.r,options);

        this.image=loadImage("snow4.webp");
        World.add(world,this.body)
    
    }
     repeat(){
        if(this.body.position.y>650){
          Matter.body.setposition(this.body,{x:random(0,1050),y:random(-50,600)})
        }
     }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r)
        pop()
    }
}