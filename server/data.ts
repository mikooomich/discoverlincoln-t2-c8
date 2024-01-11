export type EventData = {
	attributes: {
		title: string
		description: string
		location: string
		date: string
		startTime: string
		endTime: string
		numStars: number
		tags: string // category
		isRegisterable: boolean
		isFull: boolean
		isAvailable: boolean
		hoursOfOperation: any // figure out rich text
	}

	image: {
		url: string
		alternativeText: string
		barcodeUID: string
	}
}

export type BusinessData = {
	attributes: {
		title: string
		description: string
		location: string
		date: string
		// startTime: string
		// endTime: string
		numStars: number
		tags: string // category
		isRegisterable: boolean
		isFull: boolean
		isAvailable: boolean
		hoursOfOperation: any // figure out rich text
	}

	image: {
		url: string
		alternativeText: string
		barcodeUID: string
	}
}

export type GalleryImage = {
	url: string
	alternativeText: string
}



export let events: EventData[] = [
	{
		attributes: {
			title: "Event 1",
			description: "Description for Event 1",
			location: "Location 1",
			date: "2023-12-31",
			startTime: "10:00 AM",
			endTime: "3:00 PM",
			numStars: 4,
			tags: "Mall",
			isRegisterable: true,
			isFull: false,
			isAvailable: true,
			hoursOfOperation: "Rich text for Event 1", // Replace with actual rich text data
		},
		image: {
			url: "./res/kym-ellis-aF1NPSnDQLw-unsplash.jpg",
			alternativeText: "Event 1 Image",
			barcodeUID: "123456789",
		},
	},
	{
		attributes: {
			title: "Event 2",
			description: "Description for Event 2",
			location: "Location 2",
			date: "2023-11-15",
			startTime: "2:00 PM",
			endTime: "6:00 PM",
			numStars: 5,
			tags: "Monument",
			isRegisterable: true,
			isFull: true,
			isAvailable: false,
			hoursOfOperation: "Rich text for Event 2", // Replace with actual rich text data
		},
		image: {
			url: "./res/roberta-sorge-IywM7AQTZcM-unsplash.jpg",
			alternativeText: "Event 2 Image",
			barcodeUID: "987654321",
		},
	},
];

export let attractions: EventData[] = events;

export let businesses: BusinessData[] = [
	{
		attributes: {
			title: "Business 1",
			description: "Description for Business 1",
			location: "Location 1",
			date: "2023-12-31",
			// startTime: "10:00 AM",
			// endTime: "3:00 PM",
			numStars: 4,
			tags: "Music",
			isRegisterable: true,
			isFull: false,
			isAvailable: true,
			hoursOfOperation: "Rich text for Business 1", // Replace with actual rich text data
		},
		image: {
			url: "https://example.com/business1.jpg",
			alternativeText: "Business 1 Image",
			barcodeUID: "123456789",
		},
	},
	{
		attributes: {
			title: "Business 2",
			description: "Description for Business 2",
			location: "Location 2",
			date: "2023-11-15",
			// startTime: "2:00 PM",
			// endTime: "6:00 PM",
			numStars: 5,
			tags: "Restaurant",
			isRegisterable: true,
			isFull: true,
			isAvailable: false,
			hoursOfOperation: "Rich text for Business 2", // Replace with actual rich text data
		},
		image: {
			url: "https://example.com/business2.jpg",
			alternativeText: "Business 2 Image",
			barcodeUID: "987654321",
		},
	},
];

export let gallery: GalleryImage[] = [
	// {
	// 	url: "test",
	// 	alternativeText: "A wonderful image"
	// }
]