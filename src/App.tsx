import { useState } from 'react';
import { useAddApiMutation } from './redux';

const obj = {
	fileHash: '0190983f-d7be-7895-bc40-5f403f0bc287',
	format: 'xlsx',
	withEventHandlers: false,
};

function App() {
	const [addProduct, { isLoading }] = useAddApiMutation();

	const [name, setName] = useState('');

	const hanldeClick = async () => {
		const result = await addProduct(obj);
		setName(result.data);
	};

	function wizard(x) {
		console.log(x);
	}

	const str = 'ASDfgh';
	wizard(...str);

	return (
		<main>
			<h3>Name: {name}</h3>
			<button onClick={hanldeClick} disabled={isLoading}>
				Отправить запрос
			</button>
		</main>
	);
}

export default App;
