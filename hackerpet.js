$(document).ready(function(){
  var app = {};
  var pets = {
    bebe:{
      name: 'Bebe',
      nickname: 'Boo',
      age: '3 years old',
      sex: 'Female',
      birthday: 'Unknown',
      likes: 'Chasing own tail, fruits, snuggles',
      dislikes: 'Carrots, my mom, posing for pictures',
      favourite: 'Dried mango',
      expertise: 'Design',
      popUp:'images/dog_bebe.jpg',
      owner: 'images/dog_bebe_nadia.jpg',
      together: 'images/dog_bebe_nadia_together.jpg'
    },
    
    bluebeetle:{
      name: 'Blue Beetle',
      nickname: 'Beetle',
      age: '7 years old',
      sex: 'Female',
      birthday: 'May something',
      likes: 'Looking out the window, curling up under blankets, whining',
      dislikes: 'Waiting for her food, dogs who snorf at her, closed doors',
      favourite: 'Tuna',
      expertise: 'Design',
      popUp:'images/cat_bluebeetle.jpg',
      owner: 'images/cat_bluebeetle_anya.jpg',
      together: 'images/cat_bluebeetle_anya_together.jpg'
    },
    boostergold:{
      name: 'Booster Gold',
      nickname: 'Booster',
      age: '8.5 years old',
      sex: 'Female',
      birthday: 'April something',
      likes: 'Being held like a baby, licking plastic, raw meat',
      dislikes: ' Not being held, leaving the apartment, being alone',
      favourite: 'Raw chicken',
      expertise: 'JavaScript',
      popUp:'images/cat_boostergold.jpg',
      owner: 'images/cat_boostergold_anya.jpg',
      together: 'images/cat_boostergold_anya_together.jpg'
    },
    
    boy:{
      name: 'Boy',
      nickname: 'Gooby',
      age: '5 years old',
      sex: 'Boy',
      birthday: 'July 26th',
      likes: 'Sleeping, running and his family',
      dislikes: 'Fireworks and thunder',
      favourite: 'Blueberries, yogurt and anything beef-y',
      expertise: 'Design',
      popUp:'images/dog_boy.jpg',
      owner: 'images/dog_boy_marlo.jpg',
      together: 'images/dog_boy_marlo_together.jpg'
    },
    
    clyde:{
      name: 'Clyde',
      nickname: 'Clydesdale, Gremlin, Bark Zuckerberg',
      age: '2.5 years old',
      sex: 'Male',
      birthday: 'January 8th',
      likes: 'Toilet paper rolls, naps, clapping',
      dislikes: 'Large classrooms, crowds, posing',
      favourite: 'Sleeping',
      expertise: 'Javascript',
      popUp:'images/dog_clyde.jpg',
      owner: 'images/dog_clyde_matt.jpg',
      together: 'images/dog_clyde_matt_together.jpg'
    },
    cooper:{
      name: 'Cooper',
      nickname: 'Coops, Coop, Pooper, Poops',
      age: '3 years old',
      sex: 'Male',
      birthday: 'September 26th',
      likes: 'Things that squeak, drinking water from sprinklers, chasing rabbits/ squirrels/ chipmunks',
      dislikes: 'New people, noises that wake him up, getting haircuts',
      favourite: 'Cheese',
      expertise: 'CSS',
      popUp:'images/dog_cooper.jpg',
      owner: 'images/dog_cooper_evan.jpg',
      together: 'images/dog_placeholder.jpg'
    },
    
    dublin:{
      name:'Dublin Rainn Kennedy',
      nickname: 'Boogaloo or Baboo',
      sex: 'Male',
      age: '8 years old',
      birthday: 'Unknown',
      likes: 'When you give him neck kisses, when you fake sneeze at him and his brother, (my black house panther, Logan)',
      dislikes: 'Loud unexpected booming noises (fireworks, lightning), most vegetables, being left home alone',
      favourite: 'Peanut butter',
      expertise: 'Unexpected ankle licking (to strangers) and protecting me from huge (4 times his size) dogs (he\'s always very proud)',
      popUp: 'images/dog_dublin.jpg',
      owner: 'images/dog_dublin_tarah.jpg',
      together: 'images/dog_dublin_tarah_together.jpg'
    },
    earlKendrickWaffles:{
      name: 'Earl Kendrick Waffles',
      nickname: 'Kitty, Ken, Kenny, WAFFLES',
      age: '7 months old',
      sex: 'Male',
      birthday: 'January 7th',
      likes: 'Chasing his toys, attacking feet, singing',
      dislikes: 'Being home alone, the sound of the shower, not being the center of attention',
      favourite: 'Being brushed',
      expertise: 'Javascript',
      popUp:'images/cat_earlKendrickWaffles.jpg',
      owner: 'images/cat_earlKendrickWaffles_adam.jpg',
      together: 'images/dog_placeholder.jpg'
    },
    henry:{
      name: 'Henry',
      nickname: 'Meesa',
      age: '3 years old',
      sex: 'Male',
      birthday: 'September 11th',
      likes: 'Toys, chewing undies, car rides',
      dislikes: 'Being in trouble, the heat, being groomed',
      favourite: 'Male bull organ',
      expertise: 'Sass',
      popUp:'images/dog_henry.jpg',
      owner: 'images/dog_henry_james.jpg',
      together: 'images/dog_henry_james_together.jpg'
    },
    izzy:{
      name:'Izzy Cooper',
      nickname: 'Littles',
      age: '4 years old',
      sex: 'Female',
      birthday: 'May 1st',
      likes: 'Cuddles, her bed, belly rubs',
      dislikes: 'Dislikes empty food bowl, hard surface, smelly litterbox',
      favourite: 'Fancy Feast',
      expertise: 'CSS',
      popUp: 'images/cat_izzy.jpg',
      owner: 'images/cat_moose_nat.jpg',
      together: 'images/cat_izzy_nat_together.jpg'
    },
    johnny:{
      name: 'Johnny',
      nickname: 'Fuzzbutt',
      age: '4 years old',
      sex: 'Male',
      birthday: '2 years old',
      likes: 'Smushing his giant head into people, staring at shadows, belly rub',
      dislikes: 'The blowdrier, the vacuum cleaner, being alone ',
      favourite: 'Physical affection ',
      expertise: 'Top of the fridge exploration',
      popUp:'images/cat_johnny.jpg',
      owner: 'images/cat_johnny_laura.jpg',
      together: 'images/cat_johnny_laura_together.jpg'
    },
    leo:{
      name: 'Leonidas',
      nickname: 'Leo',
      age: '4 years old',
      sex: 'Male',
      birthday: 'February 28th',
      likes: 'Sitting like a human, being very close to you at all times , having his face blown at',
      dislikes: 'Being brushed, not sleeping on the bed, having his face blown at',
      favourite: 'Chicken',
      expertise: 'Web Accessibility',
      popUp:'images/dog_leo.jpg',
      owner: 'images/dog_leo_kristen.jpg',
      together: 'images/dog_leo_kristen_together.jpg'
    },
    
    lola:{
      name: 'Lola',
      nickname: 'Lulu, Diabola',
      age: '5 years old',
      sex: 'Female',
      birthday: 'July 3rd',
      likes: 'Suntanning, cuddling, tug-of-war, fetch',
      dislikes: 'Big dogs, rain, and snow',
      favourite: 'Cheese, beef liver, bully sticks',
      expertise: 'Design Direction',
      popUp:'images/dog_lola.jpg',
      owner: 'images/dog_lola_sarah.jpg',
      together: 'images/dog_lola_sarah_together.jpg'
    },
    
    lucha:{
      name:'Lucha',
      nickname: 'Lu, Lubear, Lubeezy, Luchie, Susan Luchie, Luchita Nyong’o',
      age: '1 years 9 months old',
      sex: 'Female',
      birthday: 'October 28th',
      likes: 'Food, walks, snuggles, belly rubs, chewing on stuff',
      dislikes: 'Strangers, telephones, Marnie Michaels from the HBO show Girls (will bark at TV)',
      favourite: 'Salmon, carrots, or peanut butter',
      expertise: 'SCSS because she\'s Sassy',
      popUp: 'images/dog_lucha.jpg',
      owner: 'images/dog_lucha_jess.jpg',
      together: 'images/dog_lucha_jess_together.jpg'
    },
    
    moose:{
      name:'Moose Abramson',
      nickname: 'Moosey',
      age: '5 years old',
      sex: 'Male',
      birthday: 'February 5th',
      likes: 'Treats, warm concrete, attention',
      dislikes: 'Baths, wind, smelly litterbox',
      favourite: 'Temptations',
      expertise: 'Javascript',
      popUp: 'images/cat_moose.jpg',
      owner: 'images/cat_moose_nat.jpg',
      together: 'images/cat_moose_jesse_together.jpg'
    },
    
    mrmoo:{
      name: 'Mr. Mooooo',
      nickname: 'Cat',
      age: '3 years old',
      sex: 'Male',
      birthday: 'November 12th',
      likes: 'Kisses, feathers & elastics',
      dislikes: 'Vaccum, my neighbours, spray bottles',
      favourite: 'Anything I\'m eating especially ice cream, KD & for some reason spinach',
      expertise: 'CSS',
      popUp: 'images/cat_mrmoo.jpg',
      owner: 'images/cat_mrmoo_karly.jpg',
      together: 'images/cat_mrmoo_karly_together.jpg'
    },
    
    nico:{
      name: 'Nico',
      nickname: 'Jeebs, Papua, Cholo',
      age: '8 years old',
      sex: 'Female',
      birthday: 'November 11th',
      likes: 'Her orange ball, swimming, chewing bones through her blanket',
      dislikes: 'Farts, wind, dog packs',
      favourite: 'Carrots',
      expertise: 'Stylus',
      popUp: 'images/dog_nico.jpg',
      owner: 'images/dog_nico_lucas.jpg',
      together: 'images/dog_placeholder.jpg'
    },
    paco:{
      name: 'Paco',
      nickname: 'N/A',
      age: '6 years old',
      sex: 'Male',
      birthday: 'May 15th',
      likes: 'Strangers, playing in water, being outside',
      dislikes: 'Learning, thunder storms, being on a leash',
      favourite: 'Sticks thrown in a body of water',
      expertise: 'User Experience',
      popUp: 'images/dog_paco.jpg',
      owner: 'images/dog_paco_francis.jpg',
      together: 'images/dog_placeholder.jpg'
    },
    prudence:{
      name: 'Prudence',
      nickname: 'Prudence Thunder, Poo, Pru, Butthead',
      age: '9 years old',
      sex: 'Female',
      birthday: 'Unknown',
      likes: 'The inside rubber part of tennis balls, raspberry bellies, Whitesnake',
      dislikes: 'Dislikes: squirrels, Baha Men, waking up',
      favourite: 'Going home.',
      expertise: 'UX',
      popUp: 'images/dog_prudence.jpg',
      owner: 'images/dog_prudence_jendrew.jpg',
      together: 'images/dog_prudence_jendrew_together.jpg'
    },
    
    rafiki:{
      name: 'Rafiki',
      nickname: 'Feeks, The Feeks, Fiki, Pups',
      age: '2 years old',
      sex: 'Female',
      birthday: 'May 3rd',
      likes: 'Snacks, chews her rope, people watching, blankets, walks along the harbour, smelling flowers, falling asleep to "Night Changes" by One Direction',
      dislikes: 'Thunderstorms, surround sound speakers, meeting larger dogs, anything or anyone that steps foot on our driveway',
      favourite: 'Carrots',
      expertise: 'Sniffing out code smell',
      popUp: 'images/dog_rafiki.jpg',
      owner: 'images/dog_rafiki_francine.jpg',
      together: 'images/dog_rafiki_francine_together.jpg'
    },
    
    rufus: {
      name: 'Rufus',
      nickname: 'Ru',
      age: '5 years old',
      sex: 'Male',
      birthday: 'Unknown',
      likes: 'Plastic bags, elastics, bullying',
      dislikes: 'Rules, alley cats, being left out',
      favourite: 'Canned cat food. Any kind.',
      expertise: 'UX Design',
      popUp:'images/cat_rufus.jpg',
      owner: 'images/cat_rufus_amanda.jpg',
      together: 'images/cat_rufus_amanda_together.jpg'
    },
    
    sinclair: {
      name: 'Sinclair',
      nickname: 'Kotentse [Bulgarian: котенце] meaning kitten',
      age: '3 years old',
      sex: 'Male',
      birthday: 'August 17th',
      likes: 'Catching birds, trying to sneak into neighbouring apartments, and morning cuddles',
      dislikes: 'Small dogs, being ignored, and an empty food bowl',
      favourite: 'Dried chicken necks, wild boar jerky, and being brushed.',
      expertise: 'CSS',
      popUp:'images/cat_sinclair.jpg',
      owner: 'images/cat_sinclair_yana.jpg',
      together: 'images/cat_sinclair_yana_together.jpg'
    },
    snickers: {
      name: 'Snickers',
      nickname: 'SNICKERS GET OFF THE TABLE',
      age: '1.5 years old',
      sex: 'Male',
      birthday: 'January 9th',
      likes: 'Naps, laps and vet apps',
      dislikes: 'Getting wet, tomatoes, squirrels',
      favourite: 'Sweet Potatoes. He once tried to eat a bat.',
      expertise: 'Design',
      popUp:'images/dog_snickers.jpg',
      owner: 'images/dog_snickers_wes.jpg',
      together: 'images/dog_snickers_wes_together.jpg'
    },
    winston: {
      name: 'Winston',
      nickname: 'Winnie, Fatman',
      age: '3 years old',
      sex: 'Male',
      birthday: 'April 7th',
      likes: 'Naps, tug-of-war, the sun',
      dislikes: 'Paper bags, boxes, brooms',
      favourite: 'Ice-cream, milk, pizza',
      expertise: 'CSS2',
      popUp:'images/dog_winston.jpg',
      owner: 'images/dog_winston_colin.jpg',
      together: 'images/dog_winston_colin_together.jpg'
    }
  };
  

  //on click get pet data-name, pass it to a function to fill data in the html's modal
  $('.gallery a').on('click', function(e){
    var name = $(this).data('name');
    app.pet = pets[name];
    
    // fill out the modal by appending the object attributes to the correct class in the modal using the data-name attribute
    $('.name').empty().append(app.pet['name']);
    $('.nickname').empty().append(app.pet['nickname']);
    $('.age').empty().append(app.pet['age']);
    $('.sex').empty().append(app.pet['sex']);
    $('.birthday').empty().append(app.pet['birthday']);
    $('.likes').empty().append(app.pet['likes']);
    $('.dislikes').empty().append(app.pet['dislikes']);
    $('.favourite').empty().append(app.pet['favourite']);
    $('.expertise').empty().append(app.pet['expertise']);
    $('.popUp').empty().attr('src', app.pet['popUp']);
    $('.owner').empty().attr('src', app.pet['owner']);
    
    // when clicking on owner's avi, popUp image of pet will change to together.jpg  (owner and pet together)
    // when clicking on owner's avi again, if pet and together.jpg image then change back to pet image.
    
    
    //If a pet has more than one owner that attended HackerYou we will add a class of multiple-owners to the owner img in order for both portraits of the owners to fit
    if(app.pet['name'] === 'Prudence'){
      $('.owner').addClass('multiple-owners');
    }
    //If there is only one owner we will remove the class of multiple-owners if it has been applied to the owner image if not it will do nothing
    else{
      $('.owner').removeClass('multiple-owners');
    }
    
  }); // end of function that fills out popUp data attributes.
  
  $('.owner').on('click', function(e){
    if($('#popUpImg').hasClass('together')){
      $('.popUp').attr('src', app.pet['popUp']);
      $('#popUpImg').removeClass('together');
    }
    else {
      $('#popUpImg').addClass('together');
      $('.popUp').attr('src', app.pet['together']);
    }
  });
  
  
  //listen for click event on a within the gallery.
  $('.gallery a').on('click', function(e){
    e.preventDefault();
    //change the attributes for modal container to change visibility visible and display flex.
    $('.modal-container').addClass('show');
  });
  //to get out of modal create an event on the overlay to remove "show" class.
  //listen for click event on overlay within the modal.
  //change the attribute for the modal container to remove "show" class.
  $('.modal-container .overlay').on('click', function(ev){
    $('.modal-container').removeClass('show');
  });
  //disable exiting from modal within modal-container class.
  $('.modal-container .modal').on('click', function(e){
    
    e.stopPropagation();
  });
}); // end of modal function!
