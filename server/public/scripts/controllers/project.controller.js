myApp.controller('ProjectController', function($interval){
    console.log('Home Controller created');
    let pc = this;

    pc.footprintPath="../images/footprint.png";

    pc.footprintURL="https://polar-spire-15237.herokuapp.com/#/home";

    pc.footprintGitHub="https://github.com/Blaze90809/footprint-project";

    pc.pitchAidPath="../images/pitchaid.png";

    pc.pitchAidURL="https://pitch-aid.herokuapp.com/#/home";

    pc.pitchAidGitHub="https://github.com/Blaze90809/pitch-aid";

});//End Home Controller