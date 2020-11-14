import { EventEmitter } from "@ionic/core/dist/types/stencil-public-runtime";
import { Component, h, Event, State, Prop } from "@stencil/core";
import { Task } from "../../interfaces/task";

@Component({
  tag: 'entry-list',
  styleUrl: 'entry-list.css'
})

export class Entrylist {
  @State() task: Task = {seq: 0} as Task;
  @Event() sendTask: EventEmitter<Task>;
  @Event() updateTask: EventEmitter<Task>;
  @Prop() receiveTask: Task = {} as Task;
  private rule: string = 'add';
  private seq: number = 0;

  inputHandler(event) {
    this.task = {...this.task, [event.target.name]: event.target.value};
  }

  emitAdd() {
    if (!!this.task.name && !!this.task.desc) {
      this.task = {...this.task, seq: this.seq} as Task;
      this.sendTask.emit(this.task);
      this.seq = this.seq + 1;
      this.task = {seq: this.seq} as Task;
    }
  }

  emitUpdate() {
    if (!!this.task.name && !!this.task.desc) {
      this.updateTask.emit(this.task); 
      this.rule = 'add';
    }
  }

  componentWillRender() {
    if (!!this.receiveTask.seq) {
      this.rule = 'update'; 
      this.task = {...this.receiveTask};
      this.receiveTask = {} as Task;
    }       
    console.log(this.seq);    
  }

  render() {
    return [
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-item >
              <ion-label color="medium" position="floating" >Task's name</ion-label> 
              <ion-input value={this.task.name} name="name" onIonInput={(event) => this.inputHandler(event)} clear-input="true"></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="6">
            <ion-item>
              <ion-label color="medium" position="floating" >Description</ion-label> 
              <ion-input value={this.task.desc} name="desc" onIonInput={(event) => this.inputHandler(event)} clear-input="true"></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="text-align-end">
            <ion-button onClick={() => this.rule === 'add' ? this.emitAdd(): this.emitUpdate()} fill="solid" size="default">{this.rule === 'add' ? 'Adicionar': 'Atualizar'}</ion-button>       
          </ion-col>
        </ion-row>
      </ion-grid>
    ]
  }
}