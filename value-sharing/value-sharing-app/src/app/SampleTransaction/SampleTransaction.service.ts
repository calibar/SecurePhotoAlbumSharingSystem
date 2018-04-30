import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { SampleTransaction } from '../org.mengxuanliu.valuesharing';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class SampleTransactionService {

	
		private NAMESPACE: string = 'SampleTransaction';
	



    constructor(private dataService: DataService<SampleTransaction>) {
    };

    public getAll(): Observable<SampleTransaction[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getTransaction(id: any): Observable<SampleTransaction> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addTransaction(itemToAdd: any): Observable<SampleTransaction> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateTransaction(id: any, itemToUpdate: any): Observable<SampleTransaction> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteTransaction(id: any): Observable<SampleTransaction> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

