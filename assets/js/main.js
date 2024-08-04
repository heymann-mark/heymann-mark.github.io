//import * as variable from 'variableName';
 console.log("Javascript works!");
 angular.module('MyApp', [])

 .controller('MyCtrl', [function() {
     angular.element(document).ready(function () {
      AOS.init();
     // var scroll = new SmoothScroll('a[href*="#"]');
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

     });
 }]);


