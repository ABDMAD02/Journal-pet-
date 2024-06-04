import './App.css';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import Body from './layouts/Body/Body';
import JournalForm from './components/JournalForm/JournalForm';
import { useEffect, useState } from 'react';

const INITIAL_DATA = [
  // {
  //   id: 1,
  //   title : 'First Title',
  //   date : new Date(),
  //   text : 'Lorem ipsum dolor sit amet consectetur, adipisicingium! Et totam voluptatibus aliquam ab nemo.'
  // },
  // {
  //   id: 2,
  //   title : 'Second Title',
  //   date : new Date(),
  //   text : 'Adipisicingium! Et totam voluptatibus aliquam ab nemo.'
  // },

  // {
  //   id: 3,
  //   title : 'Third Title',
  //   date : new Date(),
  //   text : 'Adipisicingium! Et totam voluptatibus aliquam ab nemo.'
  // }
];

export function App(){

  const [items, setItems] = useState(INITIAL_DATA);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      setItems(data.map(item => ({
        ...item,
        date: new Date(item.date)
      })));
    }
  });

  const addItem = item => {
    setItems(oldItems => [...oldItems, {
      title: item.title,
      date: new Date(item.date),
      text: item.text,
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
    }]);
  };


  const sortItems = (a, b) => {
    if (a.id < b.id ) {
        return 1;
    } else {
      return -1;
    }
  };

  return (
    <div className='app'>
  
    <LeftPanel>
      <Header/>
      <JournalAddButton/>
      <JournalList>
        {items.length === 0 ? <h1>No one records for now!</h1> : items.sort(sortItems).map(el => (
          <CardButton key={el.id}>
          <JournalItem
            title = {el.title}
            date = {el.date}
            text = {el.text}
           />
          </CardButton>
        ))}
      </JournalList>
    </LeftPanel>
    <Body>
      <JournalForm onSubmit={addItem}/>
    </Body>

    </div>
   );
}

export default App;