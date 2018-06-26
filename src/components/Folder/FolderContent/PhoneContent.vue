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
                <div class="o-folder__contactDetails" v-for="(person,index) in callLogList" :key="index" :class="{'active':person.isActive}" v-show="(searchAttr == '') || (person.name.toLowerCase().indexOf(searchAttr.toLowerCase()) != -1)" @click="onSelect(person)" v-if="callLogList.length != 0">
                    <div class="media">
                        <div class="media-left media-middle">
                            <img src="~@/assets/person.png" alt="img" width="50" height="50">
                        </div>
                        <div class="media-body">
                            <div class="o-folder__personDetail">
                                <label v-if="person.name != ''">{{person.firstName}} {{person.lastName}}</label>
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
        props:['searchAttr','callLog'],
        data(){
            return{
                callLogList:''
            }
        },
        created(){
            this.callLogList = this.callLog
            this.onSelect(this.callLogList[0])
        },
         watch:{
            callLog(v){
                this.callLogList = v
            }
        },
        methods:{            
            onSelect(p){
                let param = {
                     name:'phone',
                     obj:p,
                     isEdit:false
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