import actionTypes from '../action_types';
import * as API from '../../config/api';

export function contactUsAction(data){
    console.log('contact us Action called');
    return function(dispatch){
        API.getContactUs(data,function(err, res){
            console.log('respose:'+ res);
            if(!err) {
                dispatch({
                    type: actionTypes.CONTACTUS,
                    payload: res
                })
            }
            else{
                dispatch({
                    type: actionTypes.CONTACTUS_ERROR,
                    payload: err
                })
            }
        })
    }
}