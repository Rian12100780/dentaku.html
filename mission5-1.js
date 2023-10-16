function button_equal(){
    var i=document.getElementById("formula").innerText;

    var datetime = new Date();
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var day = datetime.getDate();
    var datetimeview = year+""+month+""+day;
    
    if(i.includes("÷0")){document.getElementById("result").innerText=Error;}
    
    else if(i==""){
        document.getElementById("formula").innerText="";
        document.getElementById("result").innerText="　";
    }

    else if(i==datetimeview){document.getElementById("result").innerText="Have a Nice Day！";}

    else if(i==="20001220"){document.getElementById("result").innerText="Happy Birthday to Me！"}

    else if(i==="19550621"){document.getElementById("result").innerText="Happy Birthday to Miffy♡"}

    else{
        var result=i.replace(/÷/g, '/');
        var result=result.replace(/×/g, '*');
        var result=eval(result);
        var result=Math.round(result*100000000000)/100000000000;
        document.getElementById("result").innerText=result;
    }  

}

function button_migi(){
    document.getElementById("result").innerText="　";
    var maxLength=19;
    var originalText=document.getElementById("formula").innerText;
    if(originalText.length>maxLength){document.getElementById("formula").innerText=originalText.substring(0,20);}
    else{
        var i=document.getElementById("formula").innerText;
         if(i=="" || i.slice(-1)=="×" || i.slice(-1)=="-" || i.slice(-1)=="+" ||i.slice(-1)=="÷" || i.slice(-1)==".")
         {var num=i;}
         else{var i=document.getElementById("formula").innerText;
         var num=i+")";}
         document.getElementById("formula").innerText=num;
    }
}

function button_hidari(){
    document.getElementById("result").innerText="　";
    var maxLength=19;
    var originalText=document.getElementById("formula").innerText;
    if(originalText.length>maxLength){document.getElementById("formula").innerText=originalText.substring(0,20);}
    else{
        var i=document.getElementById("formula").innerText;
        if(i.slice(-1)=="1" || i.slice(-1)=="2" || i.slice(-1)=="3" ||i.slice(-1)=="4" || i.slice(-1)=="5" || i.slice(-1)=="6" || i.slice(-1)=="7" || i.slice(-1)=="8" || i.slice(-1)=="9" || i.slice(-1)=="0" || i.slice(-1)=="." || i.slice(-1)==")")
        {var num=i;}
        else{var i=document.getElementById("formula").innerText;
        var num=i+"(";}
        document.getElementById("formula").innerText=num;
    }    
}

function button_9(){
    document.getElementById("result").innerText="　";
    var maxLength=19;
    var originalText=document.getElementById("formula").innerText;
    if(originalText.length>maxLength){document.getElementById("formula").innerText=originalText.substring(0,20);}
    else{
        var i=document.getElementById("formula").innerText;
        if (i.slice(-2)=="+0" || i.slice(-2)=="-0" || i.slice(-2)=="×0" || i==="0") {var num=i;}
        else{var num=i+"9";}
        document.getElementById("formula").innerText=num;
    }
}


function button_8(){
    document.getElementById("result").innerText="　";
    var maxLength=19;
    var originalText=document.getElementById("formula").innerText;
    if(originalText.length>maxLength){document.getElementById("formula").innerText=originalText.substring(0,20);}
    else{
        var i=document.getElementById("formula").innerText;
        if (i.slice(-2)=="+0" || i.slice(-2)=="-0" || i.slice(-2)=="×0" || i==="0") {var num=i;}
        else{var num=i+"8";}
        document.getElementById("formula").innerText=num;
    }
}

function button_7(){
    document.getElementById("result").innerText="　";
    var maxLength=19;
    var originalText=document.getElementById("formula").innerText;
    if(originalText.length>maxLength){document.getElementById("formula").innerText=originalText.substring(0,20);}
    else{
        var i=document.getElementById("formula").innerText;
        if (i.slice(-2)=="+0" || i.slice(-2)=="-0" || i.slice(-2)=="×0" || i==="0") {var num=i;}
        else{var num=i+"7";}
        document.getElementById("formula").innerText=num;
    }
}

