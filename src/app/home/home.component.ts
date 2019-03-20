
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';



@Component({
  selector: 'ngx-pages',
  styleUrls: ['home.component.scss'],
  template: `
  <!-- this is the main navbar -->
  <nav class="navbar is-light">
    <div class="navbar-brand">
      <a class="navbar-item title is-3">
        myCompany
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
          <a class="navbar-item is-active">menuItem1</a>
        <a class="navbar-item">menuItem2</a>
      </div>
    </div>
  </nav>
  
  <!-- this is the sticky menu -->
  <div class="tabs is-centered is-fullwidth"
    #stickyMenu
    [class.sticky] = "sticky">
    <ul>
      <li class="is-active"><a>Pictures</a></li>
      <li><a>Music</a></li>
      <li><a>Videos</a></li>
      <li><a>Documents</a></li>
    </ul>
  </div>
  
  <!-- this is a fake long content; we need it so we can scroll down -->
  <div class="content"></div>
    <router-outlet></router-outlet>

  `,
})
export class HomeComponent {
  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;
  constructor() {
   }
   ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }
  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
}
