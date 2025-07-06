import { FormGroup, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class FormService {

    emailPattern:string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    passwordPattern: RegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[*@$¡!%*¿?&.,_-]).{8,}$/;
    
	public isInvalidField( formGroup:FormGroup, field?:string, formSubmit?:boolean ):boolean {
        if(!field) return false;

        if(!formGroup.get(field)) return false;

        if ( formGroup.get(field)?.invalid && formSubmit ) return true;

        return false;

    }

	public errorMessage(formGroup:FormGroup, field:string):any {
        if(!field) return '';

        const formControl = formGroup.get(field);
        
        if(!formControl) return '';

		if(formControl.getError('required')) return 'msn-error.required';
        
		if(formControl.getError('minlength')) return 'msn-error.minLength-3';

        if (formControl.getError('pattern')) return 'msn-error.pattern';

        return '';
        
	}

	public equalFieldsMessage() {
        return 'msn-error.notEqual'
    }
    
	public equalFields(field1:string, field2:string) {

        return ( formGroup:FormGroup ): ValidationErrors | null => {
            const fieldValue1 = formGroup.get(field1)?.value;
            const fieldValue2 = formGroup.get(field2)?.value;
            if( fieldValue1 !== fieldValue2 ) {
                formGroup.get(field2)?.setErrors({ notEqual:true });
                return { notEqual: true }
            }
            return null;
		}
	
	}

}