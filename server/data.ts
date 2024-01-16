export type LincolnDataTemplate = {
	attributes: {
		title: string
		description: string
		location: string
		numStars: number
		tags: string // category
	}

	image: {
		url: string
		data?: any
		alternativeText: string
	}
}

export type EventData = LincolnDataTemplate & {
	attributes: {
		date: string
		startTime: string
		endTime: string
		latitude: number
		longitude: number

		isRegisterable: boolean
		isFull: boolean
		isAvailable: boolean
		barcodeUID: number
		cost: number
	}
}

export type AttractionsData = LincolnDataTemplate & {
	attributes: {
		date: string
		latitude: number
		longitude: number
		isAvailable: boolean
		hoursOfOperation: any // figure out rich text
	}
}

export type BusinessData = LincolnDataTemplate & {
	attributes: {
		isAvailable: boolean
		hoursOfOperation: any // figure out rich text
	}
}

export type GalleryImage = {
	url: string
	data?: any
	alternativeText: string
}

export const categoryColors = {
	Restaurant: "#ff0303",
	Music: "#b33978",
	Performing_Arts: "#8b288f",
	Festival: "#56288f",
	Sports: "#1922a6",
	Charity: "#515cf0",
	Other: "#10649c",
	Tours: "#10929e",

	Monument: "#1eb07f",
	Mall: "#5ea890",
	Park: "#268034",
	Food: "#06590a",
	Shopping: "#74914d",
	Technology: "#90941e",
	Financial: "#b58412",
	Distribution: "#694c0a",
	Medical: "#009179",
	Emergency: "#666666",
	Industrial: "#b04300"
};


export let events: EventData[] = [
	{
		attributes: {
			title: "Wine Festival",
			description: "Indulge your senses in a symphony of flavors and aromas at our exquisite Wine Festival! Join us for an enchanting celebration of vineyard treasures and oenophilic delights. Immerse yourself in a world where each sip tells a story, where the velvety notes of reds and the crisp elegance of whites dance on your palate.",
			location: "Highland Park Drive",
			date: "2023-12-31",
			startTime: "10:00 AM",
			endTime: "3:00 PM",
			latitude: 43.159045,
			longitude: -79.484618,
			numStars: 2,
			tags: "Mall",
			isRegisterable: true,
			isFull: false,
			isAvailable: true,
			barcodeUID: 123456789,
			cost: 10.99,
		},
		image: {
			url: "kym-ellis-aF1NPSnDQLw-unsplash.jpg",
			alternativeText: "Event 1 Image",
		},
	},
	{
		attributes: {
			title: "Grapes Festival",
			description: "Embark on a journey through rolling grapevines, where the sun-kissed grapes have been meticulously nurtured to perfection. Our Grape Festival is a haven for both connoisseurs and enthusiasts, offering an unparalleled selection of wines from renowned vineyards around the globe.",
			location: "The Middle Of Nowhere",
			date: "2023-11-15",
			startTime: "2:00 PM",
			endTime: "6:00 PM",
			latitude: 43.151045,
			longitude: -79.483618,
			numStars: 3,
			tags: "Monument",
			isRegisterable: true,
			isFull: true,
			isAvailable: false,
			barcodeUID: 987654321,
			cost: 1.99,
		},
		image: {
			url: "roberta-sorge-IywM7AQTZcM-unsplash.jpg",
			alternativeText: "Event 2 Image",
		},
	},
	{
		attributes: {
			title: "Artisanal Cheese Tasting",
			description: "Elevate your taste buds with a delightful Artisanal Cheese Tasting event. Immerse yourself in the world of exquisite cheeses carefully curated to enchant your palate. Indulge in the rich textures and nuanced flavors that make each cheese a masterpiece.",
			location: "Cheese Haven",
			date: "2023-11-10",
			startTime: "6:00 PM",
			endTime: "8:00 PM",
			latitude: 43.165872,
			longitude: -79.489501,
			numStars: 2,
			tags: "Food",
			isRegisterable: true,
			isFull: false,
			isAvailable: true,
			barcodeUID: 246813579,
			cost: 15.99,
		},
		image: {
			url: "home-vert-domes1.jpg",
			alternativeText: "Artisanal Cheese Tasting Image",
		},
	},
	{
		attributes: {
			title: "Sunset Jazz & Wine",
			description: "Experience the magic of live jazz music as the sun sets on our enchanting vineyard. Sunset Jazz & Wine offers an unforgettable evening of smooth melodies, delectable wines, and picturesque views. Let the rhythm of jazz serenade you under the twilight sky.",
			location: "Vineyard Serenity",
			date: "2023-12-05",
			startTime: "5:30 PM",
			endTime: "9:00 PM",
			latitude: 43.148712,
			longitude: -79.470256,
			numStars: 3,
			tags: "Music",
			isRegisterable: false,
			isFull: false,
			isAvailable: true,
			barcodeUID: 369852147,
			cost: 0,
		},
		image: {
			url: "marius-ciocirlan-Llqq7lv-Rjk-unsplash.jpg",
			alternativeText: "Sunset Jazz & Wine Image",
		},
	},
	{
		attributes: {
			title: "Starry Night Concert",
			description: "Immerse yourself in the enchanting melodies of our Starry Night Concert. Join us for an unforgettable evening under the open sky, where talented musicians will serenade you with a blend of classical and contemporary tunes. Bring a blanket, relax, and let the music transport you to a magical realm.",
			location: "Moonlit Meadow",
			latitude: 43.138,
			longitude: -79.50,
			date: "2023-08-20",
			startTime: "5:30 PM",
			endTime: "9:00 PM",
			numStars: 2,
			tags: "Music",
			isAvailable: true,
			isRegisterable: true,
			isFull: false,
			barcodeUID: 369952147,
			cost: 31.99,
		},
		image: {
			url: "felix-mittermeier-SZZWk4Q_Q7Q-unsplash.jpg",
			alternativeText: "Starry Night Concert Image",
		},
	},
	{
		attributes: {
			title: "Flavors on Wheels Festival",
			description: "Savor a culinary adventure at our Flavors on Wheels Festival. Indulge your taste buds with a diverse array of dishes from gourmet food trucks. From savory to sweet, experience a gastronomic journey in a lively outdoor setting. Bring your appetite and discover a world of delicious delights!",
			location: "Foodie Park",
			latitude: 43.141,
			longitude: -79.478,
			date: "2023-09-10",
			startTime: "1:30 PM",
			endTime: "8:00 PM",
			numStars: 1,
			tags: "Food",
			isAvailable: true,
			isRegisterable: true,
			isFull: false,
			barcodeUID: 269852147,
			cost: 99.99,
		},
		image: {
			url: "mae-mu-vjVHYlk91Vk-unsplash.jpg",
			alternativeText: "Flavors on Wheels Festival Image",
		},
	}
];

