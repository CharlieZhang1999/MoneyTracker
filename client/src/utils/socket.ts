import { io, Socket } from "socket.io-client";


import { IDetail } from '../types/IDetail';
import { SendBody } from "../types/SendBody";
interface ServerToClientEvents {
    hi: () => void;
    receiveExpense: (expense: IDetail) => void; 
    
}

interface ClientToServerEvents {
    hello: () => void;
    newExpense: (expense: IDetail) => void;
    
}


// please note that the types are reversed
export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();