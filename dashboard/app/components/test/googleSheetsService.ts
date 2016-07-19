import { Injectable } from '@angular/core';
import { ListType } from './ListType';

 class Adapters {
  public static ListTypes(response:any) : ListType[] {
    let results : ListType[] = [];
    let datatable = response.getDataTable();
    let columns : number = datatable.getNumberOfColumns();
    let rows : number = datatable.getNumberOfRows();

    for (let i = 0; i < rows; i++) {
      let item = new ListType(
        datatable.getValue(i, 0),
        datatable.getValue(i, 1),
        datatable.getValue(i, 2),
        datatable.getValue(i, 3) === 1
      );

      results.push(item);
    }

    return results;
  }
}

@Injectable()
export class GoogleSheetsService {
  url:string =
  'https://docs.google.com/spreadsheets/d/1XEoflheZAvbtpyBBs5TIuf-E2DpLRmCTMW_A_tctKS4/edit#gid=0';

  public getListTypes(callback):void {
    this.getSheetData<ListType[]>(callback, this.url, Adapters.ListTypes);
  }

  public getSheetData<T>(callback, url:string, adapter):void {
    // https://developers.google.com/chart/interactive/docs/reference#DataTable
    new google.visualization.Query(url)
      .send((response : any) => {
        console.log(`response from ${url}:\n`, response);
        let results : T = adapter(response);
        callback(results);
      });
  }
}
