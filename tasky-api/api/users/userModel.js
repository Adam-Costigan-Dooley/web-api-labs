import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const passwordValidator = (password) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(password);
};
const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: {
      type: String,
      required: true,
      validate: {
          validator: passwordValidator,
          message: props => `${props.value} is not a valid password!`
      }
  }
});


export default mongoose.model('User', UserSchema);
