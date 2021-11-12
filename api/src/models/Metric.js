import {Schema, model} from 'mongoose';

const metricSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  }
}, {
  versionKey: false,
  timestamps: true
});

export default model('Metric', metricSchema)





