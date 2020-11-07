import { Component,  h, Prop} from "@stencil/core";
import { Task } from "../../interfaces/task";

@Component({
  tag: "itens-list"
})

export class ItensList {
  @Prop() tasks: Task[];

  componentWillLoad() {
    console.log(this.tasks);
  }

  render() {
    return [
      <ion-list>
        <ion-list-header>
          <ion-title>
            liSTA
          </ion-title>
        </ion-list-header>
        {this.tasks.map((task) => {
        <ion-item lines="none">
          <ion-text>{task.desc}</ion-text>
          <ion-buttons slot="end">
            <ion-button color="primary">
              <ion-icon name="pencil" size="small"></ion-icon>
            </ion-button>
            <ion-button color="danger">
              <ion-icon name="close-outline" size="default"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-item>})}
      </ion-list>
    ]
  }
}