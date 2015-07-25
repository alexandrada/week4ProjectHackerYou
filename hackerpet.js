$(document).ready(function(){
  
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
    
    boy:{
      name: 'Boy',
      nickname: 'Boy-Boy',
      age: '4 years old',
      sex: 'Male',
      birthday: 'Unknown',
      likes: 'Couches, naps, clapping',
      dislikes: 'Large classrooms, crowds, posing',
      favourite: 'Sleeping',
      expertise: 'Javascript',
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
      together: 'images/dog_cooper_evan_together.jpg'
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
      together: 'images/cat_earlKendrickWaffles_adam_together.jpg'
    },
    
    leo:{
      name: 'Leo',
      nickname: 'A',
      age: '4 years old',
      sex: 'Male',
      birthday: 'Unknown',
      likes: 'Following, getting pets, breathing heavily',
      dislikes: 'Solitude, havings his bangs touched, loud noises',
      favourite: 'bananas',
      expertise: 'jQuery',
      popUp:'images/dog_leo.jpg',
      owner: 'images/dog_leo_kristen.jpg',
      together: 'images/dog_leo_kristen_together.jpg'
    },
    lucha:{
      name:'Lucha',
      nickname: 'Lu, Lubear, Lubeezy, Luchie, Susan Luchie, Luchita Nyong’o',
      age: '1 years 9 months',
      sex: 'female',
      birthday: 'October 28th',
      likes: 'Food, walks, snuggles, belly rubs, chewing on stuff',
      dislikes: 'Strangers, telephones, Marnie Michaels from the HBO show Girls (will bark at TV)',
      favourite: ' Salmon, carrots, or peanut butter',
      expertise: 'SCSS because she\'s Sassy',
      popUp: 'images/dog_lucha.jpg',
      owner: 'images/dog_lucha_jess.jpg',
      together: 'images/dog_lucha_jess_together.jpg'
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
    paco:{
      name: 'Paco',
      nickname: 'N/A',
      age: '6 years old',
      birthday: 'May 15th',
      likes: 'Strangers, playing in water, being outside',
      dislikes: 'Learning, thunder storms, being on a leash',
      favourite: 'Sticks thrown in a body of water',
      expertise: 'User Experience',
      popUp: 'images/dog_paco.jpg',
      owner: 'images/dog_paco_francis.jpg',
      together: 'images/dog_paco_francis_together.jpg'
    },
    prudence:{
      name: 'Prudence',
      nickname: 'Pru',
      age: '6 years old',
      sex: 'Female',
      birthday: 'Unknown',
      likes: 'Hopping, going home, water on dry food',
      dislikes: 'Loud noises, baths, not jumping',
      favourite: 'Sleeping on the desk',
      expertise: 'Teaching HTML',
      popUp: 'images/dog_prudence.jpg',
      owner: 'images/dog_prudence_jendrew.jpg',
      together: 'images/dog_prudence_jendrew_together.jpg'
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
    }
  };
  
  //on click get pet data-name, pass it to a function to fill data in the html's modal
  $('.gallery a').on('click', function(e){
    var name = $(this).data('name');
    var pet = pets[name];
    
    // fill out the modal by appending the object attributes to the correct class in the modal using the data-name attribute
    $('.name').empty().append(pet['name']);
    $('.nickname').empty().append(pet['nickname']);
    $('.age').empty().append(pet['age']);
    $('.sex').empty().append(pet['sex']);
    $('.birthday').empty().append(pet['birthday']);
    $('.likes').empty().append(pet['likes']);
    $('.dislikes').empty().append(pet['dislikes']);
    $('.favourite').empty().append(pet['favourite']);
    $('.expertise').empty().append(pet['expertise']);
    $('.popUp').attr('src', pet['popUp']);
    $('.owner').attr('src', pet['owner']);
    
    // when clicking on owner's avi, popUp image of pet will change to together.jpg  (owner and pet together)
    // when clicking on owner's avi again, if pet and together.jpg image then change back to pet image.
    $('.owner').on('click', function(e){
      if($('#popUpImg').hasClass('together')){
        $('.popUp').attr('src', pet['popUp']);
        $('#popUpImg').removeClass('together');
      }
      else {
        $('#popUpImg').addClass('together');
        $('.popUp').attr('src', pet['together']);
      }
    });
    
    //If a pet has more than one owner that attended HackerYou we will add a class of multiple-owners to the owner img in order for both portraits of the owners to fit
    if(pet['name'] === 'Prudence'){
      $('.owner').addClass('multiple-owners');
    }
    //If there is only one owner we will remove the class of multiple-owners if it has been applied to the owner image if not it will do nothing
    else{
      $('.owner').removeClass('multiple-owners');
    }
  }); // end of function that fills out popUp data attributes.
  
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
