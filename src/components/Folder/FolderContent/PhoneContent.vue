<template>
    <div class="fixed-height o-folder__contact">        
        <div class="row">
            <div class="col-md-12">
                <div class="o-folder__header">
                    <h4>Call Log</h4>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12" style="padding-right: 0px;">
                <div class="o-folder__contactDetails" v-for="(person,index) in callLogList" :key="index" :class="{'active':person.isActive}" v-show="(searchAttr == '') || (person.name.toLowerCase().indexOf(searchAttr.toLowerCase()) != -1)" @click="onSelect(person)">
                    <div class="media">
                        <div class="media-left media-middle">
                            <img src="~@/assets/person.png" alt="img" width="50" height="50">
                        </div>
                        <div class="media-body">
                            <div class="o-folder__personDetail">
                                <label v-if="person.name != ''">{{person.name}}</label>
                                <label v-else>Unknown</label>
                                <p>{{person.phoneNo}}</p>
                                <p>{{person.noOfCalls}}</p>
                            </div>
                            <div class="o-folder__icons">
                                <span>{{person.time}}</span>
                            </div>
                        </div>
                    </div>
                    <span class="o-folder__underline"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:['searchAttr'],
        data(){
            return{
                callLogList:[
                    {
                        name:'Aravind',
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
                        name:'Prakash',
                        id:1,
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
        created(){
            this.onSelect(this.callLogList[0])
        },
        methods:{            
            onSelect(p){
                let param = {
                     name:'phone',
                    obj:p
                }
                this.callLogList.forEach((a)=>{
                    if(a.id == p.id)
                        a.isActive = true
                    else
                        a.isActive = false
                })
                this.$emit('curentView',param)
            }
        }
    }
</script>

<style  scoped>
.o-folder__contact{
    padding: 15px;
    color:#fff;
}
.o-folder__contact input{
    padding: 8px 35px;
    width: 90%;
    border-radius: 20px;
    background: #082E55;
    border: 1px solid #082E55;
    color: #8b95a2;
    outline: none;
}
.o-folder__header{
    padding:20px; 
}
.o-folder__header h4{
    text-align: left;
    padding-bottom: 7px;
    border-bottom: 1px solid;
    font-weight: 500;
}
.o-folder__contactDetails{
    padding: 10px 20px;
    cursor: pointer
}
.o-folder__contactDetails.active{
    border-right: 10px solid #fff;
}
.o-folder__contactDetails .media-middle img{
    display: inline-block;
}
.o-folder__personDetail{
    float: left;
    width: 230px;
    padding-left: 10px;
    text-align: left;
}
.o-folder__personDetail label, .o-folder__personDetail span{
    display: block;
}
.o-folder__personDetail label{
        font-size: 16px;
}
.o-folder__personDetail p{
    margin-bottom: 5px;
}
.o-folder__icons span{
    color: #91969c;
    font-size: 13px;
    font-weight: 600;
}
.o-folder__icons{
        float: left;
        width: 95px;
}
.fa-search,.fa-plus{
    position: absolute;
    top: 12px;
    cursor: pointer;
}
.fa-search{
     left: 50px;
}
.fa-plus{
    right: 53px;
}
.o-folder__underline{
    width: 49px;
    height: 1px;
    background: #fff;
    display: block;
    margin-top: 7px;
}
</style>