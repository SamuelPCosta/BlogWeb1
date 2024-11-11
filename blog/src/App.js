import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Post, Main, Header, Footer, PostPreview } from './components/Homepage';

// import { Link } from 'react-router-dom';

export function App() {
  return (
  <div className="bg-gray-100 text-gray-800 font-Inter">
      <Header/>
      <main className="max-w-7xl mx-auto py-8 px-4 text-justify">
        <Main/>
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
      <Footer/>
    </div>
  );
}

export default App;