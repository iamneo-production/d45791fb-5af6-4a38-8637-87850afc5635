import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { Organizer } from 'src/app/models/organizer';
import { Participant } from 'src/app/models/participant';
import { Role } from 'src/app/models/role';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title = 'SwiftEvent';
  isScrolled: boolean = false;
  menuType: string = '';
  OrgUserName: string = '';
  isShowDropdown: boolean = false;
  dropdownUrl: string = '';
  isAuth = false;
  authUser: Admin | Organizer | Participant | null = null;

  constructor(
    private router: Router,
    private auth: AuthService,
    private elementRef: ElementRef
  ) {}

  //get updates for authentication component
  isAuthUpdates = this.auth.authUpdates.subscribe(
    (data) => (this.isAuth = data)
  );
  authUserUpdates = this.auth.authUserUpdates.subscribe(
    (data) => (this.authUser = data)
  );

  //for scroll effect in navbar
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isScrolled = scrollPosition > 0;
  }

  // for dropdown display in navbar after logged in.
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    const dropdownMenu =
      this.elementRef.nativeElement.querySelector('.drop-menu');
    const navbtn = this.elementRef.nativeElement.querySelector('.new-nav-btn');

    if (dropdownMenu !== null && dropdownMenu.contains(clickedElement)) {
      this.isShowDropdown = true;
    } else if (navbtn !== null && navbtn.contains(clickedElement)) {
      this.isShowDropdown = !this.isShowDropdown;
    } else {
      this.isShowDropdown = false;
    }
  }

  toggleDropdown(): void {
    this.onClick(new MouseEvent('click'));
  }

  ngOnInit(): void {
    this.setMenuType(this.router.url);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setMenuType(event.url);
        console.log(event.url);
      }
    });

    this.isAuth = this.auth.isAuth;
    this.authUser = this.auth.authUser;

    console.log('this is navbar authUser - ', this.authUser);
    this.getUserName();
    this.getUrlForDropDown();

    console.log(this.menuType);
    console.log(this.router.url);
  }

  // for logging out user
  logout() {
    this.auth.logout();
    if (this.authUser == null) {
      return;
    }
    const role = this.authUser.role.split('_')[1].toLowerCase();

    switch (this.authUser.role) {
      case Role.USER.toLowerCase():
        this.router.navigateByUrl('/user-login');
        break;
      case Role.ADMIN.toLowerCase():
        this.router.navigateByUrl('/admin/login');
        break;
      case Role.ORAGANISER.toLowerCase():
        this.router.navigateByUrl('/organiser-login');
        break;
      default:
        break;
    }
  }

  // for dynamically changing menuType variable, which will choose navLinks according to the url in html file.
  setMenuType(url: string): void {
    if (url.includes('login')) {
      this.menuType = 'login';
    } else if (url.includes('register')) {
      this.menuType = 'login';
    } else if (url.includes('/events-list')) {
      this.menuType = '/events-list';
    } else if (url.includes('/categories')) {
      this.menuType = '/categories';
    } else if (url.includes('/event-details')) {
      this.menuType = '/categories';
    } else if (url.includes('/createvent')) {
      this.menuType = '/categories';
    } else if (url.includes('/myevent')) {
      this.menuType = '/categories';
    } else if (url.includes('/organizer/')) {
      this.menuType = '/organiser/';
    } else if (url.includes('/user/')) {
      this.menuType = '/user/';
    } else {
      this.menuType = 'default';
    }
  }

  // for getting the role who has registered and sending the url into html for role based dropdown selection..
  getUrlForDropDown() {
    if (this.authUser && this.authUser.role === Role.ORAGANISER) {
      this.dropdownUrl = '/organiser';
    } else if (this.authUser && this.authUser.role === Role.USER) {
      this.dropdownUrl = '/user';
    } else {
      this.dropdownUrl = ''; // No dropdown for other roles or when not logged in
    }
  }

  // for getting Organiser's first name for dropdown display.
  getUserName() {
    if (this.authUser != undefined) {
      const nameArr = this.authUser.name.split(' ');
      let firstName = '';
      if (nameArr.length > 0) {
        firstName = nameArr[0];
      }
      this.OrgUserName = firstName;
    }
  }
}
