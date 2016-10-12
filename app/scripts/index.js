/*
http://numbrojs.com/


*/

var ssBodies = [
    //https://en.wikipedia.org/wiki/Surface_gravity
    {
      name: 'Sun',
      surface_gravity: 28.02
    }, {
      name: 'Mercury',
      surface_gravity: 0.38
    }, {
      name: 'Venus',
      surface_gravity: 0.904
    }, {
      name: 'Earth',
      surface_gravity: 1.00
    }, {
      name: 'Moon',
      surface_gravity: 0.1654
    }, {
      name: 'Mars',
      surface_gravity: 0.376
    }, {
      name: 'Phobos',
      surface_gravity: 0.0005814
    }, {
      name: 'Deimos',
      surface_gravity: 0.000306
    }, {
      name: 'Ceres',
      surface_gravity: 0.029
    }, {
      name: 'Jupiter',
      surface_gravity: 2.528
    }, {
      name: 'Io',
      surface_gravity: 0.183
    }, {
      name: 'Europa',
      surface_gravity: 0.134
    }, {
      name: 'Ganymede',
      surface_gravity: 0.146
    }, {
      name: 'Callisto',
      surface_gravity: 0.126
    }, {
      name: 'Saturn',
      surface_gravity: 1.065
    }, {
      name: 'Titan',
      surface_gravity: 0.14
    }, {
      name: 'Rhea',
      surface_gravity: 0.026
    }, {
      name: 'Iapetus',
      surface_gravity: 0.022
    }, {
      name: 'Dione',
      surface_gravity: 0.023
    }, {
      name: 'Tethys',
      surface_gravity: 0.014
    }, {
      name: 'Enceladus',
      surface_gravity: 0.0113
    }, {
      name: 'Mimas',
      surface_gravity: 0.006
    }, {
      name: 'Uranus',
      surface_gravity: 0.886
    }, {
      name: 'Titania',
      surface_gravity: 0.379
    }, {
      name: 'Oberon',
      surface_gravity: 0.346
    }, {
      name: 'Ariel',
      surface_gravity: 0.269
    }, {
      name: 'Umbriel',
      surface_gravity: 0.2
    }, {
      name: 'Miranda',
      surface_gravity: 0.079
    }, {
      name: 'Neptune',
      surface_gravity: 1.14
    }, {
      name: 'Triton',
      surface_gravity: 0.779
    }, {
      name: 'Pluto',
      surface_gravity: 0.067
    }, {
      name: 'Eris',
      surface_gravity: 0.0677
    },
    /*{
      name: 'Makemake',
      surface_gravity: 0.0677
    },{
      name: 'Haumea',
      surface_gravity: 0.0677
    }, {
      name: 'Sedna',
      surface_gravity: 0.0677
    } */
    {
      name: '67P',
      surface_gravity: 0.000017
    }, {
      name: 'WhiteDwarf',
      surface_gravity: 1.3E+6
    }, {
      name: 'NeutronStar',
      surface_gravity: 1.4E+11
    }
  ],
  weightForm = document.querySelector('.calculateWeight'),
  weightField = weightForm.querySelector('input[name=weightField]'),
  weightValue,
  weightInput = document.querySelector('.weight__input');

weightInput.addEventListener('keyup', printWeight); //vanilla JS
//$(":input").bind('keyup', printWeight);           //jQuery

function printWeight() {
  var ssElement;
  weightValue = weightField.value;
  for (var i = 0; i < ssBodies.length; i++) {
    ssElement = weightForm.querySelector('.weight' + ssBodies[i].name);
    if (ssElement) {
      ssElement.innerHTML = computeWeight(ssBodies[i].surface_gravity);
    }
  }
}

function computeWeight(n) {
  return numbro(weightValue * n).format('0,0.00') + ' Kg';
}