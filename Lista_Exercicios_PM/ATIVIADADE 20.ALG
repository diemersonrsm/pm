Algoritmo "ativiadade 20"

Var
altura:real
peso:real
imc:real

Inicio
escreva("qual e a sua altura:")
leia (altura)
escreva("qual e a sua peso:")
leia(peso)

imc <- peso / (altura * altura)

se (imc < 18.6) entao
   escreva("abaixo do peso normal")
senao
 se (imc > 18.6) e (imc < 25)  entao
    escreva ("peso normal")
senao
 se (imc > 24.9) e (imc < 30)  entao
    escreva ("exesso de peso")
 senao
  se (imc > 29.9) e (imc < 35)  entao
     escreva ("obesidade classe 1")
 senao
  se (imc > 34.9) e (imc < 40)  entao
     escreva ("obesidade classe 2")
 senao
      escreva("obesidade classe 3")
 fimse
 fimse
 fimse
 fimse
 fimse

 
Fimalgoritmo