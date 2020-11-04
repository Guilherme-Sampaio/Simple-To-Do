import { Component, h, State} from '@stencil/core';
import { Task } from '../../interfaces/task';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  @State() task: Task = {} as Task;

  getTask(task) {
    console.log(task.detail);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Todo-List</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content class="ion-padding">
        <entry-list onSendTask={(task) => this.getTask(task)}></entry-list>
        <ion-item-divider></ion-item-divider>
        <itens-list></itens-list>
      </ion-content>
    ];
  }
}
