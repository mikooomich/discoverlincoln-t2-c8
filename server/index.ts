import express, { Request, Response } from "express"
import { events, attractions, businesses, LincolnDataTemplate, GalleryImage, EventData } from "./data";
import Fuse from 'fuse.js';
const fs = require('fs');
const cors = require("cors");

const app = express()
const port = 25753

app.use(cors());
app.use(express.json());


// for demo purposes, a "global user"
let mockUser = {
	id: 1,
	username: "demo",
	password: "123456",
	email: "demoUser@AAAAA.com",
	loggedIn: false,
	registeredEvents: [{}], // event ids
}
mockUser.registeredEvents.pop(); // Why I need to do this workaround is beyond me. Typescript wtf


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

	let files = fs.readdirSync("./res/gallery");
	let galleryFiles: GalleryImage[] = [];

	// dump all files in ./res for now...
	for (let i = 0; i < files.length; i++) {
		let img = files[i];
		galleryFiles.push({
			url: files[i],
			data: `data:image/${img.split('.').pop()};base64,` +
				fs.readFileSync("./res/gallery/" + img, { encoding: 'base64' }),
			alternativeText: files[i]
		})
	}

	res.status(200).json(galleryFiles);
})

// add event to user
app.post('/api/events', async (req: Request, res: Response) => {
	console.log("POST /api/events");

	if (mockUser.loggedIn === false) {
		res.status(401).send("User is not logged in");
		return;
	}

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

app.post('/api/search', async (req: Request, res: Response) => {
	console.log("/api/search");

	let query = req.body.query; // search
	let tags = req.body.filter; // filter
	// console.log("Query:", query);
	// console.log("Tags:", tags);
	let arrayToSearch: Array<any> = [events, attractions, businesses]

	for (let i = 0; i < arrayToSearch.length; i++) {
		const fuse = new Fuse(arrayToSearch[i], { keys: ["attributes.title", "attributes.tags", "attributes.description", "attributes.location"] });
		// put item that matches in result array
		arrayToSearch[i] = [];
		fuse.search(query).map((result) => arrayToSearch[i].push(result.item));
	}

	// deduplicate within each array
	for (let i = 0; i < arrayToSearch.length; i++) {
		arrayToSearch[i] = arrayToSearch[i].filter((item: any, index: any) => {
			// also filter for tags
			return arrayToSearch[i].indexOf(item) === index && (tags.length == 0 || tags.includes(item.attributes.tags));
		})
	}

	let finalResult = {
		"events": retrieveImages( arrayToSearch[0]),
		"attractions": retrieveImages(arrayToSearch[1]),
		"businesses": retrieveImages(arrayToSearch[2])
	};

	res.status(200).json(finalResult);
});


/**
 * User API
 */

// get user
app.get('/users/me', async (req: Request, res: Response) => {
	console.log("GET /users/me");
	if (mockUser.loggedIn === false) {
		res.status(401).send("User is not logged in");
		return;
	}

	res.status(200).json(mockUser);
})

// Pretend the year is 1970 and this is cutting edge technology.
app.post('/users/login', async (req: Request, res: Response) => {
	console.log("GET /users/login");

	let username = req.body.identifier;
	let password = req.body.password;

	if (username === mockUser.username && password === mockUser.password) {
		mockUser.loggedIn = true;
		res.status(200).json(mockUser);
		return;
	}
	else {
		res.status(401).send("Invalid credentials");
		return;
	}
})

app.post('/users/logout', async (req: Request, res: Response) => {
	console.log("POST /users/logout");

	mockUser.loggedIn = false;
	res.status(200).send("Logged out");
})

app.listen(port, () => {
	console.log(`Hewwo World! Port ${port}`);
})
