import './Rodape.css'

const Rodape = () => {
  return (
    <footer className='rodape'>
      <div>
        <ul className='rede-socias' >
          <li>
            <a href="https://facebook.com" target="blank">
              <img src="/images/fb.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="blank">
              <img src="/images/tw.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="blank">
              <img src="/images/ig.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div className='logo'>
        <img src="/images/logo.png" alt="" />
      </div>
      <div className='copyright'>
        <p className='teste'>Desenvolvido por <strong><a href="https://github.com/duduzx02">duduzx</a></strong></p>
      </div>

    </footer>
  )
}

export default Rodape