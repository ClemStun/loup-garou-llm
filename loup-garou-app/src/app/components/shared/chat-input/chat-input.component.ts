import { Component, Input } from '@angular/core';
import { faPaperPlane, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { LoupGarouLlmService } from 'src/app/services/loup-garou-llm.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent {
  placeholder = "Ecrire dans le chat...";
  inputValue: string = '';
  send = faPaperPlane;
  @Input() isBotOnly = true;
  @Input() texte!: string;

  constructor(private service: LoupGarouLlmService ){}

  onInputChange(event: any) {
    this.inputValue = event.target.value;
  }

  sendMessage(){
    this.service.postMsg(this.inputValue);
  }
}
