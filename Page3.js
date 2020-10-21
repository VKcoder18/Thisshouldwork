class Page3{
    constructor() {
        this.title = createElement('h1');
        this.title.size(300,300);
    
        this.cereal = createButton('Cereal');
        this.milk = createButton('Milk');
        this.dosa = createButton('Dosa');
        this.idly = createButton('Idly');
        this.eggs = createButton('Eggs');
         
    
    
    
    
    }

display(){
    this.cereal.position(920,400);
    this.milk.position(920,450);
    this.dosa.position(920,500);
    this.idly.position(920,550);
    this.eggs.position(920,600);

    this.title.html("Breakfast-");
   this.title.position(displayWidth/2 - 20,0);
}

















}