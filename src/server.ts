import { http } from './http';
import './websocket/client';

http.listen(3333, () => {
    console.log("Server started in port 3333")
})