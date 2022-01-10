import { Component, OnInit } from '@angular/core';
import { ControllerBase } from '@app/controller/controller.base';
import { MessageService } from '@app/services/message.service';
import { UserService } from '@app/services/user.service';
import { UserFormComponent } from '@app/shared/components/user-form/user-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent extends ControllerBase {

  term!: string;
  dados: any = [];

  constructor(
    private service: UserService, 
    private messageService: MessageService,
    private modalCtrl: NgbModal,
    private spinner: NgxSpinnerService
  ) { 
    super();
  }

  ngOnInit(): void {
    this.getStart();
  }

  getStart(): void {
    this.getAll();
  }

  openForm(crud: string, item = undefined){
    const modalRef = this.modalCtrl.open(UserFormComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.data = item;
    modalRef.componentInstance.crud = crud;
    modalRef.result.then(res => {
      if(res.message){
        this.messageService.toastSuccess(res.message);
      }
      this.getAll();
    })
  }

  getAll(){
    this.spinner.show();
    this.subs.sink = this.service.getAll().subscribe(
      (res: any) => {
        this.spinner.hide();
        this.dados = res.response;
      },error => {
        this.spinner.hide();
        console.log(error)
      })
  }

  delete(id:number){
    this.spinner.show();

    this.service.delete(id).subscribe(
      (res: any) => {
        this.getAll();
      },
      error => {
        this.spinner.hide();
        console.log(error)
      },
      () => {
        this.messageService.toastSuccess('Excluido com Sucesso!');
      }
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
