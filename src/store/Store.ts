
export type UserId = string;

export interface Chat{
    id: string,
    userId: UserId;
    name:string;
    message: string;
    upvotes: UserId[];  // who has upvoted what

}


export abstract class Store {
    constructor() {
    }

    initRoom(roomId:string){}

    getChats(room:string, limit: number, offset: number) {

    }

    addChat(userId:UserId, name:String,  roomId:string, message: string){

    }

    upvote(userId:UserId,roomId: UserId, chatId:string){

    }
}