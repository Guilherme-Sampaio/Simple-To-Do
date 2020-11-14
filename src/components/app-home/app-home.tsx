import { Component, h, State} from '@stencil/core';
import { Task } from '../../interfaces/task';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})

export class AppHome {
  @State() tasks: Task[] = [];
  @State() task: Task = {} as Task;

  getTask(task: CustomEvent<Task>) {
    this.tasks = [
      ...this.tasks,
      task.detail
    ];  
    console.log('getTask', this.tasks);   
  }

  getTasks(tasks) {
    this.tasks = [...tasks.detail];
  }
  
  modifyTask(task) {
    this.task = {...task.detail};
  }

  updateTask(task) {
    let tasks: Task[] = [];
    this.tasks.map((taskMap) => {
      if (taskMap.seq === task.detail.seq) {
        tasks = [...tasks, task.detail];
      } else {
        tasks = [...tasks, taskMap];
      }
    })
    this.tasks = [...tasks];
    console.log('UpdateTask', this.tasks);   
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Todo-List</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content class="ion-padding">
        <entry-list 
          onSendTask={(task) => this.getTask(task)} 
          onUpdateTask={(task) => this.updateTask(task)}
          receiveTask={this.task}>    
        </entry-list>
        <ion-item-divider></ion-item-divider>
        <itens-list  
          onEventTasks={(tasks) => this.getTasks(tasks)} 
          onEventTask={(task) => this.modifyTask(task)} 
          tasks={this.tasks}>
        </itens-list>
      </ion-content>
    ];
  }
}
