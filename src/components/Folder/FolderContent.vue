<template>
   <div class="o-folderContent h-100">
       <div class="row">
            <div class="col-md-12" style="margin-top: 10px">
                <i class="fa fa-search"></i>
                <input type="text" placeholder="Search people" v-model.trim="search" >
                <i class="fa fa-plus" @click="addNewContact"></i>
            </div>
        </div>
       <contact-content :searchAttr="search" v-if="currentView == 'contact'" @curentView="showCurrentAction"></contact-content>
       <phone-content :searchAttr="search" v-if="currentView == 'phone'" @curentView="showCurrentAction"></phone-content>
       <message-content :searchAttr="search" v-if="currentView == 'message'" @curentView="showCurrentAction"></message-content>
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
                search:''
            }
        },
        components:{
            'contact-content':ContactContent,
            'message-content': MessageContent,
            'phone-content': PhoneContent
        },
        methods:{
             addNewContact(){
                let param ={
                    name:'newContact',
                    obj:''
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