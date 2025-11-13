import express from "express";


const host = "0.0.0.0";
const porta = 3000;
var listaUsuarios = [];

const server = express();

server.use(express.urlencoded({extended: true}));

server.get("/", (requisicao, resposta) => {
    resposta.send(`
        <DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <title>Menu do Sistema</title>
            </head>
            <body>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">MENU</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Cadastros
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="/cadastrofornecedor">Fornecedores</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/login">login</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/logout">Sair</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </html>
    `);
});

server.get("/cadastrofornecedor", (requisicao,resposta) => {
    resposta.send(`
        <DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <title>Menu do Sistema</title>
            </head>
            <body>
                <div class="container">
                    <h1 class="text-center border m-3 p-3 bg-light">Cadastro de Fornecedores</h1>
                    <form method="POST" action="/adicionarUsuario" class="row g-3 m-3 p-3 bg-light">

                            <div class="col-md-4">
                                <label for="cnpj" class="form-label">CNPJ</label>
                                <input type="text" class="form-control" id="cnpj" name="cnpj">
                            </div>


                            <div class="col-md-4">
                                <label for="nome_f" class="form-label">Nome do Fornecedor</label>
                                <input type="text" class="form-control" id="nome_f" name="nome_f">
                            </div>


                            <div class="col-md-4">
                                <label for="nome_fan" class="form-label">Nome Fantasia</label>
                                <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" class="form-control" id="nome_fan" name="nome_fan" aria-describedby="inputGroupPrepend">
                                </div>
                            </div>


                            <div class="col-md-6">
                                <label for="endereco" class="form-label">Endereço</label>
                                <input type="text" class="form-control" id="endereco" name="endereco">
                            </div>


                            <div class="col-md-6">
                                <label for="cidade" class="form-label">Cidade</label>
                                <input type="text" class="form-control" id="cidade" name="cidade">
                            </div>


                            <div class="col-md-3">
                                <label for="uf" class="form-label">UF</label>
                                <select class="form-select" id="uf" name="uf">
                                    <option selected disabled value="">Escolha um estado...</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                            </div>


                            <div class="col-md-3">
                                <label for="cep" class="form-label">Cep</label>
                                <input type="text" class="form-control" id="cep" name="cep">
                            </div>


                            <div class="col-md-6">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" id="email" name="email">
                            </div>


                            <div class="col-md-6">
                                <label for="tel" class="form-label">Telefone</label>
                                <input type="text" class="form-control" id="tel" name="tel">
                            </div>


                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Cadastrar</button>
                                <a class="btn btn-secondary" href="/">Voltar</a>
                            </div>
                    </form>
                </div>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </html>

    `);
})

