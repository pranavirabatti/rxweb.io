import {  timeAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AttandanceDetail {

	@timeAsync({validatorConfig:of({allowSeconds:true}) })
	totalOutTime: string;
	
	
}
