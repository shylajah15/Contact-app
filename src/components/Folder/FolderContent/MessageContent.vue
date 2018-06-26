<template>
    <div class="fixed-height o-folder__contact">        
        <div class="row">
            <div class="col-md-12">
                <div class="o-folder__header">
                    <h4>All Messages</h4>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12" style="padding-right: 0px;">
                <div class="o-folder__contactDetails" v-for="(message,index) in messageList" :key="index" :class="{'active':message.isActive}" v-show="(searchAttr == '') || (message.name.toLowerCase().indexOf(searchAttr.toLowerCase()) != -1)" @click="onSelect(message)">
                    <div class="media">
                        <div class="media-left media-middle">
                            <img src="~@/assets/person.png" alt="img" width="50" height="50">
                        </div>
                        <div class="media-body">
                            <div class="o-folder__personDetail">
                                <label>{{message.name}}</label>
                                <span>{{message.time}}</span>
                                <p>{{message.message}}</p>
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
                messageList:[
                    {
                        name:'Aravind',
                        message:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        time:'5 min',
                        isActive:true,
                        id:0,
                    },
                    {
                        name:'Prakash',
                        message:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        time:'15 min',
                        isActive:false,
                        id:1,
                    },
                    {
                        name:'Unknown',
                        message:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        time:'9.15 AM',
                        isActive:false,
                        id:2
                    }
                ]
            }
        },
        methods:{           
            onSelect(p){
                let param = {
                     name:'message',
                    obj:p
                }
                 this.messageList.forEach((a)=>{
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
}
.o-folder__contactDetails.active{
    border-right: 10px solid #fff;
}
.o-folder__contactDetails .media-middle img{
    display: inline-block;
}
.o-folder__personDetail{
    float: left;
    padding-left: 10px;
    text-align: left;
}
.o-folder__personDetail label, .o-folder__personDetail span{
    display: block;
}
.o-folder__personDetail label{
        font-size: 16px;
        display: inline-block;
}
.o-folder__personDetail p{
    margin-bottom: 5px;
}
.o-folder__personDetail span{
    color: #91969c;
    font-size: 13px;
    font-weight: 600;
    float: right;
}
.o-folder__underline{
    width: 49px;
    height: 1px;
    background: #fff;
    display: block;
    margin-top: 7px;
}
</style>