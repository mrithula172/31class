class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectroy=[]
    this.smokeImage=loadImage("sprites/smoke.png")
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if (this.body.position.x>220&&this.body.speed>10){
    var position =[this.body.position.x,this.body.position.y]
    this.trajectroy.push(position)
    }
    for (var i=0;i<this.trajectroy.length;i++) {
image(this.smokeImage,this.trajectroy[i][0],this.trajectroy[i][1])
    }
  }
}














