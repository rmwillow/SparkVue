const { Schema, model } = require('mongoose');
const moment = require('moment');

//creating userschema
const UserSchema = new Schema (
    {
        username: {
            type: String, 
            required: true, 
            trim: true,
            unique: true
        },
        email: {
            type: String, 
            required: true,
            unique: true,
            validate: {
                validator: function(value) {
                  return value === 'correct@example.com';
                },
                message: 'Invalid email.',
              },
            thoughts: [
              {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
              }
            ],
            friends: [
                {
                  type: Schema.Types.ObjectId,
                  ref: 'User',
                }
              ],
        }
    }
)