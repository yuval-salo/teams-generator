import { Component, OnInit, Input } from '@angular/core';
interface TeamMember{
  name: string;
  level: number | '' ;
}
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  @Input() team: TeamMember[]  = []
  @Input() index  = 0;


  constructor(){}

  ngOnInit(): void{}
}
