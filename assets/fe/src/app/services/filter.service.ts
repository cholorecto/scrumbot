import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  log_type = ''

  filterScrum(type, dateFilterForm, username, scrums){
      if (type === 'ALL') {
        type = ''
      }
      if (username === 'ALL') {
        username = ''
      }

      var from = new Date(dateFilterForm.from.date.month + "/" + dateFilterForm.from.date.day + "/" + dateFilterForm.from.date.year)
      var to = new Date(dateFilterForm.to.date.month + "/" + dateFilterForm.to.date.day + "/" + dateFilterForm.to.date.year)

      return scrums.filter(scrum => {
        var date = new Date(scrum.date_created)
        date.setHours(0,0,0,0)
        return scrum.log_type.includes(type) && scrum.user.includes(username) && 
        (date >= from && date <= to)
      })
  }

  filterIssues(status, dateFilterForm, username, issues){
      if (status === 'ALL') {
        status = ''
      }
      if (username === 'ALL') {
        username = ''
      }

      var from = new Date(dateFilterForm.from.date.month + "/" + dateFilterForm.from.date.day + "/" + dateFilterForm.from.date.year)
      var to = new Date(dateFilterForm.to.date.month + "/" + dateFilterForm.to.date.day + "/" + dateFilterForm.to.date.year)

      return issues.filter(issue => {
        var date = new Date(issue.date_created)
        date.setHours(0,0,0,0)
        return issue.status.includes(status) && issue.user.includes(username) && 
        (date >= from && date <= to)
      })
  }

}
