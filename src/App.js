import './App.css';
import Card from "./card";

function App() {
   const cards = [
      {
         name: 'Vinut Ананас',
         prise: '70',
         img: 'https://sweetopt24.ru/wp-content/uploads/2021/01/napitok-sokosoderzhashhij-vinut-persik-330ml.jpg'
      },
      {
         name: 'Vinut Папайа',
         prise: '700',
         img: 'https://sweetstore24.ru/wp-content/uploads/2020/10/d0bdd0b0d0bfd0b8d182d0bed0ba-d181d0bed0bad0bed181d0bed0b4d0b5d180d0b6d0b0d189d0b8d0b9-vinut-d0bfd0b0d0bfd0b0d0b9d18f-330d0bcd0bb-d0b2d18c.jpg'
      },
      {
         name: 'Vinut Личи',
         prise: '80',
         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKlE5LzCLmo9dNBrqskD_aZt51qgMDIZsBvkmd0EUshM0C2CCwKYnhCs3VApLCPKZigjQ&usqp=CAU'
      },
      {
         name: 'Vinut Мангустин',
         prise: '77',
         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVQeXheyLDlRlrV-Twia_rS6-830e1FBYWeXWABJq0n77YtLeaqAsrwRdN7FS4pfrEtFQ&usqp=CAU'
      },
      {
         name: 'Vinut Патахайа',
         prise: '98',
         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGkA6Rs3JmG57wN94s-5cA1vDZJqetBqOFsZg4CsRK35tGEUHBiE9dUqBlyWaUwHyVhw&usqp=CAU'
      },
      {
         name: 'Vinut Гуава',
         prise: '45',
         img: 'https://images.wbstatic.net/big/new/21840000/21848287-1.jpg'
      }
   ]
   return (
      <div className="app">
         <header className='header'>
            <div className='menu'>
               <div className='One'>
                  <a href='#'>Лента</a>
               </div>
               <div className='One'>
                  <a href='#'>Корзина</a>
               </div>
               <div className='One'>
                  <a href='#'>О нас</a>
               </div>
            </div>
            <div className='login'>
               <div className='log'>Log In</div>
               <div className='register'>Register</div>
            </div>
         </header>
         <div className="list">
            {cards.map((item) => <Card cardInfo={item}/>)}
         </div>
      </div>
   );
}

export default App;