export let attractions: AttractionsData[] = [
	{
		attributes: {
			title: "Artisan Craft Fair",
			description: "Explore the talents of local artisans at our Artisan Craft Fair. From handmade jewelry to unique ceramics, immerse yourself in a world of creativity. Join us for a day of artistic expression and discover one-of-a-kind treasures.",
			location: "Central Mall",
			latitude: 43.169045,
			longitude: -79.464618,
			date: "2023-11-20",
			numStars: 2,
			tags: "Charity",
			isAvailable: true,
			hoursOfOperation: "Monday: 8 AM - 7 PM\n\nTuesday: 8 AM - 7 PM\n\nWednesday: 8 AM - 7 PM\n\nThursday: 8 AM - 7 PM\n\nFriday: 8 AM - 10 PM\n\nSaturday: 10 AM - 10 PM\n\nSunday: 10 AM - 6 PM",
		},
		image: {
			url: "terry-vlisidis-0dhIwRsPV74-unsplash.jpg",
			alternativeText: "Artisan Craft Fair Image",
		},
	},

	{
		attributes: {
			title: "The Great Outdoors",
			description: "Step back in time with our Historical Walking Tour. Discover the secrets of centuries past as guides lead you through iconic landmarks and share captivating stories. Join us for a journey through history's footsteps.",
			location: "Heritage District",
			latitude: 43.109,
			longitude: -79.4899,
			date: "2023-12-10",
			numStars: 1,
			tags: "Tours",
			isAvailable: true,
			hoursOfOperation: "Always Open!",
		},
		image: {
			url: "sven-wilhelm-2cRXSWyMHA8-unsplash.jpg",
			alternativeText: "The Great Outdoors Image",
		},
	},
	{
		attributes: {
			title: "Cherry Picking Extravaganza",
			description: "Indulge in the sweet delight of cherry picking at our Cherry Picking Extravaganza. Join us for a day of family fun, surrounded by lush orchards and the aroma of ripe cherries. Experience the joy of harvesting your own basket of fresh, juicy cherries straight from the trees.",
			location: "Sunny Orchards",
			latitude: 43.120,
			longitude: -79.468,
			date: "2023-07-15",
			numStars: 3,
			tags: "Other",
			isAvailable: false,
			hoursOfOperation: "Monday: 8 AM - 7 PM\n\nTuesday: 8 AM - 7 PM\n\nWednesday: 8 AM - 7 PM\n\nThursday: 8 AM - 7 PM\n\nFriday: 8 AM - 10 PM\n\nSaturday: 10 AM - 10 PM\n\nSunday: 10 AM - 6 PM",
		},
		image: {
			url: "ish-de-loyola-uEit-8uQdPU-unsplash.jpg",
			alternativeText: "Cherry Picking Extravaganza Image",
		},
	}
];

