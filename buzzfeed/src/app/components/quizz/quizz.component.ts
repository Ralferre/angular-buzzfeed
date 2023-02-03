import { Component, OnInit, Type } from '@angular/core';
import quizz_data from "../../../assets/data/quizz_data.json";

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  title: string = ''
  birthdays: any
  birthday: any[] = []
  birthdaySelected: string = ''
  index: number = 0
  choose: boolean = false
  result: string = ''

  constructor () {}

  ngOnInit(): void {
    if (quizz_data) {
      this.title = quizz_data.title
      this.birthdays = quizz_data.birthdays
      this.birthday[this.index] = this.birthdays[this.index]
      
    }
    
    
  }

  playerSelected(value:number) {
    this.choose = true
    this.birthdaySelected = this.birthdays[value - 1]
    console.log(value)
    console.log(this.birthdaySelected)

    let result = ''
    Object.entries(this.birthdaySelected).find(([key, value]) => {
      if (key === 'comemorates') {
        this.result = value;
        console.log(this.result)
      }
    })
    
  }

  replaceTest(restart:boolean) {
    restart = false
    this.choose = restart
    this.index = 0
    this.birthday = []
  }

  
    
 
}
