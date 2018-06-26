<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="o-folderDetails__profile">
                    <div class="media">
                        <div class="media-left media-middle">
                            <img src="~@/assets/person.png" width="125" height="125">
                        </div>
                        <div class="media-body">
                            <div class="o-folder__personDetail">
                                <label>{{contactObj.obj.name}}</label>
                                <p>{{contactObj.obj.phoneNo}}</p>
                            </div>
                            <div class="o-folder__icons">
                            <span class="o-folder__contactPhone"><i class="fa fa-phone"></i></span>
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
        </div>
        <div class="o-callLog__details">
            <div class="row o-callLog__detailsRow" v-for="(log,index) in contactObj.obj.callLog" :key="index"> 
                <div class="col-md-12">
                    <div>
                        <i class="fa fa-reply"></i>
                        <label>{{log.callType}}</label>
                    </div>
                    <p>{{log.callDate}}</p>
                    <p>{{log.callDuration}}</p>
                </div>
            </div>
        </div>
        <div class="o-callLog__footer">
            <div class="o-callLog__footerAction">
                <i class="fa fa-ban"></i>
                <span>Block</span>
            </div>
             <div class="o-callLog__footerAction">
                <i class="fa fa-clone"></i>
                <span>Copy Number</span>
            </div>
             <div class="o-callLog__footerAction">
                <i class="fa fa-pencil"></i>
                <span>Edit Number Before Call</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:['contactObj']
    }
</script>

<style scoped>
    .o-folderDetails__profile{
        padding: 20px 40px;
        border-bottom: 1px solid #aaa;
    }
    .o-folder__personDetail{
        float: left;
        width: 70%;
        padding-left: 10px;
        text-align: left;
    }
    .o-folder__personDetail label, .o-folder__personDetail p{
            font-size: 24px;
            display: block;
    }
    .o-folder__personDetail p{
        margin-bottom: 5px;
        font-weight: 600;
    }
    .o-folder__personDetail label{
       padding-top: 15px;
    }
    .o-folder__icons{
            float: left;
            width: 95px;
    }
    .o-folder__contactPhone{
        font-size: 55px;
        padding-right: 15px;
        position: absolute;
        top: 38px;
    }
    .o-callLog__details{
        text-align: left;
        padding: 20px 40px;
        border-bottom: 1px solid #aaa;
    }
     .o-callLog__details label{
             font-size: 17px;
     }
     .o-callLog__details p{
        color: #5e6671;
        font-weight: 600;
        margin-bottom: 5px;
     }
     .o-callLog__detailsRow{
         margin-bottom: 10px;
     }
     .o-callLog__footer{
        margin: 14px -10px;
        background: #0F2740;
     }
     .o-callLog__footerAction{
         display: inline-block;
         padding: 7px 55px;
         color:#91969c;
     }
     .o-callLog__footerAction i{
         font-size: 22px;
        position: relative;
        top: 2px;
    }
    .o-callLog__footerAction span{
        font-size: 17px;
        padding-left: 5px;
    }
</style>