import logo from '../logo.svg';
import '../App.css';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

export function Post({postData}) {
  return (
        <span>
          <h2 className="text-4xl font-bold mb-4 text-gray-600">{postData.title}</h2>
          <p className="text-lg text-gray-600 mb-4">
              {postData.sinopse} Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. 
          </p>
          
          <div className="text-sm text-gray-500 mb-8 pt-8">
              Categoria | Por Samuel Costa — Natal<br/>
              11/11/2024 12h24 Atualizado há 1h
          </div>

          <img src={postData.img} 
          alt={postData.title} className="w-full mx-auto rounded-xl border border-gray-200"/>

          <p className="text-sm text-left text-gray-500 mb-8">{postData.title}</p>

          <div className="space-y-4">
              <p>{postData.text} Suspicious conubia ante posuere venenatis dignissim tellus accumsan. Hac lobortis ridiculus cursus ut fames eleifend sem taciti. Turpis efficitur suspendisse, magna ultrices accumsan mattis. Dolor curabitur dignissim erat, parturient dui lobortis non torquent. Hac dui hac pretium className nullam laoreet. Donec phasellus nascetur accumsan metus eros duis. Imperdiet sodales ultricies dictumst sollicitudin amet netus litora. Ante blandit risus cras nam; non netus. Lorem tellus hac aenean sem natoque blandit nibh.</p>

              <p>Suspicious conubia ante posuere venenatis dignissim tellus accumsan. Hac lobortis ridiculus cursus ut fames eleifend sem taciti. Turpis efficitur suspendisse, magna ultrices accumsan mattis. Dolor curabitur dignissim erat, parturient dui lobortis non torquent. Hac dui hac pretium className nullam laoreet. Donec phasellus nascetur accumsan metus eros duis. Imperdiet sodales ultricies dictumst sollicitudin amet netus litora. Ante blandit risus cras nam; non netus. Lorem tellus hac aenean sem natoque blandit nibh.</p>

              <blockquote className="border-l-4 border-gray-400 pl-4 py-6 ml-12 italic text-gray-700">
                  Citacao muito massa ou frase de alguém importante, tipo itamir.
              </blockquote>

              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Sodales nullam habitasse in, libero interdum taciti etiam. Hac nullam auctor magna fringilla sollicitudin senectus; dictum penatibus augue. Primis leo purus enim eget; finibus className iaculis. Habitant magna egestas venenatis erat integer molestie. Mattis consequat neque at ut; ex quam feugiat phasellus. Faucibus lacinia mollis; commodo turpis suscipit rhoncus. Pellentesque lacus sociosqu primis ligula ac.</p>
              <p>Suspicious conubia ante posuere venenatis dignissim tellus accumsan. Hac lobortis ridiculus cursus ut fames eleifend sem taciti. Turpis efficitur suspendisse, magna ultrices accumsan mattis. Dolor curabitur dignissim erat, parturient dui lobortis non torquent. Hac dui hac pretium className nullam laoreet. Donec phasellus nascetur accumsan metus eros duis. Imperdiet sodales ultricies dictumst sollicitudin amet netus litora. Ante blandit risus cras nam; non netus. Lorem tellus hac aenean sem natoque blandit nibh.</p>
              <p>Elementum ipsum viverra morbi tortor montes velit nec nostra. Varius lacinia justo mattis mauris magna id parturient. Ut nullam blandit hendrerit volutpat; purus purus hendrerit montes tristique. Hendrerit integer elementum quam interdum non integer inceptos mus. Ultricies varius inceptos aliquet, inceptos convallis sagittis. Potenti rutrum pellentesque sapien tempus per curae egestas in. Quisque aliquam faucibus adipiscing eros tristique at.</p>
          </div>
        </span>
  );
}

