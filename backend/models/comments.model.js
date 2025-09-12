import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    postId:{
        type:Schema.Types.ObjectId,
        ref:"Post",
    },
    body:{
        type:String,
        required:true
    }
});

const Comment = mongoose.model("Comment",CommentSchema);
export default Comment;