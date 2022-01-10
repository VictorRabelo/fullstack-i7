import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ControllerBase } from '@app/controller/controller.base';
import { MessageService } from '@app/services/message.service';
import { UserService } from '@app/services/user.service';
import { UtilService } from '@app/services/util.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass'],
  providers: [
    UserService
  ]
})
export class UserFormComponent extends ControllerBase {

  loading: boolean = false;

  @Input() data: any;
  @Input() crud: any;

  dados: any = {};

  constructor(
    private activeModal: NgbActiveModal,
    private service: UserService,
    private tools: UtilService,
    private message: MessageService

  ) {
    super();
  }

  ngOnInit() {
    if(this.data){
      this.getById(this.data);
    }
  }

  close(params = undefined) {
    this.activeModal.close(params);
  }

  getById(id: number) {
    this.loading = true;
    this.subs.sink = this.service.getById(id).subscribe(
      (res: any) => {
        this.loading = false;
        this.dados = res;
      },
      error => {
        this.loading = false;
        console.log(error)
      });
  }

  submit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
  
    if (this.dados.id) {
      this.update();
    } else {
      this.create();
    }
  }

  create() {
    this.loading = true;

    this.service.store(this.dados).subscribe(
      (res: any) => {
        res.message = "Cadastro bem sucedido!"
        this.close(res);
      },
      error => {
        this.loading = false;
        console.log(error)
      }
    )
  }

  update() {
    this.loading = true;

    this.service.update(this.dados).subscribe(
      (res: any) => {
        res.message = "Atualização bem sucedido!"
        this.close(res);
      },
      error => {
        this.loading = false;
        console.log(error)
      }
    )
  }

  getLocation() {
    this.tools.getAddressAPI(this.dados.cep).then(res => {
      if (res.error) {
        this.message.toastError('Falha ao localizar o cep.');
        return
      }

      this.dados.logradouro = res.logradouro;
      this.dados.bairro = res.bairro;
      this.dados.cidade = res.localidade;
      this.dados.uf = res.uf;
      this.dados.ibge = res.ibge;
    })
  }
  
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
