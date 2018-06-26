<template>
    <div class="o-folder__details h-100">
        <div class="o-folder__details-header">
            <i class="fa fa-arrow-left"></i>
            <h3>{{detailsHeader}}</h3>
            <i class="fa fa-ellipsis-h" v-if="currentView.name != 'newContact'"></i>
        </div>
        <div class="o-folder__details-body">
            <contact-details-content :contact-obj="currentView" v-if="currentView.name == 'newContact' || currentView.name == 'contact'" @onContactSave="contactSave"></contact-details-content>
            <phone-details-content :contact-obj="currentView" v-if="currentView.name == 'phone'"></phone-details-content>
            <message-details-content :contact-obj="currentView" v-if="currentView.name == 'message'"></message-details-content>
        </div>
    </div>
</template>

<script>
    import ContactDetailsContent from './FolderContentDetails/ContactDetailsContent.vue'
    import MessageDetailsContent from './FolderContentDetails/MessageDetailsContent.vue'
    import PhoneDetailsContent from './FolderContentDetails/PhoneDetailsContent.vue'

    export default{
        props:['currentView'],
        computed:{
            detailsHeader(){
                if(this.currentView.name == 'newContact')
                    return 'NEW CONTACT'
            else if(this.currentView.name == 'contact' || this.currentView.name == 'phone' || this.currentView.name == 'message')
                    return this.currentView.obj.name
                else 
                    return ''
            }
        },
        components:{
            'contact-details-content' : ContactDetailsContent,
            'phone-details-content': PhoneDetailsContent,
            'message-details-content': MessageDetailsContent
        },
        methods:{
            contactSave(){
                console.log('calllog')
                this.$emit('showCallLog','phone')
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

</style>