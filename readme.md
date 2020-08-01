#### EEIT18-網頁設計
## Assignment 2 - 網頁計算機
## Javascript 規劃
  
* Keyboard
    >Functions
    >
    >   * sent ( ) <br> 
    Depends on user input, it wil sent a string that user just type in to <b>Calculator.buffer()</b>, call <b>Calculator.correct()</b> or clear the buffer by calling <b>Calculator.clear()</b>.<br><br>
    It also Responsible for refreshing the display.
    <br> &nbsp;
    
  
* Calculator
    >Variables
    >
    >   * input_buf : str
    >
    >Functions
    >
    >   * buffer ( usr_input: str ) <br>
    Put usr_input into <b>input_buf</b>, and transfer &nbsp;' x ' -> ' * '&nbsp;&nbsp;,&nbsp;&nbsp; ' ÷ ' -> ' / ' .
    >
    >   * correct( )<br>
    Remove the latest element from <b>input_buf</b>.
    >
    >   * clear()<br>
    Clear the <b>input_buf</b>.
    >   * calculate( input_buf: str ) -> str<br>
    Use <b>eval()</b> to calculate the <b>input_buf</b>, and return the answer. If <b>eval()</b> get error, return 'error'.
    <br> &nbsp;



