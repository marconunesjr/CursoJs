< !DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd" >
    <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <title>Formulário HTML - Cadastro de Clientes
                <meta charset="utf-8">
                    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" />
                    <script type="text/javascript">
                        function validarFormulario(formulario){
                            //o código da função está no tópico “Validação no lado Cliente – Javascript”
                        }
                    </script>
                </head>
                <body>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <form action="processa_cliente.php" name="form_clientes" method="post" onsubmit="return validarFormulario(this);">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h3>Cadastro de Clientes</h3>
                                                </div>
                                                <div class="card-body">
                                                    <div class="form-group">
                                                        <label for="nome_cliente">Nome</label>
                                                        <input type="text" class="form-control" id="nome_cliente" name="nome_cliente" placeholder="Seu nome" >
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="cpf_cliente">CPF</label>
                                                        <input type="text" class="form-control" id="cpf_cliente" name="cpf_cliente" placeholder="Seu CPF" title="Digite apenas números" >
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="email_cliente">Endereço de E-mail</label>
                                                        <input type="text" class="form-control" id="email_cliente" name="email_cliente" placeholder="Seu e-mail" >
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="data_nascimento_cliente">Data de Nascimento</label>
                                                        <input type="text" class="form-control" id="data_nascimento_cliente" name="data_nascimento_cliente" placeholder="Sua data de nascimento" >
                                                    </div>
                                                    <div class="form-group text-center">
                                                        <button type="submit" class="btn btn-primary">Enviar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <script src="https://code.jquery.com/jquery-3.5.1.min.js">>
                        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js">>
                        </body>
                    </html>