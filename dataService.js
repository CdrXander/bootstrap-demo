angular.module('boot')
  .service('dataService', function ($http) {
    var dogs = [{
        id: 1,
        name: 'Chachi',
        picture: 'http://www.thelabradorsite.com/wp-content/uploads/2015/08/when-can-puppy-go-out.jpg',
        likes: 1
      },
      {
        id: 2,
        name: 'Reginald',
        picture: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg',
        likes: 5
      },
      {
        id: 3,
        name: 'Christopher Nolan',
        picture: 'https://s-media-cache-ak0.pinimg.com/564x/29/fa/14/29fa1441f2a0446e9aa45cee74495a83.jpg',
        likes: 0
      }
    ]

    this.getDogs = function () {
      return dogs;
    }
    this.addLike = function (id) {
      for (var dog of dogs) {
        if (dog.id == id) {
          dog.likes++;
          break;
        }
      }
      return dogs;
    }
    this.addPuppy = function (puppy) {
      puppy.id = dogs.length + 1;
      puppy.likes = 0;
      dogs.push(puppy);
      return dogs;
    }


})
