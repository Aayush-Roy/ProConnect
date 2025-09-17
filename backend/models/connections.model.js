import mongoose, {  Schema } from "mongoose";
// Connection, connection,
const connectionRequest = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    connectionId:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    status_accepted:{
        type:Boolean,
        default:null,
    }
})

const ConnectionRequest = mongoose.model("ConnectionRequest",connectionRequest)
export default ConnectionRequest;