server.post('/adicionarUsuario', (requisicao, resposta) => {
    const cnpj = requisicao.body.cnpj;
    const nome_f = requisicao.body.nome_f;
    const nome_fan = requisicao.body.nome_fan;
    const endereco = requisicao.body.endereco;
    const cidade = requisicao.body.cidade;
    const uf = requisicao.body.uf;
    const cep = requisicao.body.cep;
    const email = requisicao.body.email;
    const tel = requisicao.body.tel;

    if (cnpj && nome_f && nome_fan && endereco && cidade && uf && cep && email && tel){

        listaUsuarios.push({cnpj, nome_f, nome_fan,endereco, cidade, uf, cep, email, tel});
        resposta.redirect("/listarfornecedor");
    }
    else{

        let conteudo = `
        
        <DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <title>Menu do Sistema</title>
            </head>
            <body>
                <div class="container">
                    <h1 class="text-center border m-3 p-3 bg-light">Cadastro de Usuários</h1>
                    <form method="POST" action="/adicionarUsuario" class="row g-3 m-3 p-3 bg-light">
                    
                            <div class="col-md-4">
                                <label for="cnpj" class="form-label">CNPJ</label>

                                <input type="text" class="form-control" id="cnpj" name="cnpj" value="${cnpj}">
                            
                            `;
        if (!cnpj){
            conteudo += `
            <div>
                <p class="text-danger">Por favor, informe o CNPJ</p>
            </div>
        `
        }

        conteudo += `</div>
                            <div class="col-md-4">
                                <label for="nome_f" class="form-label">Nome do Fornecedor</label>
                                <input type="text" class="form-control" id="nome_f" name="nome_f" value="${nome_f}">
                            `
        if (!nome_f){
        
        conteudo += `
            <div>
                <p class="text-danger">Por favor, informe o Nome do Fornecedor</p>
            </div>
        `;
        }

        conteudo+= `</div>
                            <div class="col-md-4">
                                <label for="nome_fan" class="form-label">Nome Fantasia</label>
                                <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" class="form-control" id="nome_fan" name="nome_fan" aria-describedby="inputGroupPrepend" value="${nome_fan}">
                                </div>
                            `;
        if (!nome_fan){

            conteudo += `
                <div>
                    <p class="text-danger">Por favor, informe o nome Fantasia</p>
                </div>
            `;
        }

        conteudo +=`</div>
                        <div class="col-md-6">
                                <label for="endereco" class="form-label">Endereço</label>
                                <input type="text" class="form-control" id="endereco" name="endereco" value="${endereco}">
        
        `;
        if (!endereco){

            conteudo += `
                <div>
                    <p class="text-danger">Por favor, informe o Endereço</p>
                </div>
            `;
        }

        conteudo += `</div>
                            <div class="col-md-6">
                                <label for="cidade" class="form-label">Cidade</label>
                                <input type="text" class="form-control" id="cidade" name="cidade" value="${cidade}">
                            `;

        if (!cidade){
            conteudo += `
            <div>
                <p class="text-danger">Por favor, informe a cidade</p>
            </div>`
        }

        conteudo += `</div>
                            <div class="col-md-3">
                                <label for="uf" class="form-label">UF</label>
                                <select class="form-select" id="uf" name="uf" value="${uf}">
                                    <option selected disabled value="">Escolha um estado...</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                            `;
        if (!uf){
            conteudo += `
            <div>
                <p class="text-danger">Por favor, informe a uf</p>
            </div>`
        }

        conteudo += `</div>
                            <div class="col-md-3">
                                <label for="cep" class="form-label">Cep</label>
                                <input type="text" class="form-control" id="cep" name="cep" value="${cep}">
                              
                             `;
        if (!cep){
            conteudo += `
            <div>
                <p class="text-danger">Por favor, informe o cep</p>
            </div>`
        }

         conteudo += `</div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" id="email" name="email" value="${email}">
                              
                             `;
        if (!email){
            conteudo += `
            <div>
                <p class="text-danger">Por favor, informe o Email</p>
            </div>`
        }

         conteudo += `</div>
                             <div class="col-md-6">
                                <label for="tel" class="form-label">Telefone</label>
                                <input type="text" class="form-control" id="tel" name="tel" value="${tel}">
                              
                             `;
        if (!tel){
            conteudo += `
            <div>
                <p class="text-danger">Por favor, informe o telefone</p>
            </div>`
        }

        conteudo += `</div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Cadastrar</button>
                                <a class="btn btn-secondary" href="/">Voltar</a>
                            </div>
                    </form>
                </div>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </html>
        
        `;

        resposta.send(conteudo);

    }

    });

    server.get("/listarfornecedor", (requisicao, resposta) => {
    let conteudo = `
        <DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <title>Lista de Fornecedores</title>
            </head>
            <body>
                <div class="container">
                    <h1 class="text-center border m-3 p-3 bg-light">Lista de Fornecedores</h1>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Cnpj</th>
                                <th>Nome do fornecedor</th>
                                <th>Nome Fantasia</th>
                                <th>Endereço</th>
                                <th>Cidade</th>
                                <th>UF</th>
                                <th>Cep</th>
                                <th>Email</th>
                                <th>Telefone</th>
                            </tr>
                        </thead>
                        <tbody>`;
    for (let i = 0; i < listaUsuarios.length; i++) {
        conteudo += `
            <tr>
                <td>${listaUsuarios[i].cnpj}</td>
                <td>${listaUsuarios[i].nome_f}</td>
                <td>${listaUsuarios[i].nome_fan}</td>
                <td>${listaUsuarios[i].endereco}</td>
                <td>${listaUsuarios[i].cidade}</td>
                <td>${listaUsuarios[i].uf}</td>
                <td>${listaUsuarios[i].cep}</td>
                <td>${listaUsuarios[i].email}</td>
                <td>${listaUsuarios[i].tel}</td>
            </tr>
        `;
    }
    conteudo+=`
                        </tbody>
                    </table>
                    <a class="btn btn-secondary" href="/cadastroUsuario">Voltar</a>
                </div>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </html>
    `
    resposta.send(conteudo);
});

server.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`)
});