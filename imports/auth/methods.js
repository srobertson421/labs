import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'auth.createUser'(username, email, password) {
    console.log(username, email, password);
  },
});
