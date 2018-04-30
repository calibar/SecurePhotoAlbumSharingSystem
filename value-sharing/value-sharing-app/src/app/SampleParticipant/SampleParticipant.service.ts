import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { SampleParticipant } from '../org.mengxuanliu.valuesharing';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class SampleParticipantService {

	
		private NAMESPACE: string = 'SampleParticipant';
	



    constructor(private dataService: DataService<SampleParticipant>) {
    };

    public getAll(): Observable<SampleParticipant[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getparticipant(id: any): Observable<SampleParticipant> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addParticipant(itemToAdd: any): Observable<SampleParticipant> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateParticipant(id: any, itemToUpdate: any): Observable<SampleParticipant> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteParticipant(id: any): Observable<SampleParticipant> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