function button_6(){
    document.getElementById("result").innerText="　";
    var maxLength=19;
    var originalText=document.getElementById("formula").innerText;
    if(originalText.length>maxLength){document.getElementById("formula").innerText=originalText.substring(0,20);}
    else{
        var i=document.getElementById("formula").innerText;
        if (i.slice(-2)=="+0" || i.slice(-2)=="-0" || i.slice(-2)=="×0" || i==="0") {var num=i;}
        else{var num=i+"6";}
        document.getElementById("formula").innerText=num;
    }
}

function button_5(){
    document.getElementById("result").innerText="　";
    var maxLength=19;
    var originalText=document.getElementById("formula").innerText;
    if(originalText.length>maxLength){document.getElementById("formula").innerText=originalText.substring(0,20);}
    else{
        var i=document.getElementById("formula").innerText;
        if (i.slice(-2)=="+0" || i.slice(-2)=="-0" || i.slice(-2)=="×0" || i==="0") {var num=i;}
        else{var num=i+"5";}
        document.getElementById("formula").innerText=num;
    }
}

function button_4(){
    document.getElementById("result").innerText="　";
    var maxLength=19;
    var originalText=document.getElementById("formula").innerText;
    if(originalText.length>maxLength){document.getElementById("formula").innerText=originalText.substring(0,20);}
    else{
        var i=document.getElementById("formula").innerText;
        if (i.slice(-2)=="+0" || i.slice(-2)=="-0" || i.slice(-2)=="×0" || i==="0") {var num=i;}
        else{var num=i+"4";}
        document.getElementById("formula").innerText=num;
    }
}

function button_3(){
    document.getElementById("result").innerText="　";
    var maxLength=19;
    var originalText=document.getElementById("formula").innerText;
    if(originalText.length>maxLength){document.getElementById("formula").innerText=originalText.substring(0,20);}
    else{
        var i=document.getElementById("formula").innerText;
        if (i.slice(-2)=="+0" || i.slice(-2)=="-0" || i.slice(-2)=="×0" || i==="0") {var num=i;}
        else{var num=i+"3";}
        document.getElementById("formula").innerText=num;
    }
}

function button_2(){
    document.getElementById("result").innerText="　";
    var maxLength=19;
    var originalText=document.getElementById("formula").innerText;
    if(originalText.length>maxLength){document.getElementById("formula").innerText=originalText.substring(0,20);}
    else{
        var i=document.getElementById("formula").innerText;
        if (i.slice(-2)=="+0" || i.slice(-2)=="-0" || i.slice(-2)=="×0" || i==="0") {var num=i;}
        else{var num=i+"2";}
        document.getElementById("formula").innerText=num;
    }
}

function button_1(){
    document.getElementById("result").innerText="　";
    var maxLength=19;
    var originalText=document.getElementById("formula").innerText;
    if(originalText.length>maxLength){document.getElementById("formula").innerText=originalText.substring(0,20);}
    else{
        var i=document.getElementById("formula").innerText;
        if (i.slice(-2)=="+0" || i.slice(-2)=="-0" || i.slice(-2)=="×0" || i==="0") {var num=i;}
        else{var num=i+"1";}
        document.getElementById("formula").innerText=num;
    }
}

function button_0(){
    document.getElementById("result").innerText="　";
    var maxLength=19;
    var originalText=document.getElementById("formula").innerText;
    if(originalText.length>maxLength){document.getElementById("formula").innerText=originalText.substring(0,20);}
    else{
        var i=document.getElementById("formula").innerText;
        if (i.slice(-2)=="+0" || i.slice(-2)=="-0" || i.slice(-2)=="×0" || i.slice(-2)=="÷0" || i.slice(-2)=="(0" || i==="0") {var num=i;}
        else{var num=i+"0";}
        document.getElementById("formula").innerText=num;
    }
}

