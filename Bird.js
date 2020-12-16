class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.INEJimage = loadImage("sprites/smoke.png");

    this.TRAJ = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    if (this.body.speed>10 && (this.body.position.x>220)){
    var pos = [this.body.position.x, this.body.position.y];
    this.TRAJ.push(pos);
    }
    
    for(var i=0; i<this.TRAJ.length; i++){
      image(this.INEJimage, this.TRAJ [i][0], this.TRAJ [i][1]);
    }

    super.display();
  }
}
