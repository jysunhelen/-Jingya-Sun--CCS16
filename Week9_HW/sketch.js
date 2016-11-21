var poem = "Alone in the night On a dark hill With pines around me Spicy and still"

var words = [];
var partsOfSpeech = [];

function setup() {
    createCanvas(400,400);
    lexicon = new RiLexicon();
    textSize(15);
  
    words = RiTa.tokenize(poem);
    partsOfSpeech = RiTa.getPosTags(words);

    background(0);
    fill(255);
    noStroke();

    var wordPosX = 100;
    var wordPosY = 100;

    for(var i=0; i < words.length; i++){
      text(words[i], wordPosX, wordPosY, textWidth(words[i]),20);

      if( partsOfSpeech[i] != null){
        text(partsOfSpeech[i], wordPosX, wordPosY+20, textWidth(words[i]), 20);        
      }

      wordPosX += textWidth(words[i])+ 20;

      if((i+1)%4 == 0){
        wordPosX = 100;
        wordPosY += 50;
      }
    }

    textAlign(LEFT,TOP);
    text("Click for random",10,10);
}
  
function draw(){

}

function mousePressed(){
  background(0);
  fill(255);
  noStroke();
  textAlign(LEFT,TOP);
  text("Click for another random",10,10);
  textAlign(CENTER,CENTER);
  var output = "Alone in the "+ lexicon.randomWord("nn") + "\n"+
      "On a " + lexicon.randomWord("jj") + " " + lexicon.randomWord("nn") + "\n"+
      "With pines around me"+"\n"+
      lexicon.randomWord("jj") + " " + "and still"
 text(output,width/2,height/2);
}
