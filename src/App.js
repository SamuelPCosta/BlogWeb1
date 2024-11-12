import logo from './logo.svg';
import { Routes, Route, useLocation, Outlet, Link } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Header, Footer } from './components/Basic';
import { Post, MainPost, PostPreview } from './components/Posts';
import { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import { Link } from 'react-router-dom';

export function App() {
  const location = useLocation();
  console.log(location.state);

  const postsNums = 6;

  const defaultData = {
    id: "",
    title: "Sem título",
    img: "https://via.placeholder.com/600x400",
    text: "Sem texto.",
    sinopse: "Sem texto."
  };

  const postData  = location.state || defaultData;

  const [array, setPostData] = useState([]);
  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load JSON');
        }
        return response.json();
      })
      .then(data => setPostData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const readingList = JSON.parse(localStorage.getItem('readingList')) || [];

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
                    {array.slice(1, 1+postsNums).map(post => (
                      <PostPreview 
                        id={post.id} 
                        img={post.img} 
                        text={post.text} 
                      />
                    ))}
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
                {array.slice(1, 1+postsNums).map(post => (
                  <PostPreview 
                    id={post.id} 
                    img={post.img} 
                    text={post.text} 
                  />
                ))}
              </div>
            </div>
            </main>
            </>
          } />
          <Route path="/list" element={
            <>
            <main className="lg:max-w-7xl sm:max-w-max mx-auto py-8 px-4 text-justify flex flex-col min-h-screen">
                <div className="mt-16">
                  {readingList.length > 0 ? (
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
                      {array.map(post => {
                        const isInReadingList = readingList.includes(post.id);
                        return isInReadingList ? (
                          <PostPreview 
                            id={post.id} 
                            img={post.img} 
                            text={post.text} 
                          />
                        ) : null;
                      })}
                    </div>
                  ) : (
                    <h1 className='text-center'>Ainda não há nenhum post adicionado</h1>
                  )}
                </div>
            </main>
            </>
          }/>
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
