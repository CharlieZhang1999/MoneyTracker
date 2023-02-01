import mongoose, { mongo, model, Schema, Document } from 'mongoose';
export interface IExpense extends Document {
    amount:Number,
    category:String,
    time:Number
}
const expenseSchema: Schema = new Schema({
    // username:{
    //     type:String,
    //     required: true
    // },
    amount:{
        type:Number,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    time:{
        type:Number,
        required:false
    }
    
});

export default model<IExpense> ("Expense", expenseSchema);