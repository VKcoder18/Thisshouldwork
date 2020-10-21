class Page2  {

    constructor() {
      this.input = createInput('');
      this.input2 = createInput('');
      this.greeting = createElement('h2');
      this.title = createElement('h1');
      this.next = createButton('next');
      this.input.size(500,25);
      this.input2.size(500,25);
      this.weight = createElement('h3');
      this.height = createElement('h3');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.input2.hide();
      this.title.hide();
      this.weight.hide();
      this.height.hide();
    }
  
    displayy(){
      this.weight.html("Weight");
      this.weight.position(638,displayHeight/2 - 155);

      this.height.html("Height");
      this.height.position(640,displayHeight/2 - 105);
      
      this.title.html("Your Info");
      this.title.position(displayWidth/2 - 50, 0);
  
      //this.input.position(displayWidth/2 - 200 , displayHeight/2 - 80);
      this.input.position(700,450);
      
      this.input2.position(700 ,400);
      
      this.next.position(920,500);
      //this.reset.position(displayWidth-100,20);
  
      this.next.mousePressed(()=>{
        this.input.hide();
        this.next.hide();
        this.input2.hide();
        this.weight.hide();
        this.height.hide();
        Height = this.input.value();
        Weight = this.input2.value();
        WeightG = this.input3.value();
        Intensity = this.input4.value();
        this.greeting.html("Hello " + name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        var page3 = new Page3();
      page3.display();
      });
  
      
      
    }
  }
  