import express, { Request, Response } from "express"
import { events, attractions, businesses, gallery } from "./data";

const cors = require("cors");
const app = express()
const port = 25753

app.use(
	cors()
);


app.get('/api/events', async (req: Request, res: Response) => {
	console.log("GET /api/events");
	res.status(200).json(events);
})

app.get('/api/attractions', async (req: Request, res: Response) => {
	console.log("GET /api/attractions");
	res.status(200).json(events);
})


app.get('/api/businesses', async (req: Request, res: Response) => {
	console.log("GET /api/businesses");
	res.status(200).json(businesses);
})


app.get('/api/gallery', async (req: Request, res: Response) => {
	console.log("GET /api/gallery");
	res.status(200).json(gallery);
})


app.listen(port, () => {
	console.log(`Hewwo! Port ${port}`);
})
