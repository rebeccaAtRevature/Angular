import { Pipe, PipeTransform } from '@angular/core';

// supply a name property that corresponds to our template code name
@Pipe({ name: 'approveDeny' })
// make sure to register the Pipe in our @NgModule under declarations

export class ApproveDenyPipe implements PipeTransform{
    transform(value: boolean | undefined) {
        if(value==true){
            return 'approved';
        } else if(value==false) { 
            return 'denied';
        } else {
            return '';
        }
    }
}
