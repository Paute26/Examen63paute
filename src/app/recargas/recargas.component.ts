import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recargas',
  templateUrl: './recargas.component.html',
  styleUrls: ['./recargas.component.css']
})
export class RecargasComponent {
  constructor(private http: HttpClient) {}

  enviarRecarga() {
    const formData = {
      numero: '...',
      operador: '...',
      monto: '...'
    };

    this.http.post<any>('http://localhost:8080/recargas', formData)
      .subscribe(
        response => {
          console.log('Recarga exitosa:', response);
          // Manejar la respuesta del backend según necesites
        },
        error => {
          console.error('Error al procesar la recarga:', error);
          // Manejar errores
        }
      );
  }
}
