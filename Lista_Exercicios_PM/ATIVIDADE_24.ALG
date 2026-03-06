Algoritmo "atividade_24"

Var
num,c,sum: inteiro


Inicio

escreva ("Insira um numero:")
leia (num)

enquanto num <> 0 faca
         c <- c + 1
         sum <- sum + num
         escreva("Digite outro número: ")
         leia(num)
fimenquanto

escreva ("A quantidade de números digitados foi:", c)
escreval ("soma total:", sum)

Fimalgoritmo