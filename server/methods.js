Meteor.methods({

  addIhealth(ihealth){
    if(!Meteor.userId()){
      throw new Meteor.Error('not-authorised');
    }
    Ihealth.insert({
     text : ihealth,
     complete: false,
     createdAt: new Date(),
     user: Meteor.userId()
    });
  },
  toggleIhealth(ihealth){
    if(Meteor.userId() !== ihealth.user){
      throw new Meteor.Error('not-authoerised');
    }
    Ihealth.update(ihealth._id,{
      $set:{complete:!ihealth.complete}
    });
  },
  deleteIhealth(ihealth){
    if(Meteor.userId() !== ihealth.user){
      throw new Meteor.Error('not-authoerised');
    }
    Ihealth.remove(ihealth._id);
  }
})
