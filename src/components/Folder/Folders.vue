<template>
  <div class="row o-folder h-100">
      <div class="col-md-12 p0 ">
          <ul>
              <li :class="{'active': currentAction == 'contact' }" @click="viewContent('contact')">
                 <!--<font-awesome-icon icon="address-book" />-->
                 <i class="fa fa-address-book" v-if="currentAction != 'contact'"></i>
                 <i class="fa fa-address-book-o" v-else></i>
              </li>
              <li :class="{'active': currentAction == 'phone' }" @click="viewContent('phone')">
                  <i class="fa fa-phone"></i>
              </li>
              <li :class="{'active': currentAction == 'message' }" @click="viewContent('message')">
                 <i class="fa fa-comment-o"></i>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
    export default{
        props:['currentActions'],
        data(){
            return{
                currentAction:'contact'
            }
        },
        watch:{
            currentActions(v){
                if(v != null && v!= ''){
                    this.currentAction = v
                    this.viewContent(v)
                }
            }
        },
        methods:{
            viewContent(action){
                this.currentAction = action
                this.$emit('showCurrentAction',action)
            }
        }
    }
</script>

<style scoped>
    .o-folder{
        background: #7d7d7d;
    }
    .o-folder ul{
        list-style: none;
        text-align: left;
    }
    .o-folder ul li{
            font-size: 30px;
            cursor: pointer;
            padding: 10px 0px;
    }
    .o-folder ul li.active{
        border-right: 10px solid #0F2740;
    }
    .o-folder ul li.active .fa{
        color: #fff;
    }

</style>