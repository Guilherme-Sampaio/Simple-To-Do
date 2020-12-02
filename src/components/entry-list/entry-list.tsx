import { Component, h, Prop , Element} from "@stencil/core";
import { Task } from "../../interfaces/task";

@Component({
  tag: 'entry-list',
  styleUrl: 'entry-list.css'
})

export class Entrylist {
  @Prop() task: Task = {seq: 0} as Task;
  @Element() el: Element;
  public rule: string = 'add';

  inputHandler(event) {
    this.task = {...this.task, [event.target.name]: event.target.value};
  }

  async closeModal() {
    await (this.el.closest('ion-modal') as HTMLIonModalElement).dismiss();
  }

  async closeModalWithData(task: Task, rule) {
    await (this.el.closest('ion-modal') as HTMLIonModalElement).dismiss(task, rule)
  }

  componentWillLoad() {     
    if (this.task.name) {
      this.rule = 'update'; 
    }else {
      this.rule = 'add';
    }
  }

  render() {
    return [
      <ion-grid class="ion-grid">
        <ion-row>
          <ion-col class="text-align-end">
            <ion-button onClick={() => this.closeModal()}  size="small" fill="clear">
              <ion-icon name="close"></ion-icon>
            </ion-button>
        </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <ion-item >
              <ion-label color="medium" position="floating" >Task's name</ion-label> 
              <ion-input value={this.task.name} name="name" onIonInput={(event) => this.inputHandler(event)}  maxlength={50}></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="12">
            <ion-item>
              <ion-label color="medium" position="floating" >Description</ion-label> 
              <ion-textarea value={this.task.desc} name="desc" onIonInput={(event) => this.inputHandler(event)} maxlength={800} autoGrow></ion-textarea>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row >
          <ion-col class="text-align-end" >
            <ion-button onClick={() => !!this.task.name ? this.closeModalWithData(this.task, this.rule): null} fill="solid" size="default">{this.rule === 'add' ? 'Adicionar': 'Atualizar'}</ion-button>       
          </ion-col>
        </ion-row>
      </ion-grid>
    ]
  }
}