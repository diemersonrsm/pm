Algoritmo "atividade_12"

Var
idade:inteiro


Inicio
escreva("qual e a sua idade:")
leia(idade)
se idade<13 entao
   escreva("voce e uma criança")
   senao
        se (idade>12) e (idade<18) entao
        escreva("voce e um adolecente")
           senao
                se (idade>17) e (idade<60) entao
                   escreva("voce e um adulto")
                    senao
                   escreva("voce e um idoso")
                fimse
           fimse
   fimse
        


Fimalgoritmo