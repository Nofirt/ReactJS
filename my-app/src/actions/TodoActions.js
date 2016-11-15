import Dispatcher from '../core/AppDspatcher.js';

var TodoActions ={
  create: function(text){
    Dispatcher.dispatch({
      actionType: 'create',
      text: text
    });
  }
};

export default TodoActions;
