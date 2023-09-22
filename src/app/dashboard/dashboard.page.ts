import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  listCategorys : any[]=[];
  listNoticias : any[]=[];

  constructor(
    public http: HttpClient,
    private router:Router
  ) { }

  ngOnInit() {

    this.http.get('../../assets/noticias/noticias_all.JSON').subscribe(data => {
      this.listCategorys = JSON.parse(JSON.stringify(data))[0].noticias.categorys;
      this.listNoticias = JSON.parse(JSON.stringify(data))[0].detailNoticias;
    });
  }
  navigate(value: any){

    let id= JSON.stringify(value)
    this.router.navigate(['./noticia-new', {id}])
    localStorage.setItem('notiDetail', JSON.stringify(value))
  }
}
