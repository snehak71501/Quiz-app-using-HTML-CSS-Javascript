var pos = 0,
    board,
    status,
    qus,
    choices,
    A,
    B,
    C,
    Cor = 0;

var questions = [
    
    ["Javascript is an _______ language?","Object-Oriented","Object-Based","Assembly-language","A"],
    ["The function and  var are known as","Keywords","Data types","Declaration statements","C"],
    ["How to stop an interval timer in Javascript?","clearInterval","clearTimer","intervalOver","A"],
    ["How do we write a comment in javascript?","/**/","//","#","B"],
    
];


// Display function
function DisplayQuestion() {
    board = document.getElementById("board");
    if (pos >= questions.length) 
    {
        board.innerHTML = '<h2>You got ' + Cor + ' of ' + questions.length + '</h2>';
        document.getElementById("status").innerHTML = "Quiz Completed!🎉";
        pos = 0;
        Cor = 0;
        return false;
    }
    document.getElementById("status").innerHTML = "Question " + (pos + 1) + " of " + questions.length ;
    qus=questions[pos] [0];
    A=questions[pos] [1];
    B=questions[pos] [2];
    C=questions[pos] [3];
    
    board.innerHTML="<h3>" + qus + "</h3>";
    board.innerHTML+="<label ><input type ='radio' name='choices' value='A'>" + A + "<label><br>";
    board.innerHTML+="<label ><input type ='radio' name='choices' value='B'>" + B + "<label> <br>";
    board.innerHTML+="<label ><input type ='radio' name='choices' value='C'>" + C + "<label><br><br>";
    board.innerHTML+="<button onclick='checkAnswer()'class='submit_btn' > Submit</button>";

}
function checkAnswer()
{
    var choice;
    choices=document.getElementsByName("choices");
    for (var i=0;i<choices.length;i++)
    {
        if(choices[i].checked)
        {
            choice=choices[i].value;
        }

    }
    if (choice == questions[pos][4])
    {
        Cor++;
    }
 pos++;
 DisplayQuestion();
}