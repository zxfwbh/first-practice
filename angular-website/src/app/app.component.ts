import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'angular-website';
  public logoItem = {
    logoSrc: '../assets/imgs/45568564.jpg',
    logoTitle: '知世'
  };
  public navItem = [{
    label: '应用',
    value: 'app',
    routeLink: '/app',
    actived: true
  }, {
    label: '组件',
    value: 'component',
    routeLink: '/component',
    actived: false
  }, {
    label: '设计',
    value: 'design',
    routeLink: '/design',
    actived: false
  }, {
    label: '模块',
    value: 'modules',
    routeLink: '/modules',
    actived: false
  }, {
    label: '系统',
    value: 'system',
    routeLink: '/system',
    actived: false
  }];
  public loginItem = 'baobao'

  constructor() {

  }

  public onLogIn() {
    console.log('onLogIn');
  }
}
