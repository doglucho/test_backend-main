import express from "express";

const app = express();
const port = 8080;

app.post( "/create", ( req: any, res: any ) => {
    res.send( "Hello world!" );
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );