<h1 align="center">
  <img src="src/assets/images/certifacil.png"  width="200px;" alt="Logo">
</h1>

<h3 align="center">
Web application for event management.
</h3>


# Índice

- [Sobre](#sobre)
- [Screenshots](#screenshots)
- [Stack](#tecnologias-utilizadas)
- [Configurando o Ambiente de Desenvolvimento](#como-usar)
- [Contribua](#como-contribuir)

<a id="sobre"></a>

## :bookmark:  Sobre

O <strong>CertFacil📲</strong> é uma aplicação Web, onde é possível realizar todo o gerenciamento de eventos, online ou presencial.

</details>

<a id="screenshots"></a>

## :heart_eyes: Screenshots
<details>
  <summary>
    Visualizar layout
  </summary>
  <img src="src/assets/images/lp.png" alt="Landing Page">
  <img src="src/assets/images/cadastro.png" alt="Cadastro">
  <img src="src/assets/images/login.png" alt="Login">
  <img src="src/assets/images/home.png" alt="Home">

</details>

<a id="tecnologias-utilizadas"></a>

## :rocket: Stack

Esta aplicação foi desenolvida com as seguintes tecnologias:

- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)

<a id="como-usar"></a>

## :fire:  Configurando o Ambiente de Desenvolvimento

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://TheOnlyRealDevLanguage.org/en/)** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes, se você já tem o Node.js, então o **[NPM](https://www.npmjs.com/)** já vai estar disponível.
  - URL do servidor back-end: https://github.com/alessandroasouza/api_certificado_backend.git

1. Faça um clone :

```sh
  $ git clone https://github.com/jeffsoncavalcante/certfacil-front.git
```

2. Instalando o Angular:

```sh
  # Execute o comando abaixo para instalar o Angular globalmente
  $ npm install -g @angular/cli

```

3. Executando a Aplicação:

```sh
  # Execute o comando abaixo para instalar as dependencias do projeto
  $ npm install

  # Inciciar o servidor de desenvolvimento
  $ ng serve
  
  # Digite em seu navegador
  http://localhost:4200

```

4. Deploy da Aplicação:

```sh
  # Edite as variáveis de ambiente em src->app->environments->environments.prod.ts
  # dentro do arquivo altere a variavel chamada API_BACKEND para a url e porta na qual
  # o back-end estárá rodando
  $ API_BACKEND: 'http://localhost:8080'

  # Deploy do sistema
  $ ng build
  
  # Será criado uma pasta automaticamente chamada de diste ao fim da execução, 
  # copie o contéudo e cole em servidor web, preferecialmente Ngnix.

```

5. Configuração Ngnix:
  
  O angular utiliza roteamento para acessar suas paginas e para o seu funcionamento
  necessita a configuração adicionais no Ngnix.

```sh
  # Acesse o diretório Ngnix
  $ cd /etc/nginx/sites-available/

  # Edite o arquivo ngnix.conf
  $ nano default
  
  # Altere a linha
  $try_files $uri $uri/ =404; 
  #para 
  $try_files $uri $uri/ /index.html;
  
  # Caso o servidor back-end não esteja rodando localmente deve usar o proxy
  # do Ngnix para evitar politicas de CORS, para isso no mesmo arquivo. 
  # acima da linha /location, insira o seguinte codigo
  $  location /api { proxy_pass url_servidor_back-end; }
  # a url a ser inserida não deve conter os end-points, apenas o dominio/ip e a porta.
  # exemplo: http://teste.com.br:8080
  # Após as modificações o Ngnix deve ser reiniciado.
  

```


<a id="como-contribuir"></a>

## :heavy_check_mark: Como Contribuir

- Faça um Fork desse repositório

- Clone o repositório
```sh
  $ git clone https://github.com/<SEU_USUARIO_GIT>/little-friend.git
```
- Crie um branch com sua feature: `git checkout -b nome-da-feature`

- Comite suas mudanças: `git commit -m 'Feature: Breve descrição da feature'`

- Envie a feature: `git push origin nome-da-feature`

## :computer: Authors

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/beatrizalvesfel/">
        <img src="https://avatars.githubusercontent.com/u/44619862?v=4" width="100px;" alt="Beatriz Alves"/>
        <br />
        <sub>
          <b>@Beatriz Alves</b>
        </sub>
       </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/jeffson-vitor-dos-santos-cavalcante-24aa91192/">
        <img src="https://avatars.githubusercontent.com/u/63271061?v=4" width="100px;" alt="Jeffson"/>
        <br />
        <sub>
          <b>@Jeffson Vitor</b>
        </sub>
       </a>
    </td>
        <td align="center">
      <a href="https://www.linkedin.com/in/natalia-cardoso-64ba661b9/">
        <img src="https://avatars.githubusercontent.com/u/82422603?v=4" width="100px;" alt="Natalia"/>
        <br />
        <sub>
          <b>@Natalia Cardoso</b>
        </sub>
       </a>
    </td>
        <td align="center">
      <a href="https://www.linkedin.com/in/">
        <img src="https://avatars.githubusercontent.com/u/82421878?v=4" width="100px;" alt="Rodrigo"/>
        <br />
        <sub>
          <b>@Rodrigo da Hora</b>
        </sub>
       </a>
    </td>
  </tr>
</table>

## :memo:  License

Esse projeto está sob a licença MIT. Acesse o arquivo [LICENSE](LICENSE) para mais detalhes.
