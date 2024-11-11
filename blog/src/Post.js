import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Main, Header, Footer, PostPreview } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>aaaaaaaa</h1>
    <div className="bg-gray-100 text-gray-800 font-Inter">
      <Header/>
      <main className="max-w-5xl mx-auto py-8 px-4 text-justify">
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-4">Posts Relacionados</h3>
          <div className="grid grid-cols-2 gap-8">
            <PostPreview 
                imageSrc="https://i.ytimg.com/vi/60BP7rh0HT8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDYu-vZEXwJxMmBYXM-RBADUtldtQ" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" 
            />
            <PostPreview/>
            <PostPreview/>
            <PostPreview/>
          </div>
        </div>
        </main>
      <Footer/>
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
