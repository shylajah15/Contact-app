<template>
    <transition v-if="contactObj.name == 'contact'">
        <p>Contact Details</p>
    </transition>
    <transition v-else>
       <div class="row">
           <div class="col-md-12">
               <div class="o-folderDetails__profile">
                   <span class="o-folderDetails__profileCircle">
                       <i class="fa fa-pencil"></i>
                   </span>
                   <h3>PROFILE</h3>
                   <span class="o-folder--underline"></span>
               </div>
               <div class="o-folderDetails__form">
                   <div class="row">
                       <div class="col-md-12">
                           <div class="col-md-1">
                                     
                           </div>
                           <div class="col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="First name" v-model="newContact.firstName">
                                </div>
                           </div>
                           <div  class="col-md-1"></div>
                           <div class="col-md-5">
                               <div class="form-group">
                                    <input type="text" placeholder="Last name" v-model="newContact.lastName">
                                </div>
                           </div>
                       </div>
                   </div>
                   <div class="row">
                       <div class="col-md-12">
                           <div class="col-md-1">
                                <i class="fa fa-phone"></i>
                           </div>
                           <div class="col-md-4">
                                <div class="form-group">
                                    <input type="text" placeholder="Phone Number" v-model="newContact.phoneNumber">
                                </div>
                           </div>
                           <div  class="col-md-1"></div>
                           <div class="col-md-5">
                               <div class="form-group">
                                    <a class="o-folder__addNumber"><i class="fa fa-plus"></i>Add Number</a>
                                </div>
                           </div>
                       </div>
                   </div>    
                   <div class="row">
                       <div class="col-md-12">
                           <div class="col-md-1">
                                <i class="fa fa-at"></i>
                           </div>
                           <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" placeholder="E-mail" v-model="newContact.email">
                                </div>
                           </div>                           
                       </div>
                   </div>  
                   <div class="row">
                       <div class="col-md-12 o-folder__btns">
                               <a @click="save">Save</a>
                               <a @click="discard">Discard</a>                  
                       </div>
                   </div>       
               </div>
           </div>
       </div>
    </transition>
</template>

<script>
    export default{
        props:['contactObj'],
        data(){
            return{
                newContact:{
                    firstName:'',
                    lastName:'',
                    email:'',
                    phoneNumber:''
                }
            }
        },
        computed:{
            hasDetails(){
                if(this.newContact.firstName != '' || this.newContact.lastName != '' || this.newContact.email != '' || this.newContact.phoneNumber != '')
                    return true
                else
                    return false
            }
        },
        methods:{
            save(){
                if(this.hasDetails == true){
                    // let obj = {
                    //     name: `${this.newContact.firstName} ${this.newContact.lastName}`,
                    //     phoneNumber:this.newContact.phoneNumber,
                    //     email:this.newContact.email,

                    // }
                    this.$emit('onContactSave')
                }
            },
            discard(){
                this.newContact.firstName = ''
                this.newContact.lastName = ''
                this.newContact.phoneNumber = ''
                this.newContact.email = ''
            }
        }
    }
</script>

<style scoped>
    .o-folderDetails__profile{
        height: 225px;              
    }
    .o-folderDetails__profileCircle{
            display: inline-block;
            width: 150px;
            height: 150px;
            background: #CFD2D7;
            border-radius: 50%;
            margin: 15px 0px 0;
    }
    .o-folderDetails__profileCircle .fa-pencil{
        font-size: 35px;
        top:127px;
        position: absolute;
    }
    .o-folderDetails__profile h3{
            font-weight: 600;
            margin-top: 12px;
            padding-left: 15px;
            margin-bottom: 0px;
    }
    .o-folder--underline{
        display: inline-block;
        height: 1px;
        background: #333;
        width: 45px;
        margin-right: 40px;
        transform: translateY(-10px);
    }
    .o-folderDetails__form{
        padding-top: 20px;
        border-top: 1px solid #aaa;
        margin-top: 35px;
    }
    .o-folderDetails__form input{
        width: 90%;
        border: 0px;
        padding: 7px 12px 7px 0;
        border-bottom: 1px solid #aaa;
        outline: none;
    }
    .o-folderDetails__form .fa-phone,.o-folderDetails__form .fa-at {
            font-size: 27px;
            transform: translateY(16px);
            position: absolute;
    }
    .o-folderDetails__form .o-folder__addNumber{
        padding: 6px 12px;
        background: #CFD2D7;
        color: #B1B6BC;
        text-align: left;
        display: block;
        width: 70%;
        margin-top: 5px;
        margin-left: 13px;
        border-radius: 15px;
    }
    .o-folderDetails__form .o-folder__addNumber i{
        padding-right: 10px;
    }
    .o-folderDetails__form .form-group{
        margin-top: 10px; 
    }
    .o-folder__btns a{
        display: inline-block;
        padding: 8px 52px;
        margin-right: 10px;
        background: #CFD2D7;
        border-radius: 15px;
        color: #333;
        margin-top: 10px;
        font-weight: 600;  
        text-decoration: none;
        cursor: pointer;
    }
</style>