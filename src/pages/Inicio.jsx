import { useNavigate } from 'react-router-dom';
import { logo } from '../assets/Logo-La-Ñaña.png';

const Inicio = () => {
	const toNavigate = useNavigate();
	return (
		<div className='flex flex-col items-center justify-center bg-main min-h-screen'>
			<div className='flex flex-col w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center'>
				<img src={logo} alt='Logo La Ñaña' className='flex w-96' />
				<button
					onClick={() => toNavigate('/login')}
					className='flex items-center justify-center bg-secoundary-one rounded-full px-20 py-2 text-2xl mt-20 text-main'>
					Empezar
				</button>
			</div>
		</div>
	);
};
export { Inicio };
