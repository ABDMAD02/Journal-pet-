import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import Body from './layouts/Body/Body';


export default function App(){

  const data = [
    {
      title : 'First Title',
      date : new Date(),
      text : 'Lorem ipsum dolor sit amet consectetur, adipisicingium! Et totam voluptatibus aliquam ab nemo.'
    },
    {
      title : 'Second Title',
      date : new Date(),
      text : 'Adipisicingium! Et totam voluptatibus aliquam ab nemo.'
    },
    {
      title : 'Third Title',
      date : new Date(),
      text : 'Lorem ipsum dolor sit amet consectetur.'
    }
  ];

  return (
    <div className='app'>
    
    <LeftPanel>
      <Header/>
      <JournalAddButton/>
      <JournalList>
      <CardButton>
    <JournalItem
      title = {data[0].title}
      date = {data[0].date}
      text = {data[0].text}
    />
    </CardButton>
    <CardButton>
    <JournalItem
      title = {data[0].title}
      date = {data[0].date}
      text = {data[0].text}
    />
    </CardButton>
      </JournalList>
    </LeftPanel>
    <Body>
      Body 
    </Body>
    </div>
   );
}
