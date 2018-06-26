<template>
    <div class="fixed-height o-folder__contact">
        <div class="row">
            <div class="col-md-12">
                <div class="o-folder__header">
                    <h4>Contacts</h4>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="o-folder__contactDetails" v-for="(person,index) in contactList" :key="index" v-show="(searchAttr == '') || (person.name.toLowerCase().indexOf(searchAttr.toLowerCase()) != -1)" @click="onSelect(person)">
                    <div class="media">
                        <div class="media-left media-middle">
                            <img src="~@/assets/person.png" alt="img" width="50" height="50">
                        </div>
                        <div class="media-body">
                            <div class="o-folder__personDetail">
                                <label v-if="person.name != ''">{{person.firstName}} {{person.lastName}}</label>
                                <label v-else>Unknown</label>
                                <p>{{person.phoneNo}}</p>
                                <span>{{person.time}}</span>
                            </div>
                            <div class="o-folder__icons">
                                <span class="o-folder__contactPhone"><i class="fa fa-phone"></i></span>
                                <span class="o-folder__contactMail"><i class="fa fa-envelope"></i></span>
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
        props:['searchAttr','contactLog'],
        data(){
            return{
                contactList:''
            }
        },
        created(){
            this.contactList = this.contactLog
        },
        watch:{
            contactLog(v){
                this.contactList = v
            }
        },
        methods:{           
            onSelect(p){
                let param = {
                     name:'contact',
                     obj:p,
                     isEdit:false
                }
                //this.$emit('curentView',param)
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
.o-folder__personDetail span{
    color: #91969c;
    font-size: 13px;
    font-weight: 600;
}
.o-folder__icons{
        float: left;
        width: 95px;
}
.o-folder__contactPhone, .o-folder__contactMail{
    font-size: 25px;
}
.o-folder__contactPhone{
        padding-right: 15px;
}
.o-folder__contactPhone .fa-phone{
    transform: translateY(2px)
}
.o-folder__underline{
    width: 49px;
    height: 1px;
    background: #fff;
    display: block;
    margin-top: 7px;
}
</style>