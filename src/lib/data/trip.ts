// ── Types ──────────────────────────────────────────────

export interface TripData {
	name: string;
	startDate: string;
	endDate: string;
	travelers: string[];
	coverImage: string;
	legs: TripLeg[];
	days: DayItinerary[];
}

export interface TripLeg {
	from: string;
	to: string;
	method: 'flight' | 'car' | 'train';
	duration: string;
}

export interface DayItinerary {
	dayNumber: number;
	date: string;
	city: string;
	summary: string;
	heroImage: string;
	items: ItineraryItem[];
}

export type ItineraryItem = Flight | Hotel | CarRental | Activity;

export interface Flight {
	type: 'flight';
	airline: string;
	flightNumber: string;
	departureAirport: string;
	departureTime: string;
	arrivalAirport: string;
	arrivalTime: string;
	duration: string;
	confirmation: string;
}

export interface Hotel {
	type: 'hotel';
	name: string;
	address: string;
	checkIn: string;
	checkOut: string;
	nightlyRate: number;
	image: string;
}

export interface CarRental {
	type: 'car';
	company: string;
	vehicle: string;
	pickup: string;
	dropoff: string;
	dailyRate: number;
	confirmation: string;
}

export interface Activity {
	type: 'activity' | 'food' | 'sightseeing' | 'transit';
	name: string;
	location: string;
	time: string;
	duration: string;
	description: string;
	cost: number;
	image?: string;
}

// ── Data ───────────────────────────────────────────────

