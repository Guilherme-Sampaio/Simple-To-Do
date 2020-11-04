import { Component,  h, Prop} from "@stencil/core";
import { Task } from "../../interfaces/task";

@Component({
  tag: "itens-list"
})

export class Itenslist {
  @Prop() task: Task;

  a() {
    console.log(this.task); 
  }

  render() {
    return [
      <ion-item lines="none">
        <ion-text>descriptions comes here!</ion-text>
        <ion-buttons slot="end">
          <ion-button color="primary" onClick={() => this.a()}>
            <ion-icon name="pencil" size="small"></ion-icon>
          </ion-button>
          <ion-button color="danger">
            <ion-icon name="close-outline" size="default"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-item>
    ]
  }
}