export let businesses: BusinessData[] = [
	{
		attributes: {
			title: "Vineyard Elegance",
			description: "Experience the epitome of vineyard elegance at our upscale establishment. Indulge in refined wines, gourmet cuisine, and an ambiance that whispers sophistication. Join us for a journey through flavors that transcend the ordinary.",
			location: "76 Vineyard Avenue",
			numStars: 2,
			tags: "Food",
			isAvailable: true,
			hoursOfOperation: "Monday: 5 PM - 11 PM\n\nTuesday: 5 PM - 11 PM\n\nWednesday: 5 PM - 11 PM\n\nThursday: 5 PM - 11 PM\n\nFriday: 5 PM - 12 AM\n\nSaturday: 12 PM - 12 AM\n\nSunday: 12 PM - 10 PM",
		},
		image: {
			url: "wolfgang-bonness-bBG0dtdDf6A-unsplash.jpg",
			alternativeText: "Vineyard Elegance Image",
		},
	},
	{
		attributes: {
			title: "Harmony Café",
			description: "Savor the harmony of flavors at Harmony Café, where every dish is a melody and every sip is a symphony. Immerse yourself in the cozy ambiance, indulge in delectable treats, and let the culinary notes transport you to a world of gastronomic bliss.",
			location: "909 Melody Street",
			numStars: 3,
			tags: "Performing_Arts",
			isAvailable: true,
			hoursOfOperation: "Monday: 8 AM - 7 PM\n\nTuesday: 8 AM - 7 PM\n\nWednesday: 8 AM - 7 PM\n\nThursday: 8 AM - 7 PM\n\nFriday: 8 AM - 10 PM\n\nSaturday: 10 AM - 10 PM\n\nSunday: 10 AM - 6 PM",
		},
		image: {
			url: "mohamad-othman-rwVU5n0pA_A-unsplash.jpg",
			alternativeText: "Harmony Café Image",
		},
	},
	{
		attributes: {
			title: "Vista Lounge",
			description: "Elevate your evening at Vista Lounge, where panoramic views and crafted cocktails converge. Immerse yourself in the allure of the night as you unwind in style. Join us for a night of sophistication and breathtaking vistas.",
			location: "Skyline Heights Park",
			numStars: 1,
			tags: "Other",
			isAvailable: false,
			hoursOfOperation: "Monday: 6 PM - 1 AM\n\nTuesday: 6 PM - 1 AM\n\nWednesday: 6 PM - 1 AM\n\nThursday: 6 PM - 1 AM\n\nFriday: 6 PM - 2 AM\n\nSaturday: 8 PM - 2 AM\n\nSunday: CLOSED",
		},
		image: {
			url: "vilma-rivera-xzcXixIrRYI-unsplash.jpg",
			alternativeText: "Vista Lounge Image"
		},
	},

	{
		attributes: {
			title: "The Rick Astley Experience",
			description: "Never gonna give your up, never gonna let your down!",
			location: "726 Rick Roll St.",
			numStars: 3,
			tags: "Music",
			isAvailable: false,
			hoursOfOperation: "Monday: 8 AM - 7 PM\n\nTuesday: 8 AM - 7 PM\n\nWednesday: 8 AM - 7 PM\n\nThursday: 8 AM - 7 PM\n\nFriday: 8 AM - 10 PM\n\nSaturday: 10 AM - 10 PM\n\nSunday: 10 AM - 6 PM",
		},
		image: {
			url: "rick roll.webp",
			alternativeText: "Rick Astley Image"
		},
	},


];
