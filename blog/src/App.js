import logo from './logo.svg';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import './App.css';
import { Post, MainPost, Header, Footer, PostPreview } from './components/Homepage';

// import { Link } from 'react-router-dom';

export function App() {
  return (
  <>
  
    <div className="bg-gray-100 text-gray-800 font-Inter">
        <Header/>
        <Routes>
          <Route path='/' element={
            <>
              <main className="max-w-7xl mx-auto py-8 px-4 text-justify">
                <MainPost/>
                {/* Relacionados */}
                <div className="mt-16">
                  <div className="grid grid-cols-3 gap-8">
                    <PostPreview/>
                    <PostPreview/>
                    <PostPreview/>

                    <PostPreview/>
                    <PostPreview/>
                    <PostPreview/>

                    <PostPreview/>
                    <PostPreview/>
                    <PostPreview/>
                  </div>
                </div>
              </main>
            </>
          }/>
          <Route path="post" element={
            <>
            <main className="max-w-5xl mx-auto py-8 px-4 text-justify">
            {/* leitura */}
            <Post/>
            <div className="mt-16">
              <div className="grid grid-cols-2 gap-8">
                <PostPreview/>
                <PostPreview/>

                <PostPreview/>
                <PostPreview/>
              </div>
            </div>
            </main>
            </>
        } />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;