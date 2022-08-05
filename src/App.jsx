import "./App.css"

function App() {

  return (
    <div className="app">

      <div className="logo">
        <img src="../images/logo.svg" alt="" />
      </div>

      <div className="left_area">
        <div className="form_box">
          <div className="main_text">
            <div class='main_text_big'>
              <img src='../images/log-in.svg'></img>
              <h1>Faça Seu Login </h1>
            </div>
            <p>Entre com suas informações de cadastro</p>
          </div>

          <div class='email_form'>
            <label htmlFor="email" class="inputlabel">E-mail</label>
            <input type="text" name="email" id="" class='textinput' placeholder="Digite seu Email" />
            <img src='../images/mail.svg' class="inputicon"></img>
          </div>

          <div className="senha_form">
            <label htmlFor="senha" class="inputlabel">Senha</label>
            <img src='../images/lock.svg ' class="inputicon"></img>
            <input type="password" name="senha" id="" class='textinput' placeholder="Digite sua Senha" />
            <img src='../images/eye.svg' class="inputicon"></img>
          </div>

          <div class="password_configs">
            <div class='checkbox_configs'>
              <input type="checkbox" name="keep_logged" />
              <label htmlFor="keep_logged">Lembre-me</label>
            </div>
            <strong>Esqueci minha Senha</strong>
          </div>

          <button class='logbutton'>ENTRAR</button>
          <p class='undebutton_text'>Não tem uma conta? <strong>Registre-se</strong></p>
        </div>
      </div>
      <div className="right_area"></div>

    </div>
  )
}

export default App
