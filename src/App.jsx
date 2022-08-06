import "./App.css"

function App() {

  function password_visibility() {
    var elem = document.getElementById("password");
    if (elem.type === "password") {
      elem.type = "text";
    } else {
      elem.type = "password";
    }
  }

  return (
    <div className="app">
      <div className="left_area">
        <div className="logo">
          <img src="./logo.svg" alt="" />
        </div>
        <div className="form_box">
          <div className="main_text">
            <div class='main_text_big'>
              <img src='./log-in.svg'></img>
              <h1>Faça Seu Login </h1>
            </div>
            <p>Entre com suas informações de cadastro</p>
          </div>

          <div class='email_form'>
            <label htmlFor="email" class="inputlabel">E-mail</label>
            <input type="text" name="email" id="" class='textinput' placeholder="Digite seu Email" autocomplete="off" />
            <img src='./mail.svg' class="inputicon"></img>
          </div>

          <div className="senha_form">
            <label htmlFor="senha" class="inputlabel">Senha</label>
            <input type="password" name="senha" id="password" class='textinput' placeholder="Digite sua Senha" />
            <img src='./lock.svg ' class="inputicon"></img>
            <img src='./eye.svg' class="inputicon" id='eye' onClick={password_visibility}></img>
          </div>

          <div class="password_configs">
            <div class='checkbox_configs'>
              <input type="checkbox" name="keep_logged" />
              <label htmlFor="keep_logged">Lembre-me</label>
            </div>
            <a href="#"><strong>Esqueci minha Senha</strong> </a>
          </div>

          <button class='logbutton'>ENTRAR</button>
          <a href="#" class='undebutton_text'>Não tem uma conta? <strong>Registre-se</strong></a>
        </div>
      </div>
      <div className="right_area">
        <img src="./side-image.jpg" />
      </div>
    </div>
  )
}

export default App
