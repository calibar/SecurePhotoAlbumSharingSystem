import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ChangeOwner } from '../org.mengxuanliu.valuesharing';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ChangeOwnerService {

	
		private NAMESPACE: string = 'ChangeOwner';
	



    constructor(private dataService: DataService<ChangeOwner>) {
    };

    public getAll(): Observable<ChangeOwner[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getTransaction(id: any): Observable<ChangeOwner> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addTransaction(itemToAdd: any): Observable<ChangeOwner> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateTransaction(id: any, itemToUpdate: any): Observable<ChangeOwner> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteTransaction(id: any): Observable<ChangeOwner> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