export function MainPost() {
  const [postData, setPostData] = useState({
    id: '0',
    title: 'Sem titulo',
    img: '',
    text: 'Sem texto',
    sinopse: 'Sem sinopse',
  });

  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load JSON');
        }
        return response.json();
      })
      .then(data => setPostData(data[0]))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <span>
    <div class="flex items-center">
      <h2 className="text-4xl font-bold mb-4 mt-12 text-gray-600">EM DESTAQUE</h2>
      <div class="border-t border-gray-400 flex-1 ml-4 mt-8"></div>
    </div>
    
      <a href='' className='hover:shadow-xl'>
      <span className='relative overflow-hidden rounded-xl'>
      <Link to="/post" state={postData}>
        <img src={postData.img} 
        alt={postData.title} className="brightness-0 w-full mx-auto rounded-xl border border-gray-200"/>

        <div className='absolute w-full h-full top-0 right-0 bg-gradient-to-r from-transparent to-gray-800 rounded-xl'>
        </div>

        {/* lado direito */}
        <div className="absolute px-8 py-12 md:px-12 md:py-16 top-0 right-0 w-full md:w-1/2 ml-auto h-full text-white flex flex-col justify-between">
          <h3 className="text-4xl font-bold mb-4 md:mb-8">{postData.title}</h3>
          
          <div className="line-clamp-6 max-h-[12rem] md:max-h-[16rem] overflow-hidden mb-8">
            <p className="text-lg my-4 text-ellipsis">
                {postData.text}
            </p>
          </div>

          <button 
            onClick={(e) => { e.preventDefault(); handleAddRemove(0); }}
            className="w-full bg-gray-50 py-4 rounded-xl text-black font-semibold hover:bg-gray-300 transition-colors mt-4">
            Adicionar à lista de leitura
          </button>
        </div>

        </Link>
      </span>
      </a>
    </span> 
  );
}

export function PostPreview({id, img, text }) {

    const [postData, setPostData] = useState(null);
    const [isInReadingList, setIsInReadingList] = useState(false); 

    useEffect(() => {
        fetch('/data.json')
        .then(response => {
            if (!response.ok) {
            throw new Error('Failed to load JSON');
            }
            return response.json();
        })
        .then(data => {
            const post = data.find(item => item.id === id);
            setPostData(post); 
        })
        .catch(error => console.error('Error fetching data:', error));

        const readingList = JSON.parse(localStorage.getItem('readingList')) || [];
        setIsInReadingList(readingList.includes(id));
    }, [id]); 

    const handleAddRemove = () => {
        let readingList = JSON.parse(localStorage.getItem('readingList')) || [];

        if (isInReadingList) {
            readingList = readingList.filter(item => item !== id);
            window.location.reload()
        } else {
            readingList.push(id);
        }
        
        localStorage.setItem('readingList', JSON.stringify(readingList));
        setIsInReadingList(!isInReadingList);
    };

    if (!postData) {
        return <div>Loading...</div>;
    }
    
  return (
    // <Link to={'/post'}>
    <Link to={'/post'} state={postData} onClick={window.scrollTo(0, 0)}>
    <a href="" className="group">
        <div className="relative bg-gray-100 shadow-md rounded-xl max-h-80 overflow-hidden">
            <img src={img || "https://via.placeholder.com/600x400"} alt="" className="w-full aspect-video overflow-hidden object-cover max-h-48 object-top"/>
                <div onClick={(e) => { e.preventDefault(); handleAddRemove(id) }}  className="absolute top-2 right-2 w-2/3 h-10 ml-auto rounded-lg font-semibold text-lg bg-gray-500 text-center flex items-center
                opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-600 ">
                    <h4 className="w-full text-white">
                      <i class="fas fa-plus text-white pr-2"></i>
                      {isInReadingList ? 'Remover da lista de leitura' : 'Adicionar à lista de leitura'}
                    </h4>
                </div>
            <p className="text-lg text-gray-600 p-6 py-2 truncate-text max-h-24">{text}</p>
        </div>
    </a>
    </Link>
  );
}
PostPreview.defaultProps = {
  imageSrc: "https://i.ytimg.com/vi/60BP7rh0HT8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDYu-vZEXwJxMmBYXM-RBADUtldtQ", 
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
};

export default Post;

function handleAddRemove(key) {
    const existingList = JSON.parse(localStorage.getItem('readingList')) || [];

    if (!existingList.includes(key)) {
      existingList.push(key);
    }
    localStorage.setItem('readingList', JSON.stringify(existingList));

    console.log(`Post com key ${key} adicionado à lista de leitura.`);
}