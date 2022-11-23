import { useEffect, useState } from "react";
import DateDisplay from "../components/date";
import EventCard from "../components/event-card";
import Navbar from "../components/navbar";
import Calendar from "./calendar-page";

interface EventInterface {
	startTime: String;
	durationHours: undefined | number;
	title: String;
	description: String;
	imageUrl: String;
	tags: String;
	host: String;
	venue: String;
}

export default function Home() {
	const [allDates, setAllDates] = useState<String[]>([]);

	useEffect(() => {
		const options = { month: 'long', day: 'numeric' } as const;
		const today = new Date();

		const formattedDates = [];
		formattedDates.push(today.toLocaleDateString('en-US', options));

		for (let i = 0; i < 29; i++) {
			today.setDate(today.getDate() + 1);
			const resultDate = new Date(today);
			formattedDates.push(
				resultDate.toLocaleDateString('en-US', options)
			);
		}

		setAllDates(formattedDates);
	}, []);

	return (
		<div className='min-h-screen bg-base-200'>
			<Navbar />

			<div className='h-14'></div>

			<DateDisplay date={allDates[0]} />

      <button
      type="button"
      onClick={Calendar}>
        Calendar button
      </button>

      {[1, 2].map((i) => {
        return (
          <div className="mb-6" key={i}>
            <EventCard />
          </div>
        );
      })}

			<DateDisplay date={allDates[1]} />
			<DateDisplay date={allDates[2]} />

			{[1].map(i => {
				return (
					<div className='mb-6' key={i}>
						<EventCard />
					</div>
				);
			})}
		</div>
	);
}
