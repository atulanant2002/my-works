import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { strict } from 'assert';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  tableShow:boolean = false; 
  prodShow:boolean = true;
  counter:any = 0;
  dataList:any;
  brand_name:string;
  prod_name:string;
  status:string;
  category:number;
  stock:number;
  prize:number = 4000;
    constructor(private http:HttpClient) {
      this.getData(); 
      //  console.log(this.jsonData);
    }
    ngOnInit(){
    }
    getData():any {
      let url = "../assets/data.json";
      this.http.get(url).subscribe((data)=>{
        this.dataList = data;   
      });  
    }
    showForm(){
      this.tableShow = !this.tableShow;
    }
    addElement(){
      const data = {
        "name":this.prod_name,
        "brand":this.brand_name,
        "status":this.status,
        "quantity":this.stock,
        "prize":this.prize
      }
      this.dataList.product.push(data);
    }
    delElement(name){
      for(let i=0; i<this.dataList.product.length; ++i){
        if(this.dataList.product[i].name === name){
          this.dataList.product.splice(i,1);
        }
      }
    }
    delAllElements(){
     this.dataList.product.splice(0,this.dataList.product.length);
    }
    showProd(){
      this.prodShow = !this.prodShow;
    }
}
