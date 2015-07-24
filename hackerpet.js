$(document).ready(function(){
  
  var pets = {
    rufus: {
      nickname: 'Ru',
      age: 5
    }
  }
  //click the html for the pet
  //get the data-name value
  //use that to access object
  var name = $(this).data('name');
  var pet = pets[name];
  
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
  
  
  
});
