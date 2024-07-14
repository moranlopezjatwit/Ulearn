const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
  });
  const User = mongoose.model('User', UserSchema);

  const newUser = new User({ username: 'testuser', password: 'testpass', email: 'test@example.com' });

  newUser.save()
    .then(user => {
      console.log('User saved:', user);
      db.close();
    })
    .catch(err => {
      console.error('Error saving user:', err);
      db.close();
    });
});

