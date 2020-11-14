import { EventEmitter } from "@ionic/core/dist/types/stencil-public-runtime";
import { Component,  h, Prop, Event} from "@stencil/core";
import { Task } from "../../interfaces/task";

@Component({
  tag: "itens-list"
})

export class ItensList {
  @Prop() tasks: Task[] = [];
  @Event() eventTasks: EventEmitter<Task[]>;
  @Event() eventTask: EventEmitter<Task>;

  deleteTask(task: Task) {
    let tasks: Task[] = [];
    this.tasks.map((taskMap) => {
      if (taskMap.seq !== task.seq) {
         tasks = [...tasks, taskMap];
      }
    })
    this.tasks = [...tasks];
    this.eventTasks.emit(this.tasks);
  }

  modifyTask(task: Task) {
    this.eventTask.emit(task);
  }

  render() {
    return [
      <ion-list>
        {this.tasks.map((task) =>
        <ion-item lines="none">
          <ion-text>{task.name}</ion-text>
          <ion-buttons slot="end">
            <ion-button color="primary" onClick={() => this.modifyTask(task)}> 
              <ion-icon name="pencil" size="small"></ion-icon>
            </ion-button>
            <ion-button color="danger" onClick={() => this.deleteTask(task)}>
              <ion-icon name="close-outline" size="default"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-item>)}
      </ion-list>
    ]
  }
}