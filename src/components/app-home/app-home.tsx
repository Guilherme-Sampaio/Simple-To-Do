import { Component, h, State} from '@stencil/core';
import { Task } from '../../interfaces/task';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})

export class AppHome {
  @State() tasks: Task[] = [];

  getTask(task: CustomEvent<Task>) {
    this.tasks = [
      ...this.tasks,
      task.detail
    ];
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
        <itens-list tasks={this.tasks}></itens-list>
      </ion-content>
    ];
  }
}
