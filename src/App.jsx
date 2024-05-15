import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';


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
    <>
    <h1>Project</h1>
    <Button/>
    <CardButton>
    <JournalItem
      title = {data[0].title}
      date = {data[0].date}
      text = {data[0].text}
    />
    </CardButton>
    <JournalItem
      title = {data[1].title}
      date = {data[1].date}
      text = {data[1].text}
    />
    </>
   );
}
