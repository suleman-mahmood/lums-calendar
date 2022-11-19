import EventCard from '../components/event-card';
import Navbar from '../components/navbar';

export default function Home() {
	return (
		<div>
			<Navbar />

			<div className='h-14'></div>

			{[1, 2, 3, 4, 5].map(i => {
				return <EventCard />;
			})}
		</div>
	);
}
