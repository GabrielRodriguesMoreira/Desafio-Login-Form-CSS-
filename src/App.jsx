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
        <form className="form_box">
          <div className="main_text">
            <div className='main_text_big'>
              <img src='./log-in.svg'></img>
              <h1>Faça Seu Login </h1>
            </div>
            <p>Entre com suas informações de cadastro.</p>
          </div>

          <div className='email_form'>
            <label htmlFor="email" className="inputlabel">E-mail</label>
            <input type="email" name="email" id="" className='textinput' placeholder="Digite seu Email" autoComplete="email" minLength={3} required />
            <img src='./mail.svg' className="inputicon"></img>
          </div>

          <div className="senha_form">
            <label htmlFor="senha" className="inputlabel">Senha</label>
            <input type="password" name="senha" id="password" className='textinput' placeholder="Digite sua Senha" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
            <img src='./lock.svg ' className="inputicon"></img>
            <img src='./eye.svg' className="inputicon" id='eye' onClick={password_visibility}></img>
          </div>

          <div className="password_configs">
            <div className='checkbox_configs'>
              <input type="checkbox" name="keep_logged" />
              <label htmlFor="keep_logged">Lembre-me</label>
            </div>
            <a href="#"><strong>Esqueci minha Senha</strong> </a>
          </div>

          <button type="submit" className='logbutton'>ENTRAR</button>
          <a href="#" className='undebutton_text'>Não tem uma conta? <strong>Registre-se</strong></a>
        </form>
      </div>
      <div className="right_area">

        <picture>
          <source media="(min-width: 1000px)" srcSet="./side-image-2x.jpg" />
          <source media="(min-width: 700px)" srcSet="./side-image.jpg" />
          <img src="./side-image.png" alt="IfItDoesntMatchAnyMedia" />
        </picture>
      </div>
    </div>
  )
}

export default App
