import { randomUUID } from 'crypto';
import { useEffect, useState } from 'react';
import DateDisplay from '../components/date';
import EventCard from '../components/event-card';
import Navbar from '../components/navbar';

export interface EventInterface {
	startTime: String;
	durationHours: undefined | number;
	title: String;
	description: String;
	imageUrl: String;
	tags: Array<String>;
	host: String;
	venue: String;
}

interface EventsObjInterface {
	[id: string]: Array<EventInterface>;
}

const dummy_events = [
	{
		startTime: '2022-11-25T22:25:03.589Z',
		durationHours: 4,
		title: 'LWIC x Tajir',
		description: 'Career guidance and counseling',
		imageUrl: '',
		tags: ['career'],
		host: 'LWiC',
		venue: 'A-17',
	},
	{
		startTime: '2022-11-25T22:25:04.589Z',
		durationHours: 4,
		title: 'Dramaline',
		description: 'Career guidance and counseling',
		imageUrl: '',
		tags: ['career'],
		host: 'LWiC',
		venue: 'A-17',
	},
	{
		startTime: '2022-11-26T22:25:03.589Z',
		durationHours: 4,
		title: 'Thriller night',
		description: 'Career guidance and counseling',
		imageUrl: '',
		tags: ['career'],
		host: 'LWiC',
		venue: 'A-17',
	},
	{
		startTime: '2022-11-27T22:25:03.589Z',
		durationHours: 4,
		title: 'LWIC x Tajir',
		description: 'Career guidance and counseling',
		imageUrl: '',
		tags: ['career'],
		host: 'LWiC',
		venue: 'A-17',
	},
	{
		startTime: '2022-12-01T22:25:03.589Z',
		durationHours: 4,
		title: 'LWIC x Tajir',
		description: 'Career guidance and counseling',
		imageUrl: '',
		tags: ['career'],
		host: 'LWiC',
		venue: 'A-17',
	},
];

export default function Home() {
	const [allEvents, setAllEvents] = useState<EventsObjInterface>({});
	const [allDates, setAllDates] = useState<Array<string>>([]);

	useEffect(() => {
		const options = {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		} as const;
		const today = new Date();

		const formattedDates = [];
		formattedDates.push(today.toLocaleDateString('en-US', options));

		for (let i = 0; i < 7 - 1; i++) {
			today.setDate(today.getDate() + 1);
			const resultDate = new Date(today);
			formattedDates.push(
				resultDate.toLocaleDateString('en-US', options)
			);
		}

		setAllDates(formattedDates);
	}, []);

	useEffect(() => {
		const options = {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		} as const;

		const eventsObj: EventsObjInterface = {};

		dummy_events.map(d => {
			const startTime = new Date(d.startTime);
			const key = startTime.toLocaleDateString('en-US', options);

			if (key in eventsObj) {
				eventsObj[key].push(d);
			} else {
				eventsObj[key] = [d];
			}
			return key;
		});
		setAllEvents(eventsObj);
	}, []);

	return (
		<div className='min-h-screen bg-base-200'>
			<Navbar />

			<div className='h-14'></div>

			{allDates.map((d, i) => (
				<div key={i}>
					<DateDisplay date={d} />

					{allEvents[d]?.map((e, j) => (
						<div key={i * allDates.length + j} className='mb-6'>
							<EventCard cardData={e} />
						</div>
					))}
				</div>
			))}
		</div>
	);
}
