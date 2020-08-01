var keyboard = {
    flag_finish: 0,
    sent: function (btn) {
        if (this.flag_finish == 0) {
            input_str = btn.innerText;

            if (input_str != '⌫' && input_str != 'C' && input_str != '=') {

                document.getElementById("now_display").value += input_str;
                Calculator.buffer(input_str);

            } else if (input_str == '⌫') {

                display_str = document.getElementById("now_display").value;
                document.getElementById("now_display").value = display_str.substring(0, display_str.length - 1);
                Calculator.correct();

            } else if (input_str == '=') {

                let result = Calculator.evaluate();
                if (result != 'error' && result != "") {
                    this.flag_finish = 1;
                }

            } else {

                document.getElementById("now_display").value = '';
                Calculator.clear();

            }

        } else {

            document.getElementById("last_record").value = document.getElementById("now_display").value;
            document.getElementById("now_display").value = "";
            Calculator.clear();
            this.flag_finish = 0;
            this.sent(btn);

        }
    }
}




var Calculator = {
    input_buf: "",
    buffer: function (usr_input) {
        if (usr_input == '×') {

            this.input_buf += '*';

        } else if (usr_input == '÷') {

            this.input_buf += '/';

        } else {

            this.input_buf += usr_input;

        }
    },

    correct: function () {
        this.input_buf = this.input_buf.substring(0, this.input_buf.length - 1);
    },

    clear: function () {
        this.input_buf = "";
    },

    evaluate: function () {
        try {
            if (this.input_buf != "") {

                let ans = eval(this.input_buf);
                document.getElementById("now_display").value += ' = ' + ans;
                return ans;

            }else{

                return "";
                
            }

        } catch (exception) {
            window.alert( "計算式輸入錯誤，請再檢查一次" );
            return 'error';
        }
    }
}