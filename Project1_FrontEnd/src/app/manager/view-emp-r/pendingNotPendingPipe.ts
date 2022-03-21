import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'pendingNotPending' })
export class PendingNotPendingPipe implements PipeTransform {
    transform(value: boolean) {
        if (value==true){
            return 'pending';
        } else {
            return 'resolved';
        }
    }
}