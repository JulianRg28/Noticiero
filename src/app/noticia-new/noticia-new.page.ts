import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-noticia-new',
  templateUrl: './noticia-new.page.html',
  styleUrls: ['./noticia-new.page.scss'],
})
export class NoticiaNewPage implements OnInit {
  notiDetail:any ;
  detailNewList: any []=[];
  titleNew: String='';
  dateNew: String='';
  showNew:String='';
  text_smallNew:String='';
  text_longNew :String='';
  url_imagNew: String='';
  font_noticiaNew: String='';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.notiDetail=localStorage.getItem('notiDetail');
    this.detailNewList=Object.values(JSON.parse(this.notiDetail));
    
    this.titleNew=this.detailNewList[0];
    this.dateNew=this.detailNewList[1];
    this.showNew=this.detailNewList[2];
    this.text_smallNew=this.detailNewList[3];
    this.text_longNew =this.detailNewList[4];
    this.url_imagNew=this.detailNewList[5];
    this.font_noticiaNew=this.detailNewList[6];


  }
  back(){
    this.router.navigate(['./dashboard'])
  }
}