export const tripData: TripData = {
	name: 'Japan Adventure',
	startDate: '2025-04-01',
	endDate: '2025-04-10',
	travelers: ['Alex', 'Jordan'],
	coverImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=80',
	legs: [
		{ from: 'San Francisco', to: 'Tokyo', method: 'flight', duration: '11h 15m' },
		{ from: 'Tokyo', to: 'Hakone', method: 'train', duration: '1h 30m' },
		{ from: 'Hakone', to: 'Kyoto', method: 'train', duration: '2h 45m' },
		{ from: 'Kyoto', to: 'Osaka', method: 'train', duration: '0h 30m' },
		{ from: 'Osaka', to: 'San Francisco', method: 'flight', duration: '10h 45m' }
	],
	days: [
		{
			dayNumber: 1,
			date: '2025-04-01',
			city: 'Tokyo',
			summary: 'Arrival in Tokyo & Shinjuku exploration',
			heroImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
			items: [
				{
					type: 'flight',
					airline: 'ANA',
					flightNumber: 'NH 7',
					departureAirport: 'SFO',
					departureTime: '2025-04-01T11:00',
					arrivalAirport: 'NRT',
					arrivalTime: '2025-04-01T15:15+09:00',
					duration: '11h 15m',
					confirmation: 'ANA-7X92K'
				},
				{
					type: 'transit',
					name: 'Narita Express to Shinjuku',
					location: 'Narita Airport → Shinjuku Station',
					time: '16:00',
					duration: '1h 20m',
					description: 'Reserved seats on the N\'EX rapid express to central Tokyo.',
					cost: 3250
				},
				{
					type: 'hotel',
					name: 'Park Hyatt Tokyo',
					address: '3-7-1-2 Nishi-Shinjuku, Shinjuku-ku',
					checkIn: '2025-04-01',
					checkOut: '2025-04-04',
					nightlyRate: 45000,
					image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80'
				},
				{
					type: 'food',
					name: 'Omoide Yokocho',
					location: 'Shinjuku, Memory Lane',
					time: '19:30',
					duration: '1h 30m',
					description: 'Yakitori and sake in the atmospheric narrow alleys of Piss Alley.',
					cost: 4000,
					image: 'https://images.unsplash.com/photo-1554797589-7241bb691973?w=800&q=80'
				}
			]
		},
		{
			dayNumber: 2,
			date: '2025-04-02',
			city: 'Tokyo',
			summary: 'Tsukiji, Asakusa & Akihabara',
			heroImage: 'https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=800&q=80',
			items: [
				{
					type: 'food',
					name: 'Tsukiji Outer Market Breakfast',
					location: 'Tsukiji, Chuo City',
					time: '07:30',
					duration: '1h 30m',
					description: 'Fresh sushi, tamagoyaki, and street food at the famous outer market.',
					cost: 3500,
					image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80'
				},
				{
					type: 'sightseeing',
					name: 'Senso-ji Temple',
					location: 'Asakusa, Taito City',
					time: '10:00',
					duration: '2h',
					description: 'Tokyo\'s oldest temple with the iconic Kaminarimon gate and Nakamise-dori shopping street.',
					cost: 0,
					image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=800&q=80'
				},
				{
					type: 'food',
					name: 'Ramen at Fuunji',
					location: 'Shinjuku, near South Exit',
					time: '13:00',
					duration: '0h 45m',
					description: 'Famous tsukemen (dipping ramen) with rich fish-pork broth.',
					cost: 1200
				},
				{
					type: 'sightseeing',
					name: 'Akihabara Electric Town',
					location: 'Akihabara, Chiyoda City',
					time: '14:30',
					duration: '3h',
					description: 'Explore multi-floor electronics shops, anime stores, and retro game arcades.',
					cost: 5000,
					image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80'
				},
				{
					type: 'food',
					name: 'Izakaya dinner at Gonpachi',
					location: 'Nishi-Azabu, Minato City',
					time: '19:00',
					duration: '2h',
					description: 'The "Kill Bill" restaurant — great atmosphere, grilled skewers and soba.',
					cost: 8000
				}
			]
		},
		{
			dayNumber: 3,
			date: '2025-04-03',
			city: 'Tokyo',
			summary: 'Shibuya, Harajuku & Meiji Shrine',
			heroImage: 'https://images.unsplash.com/photo-1532236204992-f5e85c024202?w=800&q=80',
			items: [
				{
					type: 'sightseeing',
					name: 'Meiji Shrine',
					location: 'Shibuya, Yoyogi',
					time: '08:30',
					duration: '1h 30m',
					description: 'Serene Shinto shrine set in a lush forested park in the heart of the city.',
					cost: 0,
					image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80'
				},
				{
					type: 'sightseeing',
					name: 'Harajuku & Takeshita Street',
					location: 'Harajuku, Shibuya',
					time: '10:30',
					duration: '2h',
					description: 'Youth fashion capital with quirky shops, crepe stands, and vibrant street style.',
					cost: 3000,
					image: 'https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&q=80'
				},
				{
					type: 'food',
					name: 'Afuri Ramen',
					location: 'Harajuku, Shibuya',
					time: '12:30',
					duration: '0h 45m',
					description: 'Light yuzu shio ramen — a refreshing change from heavier tonkotsu.',
					cost: 1400
				},
				{
					type: 'sightseeing',
					name: 'Shibuya Crossing & Sky',
					location: 'Shibuya, Tokyo',
					time: '14:00',
					duration: '2h',
					description: 'Watch the famous scramble from Shibuya Sky observation deck at 230m.',
					cost: 2000,
					image: 'https://images.unsplash.com/photo-1542931287-023b922fa89b?w=800&q=80'
				},
				{
					type: 'activity',
					name: 'Karaoke at Big Echo',
					location: 'Shibuya Center-gai',
					time: '17:00',
					duration: '2h',
					description: 'Private booth karaoke with an all-you-can-drink package.',
					cost: 4500
				},
				{
					type: 'food',
					name: 'Sushi Omakase at Sushi Dai',
					location: 'Toyosu Market',
					time: '19:30',
					duration: '1h 30m',
					description: 'Chef\'s choice omakase — some of the freshest sushi in Tokyo.',
					cost: 12000
				}
			]
		},
		{
			dayNumber: 4,
			date: '2025-04-04',
			city: 'Hakone',
			summary: 'Train to Hakone & hot springs',
			heroImage: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80',
			items: [
				{
					type: 'transit',
					name: 'Romancecar to Hakone',
					location: 'Shinjuku Station → Hakone-Yumoto',
					time: '09:00',
					duration: '1h 30m',
					description: 'Scenic limited express train with panoramic windows through the mountains.',
					cost: 2330
				},
				{
					type: 'hotel',
					name: 'Hakone Ginyu Ryokan',
					address: '100-1 Miyagino, Hakone',
					checkIn: '2025-04-04',
					checkOut: '2025-04-06',
					nightlyRate: 55000,
					image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80'
				},
				{
					type: 'sightseeing',
					name: 'Hakone Open-Air Museum',
					location: 'Ninotaira, Hakone',
					time: '13:00',
					duration: '2h 30m',
					description: 'Stunning outdoor sculpture museum with Picasso pavilion and mountain backdrop.',
					cost: 1800,
					image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80'
				},
				{
					type: 'activity',
					name: 'Private Onsen at Ryokan',
					location: 'Hakone Ginyu',
					time: '17:00',
					duration: '1h 30m',
					description: 'Soak in the private open-air hot spring overlooking Hakone valley.',
					cost: 0
				},
				{
					type: 'food',
					name: 'Kaiseki Dinner',
					location: 'Hakone Ginyu Ryokan',
					time: '19:00',
					duration: '2h',
					description: 'Multi-course traditional Japanese dinner with seasonal ingredients.',
					cost: 0
				}
			]
		},
		{
			dayNumber: 5,
			date: '2025-04-05',
			city: 'Hakone',
			summary: 'Lake Ashi cruise & Mt. Fuji views',
			heroImage: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80',
			items: [
				{
					type: 'sightseeing',
					name: 'Owakudani Valley',
					location: 'Hakone Ropeway',
					time: '09:00',
					duration: '2h',
					description: 'Ride the ropeway over volcanic hot springs. Try the famous black eggs!',
					cost: 2500,
					image: 'https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?w=800&q=80'
				},
				{
					type: 'sightseeing',
					name: 'Lake Ashi Pirate Ship Cruise',
					location: 'Togendai → Hakone-machi',
					time: '11:30',
					duration: '1h',
					description: 'Cruise across Lake Ashi with stunning views of Mt. Fuji on a clear day.',
					cost: 1200
				},
				{
					type: 'sightseeing',
					name: 'Hakone Shrine',
					location: 'Moto-Hakone',
					time: '13:00',
					duration: '1h',
					description: 'Walk through the vermillion torii gate rising from the lake waters.',
					cost: 0,
					image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=800&q=80'
				},
				{
					type: 'food',
					name: 'Lunch at Amazake Chaya',
					location: 'Old Tokaido Highway, Hakone',
					time: '14:30',
					duration: '1h',
					description: 'Historic 400-year-old teahouse serving amazake and mochi by the road.',
					cost: 1500
				},
				{
					type: 'activity',
					name: 'Private Onsen (evening)',
					location: 'Hakone Ginyu',
					time: '17:00',
					duration: '1h 30m',
					description: 'Evening soak with sunset colors over the valley.',
					cost: 0
				}
			]
		},
		{
			dayNumber: 6,
			date: '2025-04-06',
			city: 'Kyoto',
			summary: 'Shinkansen to Kyoto & Gion evening',
			heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
			items: [
				{
					type: 'transit',
					name: 'Shinkansen to Kyoto',
					location: 'Odawara Station → Kyoto Station',
					time: '09:30',
					duration: '2h 45m',
					description: 'Bullet train through the Japanese countryside. Watch for Mt. Fuji!',
					cost: 11000
				},
				{
					type: 'hotel',
					name: 'The Ritz-Carlton Kyoto',
					address: 'Kamogawa Nijo-Ohashi, Nakagyo-ku',
					checkIn: '2025-04-06',
					checkOut: '2025-04-09',
					nightlyRate: 65000,
					image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80'
				},
				{
					type: 'sightseeing',
					name: 'Kinkaku-ji (Golden Pavilion)',
					location: 'Kita-ku, Kyoto',
					time: '14:00',
					duration: '1h 30m',
					description: 'Iconic gold-leaf covered temple reflected in a mirror pond.',
					cost: 500,
					image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80'
				},
				{
					type: 'sightseeing',
					name: 'Gion District Evening Walk',
					location: 'Gion, Higashiyama-ku',
					time: '17:30',
					duration: '2h',
					description: 'Stroll through the geisha district\'s lantern-lit streets and wooden machiya.',
					cost: 0,
					image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80'
				},
				{
					type: 'food',
					name: 'Kaiseki at Kikunoi',
					location: 'Higashiyama-ku, Kyoto',
					time: '19:30',
					duration: '2h',
					description: 'Michelin-starred kaiseki — edible art celebrating spring cherry blossoms.',
					cost: 25000
				}
			]
		},
		{
			dayNumber: 7,
			date: '2025-04-07',
			city: 'Kyoto',
			summary: 'Temples, bamboo grove & tea ceremony',
			heroImage: 'https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=800&q=80',
			items: [
				{
					type: 'sightseeing',
					name: 'Fushimi Inari Shrine',
					location: 'Fushimi-ku, Kyoto',
					time: '07:00',
					duration: '2h 30m',
					description: 'Walk through thousands of vermillion torii gates up the mountain. Go early to avoid crowds.',
					cost: 0,
					image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80'
				},
				{
					type: 'sightseeing',
					name: 'Arashiyama Bamboo Grove',
					location: 'Ukyo-ku, Kyoto',
					time: '10:30',
					duration: '2h',
					description: 'Surreal walk through towering bamboo stalks in the western hills.',
					cost: 0,
					image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80'
				},
				{
					type: 'food',
					name: 'Yudofu Lunch at Sagano',
					location: 'Arashiyama, Kyoto',
					time: '12:30',
					duration: '1h',
					description: 'Traditional Kyoto-style simmered tofu in a serene garden setting.',
					cost: 3500
				},
				{
					type: 'activity',
					name: 'Tea Ceremony Experience',
					location: 'Camellia Garden, Gion',
					time: '15:00',
					duration: '1h 30m',
					description: 'Learn the art of matcha preparation in an authentic tearoom with tatami.',
					cost: 5000
				},
				{
					type: 'sightseeing',
					name: 'Kiyomizu-dera at Sunset',
					location: 'Higashiyama-ku, Kyoto',
					time: '17:00',
					duration: '1h 30m',
					description: 'UNESCO World Heritage temple with a massive wooden stage overlooking the city.',
					cost: 400,
					image: 'https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=800&q=80'
				},
				{
					type: 'food',
					name: 'Pontocho Alley Dinner',
					location: 'Pontocho, Nakagyo-ku',
					time: '19:00',
					duration: '1h 30m',
					description: 'Riverside dining along the narrow Pontocho alley. Grilled river fish and sake.',
					cost: 8000
				}
			]
		},
		{
			dayNumber: 8,
			date: '2025-04-08',
			city: 'Kyoto',
			summary: 'Nara day trip — deer park & ancient temples',
			heroImage: 'https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=800&q=80',
			items: [
				{
					type: 'transit',
					name: 'JR Nara Line',
					location: 'Kyoto Station → Nara Station',
					time: '08:30',
					duration: '0h 45m',
					description: 'Quick train ride to the ancient capital of Nara.',
					cost: 720
				},
				{
					type: 'sightseeing',
					name: 'Nara Park & Deer',
					location: 'Nara Park',
					time: '09:30',
					duration: '1h 30m',
					description: 'Mingle with hundreds of friendly sacred deer and buy shika senbei (deer crackers).',
					cost: 200,
					image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80'
				},
				{
					type: 'sightseeing',
					name: 'Todai-ji Temple',
					location: 'Nara Park',
					time: '11:00',
					duration: '1h 30m',
					description: 'World\'s largest wooden building housing a 15m bronze Buddha.',
					cost: 600
				},
				{
					type: 'food',
					name: 'Kakinoha Sushi Lunch',
					location: 'Naramachi district',
					time: '12:30',
					duration: '1h',
					description: 'Nara specialty — sushi wrapped in persimmon leaves.',
					cost: 2000
				},
				{
					type: 'sightseeing',
					name: 'Kasuga Taisha Shrine',
					location: 'Nara Park',
					time: '14:00',
					duration: '1h',
					description: 'Shinto shrine famous for thousands of bronze and stone lanterns.',
					cost: 500
				},
				{
					type: 'transit',
					name: 'Return to Kyoto',
					location: 'Nara Station → Kyoto Station',
					time: '16:00',
					duration: '0h 45m',
					description: 'Train back to Kyoto for the evening.',
					cost: 720
				},
				{
					type: 'food',
					name: 'Nishiki Market Dinner',
					location: 'Nishiki Market, Nakagyo-ku',
					time: '18:00',
					duration: '1h 30m',
					description: 'Graze through "Kyoto\'s Kitchen" — pickles, tofu donuts, and fresh seafood.',
					cost: 4000
				}
			]
		},
		{
			dayNumber: 9,
			date: '2025-04-09',
			city: 'Osaka',
			summary: 'Train to Osaka — street food & nightlife',
			heroImage: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80',
			items: [
				{
					type: 'transit',
					name: 'Shinkansen to Osaka',
					location: 'Kyoto Station → Shin-Osaka Station',
					time: '09:00',
					duration: '0h 15m',
					description: 'Lightning-fast bullet train between the two cities.',
					cost: 1500
				},
				{
					type: 'hotel',
					name: 'W Osaka',
					address: '4-1-3 Minamisenba, Chuo-ku',
					checkIn: '2025-04-09',
					checkOut: '2025-04-10',
					nightlyRate: 35000,
					image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80'
				},
				{
					type: 'sightseeing',
					name: 'Osaka Castle',
					location: 'Chuo-ku, Osaka',
					time: '11:00',
					duration: '2h',
					description: 'Iconic castle surrounded by moats and cherry blossom gardens.',
					cost: 600,
					image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80'
				},
				{
					type: 'food',
					name: 'Dotonbori Street Food Tour',
					location: 'Dotonbori, Chuo-ku',
					time: '14:00',
					duration: '3h',
					description: 'Takoyaki, okonomiyaki, kushikatsu — Osaka is Japan\'s street food capital.',
					cost: 5000,
					image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80'
				},
				{
					type: 'activity',
					name: 'Shinsekai & Tsutenkaku Tower',
					location: 'Shinsekai, Naniwa-ku',
					time: '17:30',
					duration: '2h',
					description: 'Retro neighborhood with neon signs, game arcades, and the tower observation deck.',
					cost: 800
				},
				{
					type: 'food',
					name: 'Yakiniku at Matsusaka Beef',
					location: 'Shinsaibashi, Osaka',
					time: '20:00',
					duration: '1h 30m',
					description: 'Premium wagyu grilled tableside — a proper farewell dinner.',
					cost: 15000
				}
			]
		},
		{
			dayNumber: 10,
			date: '2025-04-10',
			city: 'Osaka',
			summary: 'Morning in Osaka & flight home',
			heroImage: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80',
			items: [
				{
					type: 'food',
					name: 'Breakfast at Kuromon Market',
					location: 'Kuromon Ichiba, Chuo-ku',
					time: '08:00',
					duration: '1h 30m',
					description: 'Fresh sashimi, grilled seafood, and melon at "Osaka\'s Kitchen".',
					cost: 3000,
					image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80'
				},
				{
					type: 'transit',
					name: 'Haruka Express to KIX',
					location: 'Shin-Osaka → Kansai International Airport',
					time: '11:00',
					duration: '0h 50m',
					description: 'Direct airport express to catch the flight home.',
					cost: 2900
				},
				{
					type: 'flight',
					airline: 'JAL',
					flightNumber: 'JL 60',
					departureAirport: 'KIX',
					departureTime: '2025-04-10T14:00+09:00',
					arrivalAirport: 'SFO',
					arrivalTime: '2025-04-10T08:30',
					duration: '10h 45m',
					confirmation: 'JAL-3M8PQ'
				}
			]
		}
	]
};
