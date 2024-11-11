import logo from './logo.svg';
import { Routes, Route, useLocation, Outlet, Link } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Header, Footer } from './components/Basic';
import { Post, MainPost, PostPreview } from './components/Posts';

// import { Link } from 'react-router-dom';

export function App() {
  const location = useLocation();
  console.log(location.state);

  const defaultData = {
    id: '1',
    title: "Sem título",
    img: "https://via.placeholder.com/600x400",
    text: "Sem texto.",
    sinopse: "Sem texto."
  };

  const postData  = location.state || defaultData;

  return (
  <>
    <div className="bg-gray-100 text-gray-800 font-inter">
        <Header/>
        <Routes>
          <Route path='/' element={
            <>
              <main className="lg:max-w-7xl sm:max-w-max mx-auto py-8 px-4 text-justify">
                <MainPost/>
                {/* Relacionados */}
                <div className="mt-16">
                  <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
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
          <Route path="/post" element={
            <>
            <main className="lg:max-w-5xl sm:max-w-max mx-auto py-8 px-4 text-justify">
            {/* leitura */}
            <Post
              postData={postData}
            />
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
          <Route path="/list" element={
            <>
          
            </>
          }/>
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
