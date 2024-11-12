import logo from '../logo.svg';
import '../App.css';

import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-gray-800 text-white">
      
        <Link to={'/'}>
          <div className="max-w-7xl mx-auto flex items-center py-4 px-4 h-36">
            <a href='' className="flex">
              <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwCss8LMqOTD0i0fY1zJnEX6xW3zoYAR9xjXoZdXTxGM2J2wyqHU0SgMKydPC74xAznS_QDSwwvSKCrhMbqRGietm63IKooSx-xd8fqcVB-pkQkV9mS28ytaqkkVaZBOHJM3Nema46T4NDdC5fDmmYebM5Csfvt_FPlDk6-TwrWLzoXO4p-TAU9RDoDNo/s1000/Cinema%20Cotia.jpg" alt="Imagem logo - quadrado" className="w-24 h-24 rounded-full object-cover"/>
              <h1 className="text-5xl font-semibold px-6 font-inter">LETTERS IN<br/>THE BOX</h1>
            </a>
          </div>
        </Link>

        <nav className="space-x-4 bg-gray-600 h-12 flex items-center opacity-0 lg:opacity-100">
            <div className="w-full max-w-7xl mx-auto flex">
                <div className="w-2/3">
                    {/* mx-auto flex items-center justify-between */}
                    <a href="#" className="hover:underline p-4">Ação</a>
                    <a href="#" className="hover:underline p-4">Animação</a>
                    <a href="#" className="hover:underline p-4">Comédia</a>
                    <a href="#" className="hover:underline p-4">Drama</a>
                    <a href="#" className="hover:underline p-4">Fantasia</a>
                    <a href="#" className="hover:underline p-4">Ficção científica</a>
                </div>
                
                  <div className="w-1/3 text-right">
                    <Link to="/list">
                      <a href="#" className="hover:underline p-4">Minha lista de leitura</a>
                    </Link>
                  </div>
            </div>
        </nav>
    </header>
  );
}

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
