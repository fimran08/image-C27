class Tower{
 
    constructor(x,y,width,height){

        var option={
            isStatic:true
        }

        this.width=width;
        this.height=height;

        this.body=Bodies.rectangle(x,y,this.width,this.height,option);

        World.add(world,this.body);

    this.longrock = loadImage("assets/tower.png")

    }

    display(){
        var pos=this.body.position
        var angle=this.body.angle
        
        push()
        imageMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        image(this.longrock,0,0,this.width,this.height)
        pop()
    }



}
