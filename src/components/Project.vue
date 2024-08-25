<script>

    export default{
        name:'Project',
        props:["title", "type", "size","slug"],
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
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text m-0" v-if="type">type: {{type.name}}</p>
            <p class="card-text m-0" v-else>type: none</p>
            <p class="card-text">size: {{size}}</p>
            <router-link :to="{ name: 'detail', params: { slug }}" class="btn btn-primary">Detail</router-link>
        </div>
        </div>
    </div>
</template>
