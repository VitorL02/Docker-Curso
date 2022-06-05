import redis
import json
from time import sleep
from random import randint


if __name__ == '__main__':
    r = redis.Redis(host='queue',port= 6379,db=0)
    # laço infinito pra continuar consumindo mensagem
    while True:
        mensagem = json.loads(r.blpop('sendr')[1])
        #Simula envio de email...
        print('Enviando email',mensagem['assunto'])
        sleep(randint(15,45))
        print('Mensagem ' , mensagem['assunto'],'enviada')