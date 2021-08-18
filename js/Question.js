class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here");
   //Create a input box to enter the number
   this.input2 = createInput("Enter The Correct Option");
  
    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
   this.question=createElement("h3");
  this.option=createElement("h4");

    this.message = createElement("h2")
  }


  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
  




  }



  HandleMousePressed(){
    this.button.mousePressed(()=>{
     // this.input1.hide()
      var messages=`Thanks For your Answer And Thanks For Playing This Game :)`;
            this.message.html(messages)
          })
    }
  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    

    //Create html() and position() for each question, input and answers.
    var message=` Question:-   when did the kargil war was fought`
    this.question.html(message)
    var options=`a) 1992
    </br> b) 1982
    </br>c) 1999
    </br>d) 1950`
    this.option.html(options)

    this.HandleMousePressed();

    this.question.position(100,50);
    this.option.position(100,100);
    this.input1.position(100,250);
    this.input2.position(300,250);
    this.button.position(250,300);
    this.message.position(100,350)
  }
}
