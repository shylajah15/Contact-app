<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h4>TODAY</h4>
            </div>
        </div>
        <div class="o-message__body">
            <div class="row">
                <div class="col-md-12">
                    <div class="media">
                        <div class="media-left">
                            <img src="~@/assets/person.png" width="100" height="100">
                        </div>
                        <div class="media-body">
                            <div class="o-message-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <span class="o-message__alignR">7.15 AM</span>
                            </div>
                            <div class="o-message-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <span class="o-message__alignR">7.15 AM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="media">                   
                        <div class="media-body">
                            <div class="o-message-content f-r0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <span class="o-message__alignR">7.15 AM</span>
                            </div>
                        </div>
                        <div class="media-right">
                            <img src="~@/assets/person.png" width="100" height="100">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">                 
                    <div class="media">      
                        <div class="media-left">
                            <img src="~@/assets/person.png" width="100" height="100">
                        </div>             
                        <div class="media-body">
                            <div class="o-message-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <span class="o-message__alignR">7.15 AM</span>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
        <div class="row o-message__footer">
            <div class="col-md-12">
                <div class="">
                    <a class="o-message__attachment"><i class="fa fa-paperclip"></i></a>
                    <input type="text" v-model="message">
                     <a class="o-message__send"><i class="fa fa-paper-plane"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:['contactObj'],
        data(){
            return{
                message:''
            }
        }
    }    
</script>

<style scoped>
.o-message__body{
    padding: 10px;
}
.o-message-content{
    text-align: left;
    background: #405060;
    color: #fff;
    padding: 10px 20px;
    border-radius: 15px;
    margin-bottom: 10px;
    width: 85%;
}
.o-message-content span{
    display: block;
    text-align: right;
    color: #91969c;
}
.f-r0{
    float: right;
}
.o-message__footer{
    padding: 10px;
    border-top: 1px solid #aaa;
}
.o-message__footer input{
    width: 60%;
    padding: 6px 12px;
    background: #0F2740;
    border: 1px solid #0F2740;
    outline: none;
    border-radius: 15px;
    border-bottom-left-radius: initial;
    border-top-left-radius: initial;
    color: #fff;
}
.o-message__footer .o-message__attachment{
    background: #0F2740;
    color: #fff;
    font-size: 17px;
    padding: 7px 15px 8px;
    position: relative;
    left: 4px;
    border-right: 1px solid;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
}
.o-message__footer .o-message__send{
    color: #fff;
    position: relative;
    left: -35px
}
</style>