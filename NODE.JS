let display=document.querySelector("#display")
        function press(value){
            display.value +=value;
        }
        function clearOne(){
            display.value=display.value.slice(0,-1);
        }
        function allClear(){
            display.value="null";
        }
        function calc(){
            if(display.value !==""){
                display.value=eval(display.value);
            }
        }