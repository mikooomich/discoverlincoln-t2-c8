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

		isRegisterable: boolean
		isFull: boolean
		isAvailable: boolean
		hoursOfOperation: any // figure out rich text
	}

	image: {
		barcodeUID: string
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
			url: "kym-ellis-aF1NPSnDQLw-unsplash.jpg",
			data: null,
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
			url: "roberta-sorge-IywM7AQTZcM-unsplash.jpg",
			data: null,
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
			numStars: 4,
			tags: "Music",
			isAvailable: true,
			hoursOfOperation: "Rich text for Business 1", // Replace with actual rich text data
		},
		image: {
			url: "vilma-rivera-xzcXixIrRYI-unsplash.jpg",
			alternativeText: "Business 1 Image",
		},
	},
	{
		attributes: {
			title: "Business 2",
			description: "Description for Business 2",
			location: "Location 2",
			numStars: 5,
			tags: "Restaurant",
			isAvailable: false,
			hoursOfOperation: "Rich text for Business 2", // Replace with actual rich text data
		},
		image: {
			url: "mohamad-othman-rwVU5n0pA_A-unsplash.jpg",
			data: null,
			alternativeText: "Business 2 Image",
		},
	},
];
