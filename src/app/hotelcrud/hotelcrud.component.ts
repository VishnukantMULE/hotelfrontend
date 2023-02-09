import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-hotelcrud',
  templateUrl: './hotelcrud.component.html',
  styleUrls: ['./hotelcrud.component.css']
})


export class HotelcrudComponent implements OnInit {

  isOpen:boolean = false;

  HotelArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;


  hotel: string ="";
  arrival: string ="";
  departure: string ="";
  type: string ="";
  guests: string ="";
  price: string ="";



  currentProductID = "";


  constructor(private http: HttpClient, private modalService: NgbModal ) 
  {
    this.getAllProduct();

  }

  ngOnInit(): void {
  }

  getAllProduct()
  { 
    
    this.http.get("http://127.0.0.1:8000/api/hotel")
  
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.HotelArray = resultData;
    });
  }



  setUpdate(data: any) 
  {
    this.isOpen=true;
   this.hotel = data.hotel;
   this.arrival = data.arrival;
   this.departure = data.departure;
   this.type = data.type;
   this.guests = data.guests;
    this.price=data.price;
    this.currentProductID = data.id;

  }

  UpdateRecords()
  {
    let bodyData = {
      "hotel" : this.hotel,
      "arrival" : this.arrival,
      "departure" : this.departure,
      "type" : this.type,
      "guests":this.guests,
      "price":this.price
    };
    
    this.http.put("http://127.0.0.1:8000/api/update"+ "/"+ this.currentProductID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Updated")
        this.getAllProduct();
        this.hotel = '';
        this.arrival = '';
        this.departure  = '';
        this.type  = '';
        this.guests='';
        this.price='';
    });
  }



  save()
  {
    if(this.currentProductID !== '')
    
    
      {
       this.UpdateRecords();
      }       
    this.isOpen=false;
  }


 
 
  closeModal(){
    this.isOpen=false;
  }
}