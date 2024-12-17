function send(){
let valor =  document.getElementById("caixadetexto").value
let real = valor.toLowerCase()
switch(real) {
case "botafogo":
document.getElementById("exit").innerHTML = "79 pts"
let botafogo = document.getElementById("exit2")
botafogo.innerHTML = "Campeão"
botafogo.style.color = "green"
break
case "palmeiras":
document.getElementById("exit").innerHTML = "73 pts"
break
case "flamengo":
document.getElementById("exit").innerHTML = "70 pts"
break
case "fortaleza":
document.getElementById("exit").innerHTML = "68 pts"
case "internacional":
document.getElementById("exit").innerHTML = "65 pts"
break
case "são paulo":
document.getElementById("exit").innerHTML = "59 pts"
break
case "corinthias":
document.getElementById("exit").innerHTML = "56 pts"
let corinthias = document.getElementById("exit2")
corinthias.style.color = "green"
corinthias.innerHTML = "Pré libertadores"
break
case "bahia":
document.getElementById("exit").innerHTML = "53 pts"
break
case "cruzeiro":
document.getElementById("exit").innerHTML = "52 pts"
break
case "vasco":
document.getElementById("exit").innerHTML = "50 pts"
break
case "vitória":
document.getElementById("exit").innerHTML = "47 pts"
break 
case "atlético-mg":
document.getElementById("exit").innerHTML = "47 pts"
break
case "fluminense":
document.getElementById("exit").innerHTML = "46 pts"
break
case "grêmio":
document.getElementById("exit").innerHTML = "45 pts"
break
case "juventude":
document.getElementById("exit").innerHTML = "45 pts"
break
case "bragantino":
document.getElementById("exit").innerHTML = "44 pts"
break
case "athletico-pr":
document.getElementById("exit").innerHTML = "42 pts"
break
case "criciúma":
document.getElementById("exit").innerHTML = "38 pts"
break
case "atlético-go":
document.getElementById("exit").innerHTML = "30 pts"
break
case "cuiabá":
document.getElementById("exit").innerHTML = "30 pts"
let cuiaba = document.getElementById("exit2")
cuiaba.innerHTML = "Rebaixado"
cuiaba.style.color = "red"

break
default:
document.getElementById("exit").innerHTML = "Esse time não existe"
    }
}