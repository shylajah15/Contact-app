<template>
   <div class="o-folderContent h-100">
       <div class="row">
            <div class="col-md-12" style="margin-top: 10px">
                <i class="fa fa-search"></i>
                <input type="text" placeholder="Search people" v-model.trim="search" >
                <i class="fa fa-plus" @click="addNewContact"></i>
            </div>
        </div>
       <contact-content :searchAttr="search" :contact-log="contactList" v-if="currentView == 'contact'" @curentView="showCurrentAction"></contact-content>
       <phone-content :searchAttr="search" :call-log="callLogList" v-if="currentView == 'phone'" @curentView="showCurrentAction"></phone-content>
       <message-content :searchAttr="search" :message-log="messageList" v-if="currentView == 'message'" @curentView="showCurrentAction"></message-content>
   </div>
</template>

<script>
    import ContactContent from './FolderContent/ContactContent.vue'
    import PhoneContent from './FolderContent/PhoneContent.vue'
    import MessageContent from './FolderContent/MessageContent.vue'

    export default{
        props:['currentView'],
        data(){
            return{
                search:'',
                contactList:[
                    {
                        firstName:'Aravind',
                        lastName:'A',
                        name:'Aravind A',
                        phoneNo:'+91-9876544672',
                        time:'5 min',
                        id:0
                    },
                    {
                       firstName:'Prakash',
                        lastName:'E',
                        name:'Prakash E',
                        phoneNo:'+91-9213344672',
                        time:'15 min',
                        id:1
                    },
                    {
                       firstName:'Unknown',
                        lastName:'',
                        name:'Unknown',
                        phoneNo:'+91-123123456',
                        time:'9.15 AM',
                        id:2
                    }
                ],
                 messageList:[
                    {
                        firstName:'Aravind',
                        lastName:'A',
                        name:'Aravind A',
                        phoneNo:'+91-9876544672',
                        message:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        time:'5 min',
                        isActive:true,
                        id:0,
                        email:'',
                    },
                    {
                        firstName:'Prakash',
                        lastName:'E',
                        name:'Prakash E',
                        phoneNo:'+91-9213344672',
                        message:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        time:'15 min',
                        isActive:false,
                        id:1,
                        email:'prakash@gmail.com',
                    },
                    {
                        firstName:'Unknown',
                        lastName:'',
                        name:'Unknown',
                        phoneNo:'+91-123123456',
                        message:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        time:'9.15 AM',
                        isActive:false,
                        id:2,
                        email:'',
                    }
                ],
                callLogList:[
                    {
                        firstName:'Aravind',
                        lastName:'A',
                        name:'Aravind A',
                        id:0,
                        phoneNo:'+91-9876544672',
                        time:'5 min',
                        noOfCalls:'9 times',
                        isActive:true,
                        callLog:[
                            {
                                callType:'Outgoing Call',
                                callDate:'Friday, 10th May 2019, 01.30 PM',
                                callDuration:'1 Min 1 Sec'
                            },
                             {
                                callType:'Missed Call',
                                callDate:'Friday, 10th May 2019, 01.00 PM',
                                callDuration:'0 Sec'
                            },
                             {
                                callType:'Incoming Call',
                                callDate:'Friday, 10th May 2019, 12.30 PM',
                                callDuration:'5 Min 1 Sec'
                            }
                        ]
                    },
                    {
                        firstName:'Prakash',
                        lastName:'E',
                        name:'Prakash E',
                        phoneNo:'+91-9213344672',
                        time:'15 min',
                        noOfCalls:'2 times',
                        isActive:false,
                        callLog:[
                            {
                                callType:'Missed Call',
                                callDate:'Friday, 10th May 2019, 01.30 PM',
                                callDuration:'0 Sec'
                            },
                            {
                                callType:'Outgoing Call',
                                callDate:'Friday, 10th May 2019, 01.00 PM',
                                callDuration:'1 Min 1 Sec'
                            },
                             {
                                callType:'Incoming Call',
                                callDate:'Friday, 10th May 2019, 12.30 PM',
                                callDuration:'10 Mins 30 Secs'
                            }
                        ]
                    },
                    {
                        firstName:'Unknown',
                        lastName:'',
                        name:'Unknown',
                        id:2,
                        phoneNo:'+91-123123456',
                        time:'9.15 AM',
                        noOfCalls:'9 times',
                        isActive:false,
                        callLog:[
                            {
                                callType:'Outgoing Call',
                                callDate:'Friday, 10th May 2019, 01.30 PM',
                                callDuration:'10 Mins 1 Sec'
                            },
                             {
                                callType:'Missed Call',
                                callDate:'Friday, 10th May 2019, 01.00 PM',
                                callDuration:'0 Sec'
                            },
                             {
                                callType:'Incoming Call',
                                callDate:'Friday, 10th May 2019, 12.30 PM',
                                callDuration:'15 Mins 5 Secs'
                            }
                        ]
                    }
                ]
            }
        },
        components:{
            'contact-content':ContactContent,
            'message-content': MessageContent,
            'phone-content': PhoneContent
        },
        created(){
            bus.listen('delete',(a)=>{
                if(a.name == 'contact'){                    
                    this.contactList = this.contactList.filter((c)=>{
                        return c.id != a.obj.id
                    })
                }
                else if(a.name == 'phone'){
                    this.callLogList = this.callLogList.filter((c)=>{
                        return c.id != a.obj.id
                    })
                }
                else{
                    this.messageList = this.messageList.filter((c)=>{
                        return c.id != a.obj.id
                    })
                }
            })
        },
        methods:{
             addNewContact(){
                let param ={
                    name:'newContact',
                    obj:'',
                    isEdit:false
                }
               this.showCurrentAction(param)
            },
            showCurrentAction(action){
                this.$emit('currentDetail',action)
            }
        }
    }
</script>
<style scoped>
    .o-folderContent{
        background: #0F2740;
    }
    .o-folderContent input{
    padding: 8px 35px;
    width: 90%;
    border-radius: 20px;
    background: #082E55;
    border: 1px solid #082E55;
    color: #8b95a2;
    outline: none;
}
    .fa-search, .fa-plus{
    position: absolute;
    top: 12px;
    cursor: pointer;
    color:#fff;
}
.fa-search{
     left: 50px;
}
.fa-plus{
    right: 53px;
}
</style>