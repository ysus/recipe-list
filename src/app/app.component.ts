import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}



/**
 * 
 *   
 * 
 * numbers=[1,2,3,4,5];
  odds = [1,3,5];
  evens=[2,4];
  onlyOdd = false;
  value = 15;
 */

  // serverElements = [ {type: 'server', name: 'Testserver', content: 'Just a test!'}];


  // onServerAdded(serverData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }

  // onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent
  //   });
  // }

  // onChangeFirst() {
  //   this.serverElements[0].name = 'Changed!';
  // }

  // onDestroyFirst() {
  //   this.serverElements.splice( 0, 1);
  // }











// databinding

/*
    string interpolation {{ data }}
    property binding     [property]="data"
    event                (event)="expression"
    two way databinding  [(ngModel)]="data"

*/
