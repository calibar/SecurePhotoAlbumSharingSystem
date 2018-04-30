import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ViewerReadAsset } from '../org.mengxuanliu.valuesharing';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ViewerReadAssetService {

	
		private NAMESPACE: string = 'ViewerReadAsset';
	



    constructor(private dataService: DataService<ViewerReadAsset>) {
    };

    public getAll(): Observable<ViewerReadAsset[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getTransaction(id: any): Observable<ViewerReadAsset> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addTransaction(itemToAdd: any): Observable<ViewerReadAsset> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateTransaction(id: any, itemToUpdate: any): Observable<ViewerReadAsset> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteTransaction(id: any): Observable<ViewerReadAsset> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

