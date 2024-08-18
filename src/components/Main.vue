<script>
    import axios from 'axios';
    import Project from './Project.vue';
    export default{
        name:'Main',
        components: {
            Project,
        },
        data() {
            return{
                title:'Projects',
                projects:[],            }
        },
        methods:{
            getProjects(){
                const result = axios
                .get('http://127.0.0.1:8000/api/project')
                .then((response)=> {
                    console.log(response);
                    if(response.data.status && response.data.results.length){
                        console.log(response.data.results);
                        this.projects = response.data.results;
                    } else {
                        console.log('qualcosa è andato storto')
                    }
                })
                .catch((error) =>console.log(error));
            }
        },
        created(){
            this.getProjects();
        }
        };
</script>

<template>
    <div class="container py-5">
        <div class="row">
            <Project v-for="project in projects"
            :project="project" />
        </div>
    </div>
</template>