function button_00(){
    document.getElementById("result").innerText="　";
    var maxLength=18;
    var originalText=document.getElementById("formula").innerText;
    if(originalText.length>maxLength){document.getElementById("formula").innerText=originalText.substring(0,20);}
    else{
        var i=document.getElementById("formula").innerText;
        if (i.slice(-2)=="+0" || i.slice(-2)=="-0" || i.slice(-2)=="×0" || i.slice(-2)=="÷0" || i.slice=="(0" || i.slice(-1)=="÷" || i=="" || i.slice(-1)=="+" || i.slice(-1)=="-" || i.slice(-1)=="×" || i.slice(-1)=="÷" || i.slice(-1)=="(") {var num=i;}
        else{var num=i+"0"+"0";}
        document.getElementById("formula").innerText=num;
    } 
}



function button_plus(){
    document.getElementById("result").innerText="　";
    var maxLength=19;
    var originalText=document.getElementById("formula").innerText;
    if(originalText.length>maxLength){document.getElementById("formula").innerText=originalText.substring(0,20);}
    else{
        var i=document.getElementById("formula").innerText;
        if (i.slice(-1)==="+" || i.slice(-1)==="-" || i.slice(-1)==="×" || i.slice(-1)==="÷" || i==""|| i.slice(-1)===".") {var num=i;}
        else{var num=i+"+";}
        document.getElementById("formula").innerText=num;
    }
}

function button_minus(){
    document.getElementById("result").innerText="　";
    var maxLength=19;
    var originalText=document.getElementById("formula").innerText;
    if(originalText.length>maxLength){document.getElementById("formula").innerText=originalText.substring(0,20);}
    else{
        var i=document.getElementById("formula").innerText;
        if (i.slice(-1)==="+" || i.slice(-1)==="-" || i.slice(-1)===".") {var num=i;}
        else{var num=i+"-";}
        document.getElementById("formula").innerText=num;
    }
}

function button_div(){
    document.getElementById("result").innerText="　";
    var maxLength=19;
    var originalText=document.getElementById("formula").innerText;
    if(originalText.length>maxLength){document.getElementById("formula").innerText=originalText.substring(0,20);}
    else{
        var i=document.getElementById("formula").innerText;
        if (i.slice(-1)==="+" || i.slice(-1)==="-" || i.slice(-1)==="×" || i.slice(-1)==="÷" || i==""|| i.slice(-1)===".") {var num=i;}
        else{var num=i+"÷";}
        document.getElementById("formula").innerText=num;
    }
}

function button_mult(){
    document.getElementById("result").innerText="　";
    var maxLength=19;
    var originalText=document.getElementById("formula").innerText;
    if(originalText.length>maxLength){document.getElementById("formula").innerText=originalText.substring(0,20);}
    else{
        var i=document.getElementById("formula").innerText;
        if (i.slice(-1)==="+" || i.slice(-1)==="-" || i.slice(-1)==="×" || i.slice(-1)==="÷" || i==""|| i.slice(-1)===".") {var num=i;}
        else{var num=i+"×";}
        document.getElementById("formula").innerText=num;
    }
}

function button_point(){
    document.getElementById("result").innerText="　";
    var maxLength=19;
    var originalText=document.getElementById("formula").innerText;
    if(originalText.length>maxLength){document.getElementById("formula").innerText=originalText.substring(0,20);}
    else{
        var i=document.getElementById("formula").innerText;
        var numbers = i.match(/[-]{0,1}[\d]*[\.]{0,1}[\d]+/g);
        if (numbers && numbers.length > 0) {var lastNumber = numbers[numbers.length - 1];}
        
        if(lastNumber.includes(".")){var num=i;}
        else{
            if (i.slice(-1)==="+" || i.slice(-1)==="-" || i.slice(-1)==="×" || i.slice(-1)==="÷" || i=="" || i.slice(-1)===".") {var num=i;}
            else{var num=i+".";}
        }    
        document.getElementById("formula").innerText=num;
    }
}


function button_ac(){
    document.getElementById("formula").innerText="";
    document.getElementById("result").innerText="　";
}

function button_del(){
    var i=document.getElementById("formula").innerText;
    var num=i.slice(0, -1);
    document.getElementById("formula").innerText=num;
    document.getElementById("result").innerText="　";
}
