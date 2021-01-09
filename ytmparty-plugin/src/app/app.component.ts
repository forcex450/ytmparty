import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public IsInParty: boolean;
  public joinedPartyCode;
  public response;
  public error;
  public value = '';
  private extensionId = 'oononiaicnkfdebjkpfabepkggkneeep';

  constructor() {
    chrome.runtime.sendMessage(this.extensionId, {event: 'isInParty'},
      response => {
        console.log(response);
      });
  }

  async onJoinPartyButtonClick(): Promise<void> {
    chrome.runtime.sendMessage(this.extensionId, {event: 'joinParty', partyCode: this.value},
      response => {
        console.log(response);
      });
  }

  async onCreatePartyButtonClick(): Promise<void> {
    chrome.runtime.sendMessage(this.extensionId, {event: 'createParty'},
      response => {
        console.log(response);
      });
  }

}
