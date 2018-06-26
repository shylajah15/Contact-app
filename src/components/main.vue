<template>
    <div class="h-100">
        <header>
            <div class="contact-header"></div>
        </header>
        <section style="height: calc(100% - 40px)">
        <div class="wrapper h-100">
                <div class="row h-100">
                    <div class="col-md-12 h-100">
                        <div class="col-md-1 h-100">
                            <folder-view :current-actions="currentAction" @showCurrentAction="showFolder"></folder-view>
                        </div>
                        <div class="col-md-4 p0 h-100">
                            <folder-content :current-view="currentFolderAction" @currentDetail="showCurrentDetailAction"></folder-content>
                        </div>
                        <div class="col-md-7 p0 h-100">
                            <folder-details-content :current-view="currentFolderDetailAction" @showCallLog="showCallLog"></folder-details-content>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Folder from './Folder/Folders.vue'
    import FolderContent from './Folder/FolderContent.vue'
    import FolderDetailsContent from './Folder/FolderDetailsContent.vue'

    export default{
        data(){
            return{
                currentAction:'',
                currentFolderAction:'contact',
                currentFolderDetailAction:''
            }
        },
        components:{
            'folder-view':Folder,
            'folder-content':FolderContent,
            'folder-details-content':FolderDetailsContent
        },
        methods:{
            showFolder(action){
                    this.currentFolderAction = action
                    this.currentFolderDetailAction = ''
            },
            showCurrentDetailAction(action){
                this.currentFolderDetailAction = action
            },
            showCallLog(action){
                this.currentAction = action
            }
        }
    }
</script>

<style>
    .contact-header{
        height: 40px;
        width: 100%;
        background: #959595;
    }
    .fixed-height{
        height: 100% !important;
    }
    .p0{
        padding:0px;
    }
</style>