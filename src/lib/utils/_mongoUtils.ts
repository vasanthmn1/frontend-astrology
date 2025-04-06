import mongoose from "mongoose";


export let _mongooseUtils = {


    isValidObjectId: (id: string) => {
        return mongoose.Types.ObjectId.isValid(id);
    },
    createObjectId: (): mongoose.Types.ObjectId => {
        return new mongoose.Types.ObjectId()

    },
    getObjectId: (id: string): mongoose.Types.ObjectId => {

        if (_mongooseUtils.isValidObjectId(id)) {
            return new mongoose.Types.ObjectId(id);
        }

        return _mongooseUtils.createObjectId()
    }
}