class Page {

  constructor() {
    this.input = createInput("");
    this.input2 = createInput('');
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    this.age = createElement('h3');
    this.eMail = createElement('h3');
    this.name = createElement('h3');
    this.next = createButton('next');
    this.input3 = createInput('');
    this.input.size(500,25);
    this.input2.size(500,25);
    this.input3.size(500,25);
      }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.input2.hide();
    this.input3.hide();
    this.title.hide();
    this.age.hide();
    this.eMail.hide();
    this.name.hide();    
  }

  display(){
    
   this.title.html("Your Info");
   this.title.position(displayWidth/2 - 20,0);
    
   this.age.html("Age");
   this.age.position(657,displayHeight/2 - 195);
   
   this.eMail.html("E-Mail");
   this.eMail.position(640,displayHeight/2 - 145);
   
  this.name.html("Name")
  this.name.position(648,displayHeight/2 - 95)

  // text("Age →",657,displayHeight/2 - 165);
   // text("E-Mail →",646,displayHeight/2 - 115);
   // text("Name →",648,displayHeight/2 - 65);


    //this.input.position(displayWidth/2 - 200 , displayHeight/2 - 80);
    //this.input.position(400,600);
    this.input.position(700, displayHeight/2 - 80);
    this.input2.position(700 , displayHeight/2 - 130);
    this.input3.position(700 , displayHeight/2 - 180);
    this.next.position(displayWidth/2 , displayHeight/2 - 35);
    //this.reset.position(displayWidth-100,20);

    this.next.mousePressed(()=>{
      this.input.hide();
      this.next.hide();
      this.input2.hide();
      this.input3.hide();
      this.title.hide();
     this.age.hide();
      this.eMail.hide();
      this.name.hide();   
      name = this.input.value();
      eMail = this.input2.value();
      Age = this.input3.value();
      

      var page2 = new Page2;
      page2.displayy();
    });

    

  }
}
