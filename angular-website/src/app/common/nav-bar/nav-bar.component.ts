import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() public logoItem: any = {};
  @Input() public navItem: any = [];
  @Input() public loginItem: string = '';
  @Output() public logIn = new EventEmitter<any>();

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    this.checkActivedNav();
  }

  public onNavClick(item) {
    this.navItem.forEach(element => {
      if (element.value === item.value) {
        element.actived = true;
      } else {
        element.actived = false;
      }
    });
    this.route.navigateByUrl(item.routeLink);
  }

  public onLoginClick() {
    this.logIn.emit();
  }

  private checkActivedNav() {
    let firstRoute = this.navItem.filter(item => {
      return item.actived
    })[0].routeLink;
    this.route.navigateByUrl(firstRoute);
  }
}
