import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-gray-800 text-white">
      
        <div className="max-w-7xl mx-auto flex items-center py-4 px-4 h-36">
          <a href='' className="flex">
            <img src="https://i.ytimg.com/vi/60BP7rh0HT8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDYu-vZEXwJxMmBYXM-RBADUtldtQ" alt="Imagem logo - quadrado" className="w-24 h-24 rounded-full object-cover"/>
            <h1 className="text-5xl font-semibold px-6">TITULO DO <br/> BLOG</h1>
          </a>
        </div>

        <nav className="space-x-4 bg-gray-600 h-12 flex items-center">
            <div className="w-full max-w-7xl mx-auto flex">
                <div className="w-2/3">
                    {/* mx-auto flex items-center justify-between */}
                    <a href="#" className="hover:underline p-4">Categ 1</a>
                    <a href="#" className="hover:underline p-4">Categ 1</a>
                    <a href="#" className="hover:underline p-4">Categ 1</a>
                    <a href="#" className="hover:underline p-4">Categ 1</a>
                </div>
                <div className="w-1/3 text-right">
                    <a href="#" className="hover:underline p-4">Minha lista de leitura</a>
                </div>
            </div>
        </nav>
    </header>
  );
}

export function Post() {
  return (
        <span>
          <h2 className="text-4xl font-bold mb-4">TITULO DO POST</h2>
          <p className="text-lg text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <div className="text-sm text-gray-500 mb-8 pt-8">
              Categoria | Por Samuel Costa — Natal<br/>
              06/11/2024 18h24 Atualizado há 35 segundos
          </div>

          <img src="https://i.ytimg.com/vi/60BP7rh0HT8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDYu-vZEXwJxMmBYXM-RBADUtldtQ" 
          alt="Capa da postagem" className="w-full mx-auto rounded-xl border border-gray-200"/>

          <p className="text-sm text-left text-gray-500 mb-8">Legenda</p>

          <div className="space-y-4">
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Sodales nullam habitasse in, libero interdum taciti etiam. Hac nullam auctor magna fringilla sollicitudin senectus; dictum penatibus augue. Primis leo purus enim eget; finibus className iaculis. Habitant magna egestas venenatis erat integer molestie. Mattis consequat neque at ut; ex quam feugiat phasellus. Faucibus lacinia mollis; commodo turpis suscipit rhoncus. Pellentesque lacus sociosqu primis ligula ac.</p>

              <p>Suspicious conubia ante posuere venenatis dignissim tellus accumsan. Hac lobortis ridiculus cursus ut fames eleifend sem taciti. Turpis efficitur suspendisse, magna ultrices accumsan mattis. Dolor curabitur dignissim erat, parturient dui lobortis non torquent. Hac dui hac pretium className nullam laoreet. Donec phasellus nascetur accumsan metus eros duis. Imperdiet sodales ultricies dictumst sollicitudin amet netus litora. Ante blandit risus cras nam; non netus. Lorem tellus hac aenean sem natoque blandit nibh.</p>

              <blockquote className="border-l-4 border-gray-400 pl-4 py-6 ml-12 italic text-gray-700">
                  Citacao muito massa ou frase em destaque ipsum odor amet, consectetur
              </blockquote>

              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Sodales nullam habitasse in, libero interdum taciti etiam. Hac nullam auctor magna fringilla sollicitudin senectus; dictum penatibus augue. Primis leo purus enim eget; finibus className iaculis. Habitant magna egestas venenatis erat integer molestie. Mattis consequat neque at ut; ex quam feugiat phasellus. Faucibus lacinia mollis; commodo turpis suscipit rhoncus. Pellentesque lacus sociosqu primis ligula ac.</p>
              <p>Suspicious conubia ante posuere venenatis dignissim tellus accumsan. Hac lobortis ridiculus cursus ut fames eleifend sem taciti. Turpis efficitur suspendisse, magna ultrices accumsan mattis. Dolor curabitur dignissim erat, parturient dui lobortis non torquent. Hac dui hac pretium className nullam laoreet. Donec phasellus nascetur accumsan metus eros duis. Imperdiet sodales ultricies dictumst sollicitudin amet netus litora. Ante blandit risus cras nam; non netus. Lorem tellus hac aenean sem natoque blandit nibh.</p>
              <p>Elementum ipsum viverra morbi tortor montes velit nec nostra. Varius lacinia justo mattis mauris magna id parturient. Ut nullam blandit hendrerit volutpat; purus purus hendrerit montes tristique. Hendrerit integer elementum quam interdum non integer inceptos mus. Ultricies varius inceptos aliquet, inceptos convallis sagittis. Potenti rutrum pellentesque sapien tempus per curae egestas in. Quisque aliquam faucibus adipiscing eros tristique at.</p>
          </div>
        </span>
  );
}

export function Main() {
  return (
    <span>
    {/* <Link to={'/'}>a</Link> */}
    <a href='post' className='hover:shadow-xl'>
      <h2 className="text-4xl font-bold mb-4 mt-12">EM DESTAQUE</h2>
      <span className='relative overflow-hidden rounded-xl'>
        <img src="https://i.ytimg.com/vi/60BP7rh0HT8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDYu-vZEXwJxMmBYXM-RBADUtldtQ" 
        alt="Capa da postagem" className="brightness-0 w-full mx-auto rounded-xl border border-gray-200"/>

        <div className='absolute w-full h-full top-0 right-0 bg-gray-800 opacity-70 rounded-xl'>
        </div>


        {/* lado direito */}
        <div className='absolute px-12 py-16 top-0 right-0 w-1/2 ml-auto h-full text-white text-ellipsis content-center'>
          <h3 className="text-4xl font-bold mb-8">TITULO</h3>
          <p className='text-lg my-4 text-ellipsis'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className='text-lg mt-4 text-ellipsis truncate h-16'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className='w-full bg-gray-50 py-4 rounded-xl text-black font-semibold hover:bg-gray-300 transition-colors'>
            Adicionar à lista de leitura
          </button>
        </div>
      </span>
    </a>
    </span>  
  );
}

export function PostPreview({ imageSrc, text }) {
  return (
    <a href="" className="group">
        <div className="relative bg-gray-100 shadow-md rounded-xl overflow-hidden">
            <img src={imageSrc} alt="" className="w-full"/>
                <div className="absolute top-2 right-2 w-2/3 h-10 ml-auto rounded-lg font-semibold text-lg bg-gray-500 text-center flex items-center
                opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-600 ">
                    <h4 className="w-full text-white ">
                      <i className="fas fa-circle-plus text-white pr-2"></i>
                      Adicionar à lista de leitura
                    </h4>
                </div>
            <p className="text-lg text-gray-600 p-6">{text}</p>
        </div>
    </a>
  );
}
PostPreview.defaultProps = {
  imageSrc: "https://i.ytimg.com/vi/60BP7rh0HT8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDYu-vZEXwJxMmBYXM-RBADUtldtQ", 
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" 
};

export function Footer() {
  return (
      <footer className="bg-gray-800 text-white pt-6 pb-12 h-[800px]">
          <div className="max-w-7xl mx-auto text-center">
              <a href="#" className="hover:underline">Propósito e Autor</a>
              <p>Contato: samuel.costa.705@ufrn.edu.br</p>
              <p>2024 - Todos os direitos reservados</p>
          </div>
      </footer>
  );
}

export default Header;