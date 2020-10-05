import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DadosService {

    readonly dados = [
        ['Dezembro/2019', 3000],
        ['Janeiro/2020', 8900],
        ['Fevereiro/2020', 47800],
        ['Março/2020', 8700],
        ['Abril/2020', 9600],
        ['Maio/2020', 7890]
    ];

	constructor() {}

	/**
	 * Retorna um observable contendo os dados a serem
	 * exibidos no gráfico.
	 *
	 * @return Observable<any>
	 */
	obterDados(): Observable<any> {
		return new Observable(observable => {
			observable.next(this.dados);
			observable.complete();
		});
	}

}
