import logger from '../../utils/common/logger.js' ;
import app from '../../app.js' ;


class Controller{

  constructor(){

    logger.log('class loaded') ;

  }

}

Controller.$inject=['$scope'] ;

app.controller('myController',Controller) ;

