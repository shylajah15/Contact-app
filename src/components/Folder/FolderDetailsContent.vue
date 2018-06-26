<template>
    <div class=" h-100">
        <div class="o-folder__details h-100" v-if="cCurrentView != ''">
            <div class="o-folder__details-header">
                <i class="fa fa-arrow-left"></i>
                <h3>{{detailsHeader}}</h3>
                <i class="fa fa-ellipsis-h" v-if="cCurrentView.name != 'newContact' && cCurrentView.obj != ''" @click="showModal"></i>
            </div>
            <div class="o-folder__details-body">
                <contact-details-content :contact-obj="cCurrentView" v-if="cCurrentView.name == 'newContact' || cCurrentView.isEdit == true" @onContactSave="contactSave"></contact-details-content>
                <phone-details-content :contact-obj="cCurrentView" v-if="cCurrentView.name == 'phone' && cCurrentView.isEdit == false"></phone-details-content>
                <message-details-content :contact-obj="cCurrentView" v-if="cCurrentView.name == 'message' && cCurrentView.isEdit == false"></message-details-content>
            </div>
            <div class="o-folderDetails__actionBtns" v-if="showDetailsActionBtns">
                <div class="common-overlay" @click="onClickOutside($event)"></div>
                <div class="o-folderDetails__action">            
                    <a @click="onDelete"><i class="fa fa-trash"></i>Delete</a>
                    <a @click="onEdit"><i class="fa fa-pencil"></i>Edit</a>
                    <a> <i class="fa fa-share-alt"></i>Share</a>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="o-folder__defaultText"><i>Please select a contact</i></p>
        </div>
    </div>
</template>

<script>
    import ContactDetailsContent from './FolderContentDetails/ContactDetailsContent.vue'
    import MessageDetailsContent from './FolderContentDetails/MessageDetailsContent.vue'
    import PhoneDetailsContent from './FolderContentDetails/PhoneDetailsContent.vue'

    export default{
        props:['currentView'],
        data(){
            return{
                showDetailsActionBtns:false,
                cCurrentView:''
            }
        },
        created(){
            this.cCurrentView = this.currentView
        },
        watch:{
            currentView(v){
                this.cCurrentView = v
            }
        },
        computed:{
            detailsHeader(){
                if(this.cCurrentView.isEdit == true)
                     return 'EDIT CONTACT'
                else{
                    if(this.cCurrentView.name == 'newContact')
                        return 'NEW CONTACT'
                    else if(this.cCurrentView.name == 'contact' || this.cCurrentView.name == 'phone' || this.cCurrentView.name == 'message')
                        return `${this.cCurrentView.obj.firstName} ${this.cCurrentView.obj.lastName}`
                    else 
                        return ''
                }
            }
        },
        components:{
            'contact-details-content' : ContactDetailsContent,
            'phone-details-content': PhoneDetailsContent,
            'message-details-content': MessageDetailsContent
        },
        methods:{
            contactSave(){
                this.cCurrentView = ''
                this.$emit('showCallLog','phone')
            },
            showModal(){
                this.showDetailsActionBtns = !this.showDetailsActionBtns
            },
            onClickOutside(event){
                if(event.target.className === 'common-overlay')
                    this.showDetailsActionBtns = false
            },
            onEdit(){
                this.showDetailsActionBtns = false
                this.cCurrentView.isEdit =  true
            },
            onDelete(){
                this.showDetailsActionBtns = false
                bus.fire('delete',this.cCurrentView)
                this.cCurrentView = ''
            }
        }
    }
</script>

<style scoped>
    .o-folder__details .o-folder__details-header{
        margin-top: 19px;
        height: 50px;
        background: #0F2740;
        text-align: left;
    }
    .o-folder__details-header .fa-arrow-left{
        color: #fff;
        position: absolute;
        left: 0;
        top: 29px;
        font-size: 25px;
    }
    .o-folder__details-header .fa-ellipsis-h{
        font-size: 28px;
        color: #fff;
        right: 13px;
        position: absolute;
        top: 30px;
        cursor: pointer;
    }
    .o-folder__details-header h3{
            color: #fff;
            text-align: left;
            padding-left: 46px;
            display: inline-block;
            margin-top: 12px;
            font-size: 22px;
    }
    .o-folder__details-body{
        height: calc(100% - 70px);
        overflow: hidden;
        overflow-y: auto;
        padding: 5px 10px;
    }
    .common-overlay{
        width: 100%;
        height: 100%;
        background-color: black;
        position: fixed;
        opacity: 0.2;
        z-index: 100;
        top: 0;
        left: 0;
    }
    .o-folderDetails__action{
        position: absolute;
        right: 10px;
        top: 100px;
        width: 150px;
        background-color: #0F2740;
        border-radius: 30px;
        z-index: 101;
        padding: 20px;
        text-align: left;
    }
    .o-folderDetails__action a{
        color: #fff;
        padding: 6px 12px;
        border-bottom: 1px  solid #fff;
        display: block;
        text-decoration: none;
        font-size: 13px;
        cursor: pointer;
    }
    .o-folderDetails__action a:last-child{
         border:none;
    }
    .o-folderDetails__action a i{
            font-size: 16px;
            padding-right: 10px;
    }
    .o-folder__defaultText{
        margin: 35% auto;
        font-size: 16px;
        font-weight: 600;
    }
</style>