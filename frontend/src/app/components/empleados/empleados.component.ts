import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';

declare var M: any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css',
})
export class EmpleadosComponent {
  constructor(public empleadoService: EmpleadoService) {}

  
  agregarEmpleado(form: NgForm) {
    console.log("formulario", form.value);
    this.empleadoService
      .PostEmpleado(form?.value)

      .subscribe((res) => {
        this.resetForm(form);

        M.toast({ html: 'Guardado satisfactoriamente' });
      });
  }

  resetForm(form?: NgForm) {
    // Limpiar el formulario, recibe un formulario como parametro

    if (form) {
      form.reset();

      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }
}
