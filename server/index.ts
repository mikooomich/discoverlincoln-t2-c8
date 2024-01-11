import express, { Request, Response } from "express"
import { events, attractions, businesses, LincolnDataTemplate, GalleryImage } from "./data";
const fs = require('fs');
const cors = require("cors");

const app = express()
const port = 25753

app.use(
	cors()
);

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


app.listen(port, () => {
	console.log(`Hewwo! Port ${port}`);
})
