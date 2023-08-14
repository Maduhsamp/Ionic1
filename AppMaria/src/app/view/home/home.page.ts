import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Numeros } from 'src/app/model/entities/Numeros';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public primeiroNumero!: number;
  public segundoNumero!: number;
  public operacao!: number;
  public resultado!: number;

  constructor(private alertController: AlertController) {
    
  }

  calcular(){
    if (!isNaN(this.primeiroNumero) && !isNaN(this.segundoNumero)) {
      if(!isNaN(this.operacao)){
        if(this.operacao == 0) {
          this.resultado = this.primeiroNumero + this.segundoNumero;
          this.presentAlert(this.resultado);
        
        }else if(this.operacao == 1) {
          this.resultado = this.primeiroNumero - this.segundoNumero;
          this.presentAlert(this.resultado);
        
        }else if(this.operacao == 2) {
          this.resultado = this.primeiroNumero*this.segundoNumero;
          this.presentAlert(this.resultado);
        
        }else if(this.operacao == 3) {
          this.resultado = this.primeiroNumero/this.segundoNumero;
          this.presentAlert(this.resultado);
        }
      }else{
        this.Alert("Erro ao calcular!", "Verifique se todos os campos estão preenchidos!");
      }
    }else{
      this.Alert("Erro ao calcular!", "Todos os campos são obrigatórios!");
    }
    this.primeiroNumero = NaN;
    this.segundoNumero = NaN;
    this.operacao = NaN;
  }

    async presentAlert(resultado : number) {
    const alert = await this.alertController.create({
      header: 'Resultado da Calculadora',
      message: `o resultado da operação é: ${resultado}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async Alert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Calculadora',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}