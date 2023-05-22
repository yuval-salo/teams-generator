import { Component } from '@angular/core';
interface TeamMember{
  name: string;
  level: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTeamMember: TeamMember = {name: '', level: 0};
  members : TeamMember[] = [];
  errorMessage = ''
  numberOfTeams:  '' | number  = '';
  teams : TeamMember[][] = [];


  onInputName(name : string)
  {
    this.newTeamMember.name = name;
  }

  OnInputLevel(level : string)
  {
    this.newTeamMember.level = Number(level);
  }

  addMember(){
    if (!this.newTeamMember.name || !this.newTeamMember.level ){
      this.errorMessage = "Name or Level can't be empty";
      return
    }
    const newTeamMemberCopy : TeamMember = {name: this.newTeamMember.name, level: this.newTeamMember.level};
    this.members.push(newTeamMemberCopy)
    this.newTeamMember.name = '';
    this.newTeamMember.level = 0;
    this.errorMessage = '';
  }

  onInputNumberOfTeams(value : string){
    this.numberOfTeams = Number(value);
  }

  generateTeams(){
    this.teams = [];
    const allMembers = [...this.members];

    if (!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errorMessage = "Invalid input"
      return
    }

    this.errorMessage='';
    const sortedMembers = allMembers.sort((a ,b)=> b.level - a.level);
    this.teams = [];
    for (let i = 0; i < this.numberOfTeams; i++){
      this.teams.push([]);
    }

    let currentTeamIndex = 0;
    for (const member of sortedMembers){
      this.teams[currentTeamIndex].push(member);
      currentTeamIndex = (currentTeamIndex + 1) %this.numberOfTeams;
    }
    
    this.members = [];
    this.numberOfTeams = '';
  }
}
