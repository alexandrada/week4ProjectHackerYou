$(document).ready(function(){
  
  var pets = {
    boy:{
      name: 'Boy',
      nickname: 'Boy-Boy',
      age: 4,
      sex: 'Male',
      birthday: 'Unknown',
      likes: 'Couches, naps, clapping',
      dislikes: 'Large classrooms, crowds, posing',
      favourite: 'Sleeping',
      expertise: 'Javascript',
      popUp:'images/dog_boy.jpg'
    },
    rufus: {
      name: 'Rufus',
      nickname: 'Ru',
      age: 5,
      sex: 'Male',
      birthday: 'Unknown',
      likes: 'Plastic bags, elastics, bullying',
      dislikes: 'Rules, alley cats, being left out',
      favourite: 'Canned cat food. Any kind.',
      expertise: 'UX Design',
      popUp:'images/cat_rufus.jpg'
    },
    leo:{
      name: 'Leo',
      nickname: 'A',
      age: 4,
      sex: 'Male',
      birthday: 'Unknown',
      likes: 'following, getting pets, breathing heavily',
      dislikes: 'solitude, havings his bangs touched, loud noises',
      favourite: 'bananas',
      expertise: 'jQuery',
      popUp:'images/dog_leo.jpg'
    },
    tester:{
      name: 'test',
      nickname: 'A',
      age: 4,
      sex: 'Female',
      birthday: 'Unknown',
      likes: 'following, getting pets, breathing heavily',
      dislikes: 'solitude, mean people, loud noises',
      favourite: 'bananas',
      expertise: 'jQuery',
      popUp:'images/dog_rufus.jpg'
    },
    
    
  };
  
  //click the data-name and open the appropriate pet object
  $('.gallery a').on('click', function(e){
    var name = $(this).data('name');
    var pet = pets[name];
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
    
    
  });
  
  // fill out the modal by appending the object attributes to the correct class in the modal using the data-name attribute
  
  //on click get pet data-name, pass it to a function to fill data in the html's modal
  
  
  //listen for click event on a within the gallery.
  $('.gallery a').on('click', function(e){
    e.preventDefault();
    //change the attributes for modal container to change visibility visible and display flex.
    $('.modal-container').addClass('show');
  });
  //to get out of modal create an event on the X and overlay to remove "show" class.
  //listen for click event on overlay within the modal.
  //change the attribute for the modal container to remove "show" class.
  $('.modal-container .overlay').on('click', function(ev){
    $('.modal-container').removeClass('show');
  });
  
  $('.modal-container .modal').on('click', function(e){
    e.stopPropagation();
  });
});
