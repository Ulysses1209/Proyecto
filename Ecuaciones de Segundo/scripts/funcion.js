function operaciones(op)
{
    var ops = {
        variable1: function Numeros1(n1, n2, n3) {
        y=(parseInt(n2)*parseInt(n2));
        z=4*((parseInt(n1))*(parseInt(n3)));
        d=y-z;
        e=Math.sqrt(d) + (parseInt(-n2))/2*(parseInt(n1));
        return(e);
        },
        variable2: function Numeros2(n1, n2,  n3) {
        y=(parseInt(n2)*parseInt(n2));
        z=4*((parseInt(n1))*(parseInt(n3)));
        d=y-z;
        e=Math.sqrt(d) - (parseInt(-n2))/2*(parseInt(n1));
        return(e);
        }
    };

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;

    if (isNaN(parseFloat(document.getElementById('num1').value))) {
        document.getElementById('resultado').innerHTML="<span style='color: red;'>Por favor, ingrese un número A</span>";
        document.getElementById("num1").innerText = "0";
        document.getElementById("num1").focus();
        }
        else if (isNaN(parseFloat(document.getElementById('num2').value))) {
        document.getElementById('resultado').innerHTML="<span style='color: red;'>Por favor, ingrese un número B</span>";
        document.getElementById("num2").innerText = "0";
        document.getElementById("num2").focus();
    }
        else if (isNaN(parseFloat(document.getElementById('num3').value))) {
        document.getElementById('resultado').innerHTML="<span style='color: red;'>Por favor, ingrese un número C</span>";
        document.getElementById("num3").innerText = "0";
        document.getElementById("num3").focus();
    }
    else {
        switch(op) {
            case 'variable1':
                var resultado = ops.variable1(num1, num2, num3);
                document.getElementById('resultado').innerHTML="<span style='color: purple;'>"+resultado+"</span>";
                break;
            case 'variable2':
                var resultado = ops.variable2(num1, num2, num3);
                document.getElementById('resultado').innerHTML="<span style='color: purple;'>"+resultado+"</span>";
                break;
        }
    }

}


