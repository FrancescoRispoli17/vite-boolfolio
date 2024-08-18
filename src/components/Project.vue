<script>

    export default{
        name:'Project',
        props:{
            project:Object,
        },
        data(){
            return{

            }
        }
    };
</script>

<template>
    <div class="col-3 py-4">
        <div class="card" style="width: 18rem;height: 13rem;">
        <div class="card-body">
            <h5 class="card-title">{{project.title}}</h5>
            <p class="card-text m-0" v-if="project.type">type: {{project.type.name}}</p>
            <p class="card-text m-0" v-else>type: none</p>
            <p class="card-text">size: {{project.size}}</p>
            <a href="#" class="btn btn-primary">properties</a>
        </div>
        </div>
    </div>
</template>
