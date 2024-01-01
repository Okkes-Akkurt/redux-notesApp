import './App.css';
import FormBody from './components/FormBody';
import FormHeader from './components/FormHeader';
import NoteList from './components/NoteList';

function App() {
  return (
		<div className='App'>
			<div className='container'>
				<FormHeader />
				<FormBody />
				<NoteList />
			</div>
		</div>
  );
}

export default App;
