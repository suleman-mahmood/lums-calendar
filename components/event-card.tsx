import Image from 'next/image';
import ArchImage from '../assets/mainEventsPic.jpg';

import Swal from 'sweetalert2';
import { EventInterface } from '../pages';

interface EventCardInterface {
	cardData: EventInterface;
}

export default function EventCard({ cardData }: EventCardInterface) {
	const showEventDescription = () => {
		const cardHtml = `
		<h1 class="text-xl mb-2">Debugging the startup space</h1>
		<p class="text-sm">An interactive panel talk to gain unique insights</p>
		`;

		Swal.fire({
			title: 'LWiC x Tajir!',
			html: cardHtml,
			imageUrl: 'https://unsplash.it/400/200',
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: 'Custom image',
		});
	};

	return (
		<div
			onClick={showEventDescription}
			className='card h-32 mx-2 bg-base-100 shadow-xl image-full rounded-xl'
		>
			<figure>
				<Image src={ArchImage} alt='Picture of the author' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title text-accent-content'>
					{cardData.title}
				</h2>
				<p className='text-primary-content'>{cardData.description}</p>
			</div>
		</div>
	);
}
