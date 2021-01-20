import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public matDialog: MatDialog) { }
  counter:number = 0;
  positiveReponse:number = 0;
  negativeResponse:number = 0;
  
  getResponse = () => {
    axios.get('https://aws.random.cat/meow').then((response) => {
    this.positiveReponse++;
    this.openModal2('Запрос прошёл');
    },
    (err) => {
    this.negativeResponse++;
    this.openModal2('Запрос провалился');
    })
   
  }

  getPercentage(count){
    let total = this.negativeResponse + this.positiveReponse;
    return (count/total) *100;
  }
  openModal1() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = {
      name: "deleteProduct",
      title: "Заголовок",
      description: "Добро пожаловать!",
      actionButtonText: "Delete",
    }
    this.counter++;
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }
 openModal2(status) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
     dialogConfig.data = {
      name: "deleteProduct",
      title: "Заголовок",
      description: status,
      actionButtonText: "Delete",
    }
    
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }

  openModal3() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = {
      name: "deleteProduct",
      title: "Заголовок",
      description: `${this.counter}, Положительных запросов:${this.getPercentage(this.positiveReponse)}%, Отрицательных запросов:${this.getPercentage(this.negativeResponse)}%`   ,
      actionButtonText: "Delete",
    }
    
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }
}
