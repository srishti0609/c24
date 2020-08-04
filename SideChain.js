function SideChain(x,y,r){
    var options={
        friction: 0,
        restitution: 0.95,
        isStatic: false
        
    }

    this.body=Bodies.circle(x,y,r,options);
    this.r=r;
   
   
    World.add(world,this.body);
    this.show=function(){
        push();
        
        fill("orange");
        ellipseMode(CENTER);
        strokeWeight(2);
        ellipse(this.body.position.x,this.body.position.y,this.r*2);
        pop();
       
      
    }
  
}