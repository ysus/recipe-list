import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: 'app-servers',
  selector: '.app-servers',

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer= false;
  serverCreationStatus = 'No server was created!';
  serverName= 'TestServer';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was creted!';
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
  }

}
