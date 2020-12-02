import {  modalController, OverlayEventDetail } from '@ionic/core';
import { Component, h, State} from '@stencil/core';
import { Task } from '../../interfaces/task';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})

export class AppHome {
  @State() tasks: Task[] = [];
  @State() task: Task = {} as Task;
  private seq: number = 0;
  private rule: string = 'add'

  getTasks(tasks) {
    this.tasks = [...tasks.detail];
  }
  
  modifyTask(task) {
    this.task = {...task.detail};
    this.openModal();
  }

  addTask(data) {
    this.seq = this.seq + 1;
    this.task = {seq: this.seq} as Task;
    this.tasks = [...this.tasks, data]
  }
  
  updateTask(data) {
    let tasks: Task[] = [];
    this.tasks.map((taskMap) => {
      if (taskMap.seq === this.task.seq) {
        tasks = [...tasks, data];
      } 
      else {
        tasks = [...tasks, taskMap];
      }
    })
    this.tasks = [...tasks];
  }

  async openModal() {
    const modal: HTMLIonModalElement = await modalController.create({
      component: 'entry-list',
      backdropDismiss: false,
      componentProps: {
        'task': this.task,
        'rule': this.rule
      }
    });
    modal.onDidDismiss().then(
      async (detail: OverlayEventDetail) => {
        if (detail.data) {
        detail.role === 'add' ? this.addTask(detail.data) : this.updateTask(detail.data)
        this.task.name = ''
        this.task.desc = ''
        }
      }
    )
    await modal.present();
  }

  render() {
    return [  
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Todo-List</ion-title>
        </ion-toolbar>
      </ion-header>,
       <ion-button onClick={() => this.openModal()} class="modalButton">Add Task</ion-button>,
      <ion-content class="ion-padding">
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
