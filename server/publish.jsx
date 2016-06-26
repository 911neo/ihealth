Ihealth = new Mongo.Collection("ihealth");

Meteor.publish("allIhealth",function() {
  return Ihealth.find();
});

Meteor.publish("userIhealth",function() {
  return Ihealth.find({user:this.userId});
});
