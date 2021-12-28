import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudOpnService } from 'src/app/services/crud-opn.service';

@Component({
  selector: 'app-productmanage',
  templateUrl: './productmanage.component.html',
  styleUrls: ['./productmanage.component.css']
})
export class ProductmanageComponent {

  productForm: FormGroup;
  isAdd:boolean = true;
  openForm:boolean = false;
  ProductID:number;
  toUpdateProduct:any;

  constructor(private formBuilder:FormBuilder,private crudOpnService:CrudOpnService) { }


  setToAdd(){
    this.isAdd=true;
    this.openForm=false;
  }
 
  setToUpdate(){
    this.isAdd=false;
    this.openForm=false;
  }

  CreateNewForm(){
    this.productForm = this.formBuilder.group({
      id:[this.ProductID,Validators.required],
      prodname:['',Validators.required],
      prodprice:['',Validators.required],
      prodimg:['./../../assets/error.jpg',Validators.required],
      category:['',Validators.required],
    })
  }

  UpdateForm(){
    this.productForm = this.formBuilder.group({
      id:[this.ProductID,Validators.required],
      prodname:[this.toUpdateProduct.prodname,Validators.required],
      prodprice:[this.toUpdateProduct.prodprice,Validators.required],
      prodimg:[this.toUpdateProduct.prodimg,Validators.required],
      category:[this.toUpdateProduct.category,Validators.required],
    })
  }

 onSubmit(){
   if(this.isAdd){
    this.crudOpnService.addProduct(this.productForm.value).subscribe(()=>{})
    }
   else {
    this.crudOpnService.updateProduct(this.productForm.value, this.productForm.value.id).subscribe(()=>{})
    }
 }

 Clearform(){
//this.productForm.reset();
   if(this.isAdd){
      this.productForm.setValue({
        id:[this.ProductID],
        prodname:[''],
        prodprice:[''],
        prodimg:['./../../assets/error.jpg'],
        category:['']
     })
   }
   else{
      this.productForm.setValue({
        id:[this.ProductID],
        prodname:[this.toUpdateProduct.prodname],
        prodprice:[this.toUpdateProduct.prodprice],
        prodimg:[this.toUpdateProduct.prodimg],
        category:[this.toUpdateProduct.category]
      })
   }
 }


 takeId(productID:string){

  this.ProductID = parseInt(productID);
  if(!this.isAdd){
      this.crudOpnService.getProductById(this.ProductID).subscribe((res:any) => {
                                                                    this.toUpdateProduct = res;
                                                                    this.openForm=true;
                                                                    this.UpdateForm();},
                                                                  (error:any)=>console.log(error)
     
    )}
  else{
      this.openForm=true;
      this.CreateNewForm();
      }
  
 }
}
