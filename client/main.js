Template.body.events({
  'submit #form'(event,template) {
    event.preventDefault();
    let exclamation = event.target.exclamation.value;
    let adverb = event.target.adverb.value;
    let noun = event.target.noun.value;
    let verb = event.target.verb.value;
    let madLib = exclamation+"! you say, as you "+adverb+" jump onto your "+noun+" and "+verb+" into the sunset.";
    console.log(madlib);
  }

  $('#madLib').fadeIn('slow',,);

})
