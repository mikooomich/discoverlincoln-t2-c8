import express, { Request, Response } from "express"
import { events, attractions, businesses, LincolnDataTemplate, GalleryImage, EventData } from "./data";
const fs = require('fs');
const cors = require("cors");

const app = express()
const port = 25753

app.use(cors());
app.use(express.json());

/**
 * Convert all images of a dataset to base 64
 * 
 * @param path file path to image
 */
function retrieveImages(dataSet: Array<LincolnDataTemplate>) {
	for (let i = 0; i < dataSet.length; i++) {
		let img = dataSet[i].image;
		img.data = `data:image/${img.url.split('.').pop()};base64,` +
			fs.readFileSync("./res/" + img.url, { encoding: 'base64' });
	}
	return dataSet;
}

/**
 * Main API
 */

app.get('/api/events', async (req: Request, res: Response) => {
	console.log("GET /api/events");
	res.status(200).json(retrieveImages(events));
})

app.get('/api/attractions', async (req: Request, res: Response) => {
	console.log("GET /api/attractions");
	res.status(200).json(retrieveImages(attractions));
})


app.get('/api/businesses', async (req: Request, res: Response) => {
	console.log("GET /api/businesses");
	res.status(200).json(retrieveImages(businesses));
})


app.get('/api/gallery', async (req: Request, res: Response) => {
	console.log("GET /api/gallery");

	let files = fs.readdirSync("./res");
	let galleryFiles: GalleryImage[] = [];

	// dump all files in ./res for now...
	for (let i = 0; i < files.length; i++) {
		let img = files[i];
		galleryFiles.push({
			url: files[i],
			data: `data:image/${img.split('.').pop()};base64,` +
				fs.readFileSync("./res/" + img, { encoding: 'base64' }),
			alternativeText: files[i]
		})
	}

	res.status(200).json(galleryFiles);
})


/**
 * User API
 */

// for demo purposes, a "global user"
let mockUser = {
	id: 1,
	registeredEvents: [{}], // event ids
}
mockUser.registeredEvents.pop(); // Why I need to do this workaround is beyond me. Typescript wtf

// get user
app.get('/users/me', async (req: Request, res: Response) => {
	console.log("GET /users/me");
	console.log(mockUser);
	res.status(200).json(mockUser);
})

// add event to user
app.post('/api/events', async (req: Request, res: Response) => {
	console.log("POST /api/events");

	try {
		let eventID: number = parseInt(req.body.registerForEventID);
		let eventFound: EventData[] = events.filter((event) => event.attributes.barcodeUID === eventID);

		// add image to event
		try {
			eventFound[0].image.data = `data:image/${eventFound[0].image.url.split('.').pop()};base64,` +
				fs.readFileSync("./res/" + eventFound[0].image.url, { encoding: 'base64' });
		} catch (e) {
			console.log("Error adding image to event", e);
		}

		if (eventFound.length >= 0) {
			mockUser.registeredEvents.push(eventFound[0]);
		}
		else {
			throw new Error("Event not found");
		}
	} catch (e) {
		console.log(e);
		res.status(500).send("Error adding event to user: " + e);
		return;
	}
	res.status(200).send("Sucessfully added event to user");
})

// get event by id
app.get('/api/events/:id', async (req: Request, res: Response) => {
	const eventID = parseInt(req.params.id);
	console.log("GET /api/events with id:", eventID);

	let eventFound = events.filter((event) => event.attributes.barcodeUID === eventID);
	if (eventFound.length === 0) {
		eventFound = [];
	}

	res.status(200).json(eventFound);
})


app.listen(port, () => {
	console.log(`Hewwo! Port ${port}`);
})
