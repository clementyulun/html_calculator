let keyboard = {
    flag_finish: 0,
    sent: function (btn) {
        document.getElementById("dis_cat").style.display = 'none';
        document.getElementById("ok_cat").style.display = 'none';
        if (this.flag_finish == 0) {
            input_str = btn.innerText;

            // 如果輸入的是普通運算符號或數字，將輸入附加到顯示中，並存入 Caculator
            if (input_str != '⌫' && input_str != 'C' && input_str != '=') {

                document.getElementById("now_display").value += input_str;
                Calculator.buffer(input_str);

            // 如果輸入的是"更正"，從顯示中拿掉最後一個字元，並呼叫 Calculator.correct()
            } else if (input_str == '⌫') {
                display_str = document.getElementById("now_display").value;
                document.getElementById("now_display").value = display_str.substring(0, display_str.length - 1);
                Calculator.correct();

            // 如果輸入的是"="，呼叫 Calculator.evaluate() 對 buffer 中的字串進行計算
            // 如果有算出結果，則代表該次計算完成
            } else if (input_str == '=') {

                let result = Calculator.evaluate();
                if (result != 'error' && result != "") {
                    this.flag_finish = 1;
                }

            // 若輸入的是 'C'，清空顯示並清空暫存
            } else {

                document.getElementById("now_display").value = '';
                Calculator.clear();

            }

        // 計算完成後，使用者按下任一鍵，將算計過程放到保存區，並開始新的計算
        } else {

            // 將結果放到保存區
            document.getElementById("last_record").value = document.getElementById("now_display").value;
            document.getElementById("now_display").value = "";
            // 清空顯示與暫存
            Calculator.clear();
            this.flag_finish = 0;
            // 輸入使用者剛剛輸入的符號
            this.sent(btn);

        }
    }
}


let Calculator = {
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
            // 如果 buffer 裡面有東西，利用 eval() 對字串進行計算
            if (this.input_buf != "") {
                let ans = eval(this.input_buf);
                console.log(ans);
                console.log(parseInt(ans));
                // 若答案非整數，則取小數點下兩位
                if(parseInt(ans) == ans){
                    document.getElementById("now_display").value += ' = ' + ans;
                }else{
                    document.getElementById("now_display").value += ' = ' + ans.toFixed(2);
                }
                // 顯示計算成功畫面
                if(document.getElementById("ani_switch").checked){
                    answer_ani();
                }
                return ans;
            // 如果計算時 buffer 裡面沒有東西，則傳回空字串，防止顯示 undenfined
            }else{
                // 顯示計算失敗畫面
                error_ani()
                return "";      
            }

        } catch (exception) {
            if(document.getElementById("ani_switch").checked){
                // 顯示計算失敗畫面
                error_ani();
            }else{
                window.alert( "計算式輸入錯誤，請再檢查一次" );
            }
           
            return 'error';
        }
    }
}