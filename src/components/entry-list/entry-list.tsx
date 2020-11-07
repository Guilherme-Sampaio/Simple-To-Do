import { EventEmitter } from "@ionic/core/dist/types/stencil-public-runtime";
import { Component, h, Event, State } from "@stencil/core";
import { Task } from "../../interfaces/task";

@Component({
  tag: 'entry-list',
  styleUrl: 'entry-list.css'
})

export class Entrylist {
  @State() task: Task = {} as Task;
  @Event() sendTask: EventEmitter<Task>;

  inputHandler(event) {
    this.task = {...this.task, [event.target.name]: event.target.value};   
  }

  emitTask() {
    this.sendTask.emit(this.task);;
  }

  render() {
    return [
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-item >
              <ion-label color="medium" position="floating" >Task's name</ion-label> 
              <ion-input name="name" onIonInput={(event) => this.inputHandler(event)} clear-input="true"></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="6">
            <ion-item>
              <ion-label color="medium" position="floating" >Description</ion-label> 
              <ion-input name="desc" onIonInput={(event) => this.inputHandler(event)} clear-input="true"></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="text-align-end">
            <ion-button onClick={() => this.emitTask()} fill="solid" size="default">Save</ion-button>       
          </ion-col>
        </ion-row>
      </ion-grid>
    ]
  }
}