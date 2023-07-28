const express=require('express');
const cors=require("cors");
const bodyparser=require('body-parser');
const mysql=require('mysql');
const { request } = require('https-browserify');

const add=express()
add.use(cors());
add.use(express.json());
add.use(bodyparser.json());
add.use(express.static('public'));
add.use(bodyparser.urlencoded({extended:true}));


let con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Naveen143@",
  database:"car_rental_project",
  port:"3306"
})

con.connect((error)=>{
  if(error){
    console.log(error);
  }
  else{
    console.log("data is connected to mysql");
  }
})

add.post("/user-register",(request,response)=>{
  let {type_of_user,enter_your_full_name,enter_your_password,enter_your_number,enter_your_email_id,location}=request.body;
  let sql='insert into  registration_form (type_of_user,enter_your_full_name,user_name,enter_your_password,enter_your_number,enter_your_email_id,location) values(?,?,?,?,?,?,?)'
  con.query(sql,[type_of_user,enter_your_full_name,enter_your_email_id,enter_your_password,enter_your_number,enter_your_email_id,location],(error,result)=>{
    if(error){
      let a={"status":"error"}
      response.send(a)
    }
    else{
      let a={"status":"result"}
      response.send(a)
    }
  })
})

add.post('/login',(request,response)=>{
  let {user_name, enter_your_password}=request.body;
  let sql='select * from registration_form where user_name=?';
  con.query(sql,[user_name],(error,result)=>{
    if(error){
      let a={"status":"error"}
      response.send(a);
      // console.log(a);
    }
    else if(result.length>0){
      let username1=result[0].user_name;
      let password1=result[0].enter_your_password;
      let type_of_user=result[0].type_of_user;
      let registration_id=result[0].registration_id;
      if(username1=== user_name && password1===enter_your_password){
        let s={"status":"success","registration_id":registration_id,"type_of_user":type_of_user};
        response.send(s);
        // console.log("condition");
      }
      else{
        let s={"status":"inavlid_details"};
        response.send(s);
        // for invalid password
        // console.log("condition not");
      }
    }
    else {
      let s={"status":"inavlid"}
      response.send(s);
      //for inavlid both the data`s
      
    }
  })
})

add.get("/get-vehicle-data/:registration_id",(request,response)=>{
  let {registration_id}=request.params
  let sql='select * from add_vehicle where registration_id=?'
  con.query(sql,[registration_id],(error,result)=>{
    if(error){
      response.send(error);
    }
    else{
      response.send(result);
    }
  })
})

add.post("/add-vehicle-info/:registration_id",(request,response)=>{
  let {registration_id}=request.params;
  let {owner_name,vehicle_name,vehicle_number,location,description,expected_price,add_image_link}=request.body;
  let sql='insert into  add_vehicle(registration_id,owner_name,vehicle_name,vehicle_number,location,description,expected_price,add_image_link) values(?,?,?,?,?,?,?,?)';
  con.query(sql,[registration_id,owner_name,vehicle_name,vehicle_number,location,description,expected_price,add_image_link],(error,result)=>{
    if(error){
      let a={"status":"error"}
      response.send(a)
    }
    else{
      let a={"status":"result"}
      response.send(a)
    }
  })
})


add.put('/update-details/:registration_id',(request,response)=>{
  let {registration_id}=request.params;
  let {owner_name,vehicle_name,vehicle_number,location,description,expected_price,add_image_link}=request.body;
  let sql='update add_vehicle set owner_name=?,vehicle_name=?,vehicle_number=?,location=?,description=?,expected_price=?,add_image_link=? where registration_id=?'
  con.query(sql,[owner_name,vehicle_name,vehicle_number,location,description,expected_price,add_image_link,registration_id],(error,result)=>{
    if(error){
      let a={"status":"error"}
      response.send(a);
    }
    else{

      let a={"status":"result"}
      response.send(a);
    }
  })
})

add.post("/delete-owner-data",(request,response)=>{
  let {registration_id}=request.body
  let sql='delete from add_vehicle where registration_id=?'
  con.query(sql,[registration_id],(error,result)=>{
    if(error){
      let a={"status":"error"}
      response.send(a);
    }
    else{
      let a={"status":"result"}
      response.send(a)
    }
  })
})

add.get("/client-info",(request,response)=>{
  let sql='select * from add_vehicle'
  con.query(sql,(error,result)=>{
    if(error){
      response.send(error);
    }
    else{
      response.send(result);
    }
  })
})

add.get("/admin-client-view",(request,response)=>{
  let sql='select * from registration_form where type_of_user="Buyer"'
  con.query(sql,(error,result)=>{
    if(error){
      response.send(error);
    }
    else{
      response.send(result);
    }
  })
})

add.get('/updated-details/:registration_id',(request,response)=>{
  let {registration_id}=request.params;
  let sql='select * from add_vehicle where registration_id=?';
  con.query(sql,[registration_id],(error,result)=>{
    if(error){
      response.send(error)
    }
    else{
      response.send(result);
    }
  })
})

add.listen(3005,()=>{
  console.log("the data is running in 3005 port");
})