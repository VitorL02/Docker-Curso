FROM debian
LABEL mantainer="Vitor Lucas Crispim"
ARG S3_BUCKET=files
ENV S3_BUCKET=${S3_BUCKET}

# docker container run  build_com_argumentos -c 'echo $S3_BUCKET' retorna 'files' que e a variavel de argumento que foi passada em arg
# docker image build --build-arg S3_BUCKET=myapp -t build_com_argumentos . altera o argumento de S3_BUCKET para myapp, realizando o comando acima ele retorna myapp

