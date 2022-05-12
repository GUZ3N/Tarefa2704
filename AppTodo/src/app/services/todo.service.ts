import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

    adicionaTarefa(tarefa: string, realizada: any){
      const url = 'http://localhost/ApiTodo/api.php';

      const param = {tarefa: tarefa, realizada: realizada };

      return this.http.post(url,param).toPromise();
    }

   
}